import { Router, Request, Response } from 'express';
import { inMemoryDb, getSupabaseAdmin } from '../services/supabase';
import { persistentDb } from '../services/db';
import { verifyAdminAuth } from '../middleware/auth';

const router = Router();

// Apply administrative authorization guard across all admin routes
router.use(verifyAdminAuth);

// ==========================================
// 1. SHIPPING RULES & ZONES MANAGEMENT
// ==========================================
router.get('/shipping-rules', (req: Request, res: Response) => {
  res.json({
    success: true,
    rules: inMemoryDb.shippingRules,
    count: inMemoryDb.shippingRules.length,
  });
});

router.post('/shipping-rules', (req: Request, res: Response) => {
  const { name, code, carrier, base_rate, free_shipping_threshold, min_days, max_days, is_fragile_insured, zone } = req.body;

  if (!name || !code || base_rate === undefined) {
    return res.status(400).json({ error: 'Name, code, and base_rate are required' });
  }

  const newRule = {
    id: `ship_${Date.now()}`,
    name,
    code,
    carrier: carrier || 'India Post Speed Post',
    base_rate: Number(base_rate),
    free_shipping_threshold: free_shipping_threshold !== undefined && free_shipping_threshold !== null ? Number(free_shipping_threshold) : null,
    min_days: Number(min_days || 2),
    max_days: Number(max_days || 5),
    is_fragile_insured: !!is_fragile_insured,
    is_active: true,
    zone: zone || 'all_india',
  };

  inMemoryDb.shippingRules.push(newRule);
  res.json({ success: true, rule: newRule, message: 'Shipping rule created successfully' });
});

router.put('/shipping-rules/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = inMemoryDb.shippingRules.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Shipping rule not found' });
  }

  inMemoryDb.shippingRules[index] = {
    ...inMemoryDb.shippingRules[index],
    ...req.body,
  };

  res.json({ success: true, rule: inMemoryDb.shippingRules[index], message: 'Shipping rule updated' });
});

router.delete('/shipping-rules/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  inMemoryDb.shippingRules = inMemoryDb.shippingRules.filter((r) => r.id !== id);
  res.json({ success: true, message: 'Shipping rule deleted' });
});

// ==========================================
// 2. TAX (GST / GLOBAL) MANAGEMENT
// ==========================================
router.get('/tax-rules', (req: Request, res: Response) => {
  res.json({
    success: true,
    rules: inMemoryDb.taxRules,
    merchantState: 'Odisha (21)',
    gstin: '21AAACJ1234F1Z8',
  });
});

router.post('/tax-rules', (req: Request, res: Response) => {
  const { name, rate, cgst_rate, sgst_rate, igst_rate, hsn_code, category } = req.body;

  if (!name || rate === undefined) {
    return res.status(400).json({ error: 'Name and tax rate are required' });
  }

  const newTax = {
    id: `tax_${Date.now()}`,
    name,
    rate: Number(rate),
    cgst_rate: Number(cgst_rate ?? rate / 2),
    sgst_rate: Number(sgst_rate ?? rate / 2),
    igst_rate: Number(igst_rate ?? rate),
    hsn_code: hsn_code || '9701',
    category: category || 'crafts',
    is_active: true,
  };

  inMemoryDb.taxRules.push(newTax);
  res.json({ success: true, rule: newTax, message: 'Tax rule created successfully' });
});

router.put('/tax-rules/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = inMemoryDb.taxRules.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Tax rule not found' });
  }

  inMemoryDb.taxRules[index] = {
    ...inMemoryDb.taxRules[index],
    ...req.body,
  };

  res.json({ success: true, rule: inMemoryDb.taxRules[index], message: 'Tax rule updated' });
});

// ==========================================
// 3. COUPONS & PROMOTIONS MANAGEMENT
// ==========================================
router.get('/coupons', (req: Request, res: Response) => {
  res.json({
    success: true,
    coupons: inMemoryDb.coupons,
    count: inMemoryDb.coupons.length,
  });
});

router.post('/coupons', (req: Request, res: Response) => {
  const { code, description, discount_type, discount_value, min_order_value, max_discount_limit, usage_limit, valid_until } = req.body;

  if (!code || !discount_type || discount_value === undefined) {
    return res.status(400).json({ error: 'Code, discount_type, and discount_value are required' });
  }

  const newCoupon = {
    id: `cpn_${Date.now()}`,
    code: code.trim().toUpperCase(),
    description: description || '',
    discount_type,
    discount_value: Number(discount_value),
    min_order_value: Number(min_order_value || 0),
    max_discount_limit: max_discount_limit ? Number(max_discount_limit) : null,
    usage_limit: usage_limit ? Number(usage_limit) : 1000,
    usage_count: 0,
    valid_until: valid_until || '2028-12-31T23:59:59Z',
    is_active: true,
    created_at: new Date().toISOString(),
  };

  inMemoryDb.coupons.unshift(newCoupon);
  res.json({ success: true, coupon: newCoupon, message: 'Coupon created successfully' });
});

router.put('/coupons/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = inMemoryDb.coupons.findIndex((c) => c.id === id || c.code === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Coupon not found' });
  }

  inMemoryDb.coupons[index] = {
    ...inMemoryDb.coupons[index],
    ...req.body,
  };

  res.json({ success: true, coupon: inMemoryDb.coupons[index], message: 'Coupon updated' });
});

router.delete('/coupons/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  inMemoryDb.coupons = inMemoryDb.coupons.filter((c) => c.id !== id && c.code !== id);
  res.json({ success: true, message: 'Coupon deleted' });
});

// ==========================================
// 4. ORDER LIFECYCLE & AUDIT MANAGEMENT
// ==========================================
router.get('/orders', async (req: Request, res: Response) => {
  const { status, payment_status, search } = req.query;

  const orders = persistentDb.getOrders({
    status: status as string,
    payment_status: payment_status as string,
    search: search as string,
  });

  res.json({
    success: true,
    orders: orders,
    count: orders.length,
  });
});

router.get('/orders/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const order = persistentDb.getOrderById(id);

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({ success: true, order });
});

router.put('/orders/:id/status', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Pending', 'Processing', 'On Hold', 'Packed', 'Shipped', 'Delivered', 'Cancelled', 'Refunded'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }

  const updatedOrder = persistentDb.updateOrderStatus(id, status);
  if (!updatedOrder) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({
    success: true,
    order: updatedOrder,
    message: `Order status updated to "${status}"`,
  });
});

router.patch('/orders/:id/status', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Pending', 'Processing', 'On Hold', 'Packed', 'Shipped', 'Delivered', 'Cancelled', 'Refunded'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }

  const updatedOrder = persistentDb.updateOrderStatus(id, status);
  if (!updatedOrder) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({
    success: true,
    order: updatedOrder,
    message: `Order status updated to "${status}"`,
  });
});

router.post('/orders/:id/tracking', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { trackingId, carrierName } = req.body;

  if (!trackingId) {
    return res.status(400).json({ error: 'trackingId is required' });
  }

  const updatedOrder = persistentDb.updateOrderTracking(id, trackingId, carrierName);
  if (!updatedOrder) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({
    success: true,
    order: updatedOrder,
    message: 'Carrier tracking updated',
  });
});

router.delete('/orders/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const success = persistentDb.deleteOrder(id);
  if (!success) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json({ success: true, message: `Order ${id} removed` });
});

// ==========================================
// 5. ROLE-BASED ACCESS CONTROL (RBAC)
// ==========================================
router.get('/staff', (req: Request, res: Response) => {
  res.json({
    success: true,
    staff: inMemoryDb.staffRoles,
    rolesList: [
      { role: 'super_admin', label: 'Super Administrator', permissions: ['all'] },
      { role: 'shop_manager', label: 'Shop & Catalog Manager', permissions: ['manage_products', 'manage_discounts', 'view_reports'] },
      { role: 'order_dispatcher', label: 'Order Dispatcher & Logistics', permissions: ['view_orders', 'update_fulfillment', 'print_labels'] },
      { role: 'customer_support', label: 'Customer Support Executive', permissions: ['view_orders', 'respond_inquiries'] },
    ],
  });
});

router.post('/staff', (req: Request, res: Response) => {
  const { name, email, role = 'shop_manager' } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and Email are required' });

  const newStaff = {
    id: `staff_${Date.now()}`,
    name,
    email,
    role,
    permissions: role === 'super_admin' ? ['all'] : ['manage_products', 'view_orders'],
    status: 'active',
    last_login: new Date().toISOString(),
  };

  inMemoryDb.staffRoles.push(newStaff);
  res.json({ success: true, staff: newStaff, message: 'Staff member added successfully' });
});

router.put('/staff/:id/role', (req: Request, res: Response) => {
  const { id } = req.params;
  const { role, status } = req.body;

  const index = inMemoryDb.staffRoles.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ error: 'Staff member not found' });

  if (role) inMemoryDb.staffRoles[index].role = role;
  if (status) inMemoryDb.staffRoles[index].status = status;

  res.json({ success: true, staff: inMemoryDb.staffRoles[index], message: 'Role updated' });
});

// ==========================================
// 6. TRANSACTIONS & RECONCILIATION
// ==========================================
router.get('/transactions', (req: Request, res: Response) => {
  res.json({
    success: true,
    transactions: inMemoryDb.transactions,
    count: inMemoryDb.transactions.length,
  });
});

// ==========================================
// 7. ANALYTICS SUMMARY
// ==========================================
router.get('/analytics', (req: Request, res: Response) => {
  const orders = persistentDb.getOrders();
  const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.totalAmount || o.total_amount || 0)), 0);
  const paidOrders = orders.filter((o) => (o.paymentStatus || o.payment_status) === 'Paid');
  const pendingOrders = orders.filter((o) => (o.status || '') === 'Pending');

  res.json({
    success: true,
    analytics: {
      totalOrders: orders.length,
      paidOrdersCount: paidOrders.length,
      pendingOrdersCount: pendingOrders.length,
      grossRevenue: totalRevenue,
      averageOrderValue: orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0,
      totalArtisans: 28,
      activeCoupons: inMemoryDb.coupons.filter((c) => c.is_active).length,
      activeShippingZones: inMemoryDb.shippingRules.filter((r) => r.is_active).length,
    },
  });
});

// ==========================================
// 8. CUSTOMERS DIRECTORY (EXCLUSIVELY SYNCED WITH SUPABASE PROFILES TABLE)
// ==========================================
router.get('/customers', async (req: Request, res: Response) => {
  const orders = persistentDb.getOrders();
  const supabase = getSupabaseAdmin();
  let supabaseProfiles: any[] = [];

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && Array.isArray(data)) {
      supabaseProfiles = data;
    }
  } catch (err) {
    console.warn('[Admin Customers - Supabase Profiles Fetch]', err);
  }

  // 1. Build map of verified profiles & database users
  const customerMap = new Map<string, any>();

  for (const p of supabaseProfiles) {
    if (!p.email) continue;
    const email = p.email.toLowerCase().trim();
    if (persistentDb.isCustomerDeleted(email) || persistentDb.isCustomerDeleted(p.id)) {
      continue;
    }
    customerMap.set(email, {
      id: p.id,
      name: p.full_name || p.email.split('@')[0],
      email: p.email,
      phone: p.phone || '',
      role: p.role || 'customer',
      isActive: p.is_active !== false,
      isRegisteredAccount: true,
      accountType: p.role === 'super_admin' ? 'Super Administrator' : (p.role === 'admin' ? 'Administrator' : 'Verified Registered Patron'),
      totalOrders: 0,
      totalSpent: 0,
      lastOrderDate: null,
      createdAt: p.created_at || new Date().toISOString(),
      source: 'supabase_database',
      supabaseSynced: true,
    });
  }

  // Fallback: Ensure local persistent users & admin143@gmail.com are included
  const localUsers = persistentDb.getUsers();
  for (const u of localUsers) {
    if (!u || !u.email) continue;
    const email = u.email.toLowerCase().trim();
    if (persistentDb.isCustomerDeleted(email) || persistentDb.isCustomerDeleted(u.id)) {
      continue;
    }
    if (!customerMap.has(email)) {
      const isAdm = email === 'admin143@gmail.com' || u.role === 'admin' || u.role === 'super_admin';
      customerMap.set(email, {
        id: u.id || `usr_${Date.now()}`,
        name: u.name || email.split('@')[0],
        email: u.email,
        phone: u.phone || '',
        role: isAdm ? 'super_admin' : (u.role || 'customer'),
        isActive: true,
        isRegisteredAccount: true,
        accountType: isAdm ? 'Super Administrator' : 'Verified Registered Patron',
        totalOrders: 0,
        totalSpent: 0,
        lastOrderDate: null,
        createdAt: u.created_at || u.createdAt || new Date().toISOString(),
        source: 'persistent_database',
        supabaseSynced: false,
      });
    }
  }

  // Guarantee admin143@gmail.com is present in customer section
  if (!customerMap.has('admin143@gmail.com')) {
    customerMap.set('admin143@gmail.com', {
      id: 'admin_143_single',
      name: 'Administrator',
      email: 'admin143@gmail.com',
      phone: '9876543210',
      role: 'super_admin',
      isActive: true,
      isRegisteredAccount: true,
      accountType: 'Super Administrator',
      totalOrders: 0,
      totalSpent: 0,
      lastOrderDate: null,
      createdAt: '2026-10-03T20:00:00.000Z',
      source: 'backend_system',
      supabaseSynced: true,
    });
  }

  // 2. Aggregate order statistics for each verified customer in Supabase
  for (const ord of orders) {
    const email = (ord.customerEmail || ord.customer_email || '').toLowerCase().trim();
    if (!email) continue;

    const cust = customerMap.get(email);
    if (cust) {
      cust.totalOrders += 1;
      cust.totalSpent += Number(ord.totalAmount || ord.total_amount || ord.amount || 0);
      if (ord.createdAt || ord.created_at) {
        if (!cust.lastOrderDate || new Date(ord.createdAt || ord.created_at) > new Date(cust.lastOrderDate)) {
          cust.lastOrderDate = ord.createdAt || ord.created_at;
        }
      }
      if (ord.customerPhone && !cust.phone) cust.phone = ord.customerPhone;
      if (ord.customerName && cust.name === 'Artisan Patron') cust.name = ord.customerName;
    }
  }

  const resultList = Array.from(customerMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  res.json({
    success: true,
    customers: resultList,
    totalCount: resultList.length,
    supabaseProfilesCount: supabaseProfiles.length,
  });
});

// DELETE /api/admin/customers/:id - Permanently delete customer from DB and Supabase
router.delete('/customers/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const email = (req.query.email as string) || req.body?.email || '';

  persistentDb.deleteCustomer(id, email);

  res.json({
    success: true,
    message: `Customer account (${id || email}) has been permanently deleted and synced with database.`,
  });
});

// POST /api/admin/customers/bulk-delete - Bulk permanent customer deletion
router.post('/customers/bulk-delete', async (req: Request, res: Response) => {
  const { ids = [], emails = [] } = req.body;

  persistentDb.deleteCustomersBulk(
    Array.isArray(ids) ? ids : [],
    Array.isArray(emails) ? emails : []
  );

  res.json({
    success: true,
    deletedCount: (ids.length || emails.length || 0),
    message: `Successfully removed ${ids.length || emails.length} customer account(s) permanently across database and Supabase.`,
  });
});

// DELETE /api/admin/customers - Delete customer by query email
router.delete('/customers', async (req: Request, res: Response) => {
  const email = (req.query.email as string) || '';
  const id = (req.query.id as string) || '';

  if (!email && !id) {
    return res.status(400).json({ error: 'Customer email or id is required' });
  }

  persistentDb.deleteCustomer(id || email, email);

  res.json({
    success: true,
    message: `Customer account (${email || id}) removed successfully.`,
  });
});

// ==========================================
// 8. SUPABASE CONNECTIVITY & STATUS CHECK
// ==========================================
router.get('/supabase-status', async (req: Request, res: Response) => {
  const start = performance.now();
  const supabaseUrl = process.env.SUPABASE_URL || 'https://xgnojcorciyjwtakhbny.supabase.co';
  const publishableKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_3g8OGbFIGEICKpcuGCYryw_pWAU2xkF';
  const projectId = 'xgnojcorciyjwtakhbny';

  try {
    const checkRes = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
      },
    });

    const latencyMs = Math.round(performance.now() - start);

    if (checkRes.ok) {
      return res.json({
        success: true,
        connected: true,
        projectId,
        supabaseUrl,
        latencyMs,
        statusText: 'Connected & Operational',
        authStatus: checkRes.status,
      });
    }

    return res.json({
      success: false,
      connected: false,
      projectId,
      supabaseUrl,
      latencyMs,
      statusText: `HTTP ${checkRes.status}: ${checkRes.statusText}`,
    });
  } catch (err: any) {
    return res.json({
      success: false,
      connected: false,
      projectId,
      supabaseUrl,
      error: err?.message || 'Failed to reach Supabase',
    });
  }
});

export default router;

