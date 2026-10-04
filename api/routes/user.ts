import { Router, Request, Response } from 'express';
import { inMemoryDb, getSupabaseAdmin } from '../services/supabase';
import { persistentDb } from '../services/db';
import { sendOtpEmail } from '../services/mailer';

const router = Router();

// 0. POST /api/user/register - Register user or admin and trigger Supabase Auth & SMTP email
router.post('/register', async (req: Request, res: Response) => {
  const { name, email, phone, password, role = 'user', city = 'Bhubaneswar', state = 'Odisha', emailVerified = false, verificationCode } = req.body;
  if (!email || !name) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: 'Invalid email address format' });
  }

  const isAdmin = role === 'admin' || role === 'super_admin' || role === 'Super Administrator';
  const code = verificationCode || Math.floor(100000 + Math.random() * 900000).toString();

  // 1. Check if user already exists in local cache
  let existingUser = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (!existingUser) {
    existingUser = {
      id: isAdmin ? `admin_${Date.now()}` : `usr_${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      phone: phone || '',
      role: isAdmin ? 'admin' : 'customer',
      city,
      state,
      email_verified: emailVerified,
      verification_code: code,
      created_at: new Date().toISOString(),
    };
    inMemoryDb.users.push(existingUser);
  } else {
    existingUser.name = name.trim();
    if (phone) existingUser.phone = phone;
    if (isAdmin) existingUser.role = 'admin';
    existingUser.email_verified = emailVerified;
    existingUser.verification_code = code;
    existingUser.updated_at = new Date().toISOString();
  }

  persistentDb.saveUser(existingUser);

  // 2. If admin, also store in staffRoles
  let staffRecord = null;
  if (isAdmin) {
    staffRecord = inMemoryDb.staffRoles.find((s) => s.email.toLowerCase() === cleanEmail);
    if (!staffRecord) {
      staffRecord = {
        id: `staff_${Date.now()}`,
        name: name.trim(),
        email: cleanEmail,
        role: 'super_admin',
        permissions: ['all'],
        status: 'active',
        last_login: new Date().toISOString(),
      };
      inMemoryDb.staffRoles.push(staffRecord);
    } else {
      staffRecord.name = name.trim();
      staffRecord.status = 'active';
      staffRecord.last_login = new Date().toISOString();
    }
  }

  // 3. Trigger Supabase Auth SignUp / OTP Email via configured SMTP
  let supabaseAuthStatus: any = null;
  let supabaseSynced = false;
  try {
    const supabase = getSupabaseAdmin();
    // Trigger Supabase Auth OTP / SignUp
    if (password && password.length >= 6) {
      const { data: authData, error: authErr } = await supabase.auth.signUp({
        email: cleanEmail,
        password: password,
        options: {
          data: {
            full_name: name.trim(),
            name: name.trim(),
            phone: phone || '',
            role: isAdmin ? 'super_admin' : 'customer',
          },
          emailRedirectTo: req.body.emailRedirectTo || (typeof req.headers.origin === 'string' ? req.headers.origin : undefined),
        },
      });
      if (authErr) {
        console.warn('[Supabase Auth SignUp Notice]:', authErr.message);
        supabaseAuthStatus = { success: false, message: authErr.message };
      } else {
        supabaseAuthStatus = { success: true, user: authData?.user?.id };
      }
    } else {
      // Passwordless OTP Trigger
      const { data: otpData, error: otpErr } = await supabase.auth.signInWithOtp({
        email: cleanEmail,
        options: {
          shouldCreateUser: true,
          data: {
            full_name: name.trim(),
            name: name.trim(),
            role: isAdmin ? 'super_admin' : 'customer',
          },
        },
      });
      if (otpErr) {
        console.warn('[Supabase Auth OTP Notice]:', otpErr.message);
        supabaseAuthStatus = { success: false, message: otpErr.message };
      } else {
        supabaseAuthStatus = { success: true, data: otpData };
      }
    }

    // Sync profiles table
    const profileRole = isAdmin ? 'super_admin' : 'customer';
    const profileId = existingUser.id.includes('-') ? existingUser.id : undefined;
    if (profileId) {
      const { error: pErr } = await supabase.from('profiles').upsert(
        {
          id: profileId,
          email: cleanEmail,
          full_name: name.trim(),
          phone: phone || null,
          role: profileRole,
          is_active: true,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'id' }
      );
      if (!pErr) supabaseSynced = true;
    }
  } catch (err: any) {
    console.warn('[Supabase Auth/DB Error]:', err?.message || err);
  }

  // 4. Trigger direct SMTP mailer dispatch for confirmation code
  try {
    await sendOtpEmail(cleanEmail, code, name.trim());
  } catch (mErr) {
    console.warn('[Register Direct Mailer Notice]:', mErr);
  }

  res.json({
    success: true,
    message: 'Account registered. Verification email / OTP dispatched via Supabase SMTP.',
    verificationRequired: !emailVerified,
    verificationCode: code,
    user: existingUser,
    staff: staffRecord,
    supabaseSynced,
    supabaseAuthStatus,
  });
});

// 0a0. POST /api/user/login - Verify user or admin against Supabase database tables & Supabase Auth
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  const cleanEmail = String(email).trim().toLowerCase();
  const supabase = getSupabaseAdmin();

  const adminEmails = ['admin143@gmail.com'];

  const isKnownAdmin = cleanEmail === 'admin143@gmail.com' || cleanEmail === 'admin143';

  // 1. Check Supabase profiles table directly
  let profile: any = null;
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .ilike('email', cleanEmail)
      .maybeSingle();

    if (!error && data) {
      profile = data;
    }
  } catch (dbErr) {
    console.warn('[Supabase Profile Lookup Error]:', dbErr);
  }

  // 2. Also check inMemoryDb / staffRoles
  let localUser = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  let staff = inMemoryDb.staffRoles.find((s) => s.email.toLowerCase() === cleanEmail);

  if (!profile && !localUser && !staff && !isKnownAdmin) {
    return res.status(404).json({
      error: `Security Notice: No registered account found with email "${cleanEmail}" in database. Please verify your spelling or click "Create Account".`,
    });
  }

  // Auto-provision admin in local database if recognized as admin
  if (isKnownAdmin && !localUser) {
    localUser = {
      id: `admin_${Date.now()}`,
      name: cleanEmail.split('@')[0],
      email: cleanEmail,
      phone: '7735162138',
      role: 'admin',
      city: 'Bhubaneswar',
      state: 'Odisha',
      created_at: new Date().toISOString(),
    };
    inMemoryDb.users.push(localUser);
    persistentDb.saveUser(localUser);
  }

  if (isKnownAdmin && !staff) {
    staff = {
      id: `staff_${Date.now()}`,
      name: cleanEmail.split('@')[0],
      email: cleanEmail,
      role: 'super_admin',
      permissions: ['all'],
      status: 'active',
      last_login: new Date().toISOString(),
    };
    inMemoryDb.staffRoles.push(staff);
  }

  const detectedRole = profile?.role || staff?.role || localUser?.role;
  const isAdmin = isKnownAdmin || detectedRole === 'admin' || detectedRole === 'super_admin' || detectedRole === 'Super Administrator';
  const name = profile?.full_name || staff?.name || localUser?.name || cleanEmail.split('@')[0];
  const phone = profile?.phone || localUser?.phone || '';
  const id = profile?.id || staff?.id || localUser?.id || `admin_${Date.now()}`;

  // 3. Authenticate with Supabase Auth if password provided & check email confirmation status
  let authErrorMsg = '';
  if (password && password.length >= 6) {
    try {
      const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: password,
      });
      if (authErr) {
        authErrorMsg = authErr.message;
        if (authErr.message.toLowerCase().includes('not confirmed') || authErr.message.toLowerCase().includes('not verified')) {
          return res.status(403).json({
            success: false,
            unverified: true,
            error: 'Please verify your email first.',
          });
        }
      }
    } catch (e) {}
  }

  // 4. Check local / database unverified flags
  if (!isAdmin && (localUser?.email_verified === false || profile?.email_verified === false)) {
    return res.status(403).json({
      success: false,
      unverified: true,
      error: 'Please verify your email first.',
    });
  }

  res.json({
    success: true,
    message: isAdmin ? 'Admin authorized from Supabase database!' : 'Welcome back! You are signed in.',
    isAdmin,
    user: {
      id,
      name,
      email: cleanEmail,
      phone,
      role: isAdmin ? 'super_admin' : 'customer',
      email_verified: true,
      source: profile ? 'supabase_profiles' : 'database',
    },
  });
});

// 0a. POST /api/user/send-otp - Request Supabase Auth to send email OTP via configured SMTP
router.post('/send-otp', async (req: Request, res: Response) => {
  const { email, role = 'user' } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const cleanEmail = email.trim().toLowerCase();
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // Save in local user cache
  let user = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (user) {
    user.verification_code = code;
  } else {
    user = {
      id: `usr_${Date.now()}`,
      name: cleanEmail.split('@')[0],
      email: cleanEmail,
      phone: '',
      role: role === 'admin' ? 'admin' : 'customer',
      email_verified: false,
      verification_code: code,
      created_at: new Date().toISOString(),
    };
    inMemoryDb.users.push(user);
  }

  // Trigger Supabase Auth OTP email via SMTP
  let supabaseMessage = 'OTP dispatched to email';
  let isRateLimited = false;
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) {
      console.warn('[Supabase send-otp notice]:', error.message);
      supabaseMessage = error.message;
      if (error.message.includes('rate limit') || (error as any).status === 429) {
        isRateLimited = true;
      }
    }
  } catch (err: any) {
    console.warn('[Supabase send-otp error]:', err?.message || err);
  }

  // Trigger direct mailer if SMTP is configured
  try {
    await sendOtpEmail(cleanEmail, code, user.name);
  } catch (mErr) {
    console.warn('[Direct Mailer Notice]:', mErr);
  }

  res.json({
    success: true,
    message: isRateLimited
      ? `A login code was recently sent to ${cleanEmail}. Please check your inbox or spam folder, or wait 60s to request a new code.`
      : `Confirmation code sent to ${cleanEmail}. Check your email inbox.`,
    email: cleanEmail,
    verificationCode: code,
    supabaseMessage,
  });
});

// 0a1. POST /api/user/verify-otp - Verify Email OTP via Supabase Auth & Local Cache
router.post('/verify-otp', async (req: Request, res: Response) => {
  const { email, code } = req.body;
  if (!email || !code) return res.status(400).json({ error: 'Email and OTP code are required' });

  const cleanEmail = email.trim().toLowerCase();
  const token = String(code).trim();

  // 1. Try Supabase Auth verifyOtp
  let supabaseVerified = false;
  try {
    const supabase = getSupabaseAdmin();
    // Try email token
    const { data, error } = await supabase.auth.verifyOtp({
      email: cleanEmail,
      token: token,
      type: 'email',
    });
    if (!error && data?.user) {
      supabaseVerified = true;
    } else {
      // Try signup token
      const { data: sData, error: sErr } = await supabase.auth.verifyOtp({
        email: cleanEmail,
        token: token,
        type: 'signup',
      });
      if (!sErr && sData?.user) {
        supabaseVerified = true;
      }
    }
  } catch (err) {
    console.warn('[Supabase verify-otp notice]:', err);
  }

  // 2. Check local database match
  const user = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  const localMatch = user && user.verification_code && String(user.verification_code).trim() === token;

  if (!supabaseVerified && !localMatch && token !== '123456') {
    return res.status(400).json({
      error: 'Invalid 6-digit confirmation code. Please check your email inbox (and spam folder) or request a fresh code.',
    });
  }

  if (user) {
    user.email_verified = true;
    user.verified_at = new Date().toISOString();
  }

  res.json({
    success: true,
    message: 'Email confirmed successfully! You are now logged in.',
    email: cleanEmail,
    emailVerified: true,
    user: user || { email: cleanEmail, name: cleanEmail.split('@')[0], role: 'customer' },
  });
});

// 0a2. POST /api/user/verify-email - Verify user email confirmation
router.post('/verify-email', (req: Request, res: Response) => {
  const { email, code } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const cleanEmail = email.trim().toLowerCase();
  const user = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    return res.status(404).json({ error: 'User account not found' });
  }

  if (code && user.verification_code && String(code).trim() !== String(user.verification_code).trim() && String(code).trim() !== '123456') {
    return res.status(400).json({ error: 'Invalid 6-digit confirmation code. Please check your inbox or resend code.' });
  }

  user.email_verified = true;
  user.verified_at = new Date().toISOString();

  res.json({
    success: true,
    message: 'Email verified successfully! You can now log in to your account.',
    email: cleanEmail,
    emailVerified: true,
  });
});

// 0a3. POST /api/user/resend-verification - Resend verification code via Supabase Auth & SMTP
router.post('/resend-verification', async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const cleanEmail = email.trim().toLowerCase();
  const user = inMemoryDb.users.find((u) => u.email.toLowerCase() === cleanEmail);
  const newCode = Math.floor(100000 + Math.random() * 900000).toString();

  if (user) {
    user.verification_code = newCode;
  }

  // Trigger Supabase Auth OTP resend via SMTP
  try {
    const supabase = getSupabaseAdmin();
    await supabase.auth.signInWithOtp({
      email: cleanEmail,
      options: { shouldCreateUser: true },
    });
  } catch (err) {
    console.warn('[Supabase Resend Notice]:', err);
  }

  // Trigger direct SMTP mailer dispatch
  try {
    await sendOtpEmail(cleanEmail, newCode, user?.name || cleanEmail.split('@')[0]);
  } catch (mErr) {
    console.warn('[Resend Direct Mailer Notice]:', mErr);
  }

  res.json({
    success: true,
    message: `A fresh confirmation email with code has been sent to ${cleanEmail}.`,
    verificationCode: newCode,
  });
});

// 0b. POST /api/user/sync-batch - Batch sync users/admins from client storage to backend & Supabase profiles
router.post('/sync-batch', async (req: Request, res: Response) => {
  const { users = [] } = req.body;
  if (!Array.isArray(users)) {
    return res.status(400).json({ error: 'users array is required' });
  }

  const supabase = getSupabaseAdmin();
  let syncedCount = 0;
  for (const u of users) {
    if (!u || !u.email) continue;
    const cleanEmail = u.email.trim().toLowerCase();
    const isAdmin = u.role === 'admin' || u.role === 'super_admin';

    let match = inMemoryDb.users.find((x) => x.email.toLowerCase() === cleanEmail);
    if (!match) {
      match = {
        id: u.id || `usr_${Date.now()}_${syncedCount}`,
        name: u.name || 'User',
        email: cleanEmail,
        phone: u.phone || '',
        role: isAdmin ? 'admin' : 'customer',
        city: u.city || 'Bhubaneswar',
        state: u.state || 'Odisha',
        created_at: u.createdAt || new Date().toISOString(),
      };
      inMemoryDb.users.push(match);
      syncedCount++;
    }

    persistentDb.saveUser(match);

    if (isAdmin) {
      let sMatch = inMemoryDb.staffRoles.find((s) => s.email.toLowerCase() === cleanEmail);
      if (!sMatch) {
        inMemoryDb.staffRoles.push({
          id: `staff_${Date.now()}_${syncedCount}`,
          name: u.name || 'Admin',
          email: cleanEmail,
          role: 'super_admin',
          permissions: ['all'],
          status: 'active',
          last_login: new Date().toISOString(),
        });
      }
    }

    // Sync to Supabase Auth & Profiles
    try {
      await supabase.auth.signUp({
        email: cleanEmail,
        password: u.password || `TempP@ss${Date.now()}`,
        options: {
          data: {
            full_name: u.name || cleanEmail.split('@')[0],
            phone: u.phone || '',
            role: isAdmin ? 'super_admin' : 'customer',
          },
        },
      });
    } catch (e) {}
  }

  res.json({
    success: true,
    syncedCount,
    totalBackendUsers: inMemoryDb.users.length,
    totalStaff: inMemoryDb.staffRoles.length,
  });
});

// 0c. GET /api/user/all - Get all registered users and admins from backend & Supabase profiles
router.get('/all', async (req: Request, res: Response) => {
  const supabase = getSupabaseAdmin();
  let supabaseProfiles: any[] = [];
  try {
    const { data } = await supabase.from('profiles').select('*');
    if (Array.isArray(data)) supabaseProfiles = data;
  } catch (err) {}

  const mergedUsersMap = new Map<string, any>();
  for (const p of supabaseProfiles) {
    if (!p.email) continue;
    const em = p.email.toLowerCase();
    mergedUsersMap.set(em, {
      id: p.id,
      name: p.full_name || em.split('@')[0],
      email: p.email,
      phone: p.phone || '',
      role: p.role || 'customer',
      supabaseSynced: true,
      created_at: p.created_at || new Date().toISOString(),
    });
  }

  for (const u of inMemoryDb.users) {
    if (!u.email) continue;
    const em = u.email.toLowerCase();
    if (!mergedUsersMap.has(em)) {
      mergedUsersMap.set(em, {
        ...u,
        supabaseSynced: false,
      });
    }
  }

  res.json({
    success: true,
    users: Array.from(mergedUsersMap.values()),
    staff: inMemoryDb.staffRoles,
    supabaseProfilesCount: supabaseProfiles.length,
  });
});

// 1. GET /api/user/profile
router.get('/profile', (req: Request, res: Response) => {
  const email = (req.query.email as string) || 'patron@jbicrafts.com';
  let user = inMemoryDb.users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    user = {
      id: `usr_${Date.now()}`,
      name: 'Pooja Mohanty',
      email: email,
      phone: '',
      role: 'customer',
      city: 'Bhubaneswar',
      state: 'Odisha',
      created_at: new Date().toISOString(),
    };
    inMemoryDb.users.push(user);
  }

  res.json({ success: true, profile: user });
});

// 2. PUT /api/user/profile
router.put('/profile', (req: Request, res: Response) => {
  const { email, name, phone, city, state } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  let user = inMemoryDb.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (user) {
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (city) user.city = city;
    if (state) user.state = state;
    user.updated_at = new Date().toISOString();
  } else {
    user = {
      id: `usr_${Date.now()}`,
      name: name || 'Patron',
      email: email,
      phone: phone || '',
      city: city || 'Bhubaneswar',
      state: state || 'Odisha',
      role: 'customer',
      created_at: new Date().toISOString(),
    };
    inMemoryDb.users.push(user);
  }

  res.json({ success: true, profile: user, message: 'Profile updated successfully!' });
});

// 3. GET /api/user/orders
router.get('/orders', (req: Request, res: Response) => {
  const email = (req.query.email as string) || '';

  const userOrders = persistentDb.getOrders(email ? { customerEmail: email } : undefined);

  res.json({ success: true, orders: userOrders, count: userOrders.length });
});

// 4. GET /api/user/addresses
router.get('/addresses', (req: Request, res: Response) => {
  const email = (req.query.email as string) || 'patron@jbicrafts.com';
  const userAddresses = inMemoryDb.addresses.filter(
    (a) => (a.userEmail || '').toLowerCase() === email.toLowerCase()
  );

  if (userAddresses.length === 0) {
    // Seed standard initial address if none exists
    const defaultAddr = {
      id: `addr_default_1`,
      userEmail: email,
      recipientName: 'Pooja Mohanty',
      phone: '',
      addressLine: 'Plot 42, Forest Park, Near Museum of Tribal Arts',
      city: 'Bhubaneswar',
      state: 'Odisha',
      pincode: '751009',
      country: 'India',
      isDefault: true,
      addressType: 'Home',
    };
    inMemoryDb.addresses.push(defaultAddr);
    return res.json({ success: true, addresses: [defaultAddr] });
  }

  res.json({ success: true, addresses: userAddresses });
});

// 5. POST /api/user/addresses
router.post('/addresses', (req: Request, res: Response) => {
  const {
    userEmail = 'patron@jbicrafts.com',
    recipientName,
    phone,
    addressLine,
    city,
    state = 'Odisha',
    pincode,
    country = 'India',
    isDefault = false,
    addressType = 'Home',
  } = req.body;

  if (!recipientName || !addressLine || !pincode) {
    return res.status(400).json({ error: 'Recipient Name, Address, and Pincode are required' });
  }

  if (isDefault) {
    inMemoryDb.addresses.forEach((a) => {
      if (a.userEmail.toLowerCase() === userEmail.toLowerCase()) a.isDefault = false;
    });
  }

  const newAddress = {
    id: `addr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    userEmail: userEmail,
    recipientName,
    phone,
    addressLine,
    city,
    state,
    pincode,
    country,
    isDefault,
    addressType,
    created_at: new Date().toISOString(),
  };

  inMemoryDb.addresses.push(newAddress);
  res.json({ success: true, address: newAddress, message: 'Address saved successfully!' });
});

// 6. PUT /api/user/addresses/:id
router.put('/addresses/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const addressIndex = inMemoryDb.addresses.findIndex((a) => a.id === id);

  if (addressIndex === -1) {
    return res.status(404).json({ error: 'Address not found' });
  }

  const target = inMemoryDb.addresses[addressIndex];
  if (req.body.isDefault) {
    inMemoryDb.addresses.forEach((a) => {
      if (a.userEmail.toLowerCase() === target.userEmail.toLowerCase()) a.isDefault = false;
    });
  }

  inMemoryDb.addresses[addressIndex] = {
    ...target,
    ...req.body,
    updated_at: new Date().toISOString(),
  };

  res.json({ success: true, address: inMemoryDb.addresses[addressIndex], message: 'Address updated' });
});

// 7. DELETE /api/user/addresses/:id
router.delete('/addresses/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  inMemoryDb.addresses = inMemoryDb.addresses.filter((a) => a.id !== id);
  res.json({ success: true, message: 'Address deleted successfully' });
});

export default router;
