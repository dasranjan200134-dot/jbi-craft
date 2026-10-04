import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const DATA_DIR = path.resolve(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (e) {}
}

const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

const RAW_SUPABASE_URL = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').trim();
const SUPABASE_URL = RAW_SUPABASE_URL.startsWith('http')
  ? RAW_SUPABASE_URL
  : (RAW_SUPABASE_URL ? `https://${RAW_SUPABASE_URL}.supabase.co` : 'https://xgnojcorciyjwtakhbny.supabase.co');

const RAW_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '').trim();
const SUPABASE_SERVICE_ROLE_KEY = RAW_KEY.length > 5 ? RAW_KEY : 'sb_publishable_3g8OGbFIGEICKpcuGCYryw_pWAU2xkF';

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseClient;
}

// Production Persistent Database with File-Backed Storage and In-Memory Caching
class InMemoryDatabase {
  public products: any[] = [];
  public cartItems: any[] = [];
  public orders: any[] = [];
  public transactions: any[] = [];
  public addresses: any[] = [];
  public users: any[] = [];

  constructor() {
    this.loadFromDisk();
  }

  public loadFromDisk() {
    try {
      if (fs.existsSync(ORDERS_FILE)) {
        const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const map = new Map<string, any>();
          for (const o of parsed) {
            const key = o.orderNumber || o.order_number || o.id;
            if (key && !map.has(key)) map.set(key, o);
          }
          this.orders = Array.from(map.values());
        }
      }
    } catch (e) {
      console.warn('[DB Load Error - Orders]:', e);
    }

    try {
      if (fs.existsSync(USERS_FILE)) {
        const raw = fs.readFileSync(USERS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.users = parsed;
        }
      }
    } catch (e) {
      console.warn('[DB Load Error - Users]:', e);
    }
  }

  public saveOrders() {
    try {
      const map = new Map<string, any>();
      for (const o of this.orders) {
        const key = o.orderNumber || o.order_number || o.id;
        if (key && !map.has(key)) map.set(key, o);
      }
      this.orders = Array.from(map.values());
      fs.writeFileSync(ORDERS_FILE, JSON.stringify(this.orders, null, 2), 'utf8');
    } catch (e) {
      console.error('[DB Save Error - Orders]:', e);
    }
  }

  public addOrder(order: any) {
    const key = order.orderNumber || order.order_number || order.id;
    const existingIdx = this.orders.findIndex(
      (o) => (o.orderNumber || o.order_number || o.id) === key
    );
    if (existingIdx >= 0) {
      this.orders[existingIdx] = { ...this.orders[existingIdx], ...order };
    } else {
      this.orders.unshift(order);
    }
    this.saveOrders();
  }

  public saveUsers() {
    try {
      fs.writeFileSync(USERS_FILE, JSON.stringify(this.users, null, 2), 'utf8');
    } catch (e) {
      console.error('[DB Save Error - Users]:', e);
    }
  }
  public coupons: any[] = [
    {
      id: 'cpn_welcome10',
      code: 'WELCOME10',
      description: 'Welcome gift: 10% off on your first handcrafted order',
      discount_type: 'percentage',
      discount_value: 10.0,
      min_order_value: 999.0,
      max_discount_limit: 500.0,
      is_active: true,
      usage_limit: 1000,
      usage_count: 14,
      valid_until: '2027-12-31T23:59:59Z',
    },
    {
      id: 'cpn_odisha200',
      code: 'ODISHAHERITAGE',
      description: 'Flat ₹200 off on traditional Odisha handloom & silver filigree',
      discount_type: 'flat_amount',
      discount_value: 200.0,
      min_order_value: 1999.0,
      max_discount_limit: 200.0,
      is_active: true,
      usage_limit: 500,
      usage_count: 32,
      valid_until: '2027-12-31T23:59:59Z',
    },
    {
      id: 'cpn_festive15',
      code: 'FESTIVE15',
      description: 'Festive artisan celebration: 15% discount',
      discount_type: 'percentage',
      discount_value: 15.0,
      min_order_value: 2499.0,
      max_discount_limit: 1000.0,
      is_active: true,
      usage_limit: 300,
      usage_count: 8,
      valid_until: '2027-12-31T23:59:59Z',
    },
  ];

  public shippingRules: any[] = [
    {
      id: 'ship_standard',
      name: 'Standard Craft Surface Shipping',
      code: 'standard_surface',
      carrier: 'India Post Speed Post / Delhivery',
      base_rate: 80.0,
      free_shipping_threshold: 999.0,
      min_days: 3,
      max_days: 6,
      is_fragile_insured: true,
      is_active: true,
      zone: 'all_india',
    },
    {
      id: 'ship_express',
      name: 'Express Priority Air Delivery',
      code: 'express_air',
      carrier: 'BlueDart Express Air',
      base_rate: 190.0,
      free_shipping_threshold: 2999.0,
      min_days: 1,
      max_days: 3,
      is_fragile_insured: true,
      is_active: true,
      zone: 'all_india',
    },
    {
      id: 'ship_guild',
      name: 'Artisan Guild Custom Wooden Crate Delivery',
      code: 'artisan_heritage_crate',
      carrier: 'Artisan Logistics Guild',
      base_rate: 350.0,
      free_shipping_threshold: 4999.0,
      min_days: 4,
      max_days: 8,
      is_fragile_insured: true,
      is_active: true,
      zone: 'fragile_heavy',
    },
    {
      id: 'ship_intl',
      name: 'International Global Craft Courier',
      code: 'international_express',
      carrier: 'DHL Express Worldwide',
      base_rate: 2400.0,
      free_shipping_threshold: null,
      min_days: 6,
      max_days: 12,
      is_fragile_insured: true,
      is_active: true,
      zone: 'international',
    },
  ];

  public taxRules: any[] = [
    {
      id: 'tax_gst_5',
      name: 'Handloom & Textiles GST (5%)',
      rate: 5.0,
      cgst_rate: 2.5,
      sgst_rate: 2.5,
      igst_rate: 5.0,
      hsn_code: '5208',
      category: 'textiles',
      is_active: true,
    },
    {
      id: 'tax_gst_12',
      name: 'Artisanal Metal & Dhokra Crafts (12%)',
      rate: 12.0,
      cgst_rate: 6.0,
      sgst_rate: 6.0,
      igst_rate: 12.0,
      hsn_code: '7419',
      category: 'metal_craft',
      is_active: true,
    },
    {
      id: 'tax_gst_12_art',
      name: 'Pattachitra & Heritage Art (12%)',
      rate: 12.0,
      cgst_rate: 6.0,
      sgst_rate: 6.0,
      igst_rate: 12.0,
      hsn_code: '9701',
      category: 'art',
      is_active: true,
    },
    {
      id: 'tax_gst_18',
      name: 'Premium Guild Silver Filigree (18%)',
      rate: 18.0,
      cgst_rate: 9.0,
      sgst_rate: 9.0,
      igst_rate: 18.0,
      hsn_code: '7113',
      category: 'silver_filigree',
      is_active: true,
    },
  ];

  public staffRoles: any[] = [
    {
      id: 'staff_143_single',
      name: 'Administrator',
      email: 'admin143@gmail.com',
      role: 'super_admin',
      permissions: ['all'],
      status: 'active',
      last_login: new Date().toISOString(),
    },
  ];
}

export const inMemoryDb = new InMemoryDatabase();
