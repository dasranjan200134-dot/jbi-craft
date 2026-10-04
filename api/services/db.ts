import fs from 'fs';
import path from 'path';
import { getSupabaseAdmin, inMemoryDb } from './supabase';

export interface OrderItem {
  id?: string;
  productId?: string;
  product_id?: string;
  title: string;
  productTitle?: string;
  product_title?: string;
  price: number;
  unitPrice?: number;
  unit_price?: number;
  quantity: number;
  totalPrice?: number;
  total_price?: number;
  image?: string;
  craft?: string;
  artisanName?: string;
  artisan_name?: string;
}

export interface BackendOrder {
  id: string;
  orderNumber: string;
  order_number?: string;
  userId?: string | null;
  user_id?: string | null;
  customerName: string;
  customer_name?: string;
  customerEmail: string;
  customer_email?: string;
  customerPhone?: string;
  customer_phone?: string;
  shippingAddress: string;
  shipping_address?: string;
  city?: string;
  shipping_city?: string;
  state?: string;
  shipping_state?: string;
  pincode?: string;
  shipping_pincode?: string;
  country?: string;
  shipping_country?: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  discount_amount?: number;
  couponApplied?: string | null;
  coupon_applied?: string | null;
  shippingFee: number;
  shipping_fee?: number;
  taxAmount?: number;
  tax_amount?: number;
  totalAmount: number;
  total_amount?: number;
  amount?: number;
  paymentMethod: string;
  payment_method?: string;
  paymentStatus: string;
  payment_status?: string;
  deliveryMethod?: string;
  delivery_method?: string;
  deliveryNotes?: string;
  delivery_notes?: string;
  status: string;
  order_status?: string;
  trackingId?: string;
  tracking_id?: string;
  trackingNumber?: string;
  carrierName?: string;
  carrier_name?: string;
  date?: string;
  createdAt: string;
  created_at?: string;
  updatedAt?: string;
  updated_at?: string;
}

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
  createdAt: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const CUSTOMERS_FILE = path.join(DATA_DIR, 'customers.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const DELETED_CUSTOMERS_FILE = path.join(DATA_DIR, 'deleted_customers.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

class PersistentDatabase {
  private orders: BackendOrder[] = [];
  private customers: CustomerRecord[] = [];
  private users: any[] = [];
  private deletedEmails: Set<string> = new Set();
  private isLoaded = false;

  constructor() {
    this.init();
  }

  private init() {
    ensureDataDir();
    try {
      if (fs.existsSync(DELETED_CUSTOMERS_FILE)) {
        const raw = fs.readFileSync(DELETED_CUSTOMERS_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.deletedEmails = new Set(parsed.map((e: string) => String(e).toLowerCase().trim()));
        }
      }
    } catch (e) {
      console.warn('[DB] Could not load deleted_customers.json:', e);
    }

    try {
      if (fs.existsSync(ORDERS_FILE)) {
        const raw = fs.readFileSync(ORDERS_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.orders = this.deduplicateOrders(parsed);
        }
      } else {
        this.orders = [];
        this.persistOrders();
      }
    } catch (e) {
      console.warn('[DB] Could not load orders.json:', e);
      this.orders = [];
    }

    try {
      if (fs.existsSync(CUSTOMERS_FILE)) {
        const raw = fs.readFileSync(CUSTOMERS_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.customers = parsed.filter((c: any) => !this.deletedEmails.has((c.email || '').toLowerCase().trim()));
        }
      } else {
        this.customers = [];
        this.persistCustomers();
      }
    } catch (e) {
      console.warn('[DB] Could not load customers.json:', e);
      this.customers = [];
    }

    try {
      if (fs.existsSync(USERS_FILE)) {
        const raw = fs.readFileSync(USERS_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.users = parsed.filter((u: any) => !this.deletedEmails.has((u.email || '').toLowerCase().trim()));
        }
      } else {
        this.users = [];
        this.persistUsers();
      }
    } catch (e) {
      console.warn('[DB] Could not load users.json:', e);
      this.users = [];
    }

    // Sync into inMemoryDb
    inMemoryDb.orders = [...this.orders];
    inMemoryDb.users = [...this.users];
    this.isLoaded = true;
    console.log(`[DB] Persistent Database initialized with ${this.orders.length} orders, ${this.customers.length} customers, ${this.users.length} users, and ${this.deletedEmails.size} deleted tombstones.`);
  }

  public deduplicateOrders(list: BackendOrder[]): BackendOrder[] {
    if (!Array.isArray(list)) return [];
    const seen = new Set<string>();
    const result: BackendOrder[] = [];

    for (const ord of list) {
      if (!ord) continue;
      const numKey = (ord.orderNumber || ord.order_number || '').trim().toLowerCase();
      const idKey = (ord.id || '').trim().toLowerCase();
      const primaryKey = numKey || idKey;

      if (!primaryKey) continue;
      if (seen.has(primaryKey)) continue;

      if (numKey) seen.add(numKey);
      if (idKey) seen.add(idKey);
      result.push(ord);
    }
    return result;
  }

  private persistOrders() {
    try {
      ensureDataDir();
      const tmpFile = `${ORDERS_FILE}.tmp.${Date.now()}`;
      fs.writeFileSync(tmpFile, JSON.stringify(this.orders, null, 2), 'utf-8');
      fs.renameSync(tmpFile, ORDERS_FILE);
      inMemoryDb.orders = [...this.orders];
    } catch (e) {
      console.error('[DB] Failed to persist orders.json:', e);
    }
  }

  private persistCustomers() {
    try {
      ensureDataDir();
      const tmpFile = `${CUSTOMERS_FILE}.tmp.${Date.now()}`;
      fs.writeFileSync(tmpFile, JSON.stringify(this.customers, null, 2), 'utf-8');
      fs.renameSync(tmpFile, CUSTOMERS_FILE);
    } catch (e) {
      console.error('[DB] Failed to persist customers.json:', e);
    }
  }

  public persistUsers() {
    try {
      ensureDataDir();
      const tmpFile = `${USERS_FILE}.tmp.${Date.now()}`;
      fs.writeFileSync(tmpFile, JSON.stringify(this.users, null, 2), 'utf-8');
      fs.renameSync(tmpFile, USERS_FILE);
      inMemoryDb.users = [...this.users];
    } catch (e) {
      console.error('[DB] Failed to persist users.json:', e);
    }
  }

  private persistDeletedCustomers() {
    try {
      ensureDataDir();
      const tmpFile = `${DELETED_CUSTOMERS_FILE}.tmp.${Date.now()}`;
      fs.writeFileSync(tmpFile, JSON.stringify(Array.from(this.deletedEmails), null, 2), 'utf-8');
      fs.renameSync(tmpFile, DELETED_CUSTOMERS_FILE);
    } catch (e) {
      console.error('[DB] Failed to persist deleted_customers.json:', e);
    }
  }

  public isCustomerDeleted(emailOrId: string): boolean {
    if (!emailOrId) return false;
    const clean = emailOrId.toLowerCase().trim();
    return this.deletedEmails.has(clean);
  }

  public deleteCustomer(emailOrId: string, email?: string): boolean {
    const cleanId = (emailOrId || '').toLowerCase().trim();
    const cleanEmail = (email || (cleanId.includes('@') ? cleanId : '')).toLowerCase().trim();

    if (cleanEmail) {
      this.deletedEmails.add(cleanEmail);
    }
    if (cleanId) {
      this.deletedEmails.add(cleanId);
    }
    this.persistDeletedCustomers();

    // 1. Remove from local users list
    this.users = this.users.filter((u) => {
      const uEmail = (u.email || '').toLowerCase().trim();
      const uId = (u.id || '').toLowerCase().trim();
      return uEmail !== cleanEmail && uId !== cleanId && !this.deletedEmails.has(uEmail);
    });
    this.persistUsers();

    // 2. Remove from local customers list
    this.customers = this.customers.filter((c) => {
      const cEmail = (c.email || '').toLowerCase().trim();
      const cId = (c.id || '').toLowerCase().trim();
      return cEmail !== cleanEmail && cId !== cleanId && !this.deletedEmails.has(cEmail);
    });
    this.persistCustomers();

    // 3. Remove from inMemoryDb
    inMemoryDb.users = inMemoryDb.users.filter((u) => {
      const uEmail = (u.email || '').toLowerCase().trim();
      const uId = (u.id || '').toLowerCase().trim();
      return uEmail !== cleanEmail && uId !== cleanId && !this.deletedEmails.has(uEmail);
    });
    inMemoryDb.staffRoles = inMemoryDb.staffRoles.filter((s) => {
      const sEmail = (s.email || '').toLowerCase().trim();
      const sId = (s.id || '').toLowerCase().trim();
      return sEmail !== cleanEmail && sId !== cleanId && !this.deletedEmails.has(sEmail);
    });

    // 4. Delete from Supabase profiles table in background
    try {
      const supabase = getSupabaseAdmin();
      if (cleanEmail) {
        supabase.from('profiles').delete().eq('email', cleanEmail).then(() => {});
      }
      if (cleanId && !cleanId.includes('@')) {
        supabase.from('profiles').delete().eq('id', cleanId).then(() => {});
      }
    } catch (e) {
      console.warn('[DB] Supabase profile deletion error:', e);
    }

    return true;
  }

  public deleteCustomersBulk(ids: string[], emails: string[]) {
    for (const em of emails) {
      if (em) this.deletedEmails.add(em.toLowerCase().trim());
    }
    for (const id of ids) {
      if (id) this.deletedEmails.add(id.toLowerCase().trim());
    }
    this.persistDeletedCustomers();

    this.users = this.users.filter((u) => {
      const uEmail = (u.email || '').toLowerCase().trim();
      const uId = (u.id || '').toLowerCase().trim();
      return !this.deletedEmails.has(uEmail) && !this.deletedEmails.has(uId);
    });
    this.persistUsers();

    this.customers = this.customers.filter((c) => {
      const cEmail = (c.email || '').toLowerCase().trim();
      const cId = (c.id || '').toLowerCase().trim();
      return !this.deletedEmails.has(cEmail) && !this.deletedEmails.has(cId);
    });
    this.persistCustomers();

    inMemoryDb.users = inMemoryDb.users.filter((u) => {
      const uEmail = (u.email || '').toLowerCase().trim();
      const uId = (u.id || '').toLowerCase().trim();
      return !this.deletedEmails.has(uEmail) && !this.deletedEmails.has(uId);
    });
    inMemoryDb.staffRoles = inMemoryDb.staffRoles.filter((s) => {
      const sEmail = (s.email || '').toLowerCase().trim();
      const sId = (s.id || '').toLowerCase().trim();
      return !this.deletedEmails.has(sEmail) && !this.deletedEmails.has(sId);
    });

    // Delete batch from Supabase profiles
    try {
      const supabase = getSupabaseAdmin();
      for (const em of emails) {
        if (em) supabase.from('profiles').delete().eq('email', em.toLowerCase().trim()).then(() => {});
      }
      for (const id of ids) {
        if (id && !id.includes('@')) supabase.from('profiles').delete().eq('id', id).then(() => {});
      }
    } catch (e) {}
  }

  public getUsers(): any[] {
    return [...this.users];
  }

  public saveUser(userData: any): any {
    if (!userData || !userData.email) return null;
    const cleanEmail = userData.email.toLowerCase().trim();
    const existingIdx = this.users.findIndex((u) => u.email.toLowerCase().trim() === cleanEmail);

    if (existingIdx >= 0) {
      this.users[existingIdx] = { ...this.users[existingIdx], ...userData };
    } else {
      this.users.unshift(userData);
    }
    this.persistUsers();
    return userData;
  }

  public getOrders(filters?: { status?: string; payment_status?: string; search?: string; customerEmail?: string }): BackendOrder[] {
    let result = [...this.orders];

    if (filters?.customerEmail) {
      const qEmail = filters.customerEmail.toLowerCase().trim();
      result = result.filter(
        (o) => (o.customerEmail || o.customer_email || '').toLowerCase().trim() === qEmail
      );
    }

    if (filters?.status && filters.status !== 'All') {
      const qStatus = filters.status.toLowerCase().trim();
      result = result.filter((o) => (o.status || o.order_status || '').toLowerCase().trim() === qStatus);
    }

    if (filters?.payment_status && filters.payment_status !== 'All') {
      const qPay = filters.payment_status.toLowerCase().trim();
      result = result.filter((o) => (o.paymentStatus || o.payment_status || '').toLowerCase().trim() === qPay);
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (o) =>
          (o.orderNumber || o.order_number || '').toLowerCase().includes(q) ||
          (o.customerName || o.customer_name || '').toLowerCase().includes(q) ||
          (o.customerEmail || o.customer_email || '').toLowerCase().includes(q) ||
          (o.city || o.shipping_city || '').toLowerCase().includes(q) ||
          (o.trackingId || o.tracking_id || '').toLowerCase().includes(q)
      );
    }

    // Sort newest first
    result.sort((a, b) => new Date(b.createdAt || b.created_at || 0).getTime() - new Date(a.createdAt || a.created_at || 0).getTime());
    return result;
  }

  public getOrderById(idOrNumber: string): BackendOrder | undefined {
    const q = idOrNumber.trim().toLowerCase();
    return this.orders.find(
      (o) =>
        (o.id && o.id.toLowerCase() === q) ||
        (o.orderNumber && o.orderNumber.toLowerCase() === q) ||
        (o.order_number && o.order_number.toLowerCase() === q)
    );
  }

  public async saveOrder(rawOrder: Partial<BackendOrder>): Promise<BackendOrder> {
    const orderNumber =
      rawOrder.orderNumber ||
      rawOrder.order_number ||
      `JBI-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const id = rawOrder.id || `ord_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    const normalizedOrder: BackendOrder = {
      id: id,
      orderNumber: orderNumber,
      order_number: orderNumber,
      userId: rawOrder.userId || rawOrder.user_id || null,
      user_id: rawOrder.userId || rawOrder.user_id || null,
      customerName: rawOrder.customerName || rawOrder.customer_name || 'Artisan Patron',
      customer_name: rawOrder.customerName || rawOrder.customer_name || 'Artisan Patron',
      customerEmail: rawOrder.customerEmail || rawOrder.customer_email || 'patron@jbicrafts.com',
      customer_email: rawOrder.customerEmail || rawOrder.customer_email || 'patron@jbicrafts.com',
      customerPhone: rawOrder.customerPhone || rawOrder.customer_phone || '',
      customer_phone: rawOrder.customerPhone || rawOrder.customer_phone || '',
      shippingAddress: rawOrder.shippingAddress || rawOrder.shipping_address || 'Bhubaneswar, Odisha',
      shipping_address: rawOrder.shippingAddress || rawOrder.shipping_address || 'Bhubaneswar, Odisha',
      city: rawOrder.city || rawOrder.shipping_city || 'Bhubaneswar',
      shipping_city: rawOrder.city || rawOrder.shipping_city || 'Bhubaneswar',
      state: rawOrder.state || rawOrder.shipping_state || 'Odisha',
      shipping_state: rawOrder.state || rawOrder.shipping_state || 'Odisha',
      pincode: rawOrder.pincode || rawOrder.shipping_pincode || '751001',
      shipping_pincode: rawOrder.pincode || rawOrder.shipping_pincode || '751001',
      country: rawOrder.country || rawOrder.shipping_country || 'India',
      shipping_country: rawOrder.country || rawOrder.shipping_country || 'India',
      items: Array.isArray(rawOrder.items) ? rawOrder.items : [],
      subtotal: Number(rawOrder.subtotal || rawOrder.totalAmount || rawOrder.amount || 0),
      discount: Number(rawOrder.discount || rawOrder.discount_amount || 0),
      discount_amount: Number(rawOrder.discount || rawOrder.discount_amount || 0),
      couponApplied: rawOrder.couponApplied || rawOrder.coupon_applied || null,
      coupon_applied: rawOrder.couponApplied || rawOrder.coupon_applied || null,
      shippingFee: Number(rawOrder.shippingFee || rawOrder.shipping_fee || 0),
      shipping_fee: Number(rawOrder.shippingFee || rawOrder.shipping_fee || 0),
      taxAmount: Number(rawOrder.taxAmount || rawOrder.tax_amount || 0),
      tax_amount: Number(rawOrder.taxAmount || rawOrder.tax_amount || 0),
      totalAmount: Number(rawOrder.totalAmount || rawOrder.total_amount || rawOrder.amount || 0),
      total_amount: Number(rawOrder.totalAmount || rawOrder.total_amount || rawOrder.amount || 0),
      amount: Number(rawOrder.totalAmount || rawOrder.total_amount || rawOrder.amount || 0),
      paymentMethod: rawOrder.paymentMethod || rawOrder.payment_method || 'COD',
      payment_method: rawOrder.paymentMethod || rawOrder.payment_method || 'COD',
      paymentStatus: rawOrder.paymentStatus || rawOrder.payment_status || 'Unpaid',
      payment_status: rawOrder.paymentStatus || rawOrder.payment_status || 'Unpaid',
      deliveryMethod: rawOrder.deliveryMethod || rawOrder.delivery_method || 'standard_surface',
      delivery_method: rawOrder.deliveryMethod || rawOrder.delivery_method || 'standard_surface',
      deliveryNotes: rawOrder.deliveryNotes || rawOrder.delivery_notes || '',
      delivery_notes: rawOrder.deliveryNotes || rawOrder.delivery_notes || '',
      status: rawOrder.status || rawOrder.order_status || 'Pending',
      order_status: rawOrder.status || rawOrder.order_status || 'Pending',
      trackingId: rawOrder.trackingId || rawOrder.tracking_id || rawOrder.trackingNumber || `IND${Math.floor(100000000 + Math.random() * 900000000)}IN`,
      tracking_id: rawOrder.trackingId || rawOrder.tracking_id || rawOrder.trackingNumber || `IND${Math.floor(100000000 + Math.random() * 900000000)}IN`,
      carrierName: rawOrder.carrierName || rawOrder.carrier_name || 'India Post Speed Post / Delhivery',
      carrier_name: rawOrder.carrierName || rawOrder.carrier_name || 'India Post Speed Post / Delhivery',
      date: rawOrder.date || `Today, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      createdAt: rawOrder.createdAt || rawOrder.created_at || new Date().toISOString(),
      created_at: rawOrder.createdAt || rawOrder.created_at || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Check if an order already exists with this orderNumber or id
    const existingIdx = this.orders.findIndex(
      (o) =>
        (o.orderNumber && o.orderNumber.toLowerCase() === normalizedOrder.orderNumber.toLowerCase()) ||
        (o.id && o.id.toLowerCase() === normalizedOrder.id.toLowerCase())
    );

    if (existingIdx >= 0) {
      // Update existing order in-place without duplicating
      this.orders[existingIdx] = { ...this.orders[existingIdx], ...normalizedOrder };
      console.log(`[DB] Updated existing order ${normalizedOrder.orderNumber} (index ${existingIdx})`);
    } else {
      // Prepend new order
      this.orders.unshift(normalizedOrder);
      console.log(`[DB] Inserted new order ${normalizedOrder.orderNumber}. Total orders: ${this.orders.length}`);
    }

    this.persistOrders();
    this.updateCustomerFromOrder(normalizedOrder);

    // Sync to Supabase in background
    this.syncToSupabase(normalizedOrder).catch((e) => {
      console.warn('[DB] Supabase async sync notice:', e?.message || e);
    });

    return normalizedOrder;
  }

  public updateOrderStatus(idOrNumber: string, status: string): BackendOrder | null {
    const q = idOrNumber.trim().toLowerCase();
    const order = this.orders.find(
      (o) => (o.id && o.id.toLowerCase() === q) || (o.orderNumber && o.orderNumber.toLowerCase() === q)
    );

    if (!order) return null;

    order.status = status;
    order.order_status = status;
    order.updatedAt = new Date().toISOString();
    order.updated_at = new Date().toISOString();

    if (status === 'Delivered') {
      order.paymentStatus = 'Paid';
      order.payment_status = 'Paid';
    }

    this.persistOrders();

    // Sync status update to Supabase
    try {
      const supabase = getSupabaseAdmin();
      supabase
        .from('orders')
        .update({ status: status, updated_at: new Date().toISOString() })
        .or(`id.eq.${order.id},order_number.eq.${order.orderNumber}`)
        .then(() => {})
        .catch(() => {});
    } catch {}

    return order;
  }

  public updateOrderTracking(idOrNumber: string, trackingId: string, carrierName?: string): BackendOrder | null {
    const q = idOrNumber.trim().toLowerCase();
    const order = this.orders.find(
      (o) => (o.id && o.id.toLowerCase() === q) || (o.orderNumber && o.orderNumber.toLowerCase() === q)
    );

    if (!order) return null;

    order.trackingId = trackingId;
    order.tracking_id = trackingId;
    if (carrierName) {
      order.carrierName = carrierName;
      order.carrier_name = carrierName;
    }
    order.updatedAt = new Date().toISOString();
    order.updated_at = new Date().toISOString();

    this.persistOrders();

    // Sync tracking update to Supabase
    try {
      const supabase = getSupabaseAdmin();
      supabase
        .from('orders')
        .update({
          tracking_id: trackingId,
          carrier_name: order.carrierName,
          updated_at: new Date().toISOString(),
        })
        .or(`id.eq.${order.id},order_number.eq.${order.orderNumber}`)
        .then(() => {})
        .catch(() => {});
    } catch {}

    return order;
  }

  public deleteOrder(idOrNumber: string): boolean {
    const q = idOrNumber.trim().toLowerCase();
    const initialLen = this.orders.length;
    this.orders = this.orders.filter(
      (o) => (o.id && o.id.toLowerCase() !== q) && (o.orderNumber && o.orderNumber.toLowerCase() !== q)
    );

    if (this.orders.length !== initialLen) {
      this.persistOrders();
      try {
        const supabase = getSupabaseAdmin();
        supabase.from('orders').delete().or(`id.eq.${idOrNumber},order_number.eq.${idOrNumber}`).then(() => {});
      } catch {}
      return true;
    }
    return false;
  }

  private updateCustomerFromOrder(order: BackendOrder) {
    if (!order.customerEmail) return;
    const email = order.customerEmail.toLowerCase().trim();
    const existing = this.customers.find((c) => c.email.toLowerCase() === email);

    if (existing) {
      existing.totalOrders += 1;
      existing.totalSpent += Number(order.totalAmount || 0);
      existing.lastOrderDate = new Date().toISOString();
      if (order.customerName && order.customerName !== 'Artisan Patron') {
        existing.name = order.customerName;
      }
      if (order.customerPhone) {
        existing.phone = order.customerPhone;
      }
    } else {
      this.customers.push({
        id: `cust_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`,
        name: order.customerName || 'Artisan Patron',
        email: email,
        phone: order.customerPhone || '',
        totalOrders: 1,
        totalSpent: Number(order.totalAmount || 0),
        lastOrderDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      });
    }
    this.persistCustomers();
  }

  public getCustomers(): CustomerRecord[] {
    return [...this.customers];
  }

  private async syncToSupabase(order: BackendOrder) {
    const supabase = getSupabaseAdmin();

    // 1. Persist to Supabase payment_transactions ledger (verified working table in PostgreSQL)
    try {
      await supabase.from('payment_transactions').insert({
        order_id: order.orderNumber,
        payment_method_code: (order.paymentMethod || 'cod').toLowerCase(),
        gateway_name: order.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Gateway',
        transaction_reference: `TXN-${order.orderNumber}`,
        amount: Number(order.totalAmount || 0),
        currency: 'INR',
        status: order.paymentStatus === 'Paid' ? 'captured' : 'pending',
        gateway_payload: {
          id: order.id,
          orderNumber: order.orderNumber,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          shippingAddress: order.shippingAddress,
          city: order.city,
          state: order.state,
          pincode: order.pincode,
          items: order.items,
          subtotal: order.subtotal,
          totalAmount: order.totalAmount,
          status: order.status,
          paymentStatus: order.paymentStatus,
          trackingId: order.trackingId,
          carrierName: order.carrierName,
          createdAt: order.createdAt,
        },
      });
      console.log(`[DB] Synced order ${order.orderNumber} to Supabase payment_transactions table.`);
    } catch (txnErr: any) {
      console.warn('[DB] Supabase payment_transactions sync note:', txnErr.message);
    }

    // 2. Attempt to persist to Supabase orders table (with correct column mapping)
    try {
      const normalizeStatus = (s?: string) => {
        if (!s) return 'Pending';
        const lower = s.toLowerCase();
        if (lower.includes('ship')) return 'Shipped';
        if (lower.includes('deliver')) return 'Delivered';
        if (lower.includes('cancel')) return 'Cancelled';
        if (lower.includes('process') || lower.includes('product') || lower.includes('confirm') || lower.includes('paid')) return 'Processing';
        return 'Pending';
      };

      const validStatus = normalizeStatus(order.status || order.order_status);

      const { error: ordErr } = await supabase.from('orders').upsert({
        id: order.id,
        order_number: order.orderNumber,
        user_id: order.userId || order.user_id || null,
        customer_name: order.customerName,
        customer_email: order.customerEmail,
        customer_phone: order.customerPhone || '',
        shipping_address: `${order.shippingAddress}, ${order.city || ''}, ${order.state || ''} - ${order.pincode || ''}, ${order.country || 'India'}`,
        shipping_city: order.city || 'Bhubaneswar',
        shipping_state: order.state || 'Odisha',
        shipping_pincode: order.pincode || '751001',
        shipping_country: order.country || 'India',
        items: order.items || [],
        subtotal: Number(order.subtotal || 0),
        discount: Number(order.discount || 0),
        coupon_applied: order.couponApplied || null,
        shipping_fee: Number(order.shippingFee || 0),
        tax_amount: Number(order.taxAmount || 0),
        total_amount: Number(order.totalAmount || 0),
        payment_method: order.paymentMethod || 'COD',
        payment_status: order.paymentStatus || 'Unpaid',
        delivery_method: order.deliveryMethod || 'standard_surface',
        delivery_notes: order.deliveryNotes || '',
        status: validStatus,
        tracking_id: order.trackingId,
        carrier_name: order.carrierName,
      }, { onConflict: 'id' });

      if (!ordErr) {
        console.log(`[DB] Successfully inserted order ${order.orderNumber} into Supabase orders table!`);
      } else {
        console.warn(`[DB] Supabase orders table insert note (${ordErr.code}):`, ordErr.message);
      }
    } catch (ordErr: any) {
      console.warn('[DB] Supabase orders table exception:', ordErr.message);
    }
  }
}

export const persistentDb = new PersistentDatabase();
export default persistentDb;
