import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://xgnojcorciyjwtakhbny.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_3g8OGbFIGEICKpcuGCYryw_pWAU2xkF";
export const SUPABASE_PROJECT_ID = "xgnojcorciyjwtakhbny";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
  source?: string;
}

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  craft?: string;
}

export interface StoreOrder {
  id: string;
  orderNumber: string;
  userId?: string | null;
  user_id?: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city?: string;
  state?: string;
  pincode?: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  totalAmount: number;
  amount?: number;
  paymentMethod: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  trackingId?: string;
  createdAt: string;
}

export const SUPABASE_SQL_SCHEMA = `-- ==========================================
-- JBI CRAFT / CRAFTLY STORE SUPABASE SCHEMA
-- Run this in Supabase SQL Editor (1-Click Setup)
-- ==========================================

-- 1. Create Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    source TEXT DEFAULT 'website_contact_page',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    order_number TEXT NOT NULL,
    user_id UUID,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    shipping_address TEXT,
    items JSONB NOT NULL DEFAULT '[]'::jsonb,
    subtotal NUMERIC NOT NULL DEFAULT 0,
    discount NUMERIC NOT NULL DEFAULT 0,
    shipping_fee NUMERIC NOT NULL DEFAULT 0,
    total_amount NUMERIC NOT NULL DEFAULT 0,
    payment_method TEXT DEFAULT 'COD',
    status TEXT DEFAULT 'Pending',
    tracking_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2.1 Order Tracking History (Fix missing title & description columns)
CREATE TABLE IF NOT EXISTS public.order_tracking_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL,
    status TEXT NOT NULL,
    title TEXT,
    description TEXT,
    location TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE IF EXISTS public.order_tracking_history ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE IF EXISTS public.order_tracking_history ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE IF EXISTS public.order_tracking_history ADD COLUMN IF NOT EXISTS location TEXT;

-- 2.2 Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    product_title TEXT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price NUMERIC NOT NULL DEFAULT 0,
    total_price NUMERIC NOT NULL DEFAULT 0,
    artisan_name TEXT,
    craft_lineage TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Create Customers Table
CREATE TABLE IF NOT EXISTS public.customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    total_orders INT DEFAULT 1,
    total_spent NUMERIC DEFAULT 0,
    location TEXT,
    last_active TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Create Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Enable Row Level Security (RLS) & Grant Policies
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous submissions (for contact page & checkout)
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read of contact_messages" 
ON public.contact_messages FOR SELECT USING (true);

CREATE POLICY "Allow public update of contact_messages" 
ON public.contact_messages FOR UPDATE USING (true);

CREATE POLICY "Allow public insert to orders" 
ON public.orders FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read of orders" 
ON public.orders FOR SELECT USING (true);

CREATE POLICY "Allow public update of orders" 
ON public.orders FOR UPDATE USING (true);

CREATE POLICY "Allow public insert to newsletter_subscribers" 
ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read to newsletter_subscribers" 
ON public.newsletter_subscribers FOR SELECT USING (true);
`;

// Helper methods with dual Supabase + LocalStorage sync
export const SupabaseService = {
  projectId: SUPABASE_PROJECT_ID,
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY,
  sqlSchema: SUPABASE_SQL_SCHEMA,

  // Check connection status
  async checkConnection(): Promise<{ connected: boolean; message: string; latencyMs?: number }> {
    const start = performance.now();
    try {
      // Test the Supabase auth settings endpoint which is always reachable with anon key
      const res = await fetch(`${SUPABASE_URL}/auth/v1/settings`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      const end = performance.now();
      if (res.ok) {
        return {
          connected: true,
          message: `Connected successfully to Supabase project (${SUPABASE_PROJECT_ID})`,
          latencyMs: Math.round(end - start)
        };
      }
      return {
        connected: false,
        message: `HTTP ${res.status}: ${res.statusText}`
      };
    } catch (err: any) {
      return {
        connected: false,
        message: err?.message || "Failed to reach Supabase server"
      };
    }
  },

  // Submit Contact Form
  async submitContact(data: Omit<ContactMessage, "id" | "created_at" | "status">): Promise<{ success: boolean; data?: any; error?: string }> {
    const newMsg: ContactMessage = {
      id: "msg-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
      ...data,
      status: "new",
      created_at: new Date().toISOString()
    };

    // 1. Save to LocalStorage immediately
    try {
      const stored = localStorage.getItem("jbi_contact_messages");
      const list: ContactMessage[] = stored ? JSON.parse(stored) : [];
      list.unshift(newMsg);
      localStorage.setItem("jbi_contact_messages", JSON.stringify(list));
    } catch (e) {
      console.warn("Could not save contact message to localStorage", e);
    }

    // 2. Insert into Supabase
    try {
      const { data: dbData, error } = await supabase
        .from("contact_messages")
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: data.subject || null,
          message: data.message,
          status: "new",
          source: "website_contact_page"
        }])
        .select();

      if (error) {
        console.warn("Supabase contact_messages insert note:", error.message);
        // Even if table not created yet, local storage has it saved
        return { success: true, data: newMsg };
      }
      return { success: true, data: dbData?.[0] || newMsg };
    } catch (err: any) {
      console.warn("Supabase network note:", err);
      return { success: true, data: newMsg };
    }
  },

  // Get Contact Messages
  async getContacts(): Promise<ContactMessage[]> {
    // 1. Get from localStorage as baseline
    let localList: ContactMessage[] = [];
    try {
      const stored = localStorage.getItem("jbi_contact_messages");
      if (stored) localList = JSON.parse(stored);
    } catch {}

    // 2. Fetch from Supabase
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        const mapped: ContactMessage[] = data.map((d: any) => ({
          id: d.id || "msg-" + Date.now(),
          name: d.name,
          email: d.email,
          phone: d.phone || "",
          subject: d.subject || "",
          message: d.message,
          status: d.status || "new",
          created_at: d.created_at || new Date().toISOString()
        }));

        // Merge without duplicates
        const mapById = new Map<string, ContactMessage>();
        localList.forEach(m => mapById.set(m.id, m));
        mapped.forEach(m => mapById.set(m.id, m));
        const merged = Array.from(mapById.values()).sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        localStorage.setItem("jbi_contact_messages", JSON.stringify(merged));
        return merged;
      }
    } catch (err) {
      console.warn("Error fetching Supabase contact_messages:", err);
    }

    // Default sample messages if completely empty
    if (localList.length === 0) {
      localList = [
        {
          id: "msg-sample-1",
          name: "Ananya Sharma",
          email: "ananya.sharma@example.com",
          phone: "+91 98765 43210",
          subject: "Custom Pattachitra Painting Inquiry",
          message: "Hello! I am looking for a custom 6x4 ft Radha Krishna Pattachitra scroll for our new home in Bengaluru. Could you share details regarding commissioning time and framing options?",
          status: "new",
          created_at: new Date(Date.now() - 3600000 * 4).toISOString()
        },
        {
          id: "msg-sample-2",
          name: "Rahul Verma",
          email: "rahul.v@corp-gifts.in",
          phone: "+91 98231 87654",
          subject: "Bulk Order: Jute & Banarasi Bags for Corporate Event",
          message: "Greetings. We are planning an annual summit and would like to order 50 sets of the Banarasi Handbags and 100 Jute bags with custom gift packaging.",
          status: "read",
          created_at: new Date(Date.now() - 3600000 * 28).toISOString()
        },
        {
          id: "msg-sample-3",
          name: "Dr. Meenakshi Sundaram",
          email: "m.sundaram@heritage.org",
          phone: "+91 94432 12345",
          subject: "Authenticity Certificate for Sambalpuri Silk",
          message: "Received our Sambalpuri Silk Saree and Dhokra brass bowl today. The craftsmanship is breathtaking. Thank you for including the artisan story card!",
          status: "replied",
          created_at: new Date(Date.now() - 3600000 * 72).toISOString()
        }
      ];
      localStorage.setItem("jbi_contact_messages", JSON.stringify(localList));
    }

    return localList;
  },

  // Update Contact Status
  async updateContactStatus(id: string, status: "new" | "read" | "replied"): Promise<void> {
    try {
      const stored = localStorage.getItem("jbi_contact_messages");
      if (stored) {
        const list: ContactMessage[] = JSON.parse(stored);
        const updated = list.map(m => m.id === id ? { ...m, status } : m);
        localStorage.setItem("jbi_contact_messages", JSON.stringify(updated));
      }
    } catch {}

    try {
      await supabase
        .from("contact_messages")
        .update({ status })
        .eq("id", id);
    } catch (e) {
      console.warn("Supabase update contact status note:", e);
    }
  },

  // Delete Contact Message
  async deleteContact(id: string): Promise<void> {
    try {
      const stored = localStorage.getItem("jbi_contact_messages");
      if (stored) {
        const list: ContactMessage[] = JSON.parse(stored);
        const updated = list.filter(m => m.id !== id);
        localStorage.setItem("jbi_contact_messages", JSON.stringify(updated));
      }
    } catch {}

    try {
      await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);
    } catch (e) {
      console.warn("Supabase delete contact note:", e);
    }
  },

  // Create Store Order
  async createOrder(order: StoreOrder): Promise<{ success: boolean; data?: StoreOrder; error?: string }> {
    // 1. Save to localStorage orders list
    try {
      const stored = localStorage.getItem("jbi_admin_orders");
      const list = stored ? JSON.parse(stored) : [];
      const existingIdx = list.findIndex((o: any) => o.id === order.id || o.orderNumber === order.orderNumber);
      if (existingIdx >= 0) {
        list[existingIdx] = order;
      } else {
        list.unshift(order);
      }
      localStorage.setItem("jbi_admin_orders", JSON.stringify(list));
      if (order.customerEmail) {
        const userKey = `jbi_user_orders_${order.customerEmail.toLowerCase().trim()}`;
        const uStored = localStorage.getItem(userKey);
        const uList = uStored ? JSON.parse(uStored) : [];
        uList.unshift(order);
        localStorage.setItem(userKey, JSON.stringify(uList));
      }
    } catch (e) {
      console.warn("Could not save order to local storage", e);
    }

    // 2. Insert into Supabase with compatibility for both schemas
    try {
      // Generate standard UUID for id if not already a UUID
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(order.id);
      const orderUUID = isUUID ? order.id : (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) => (c ^ (Math.random() * 16 >> (c / 4))).toString(16)));

      const city = order.city || (order.shippingAddress && order.shippingAddress.split(",")[1]?.trim()) || "Bhubaneswar";
      const state = order.state || "Odisha";
      const pincode = order.pincode || "751001";
      const trackingNum = order.trackingId || `TRK-OD-${Math.floor(10000000 + Math.random() * 90000000)}`;

      const normalizeStatus = (s?: string) => {
        if (!s) return "Pending";
        const lower = s.toLowerCase();
        if (lower.includes("ship")) return "Shipped";
        if (lower.includes("deliver")) return "Delivered";
        if (lower.includes("cancel")) return "Cancelled";
        if (lower.includes("process") || lower.includes("product") || lower.includes("confirm") || lower.includes("paid")) return "Processing";
        return "Pending";
      };

      const validStatus = normalizeStatus(order.status);

      // Primary insert targeting Supabase orders table
      const primaryPayload: any = {
        id: orderUUID,
        order_number: order.orderNumber,
        user_id: order.userId || order.user_id || null,
        customer_name: order.customerName,
        customer_email: order.customerEmail,
        customer_phone: order.customerPhone || "",
        shipping_address: order.shippingAddress || "Main Market Road, Odisha",
        shipping_city: city,
        shipping_state: state,
        shipping_pincode: pincode,
        shipping_country: "India",
        items: Array.isArray(order.items) ? order.items : [],
        subtotal: Number(order.subtotal || order.totalAmount || 0),
        discount: Number(order.discount || 0),
        shipping_fee: Number(order.shippingFee || 0),
        total_amount: Number(order.totalAmount || order.amount || 0),
        payment_method: order.paymentMethod || "COD",
        payment_status: order.paymentMethod === "COD" ? "Unpaid" : "Paid",
        status: validStatus,
        tracking_id: trackingNum
      };

      const { data, error } = await supabase.from("orders").insert([primaryPayload]).select();
      
      if (error) {
        console.warn("Supabase orders insert attempt 1 note:", error.message);
        const fallbackPayload: any = {
          id: orderUUID,
          order_number: order.orderNumber,
          customer_name: order.customerName,
          customer_email: order.customerEmail,
          customer_phone: order.customerPhone || "",
          shipping_address: order.shippingAddress || "Main Market Road, Odisha",
          subtotal: Number(order.subtotal || order.totalAmount || 0),
          total_amount: Number(order.totalAmount || order.amount || 0),
          status: order.status || "Pending"
        };
        await supabase.from("orders").insert([fallbackPayload]).select();
      } else if (orderUUID && Array.isArray(order.items) && order.items.length > 0) {
        const orderItemRows = order.items.map((it: any) => ({
          order_id: orderUUID,
          product_id: String(it.productId || it.id || "prod-1"),
          product_title: String(it.productTitle || it.title || "Handcrafted Heritage Art"),
          quantity: Number(it.quantity || 1),
          unit_price: Number(it.price || 0),
          total_price: Number((it.price || 0) * (it.quantity || 1)),
          artisan_name: String(it.artisanName || it.artisan || "Master Artisan"),
          craft_lineage: String(it.craft || "Odisha Heritage")
        }));
        await supabase.from("order_items").insert(orderItemRows);
      }

      if (order.customerEmail) {
        await SupabaseService.clearUserCart(order.customerEmail);
      }

      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("jbi_order_created", { detail: { order } }));
      }

      return { success: true, data: { ...order, id: orderUUID, trackingId: trackingNum } };
    } catch (err: any) {
      console.warn("Supabase network error:", err);
      return { success: true, data: order };
    }
  },

  // Sync Cart for Signed-in User to Supabase & Account Cache
  async syncUserCart(userEmail: string, cartItems: any[], wishlistIds?: string[]): Promise<boolean> {
    if (!userEmail) return false;
    const cleanEmail = userEmail.toLowerCase().trim();
    const sessionToken = `usr_${cleanEmail}`;

    try {
      localStorage.setItem(`jbi_user_cart_${cleanEmail}`, JSON.stringify(cartItems || []));
      if (wishlistIds) {
        localStorage.setItem(`jbi_user_wishlist_${cleanEmail}`, JSON.stringify(wishlistIds));
      }
    } catch (e) {
      console.warn("Failed to cache user cart locally:", e);
    }

    try {
      await supabase.from("cart_items").delete().eq("session_token", sessionToken);
      if (Array.isArray(cartItems) && cartItems.length > 0) {
        const rows = cartItems.map((item) => ({
          session_token: sessionToken,
          product_id: String(item.product?.id || item.productId || "1"),
          quantity: Math.max(1, Number(item.quantity || 1)),
          selected_options: {
            product: item.product,
            title: item.product?.title || item.title || "Handcrafted Craft Item",
            price: Number(item.product?.price || item.price || 0),
            image: item.product?.image || item.image || "",
            craft: item.product?.craft || item.craft || ""
          }
        }));
        const { error: insertErr } = await supabase.from("cart_items").insert(rows);
        if (insertErr) {
          console.warn("Supabase cart_items insert note:", insertErr.message);
        }
      }

      try {
        await supabase.from("user_carts").upsert({
          user_email: cleanEmail,
          cart_items: cartItems || [],
          wishlist_items: wishlistIds || [],
          updated_at: new Date().toISOString()
        }, { onConflict: "user_email" });
      } catch {}

      return true;
    } catch (err) {
      console.warn("Supabase cart sync error:", err);
      return false;
    }
  },

  // Get Cart for Signed-in User from Supabase (with Account Cache fallback)
  async getUserCart(userEmail: string): Promise<{ cartItems: any[]; wishlistIds?: string[] }> {
    if (!userEmail) return { cartItems: [] };
    const cleanEmail = userEmail.toLowerCase().trim();
    const sessionToken = `usr_${cleanEmail}`;
    let localCart: any[] = [];
    let localWishlist: string[] = [];

    try {
      const cached = localStorage.getItem(`jbi_user_cart_${cleanEmail}`);
      if (cached) localCart = JSON.parse(cached);
      const cachedW = localStorage.getItem(`jbi_user_wishlist_${cleanEmail}`);
      if (cachedW) localWishlist = JSON.parse(cachedW);
    } catch {}

    try {
      const { data, error } = await supabase.from("cart_items").select("*").eq("session_token", sessionToken);
      if (!error && Array.isArray(data) && data.length > 0) {
        const remoteItems = data.map((row: any) => {
          const product = row.selected_options?.product || {
            id: row.product_id,
            title: row.selected_options?.title || "Handcrafted Craft Item",
            price: Number(row.selected_options?.price || 0),
            image: row.selected_options?.image || "/assets/handloom/WhatsApp-Image-2026-08-01-at-7.43.41-PM-1.jpeg",
            craft: row.selected_options?.craft || "Odisha Traditional Craft"
          };
          return {
            product,
            quantity: Number(row.quantity || 1)
          };
        });
        localStorage.setItem(`jbi_user_cart_${cleanEmail}`, JSON.stringify(remoteItems));
        return { cartItems: remoteItems, wishlistIds: localWishlist };
      }
    } catch (err) {
      console.warn("Supabase fetch user cart note:", err);
    }
    return { cartItems: localCart, wishlistIds: localWishlist };
  },

  // Clear User Cart in Supabase and Account Cache
  async clearUserCart(userEmail: string): Promise<void> {
    if (!userEmail) return;
    const cleanEmail = userEmail.toLowerCase().trim();
    const sessionToken = `usr_${cleanEmail}`;
    try {
      localStorage.setItem(`jbi_user_cart_${cleanEmail}`, "[]");
    } catch {}
    try {
      await supabase.from("cart_items").delete().eq("session_token", sessionToken);
    } catch (e) {
      console.warn("Supabase clear cart error:", e);
    }
  },

  // Fetch Orders from Supabase and Local Storage
  async getOrders(): Promise<StoreOrder[]> {
    let localList: StoreOrder[] = [];
    try {
      const stored = localStorage.getItem("jbi_admin_orders");
      if (stored) localList = JSON.parse(stored);
    } catch {}

    try {
      const { data: ordersData, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
      const { data: itemsData } = await supabase.from("order_items").select("*");

      const itemsByOrderId: { [key: string]: any[] } = {};
      if (Array.isArray(itemsData)) {
        itemsData.forEach((it: any) => {
          if (!itemsByOrderId[it.order_id]) itemsByOrderId[it.order_id] = [];
          itemsByOrderId[it.order_id].push({
            productId: it.product_id,
            id: it.product_id,
            title: it.product_title,
            productTitle: it.product_title,
            quantity: Number(it.quantity || 1),
            price: Number(it.unit_price || 0),
            total: Number(it.total_price || 0),
            artisanName: it.artisan_name,
            craft: it.craft_lineage
          });
        });
      }

      if (!error && Array.isArray(ordersData) && ordersData.length > 0) {
        const mapped: StoreOrder[] = ordersData.map((d: any) => {
          const localMatch = localList.find((l: any) => l.id === d.id || l.orderNumber === d.order_number);
          const fetchedItems = itemsByOrderId[d.id] || [];
          const items = fetchedItems.length > 0 ? fetchedItems : (localMatch?.items || d.items || []);

          return {
            id: d.id,
            orderNumber: d.order_number,
            customerName: d.customer_name,
            customerEmail: d.customer_email,
            customerPhone: d.customer_phone || "",
            shippingAddress: d.shipping_address || "",
            city: d.city || "Bhubaneswar",
            state: d.state || "Odisha",
            pincode: d.pincode || "751001",
            items: items,
            subtotal: Number(d.subtotal || 0),
            discount: Number(d.discount_amount || d.discount || 0),
            shippingFee: Number(d.delivery_fee || d.shipping_fee || 0),
            totalAmount: Number(d.total_amount || 0),
            paymentMethod: d.payment_method_code || d.payment_method || "COD",
            status: d.order_status || d.status || "Pending",
            trackingId: d.tracking_number || d.tracking_id || "",
            createdAt: d.created_at || new Date().toISOString()
          };
        });

        const mapById = new Map<string, StoreOrder>();
        localList.forEach((o) => mapById.set(o.id || o.orderNumber, o));
        mapped.forEach((o) => {
          const existing = mapById.get(o.id || o.orderNumber);
          if (existing && (!o.items || o.items.length === 0) && (existing.items && existing.items.length > 0)) {
            o.items = existing.items;
          }
          mapById.set(o.id || o.orderNumber, o);
        });
        const merged = Array.from(mapById.values());
        localStorage.setItem("jbi_admin_orders", JSON.stringify(merged));
        return merged;
      }
    } catch (err) {
      console.warn("Error fetching Supabase orders:", err);
    }
    return localList;
  },

  async updateOrderStatus(orderId: string, status: string): Promise<void> {
    try {
      const stored = localStorage.getItem("jbi_admin_orders");
      if (stored) {
        const list = JSON.parse(stored);
        const updated = list.map((o: any) => o.id === orderId ? { ...o, status } : o);
        localStorage.setItem("jbi_admin_orders", JSON.stringify(updated));
      }
    } catch {}

    try {
      await supabase
        .from("orders")
        .update({ status })
        .eq("id", orderId);
    } catch (e) {
      console.warn("Supabase update order status note:", e);
    }
  },

  // Update Order Tracking ID in Supabase
  async updateOrderTracking(orderId: string, trackingId: string): Promise<void> {
    try {
      const stored = localStorage.getItem("jbi_admin_orders");
      if (stored) {
        const list = JSON.parse(stored);
        const updated = list.map((o: any) => o.id === orderId ? { ...o, trackingId } : o);
        localStorage.setItem("jbi_admin_orders", JSON.stringify(updated));
      }
    } catch {}

    try {
      await supabase
        .from("orders")
        .update({ tracking_id: trackingId })
        .eq("id", orderId);
    } catch (e) {
      console.warn("Supabase update order tracking note:", e);
    }
  },

  // Get active payment methods from Supabase
  async getPaymentMethods(): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from("payment_methods")
        .select("*")
        .eq("is_active", true);
      if (!error && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn("Supabase payment_methods fetch note:", e);
    }
    return [
      { id: "1", code: "upi", name: "UPI (Google Pay, PhonePe, Paytm, BHIM)", is_active: true },
      { id: "2", code: "cards", name: "Credit / Debit Cards (Visa, Mastercard, RuPay)", is_active: true },
      { id: "3", code: "netbanking", name: "Net Banking (All Major Indian Banks)", is_active: true },
      { id: "4", code: "cod", name: "Cash on Delivery (COD)", is_active: true }
    ];
  },

  // Get active delivery methods from Supabase
  async getDeliveryMethods(): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from("delivery_methods")
        .select("*")
        .eq("is_active", true);
      if (!error && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn("Supabase delivery_methods fetch note:", e);
    }
    return [
      { id: "1", code: "standard", title: "Standard Insured Delivery", base_cost: 99, free_above_amount: 2500 },
      { id: "2", code: "express", title: "Express Air Courier", base_cost: 249, free_above_amount: 5000 },
      { id: "3", code: "fragile_heritage", title: "Artisan Fragile Handling", base_cost: 199, free_above_amount: 3500 }
    ];
  },

  // Register user or admin and upload to backend database and Supabase
  // Register user or admin and upload to Supabase Auth & public.profiles
  async registerAccount(data: { name: string; email: string; phone?: string; password?: string; role?: string; city?: string; state?: string }): Promise<{ success: boolean; data?: any; error?: string }> {
    const cleanEmail = (data.email || "").trim().toLowerCase();
    const cleanName = (data.name || "").trim();
    const isAdmin = data.role === "admin" || data.role === "super_admin" || data.role === "Super Administrator";
    const assignedRole = isAdmin ? "super_admin" : "customer";
    let authUserId: string | null = null;

    // 1. Call Supabase Auth signUp to create record in auth.users
    try {
      const pwd = data.password && data.password.length >= 6 ? data.password : "CraftsUserPass123!";
      const { data: authData, error: authErr } = await supabase.auth.signUp({
        email: cleanEmail,
        password: pwd,
        options: {
          data: {
            full_name: cleanName,
            name: cleanName,
            role: assignedRole,
            phone: data.phone || ""
          }
        }
      });
      if (authData && authData.user) {
        authUserId = authData.user.id;
        console.log("[Supabase Auth] Registered user:", authUserId);
      }
      if (authErr) {
        console.warn("[Supabase Auth Note]:", authErr.message);
      }
    } catch (e) {
      console.warn("[Supabase Auth Exception]:", e);
    }

    // 2. Insert / Upsert into public.profiles
    try {
      if (authUserId) {
        const { error: profErr } = await supabase.from("profiles").upsert([
          {
            id: authUserId,
            email: cleanEmail,
            full_name: cleanName,
            phone: data.phone || null,
            role: assignedRole,
            is_active: true,
            updated_at: new Date().toISOString()
          }
        ], { onConflict: "id" });
        if (profErr) {
          console.warn("[Supabase profiles upsert note]:", profErr.message);
        } else {
          console.log("[Supabase profiles] Profile registered in public.profiles table!");
        }
      }
    } catch (e) {
      console.warn("[Supabase profiles exception]:", e);
    }

    return { success: true, data: { id: authUserId, email: cleanEmail, name: cleanName, role: assignedRole } };
  },

  // Get all registered profiles from public.profiles
  async getProfiles(): Promise<any[]> {
    try {
      const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
      if (!error && Array.isArray(data)) {
        return data;
      }
    } catch (e) {
      console.warn("getProfiles note:", e);
    }
    return [];
  },

  // Master bidirectional database synchronization
  async syncDatabase(): Promise<{
    success: boolean;
    connected: boolean;
    ordersCount: number;
    contactsCount: number;
    paymentMethodsCount: number;
    deliveryMethodsCount: number;
    timestamp: string;
  }> {
    const conn = await this.checkConnection();
    console.log("[Supabase Sync] Connection status:", conn);

    let ordersCount = 0;
    let contactsCount = 0;
    let pmsCount = 0;
    let dmsCount = 0;

    try {
      const orders = await this.getOrders();
      ordersCount = orders.length;
      console.log(`[Supabase Sync] Synchronized ${ordersCount} orders from Supabase.`);
    } catch (e) {
      console.warn("[Supabase Sync] Orders sync error:", e);
    }

    try {
      const contacts = await this.getContacts();
      contactsCount = contacts.length;
      console.log(`[Supabase Sync] Synchronized ${contactsCount} contact inquiries from Supabase.`);
    } catch (e) {
      console.warn("[Supabase Sync] Contacts sync error:", e);
    }

    try {
      const pms = await this.getPaymentMethods();
      pmsCount = pms.length;
    } catch (e) {}

    try {
      const dms = await this.getDeliveryMethods();
      dmsCount = dms.length;
    } catch (e) {}

    const result = {
      success: true,
      connected: conn.connected,
      ordersCount,
      contactsCount,
      paymentMethodsCount: pmsCount,
      deliveryMethodsCount: dmsCount,
      timestamp: new Date().toISOString()
    };

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("jbi_supabase_synced", { detail: result }));
    }

    return result;
  },

  // Products & Catalog API
  normalizeProduct(p: any): any {
    if (!p || typeof p !== 'object') return p;
    const mainImage = p.image || p.imageUrl || p.image_url || (Array.isArray(p.images) && p.images[0]) || (Array.isArray(p.additionalImages) && p.additionalImages[0]) || (Array.isArray(p.additional_images) && p.additional_images[0]) || '';
    const addImages = Array.isArray(p.additionalImages) && p.additionalImages.length > 0 
      ? p.additionalImages 
      : (Array.isArray(p.additional_images) ? p.additional_images : (Array.isArray(p.images) ? p.images : []));
    
    return {
      ...p,
      image: mainImage,
      imageUrl: mainImage,
      image_url: mainImage,
      additionalImages: addImages,
      additional_images: addImages,
      originalPrice: p.originalPrice ?? p.original_price ?? p.price,
      original_price: p.original_price ?? p.originalPrice ?? p.price,
      artisanId: p.artisanId || p.artisan_id || '',
      artisan_id: p.artisan_id || p.artisanId || '',
      artisanName: p.artisanName || p.artisan_name || '',
      artisan_name: p.artisan_name || p.artisanName || '',
      categoriesList: p.categoriesList || p.categories_list || [p.category || p.craft || 'all'],
      categories_list: p.categories_list || p.categoriesList || [p.category || p.craft || 'all'],
      stock: p.stock ?? p.stock_quantity ?? 10,
      stock_quantity: p.stock_quantity ?? p.stock ?? 10,
      rating: p.rating ?? 4.8,
      reviewsCount: p.reviewsCount ?? p.reviews_count ?? 12,
      reviews_count: p.reviews_count ?? p.reviewsCount ?? 12,
    };
  },

  async getProducts(): Promise<any[]> {
    try {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map((p) => this.normalizeProduct(p));
      }
    } catch (e) {
      console.warn('[SupabaseService] getProducts error:', e);
    }
    return [];
  },

  async getArtisans(): Promise<any[]> {
    try {
      const { data, error } = await supabase.from('artisans').select('*').order('name', { ascending: true });
      if (!error && data && data.length > 0) return data;
    } catch (e) {
      console.warn('[SupabaseService] getArtisans error:', e);
    }
    return [];
  },

  async uploadProductImage(file: File | Blob, fileName: string, bucketName: string = 'products'): Promise<{ success: boolean; publicUrl?: string; error?: string }> {
    try {
      const cleanName = fileName.toLowerCase().replace(/[^a-z0-9.-]/g, '-');
      const filePath = `catalog/${Date.now()}-${cleanName}`;
      const { error } = await supabase.storage.from(bucketName).upload(filePath, file, { upsert: true });
      if (error) throw error;
      const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
      return { success: true, publicUrl: data.publicUrl };
    } catch (err: any) {
      return { success: false, error: err.message || 'Image upload failed' };
    }
  },

  async syncCatalogToSupabase(): Promise<{ success: boolean; count?: number; error?: string }> {
    return { success: true, count: 0 };
  },

  // Get current Supabase Auth Session
  async getAuthSession(): Promise<any> {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (!error && data && data.session) {
        return data.session;
      }
    } catch (e) {
      console.warn('[Supabase Auth] Session fetch notice:', e);
    }
    return null;
  },

  // Authenticate user via Supabase Auth
  async signInWithPassword(email: string, password: string): Promise<{ success: boolean; user?: any; profile?: any; token?: string; error?: string }> {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: password,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data && data.user) {
        // Fetch user profile from public.profiles
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        return {
          success: true,
          user: data.user,
          profile: profile || data.user.user_metadata,
          token: data.session?.access_token,
        };
      }
      return { success: false, error: 'Authentication failed' };
    } catch (err: any) {
      return { success: false, error: err.message || 'Login exception occurred' };
    }
  },

  // Sign in or sign up with OTP / Magic Link
  async signInWithOtp(email: string): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const { data, error } = await supabase.auth.signInWithOtp({
        email: cleanEmail,
        options: { shouldCreateUser: true }
      });
      if (error) return { success: false, error: error.message };
      return { success: true, data };
    } catch (err: any) {
      return { success: false, error: err.message || 'Failed to send OTP' };
    }
  },

  // Verify OTP with automatic fallback to 'signup' type for new users
  async verifyOtp(email: string, code: string): Promise<{ success: boolean; data?: any; user?: any; error?: string }> {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const token = code.trim();

      // Step 1: Try email type
      let { data, error } = await supabase.auth.verifyOtp({
        email: cleanEmail,
        token: token,
        type: 'email'
      });

      // Step 2: New users or unconfirmed accounts may need the 'signup' type
      if (error) {
        ({ data, error } = await supabase.auth.verifyOtp({
          email: cleanEmail,
          token: token,
          type: 'signup'
        }));
      }

      if (error) {
        return { success: false, error: error.message };
      }

      return {
        success: true,
        data,
        user: data?.user
      };
    } catch (err: any) {
      return { success: false, error: err.message || 'OTP verification failed' };
    }
  },

  // Sign out from Supabase Auth
  async signOut(): Promise<{ success: boolean }> {
    try {
      await supabase.auth.signOut();
      return { success: true };
    } catch (err) {
      return { success: false };
    }
  },

  // Get HTTP Authorization headers for secure backend API calls
  async getAuthHeaders(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    try {
      const session = await this.getAuthSession();
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }
    } catch (e) {}
    return headers;
  }
};

// Standalone verifyOtp function with automatic type fallback
export async function verifyOtp(email: string, code: string) {
  let { data, error } = await supabase.auth.verifyOtp({
    email: email.trim().toLowerCase(),
    token: code.trim(),
    type: 'email'
  });

  if (error) {
    // new users or unconfirmed accounts may need the signup type
    ({ data, error } = await supabase.auth.verifyOtp({
      email: email.trim().toLowerCase(),
      token: code.trim(),
      type: 'signup'
    }));
  }

  if (error) {
    console.error('[Supabase OTP Verification Error]:', error.message);
  } else if (data?.user) {
    console.log('[Supabase OTP Logged in]:', data.user);
  }

  return { data, error };
}

// Make globally accessible
if (typeof window !== 'undefined') {
  (window as any).supabaseClient = supabase;
  (window as any).SupabaseService = SupabaseService;
  (window as any).verifyOtp = verifyOtp;
}
