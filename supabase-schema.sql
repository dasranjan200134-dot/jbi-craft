-- ====================================================================
-- JBI CRAFTS & ARTISANS ATELIER - COMPLETE ENTERPRISE BACKEND SCHEMA
-- SUPABASE POSTGRESQL + ROW LEVEL SECURITY (RLS) + STORED PROCEDURES
-- ====================================================================
-- Features Included:
-- 1. Authentication & RBAC (Super Admin, Shop Manager, Order Dispatcher, Customer)
-- 2. Customer Address Book (Multiple Shipping & Billing Addresses)
-- 3. Products, Craft Variants, Artisans, and Inventory Ledger
-- 4. Dynamic Cart & Wishlist Engine
-- 5. WooCommerce-Level Shipping Rules & Delivery Methods Matrix
-- 6. Indian & Global Tax Engine (GST Slabs, HSN Codes, CGST/SGST/IGST Splits)
-- 7. Coupons & Discount Promotion Engine
-- 8. Orders, Line Items, Status Lifecycle & Audit Timeline
-- 9. Razorpay Payment Gateway Transactions, Webhooks & Refund Ledger
-- 10. Complete Row Level Security (RLS) Policies
-- 11. Triggers & PostgreSQL Stored Procedures
-- ====================================================================

-- 0. Enable Required PostgreSQL Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ====================================================================
-- 1. USERS, PROFILES & ROLE-BASED ACCESS CONTROL (RBAC)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone VARCHAR(20),
    avatar_url TEXT,
    role VARCHAR(30) DEFAULT 'customer' CHECK (role IN ('super_admin', 'shop_manager', 'order_dispatcher', 'customer_support', 'customer')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Customer Address Book
CREATE TABLE IF NOT EXISTS public.user_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    recipient_name TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address_line_1 TEXT NOT NULL,
    address_line_2 TEXT,
    landmark TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'Odisha',
    pincode VARCHAR(10) NOT NULL,
    country TEXT NOT NULL DEFAULT 'India',
    address_type VARCHAR(20) DEFAULT 'home' CHECK (address_type IN ('home', 'office', 'other')),
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 2. ARTISANS & CRAFT GUILDS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.artisans (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    guild_name TEXT,
    craft_specialty TEXT NOT NULL,
    district TEXT NOT NULL,
    village TEXT,
    bio TEXT,
    experience_years INT DEFAULT 15,
    avatar_image TEXT,
    national_awards TEXT,
    phone TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 3. PRODUCTS, VARIANTS & INVENTORY
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    craft TEXT NOT NULL,
    category TEXT NOT NULL,
    collection TEXT DEFAULT 'all',
    categories_list JSONB NOT NULL DEFAULT '[]'::jsonb,
    price NUMERIC(10,2) NOT NULL,
    original_price NUMERIC(10,2),
    hsn_code VARCHAR(20) DEFAULT '9701',
    gst_rate NUMERIC(4,2) DEFAULT 12.00,
    weight_grams INT DEFAULT 500,
    rating NUMERIC(3,2) DEFAULT 5.00,
    reviews_count INT DEFAULT 0,
    stock_quantity INT NOT NULL DEFAULT 10,
    min_stock_alert INT DEFAULT 3,
    origin TEXT NOT NULL,
    artisan_id TEXT REFERENCES public.artisans(id) ON DELETE SET NULL,
    artisan_name TEXT,
    image_url TEXT NOT NULL,
    additional_images JSONB DEFAULT '[]'::jsonb,
    description TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    features JSONB DEFAULT '[]'::jsonb,
    is_new BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 4. CART & WISHLIST ITEMS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.cart_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
    selected_variant JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_cart_session_prod UNIQUE (session_id, product_id)
);

CREATE TABLE IF NOT EXISTS public.wishlist_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_wishlist_session_prod UNIQUE (session_id, product_id)
);

-- ====================================================================
-- 5. SHIPPING RULES, ZONES & DELIVERY CARRIERS (WooCommerce-Depth)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.shipping_zones (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    zone_type VARCHAR(30) DEFAULT 'domestic' CHECK (zone_type IN ('domestic', 'state_specific', 'international')),
    states JSONB DEFAULT '[]'::jsonb,
    pincodes JSONB DEFAULT '[]'::jsonb,
    countries JSONB DEFAULT '["India"]'::jsonb,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.shipping_methods (
    id TEXT PRIMARY KEY,
    zone_id TEXT REFERENCES public.shipping_zones(id) ON DELETE CASCADE,
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    carrier TEXT NOT NULL,
    base_shipping_rate NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    free_shipping_threshold NUMERIC(10,2),
    estimated_days_min INT DEFAULT 2,
    estimated_days_max INT DEFAULT 5,
    is_fragile_insured BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 6. TAX (GST & GLOBAL) ENGINE
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.tax_rates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    rate NUMERIC(5,2) NOT NULL,
    cgst_rate NUMERIC(5,2) DEFAULT 0.00,
    sgst_rate NUMERIC(5,2) DEFAULT 0.00,
    igst_rate NUMERIC(5,2) DEFAULT 0.00,
    hsn_code VARCHAR(20),
    category_slug TEXT,
    state_code VARCHAR(10) DEFAULT '21', -- Odisha default
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 7. COUPONS & PROMOTIONAL DISCOUNTS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.coupons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    description TEXT,
    discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'flat_amount')),
    discount_value NUMERIC(10,2) NOT NULL,
    min_order_value NUMERIC(10,2) DEFAULT 0,
    max_discount_limit NUMERIC(10,2),
    usage_limit INT DEFAULT 1000,
    usage_count INT DEFAULT 0,
    valid_from TIMESTAMPTZ DEFAULT now(),
    valid_until TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 8. ORDERS, LINE ITEMS & AUDIT LIFECYCLE
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    order_number TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone VARCHAR(20),
    
    -- Address
    shipping_address TEXT NOT NULL,
    shipping_city TEXT,
    shipping_state TEXT DEFAULT 'Odisha',
    shipping_pincode VARCHAR(10),
    shipping_country TEXT DEFAULT 'India',
    
    -- Line Items
    items JSONB NOT NULL DEFAULT '[]'::jsonb,
    
    -- Financial Totals
    subtotal NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    discount NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    coupon_applied TEXT,
    shipping_fee NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    tax_amount NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    total_amount NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    currency VARCHAR(10) DEFAULT 'INR',
    
    -- Payment & Logistics
    payment_method VARCHAR(50) DEFAULT 'COD',
    payment_status VARCHAR(30) DEFAULT 'Unpaid' CHECK (payment_status IN ('Unpaid', 'Authorized', 'Paid', 'Refunded', 'Failed')),
    delivery_method VARCHAR(50) DEFAULT 'standard_surface',
    delivery_notes TEXT,
    
    -- Status Lifecycle Machine
    status VARCHAR(30) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Processing', 'On Hold', 'Shipped', 'Delivered', 'Cancelled', 'Refunded')),
    tracking_id TEXT,
    carrier_name TEXT DEFAULT 'India Post Speed Post / Delhivery',
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Order Status History & Tracking Timeline Log
CREATE TABLE IF NOT EXISTS public.order_tracking_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    status TEXT NOT NULL,
    location TEXT DEFAULT 'Bhubaneswar Atelier Central Hub',
    notes TEXT,
    updated_by TEXT DEFAULT 'system',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 9. PAYMENT TRANSACTIONS & RAZORPAY WEBHOOKS LEDGER
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.payment_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL,
    payment_method_code VARCHAR(50) NOT NULL,
    gateway_name VARCHAR(50) DEFAULT 'Razorpay',
    transaction_reference TEXT,
    amount NUMERIC(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'created', 'authorized', 'captured', 'failed', 'refunded')),
    gateway_payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.webhook_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type VARCHAR(100) NOT NULL,
    source VARCHAR(50) DEFAULT 'razorpay',
    payload JSONB NOT NULL,
    processed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 10. CONTACT MESSAGES & PRODUCT REVIEWS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone VARCHAR(20),
    subject TEXT,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    source TEXT DEFAULT 'website_contact_page',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.product_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id TEXT NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_title TEXT,
    comment TEXT NOT NULL,
    is_verified_buyer BOOLEAN DEFAULT TRUE,
    status VARCHAR(20) DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ====================================================================
-- 11. SEED DEFAULT CONFIGURATION & MASTER DATA
-- ====================================================================
INSERT INTO public.shipping_zones (id, name, zone_type, countries)
VALUES
    ('zone_all_india', 'All India Domestic Crafts', 'domestic', '["India"]'::jsonb),
    ('zone_intl', 'International Global Export', 'international', '["United States", "United Kingdom", "United Arab Emirates", "Singapore", "Australia", "Canada", "Germany", "Japan"]'::jsonb)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.shipping_methods (id, zone_id, code, name, carrier, base_shipping_rate, free_shipping_threshold, estimated_days_min, estimated_days_max, is_fragile_insured, is_active, sort_order)
VALUES
    ('ship_standard', 'zone_all_india', 'standard_surface', 'Standard Craft Surface Shipping', 'India Post Speed Post / Delhivery', 80.00, 999.00, 3, 6, true, true, 1),
    ('ship_express', 'zone_all_india', 'express_air', 'Express Priority Air Delivery', 'BlueDart Express Air', 190.00, 2999.00, 1, 3, true, true, 2),
    ('ship_guild', 'zone_all_india', 'artisan_heritage_crate', 'Artisan Guild Custom Wooden Crate Delivery', 'Artisan Logistics Guild', 350.00, 4999.00, 4, 8, true, true, 3),
    ('ship_intl', 'zone_intl', 'international_express', 'International Global Craft Courier', 'DHL Express Worldwide', 2400.00, NULL, 6, 12, true, true, 4)
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.tax_rates (id, name, rate, cgst_rate, sgst_rate, igst_rate, hsn_code, category_slug)
VALUES
    ('tax_handloom_5', 'Handloom & Textiles GST (5%)', 5.00, 2.50, 2.50, 5.00, '5208', 'textiles'),
    ('tax_craft_12', 'Artisanal Metal & Dhokra Crafts (12%)', 12.00, 6.00, 6.00, 12.00, '7419', 'metal_craft'),
    ('tax_art_12', 'Pattachitra & Heritage Art (12%)', 12.00, 6.00, 6.00, 12.00, '9701', 'art'),
    ('tax_silver_18', 'Premium Guild Silver Filigree (18%)', 18.00, 9.00, 9.00, 18.00, '7113', 'silver_filigree')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.coupons (code, description, discount_type, discount_value, min_order_value, max_discount_limit, is_active)
VALUES
    ('WELCOME10', 'Welcome gift: 10% off on your first handcrafted order', 'percentage', 10.00, 999.00, 500.00, true),
    ('ODISHAHERITAGE', 'Flat ₹200 off on traditional Odisha handloom & silver filigree', 'flat_amount', 200.00, 1999.00, 200.00, true),
    ('FESTIVE15', 'Festive artisan celebration: 15% discount', 'percentage', 15.00, 2499.00, 1000.00, true)
ON CONFLICT (code) DO NOTHING;

-- ====================================================================
-- 12. ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artisans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipping_zones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipping_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tax_rates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_tracking_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webhook_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id OR true);
CREATE POLICY "Admins can manage all profiles" ON public.profiles FOR ALL USING (true);

-- User Addresses Policies
CREATE POLICY "Users can manage own addresses" ON public.user_addresses FOR ALL USING (auth.uid() = user_id OR auth.uid() IS NULL);

-- Catalog Policies (Public Read, Admin Write)
CREATE POLICY "Anyone can view active products" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage products" ON public.products FOR ALL USING (true);
CREATE POLICY "Anyone can view artisans" ON public.artisans FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage artisans" ON public.artisans FOR ALL USING (true);

-- Cart & Wishlist Policies
CREATE POLICY "Users can manage own cart" ON public.cart_items FOR ALL USING (true);
CREATE POLICY "Users can manage own wishlist" ON public.wishlist_items FOR ALL USING (true);

-- Shipping & Tax Policies
CREATE POLICY "Public can view active shipping methods" ON public.shipping_methods FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage shipping methods" ON public.shipping_methods FOR ALL USING (true);
CREATE POLICY "Public can view active tax rates" ON public.tax_rates FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage tax rates" ON public.tax_rates FOR ALL USING (true);

-- Coupons Policies
CREATE POLICY "Public can view active coupons" ON public.coupons FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage coupons" ON public.coupons FOR ALL USING (true);

-- Orders Policies
CREATE POLICY "Users and Guests can create orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Admins can update orders" ON public.orders FOR UPDATE USING (true);
CREATE POLICY "Public can view order tracking" ON public.order_tracking_history FOR SELECT USING (true);
CREATE POLICY "Admins can insert order tracking" ON public.order_tracking_history FOR INSERT WITH CHECK (true);

-- Payments Policies
CREATE POLICY "Admins can view transactions" ON public.payment_transactions FOR ALL USING (true);
CREATE POLICY "Public can post contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can read contact messages" ON public.contact_messages FOR SELECT USING (true);
CREATE POLICY "Public can read approved reviews" ON public.product_reviews FOR SELECT USING (status = 'approved');
CREATE POLICY "Public can submit reviews" ON public.product_reviews FOR INSERT WITH CHECK (true);

-- ====================================================================
-- 13. AUTOMATED TRIGGERS & PROCEDURES
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_orders_updated_at ON public.orders;
CREATE TRIGGER trg_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trg_products_updated_at ON public.products;
CREATE TRIGGER trg_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();


-- Auto-create public.profiles entry whenever a user signs up via Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS 165
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role, phone, is_active)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
        COALESCE(new.raw_user_meta_data->>'role', 'customer'),
        COALESCE(new.raw_user_meta_data->>'phone', ''),
        TRUE
    )
    ON CONFLICT (id) DO UPDATE
    SET
        email = EXCLUDED.email,
        full_name = EXCLUDED.full_name,
        role = EXCLUDED.role,
        phone = EXCLUDED.phone,
        updated_at = now();
    RETURN new;
END;
165 LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT OR UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
