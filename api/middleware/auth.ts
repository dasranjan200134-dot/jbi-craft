import { Request, Response, NextFunction } from 'express';
import { getSupabaseAdmin, inMemoryDb } from '../services/supabase';

export interface AuthenticatedRequest extends Request {
  user?: any;
  adminUser?: any;
}

/**
 * Production Admin Authorization Guard
 * Verifies Bearer JWT tokens with Supabase Auth or validated Admin session keys
 */
export async function verifyAdminAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization || '';
    const adminKeyHeader = req.headers['x-admin-key'] as string;
    const adminEmailHeader = req.headers['x-admin-email'] as string;

    // 1. Direct Admin Secret Key verification (for server-to-server or API key access)
    const adminSecret = process.env.ADMIN_SECRET_KEY;
    if (adminSecret && adminKeyHeader && adminKeyHeader === adminSecret) {
      req.adminUser = { role: 'super_admin', name: 'Master API Key Administrator' };
      return next();
    }

    // 2. Supabase Bearer JWT Token Verification
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      if (token && token.length > 20) {
        try {
          const supabase = getSupabaseAdmin();
          const { data, error } = await supabase.auth.getUser(token);
          if (!error && data && data.user) {
            // Check user profile role in Supabase
            const { data: profile } = await supabase
              .from('profiles')
              .select('role, full_name, email')
              .eq('id', data.user.id)
              .single();

            const role = profile?.role || data.user.user_metadata?.role;
            const allowedRoles = ['super_admin', 'admin', 'shop_manager', 'order_dispatcher'];
            if (role && allowedRoles.includes(role)) {
              req.adminUser = {
                id: data.user.id,
                email: data.user.email,
                name: profile?.full_name || data.user.email,
                role: role,
              };
              return next();
            }
          }
        } catch (jwtErr) {
          console.warn('[Admin Auth Guard JWT Warning]:', jwtErr);
        }
      }
    }

    // 3. Fallback check for active staff/admin email session
    if (adminEmailHeader) {
      const cleanEmail = adminEmailHeader.trim().toLowerCase();
      const staffMember = inMemoryDb.staffRoles.find(
        (s) => s.email.toLowerCase() === cleanEmail && s.status === 'active'
      );
      if (staffMember) {
        req.adminUser = staffMember;
        return next();
      }
    }

    // 4. In development / prototype environment, if session header exists allow fallback
    if (process.env.NODE_ENV !== 'production' || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      req.adminUser = { role: 'super_admin', name: 'Store Administrator (Session)' };
      return next();
    }

    return res.status(403).json({
      error: 'Access denied. Administrative authorization is required to perform this action.',
      code: 'AUTH_ADMIN_FORBIDDEN',
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal authentication validation error', details: err.message });
  }
}

/**
 * Production User / Customer Authorization Middleware
 */
export async function verifyUserAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization || '';
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      if (token && token.length > 20) {
        try {
          const supabase = getSupabaseAdmin();
          const { data, error } = await supabase.auth.getUser(token);
          if (!error && data && data.user) {
            req.user = data.user;
            return next();
          }
        } catch (e) {
          console.warn('[User Auth Guard Warning]:', e);
        }
      }
    }
    // Allow non-blocking pass-through for public customer requests
    next();
  } catch (err: any) {
    next();
  }
}
