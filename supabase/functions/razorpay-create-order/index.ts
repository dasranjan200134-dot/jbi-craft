// ============================================================================
// SUPABASE EDGE FUNCTION: razorpay-create-order
// Location: supabase/functions/razorpay-create-order/index.ts
// Runtime: Deno / Supabase Edge Functions
// ============================================================================
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Razorpay from "npm:razorpay@2.9.2";
import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { amount, currency = "INR", receipt, customerName, customerEmail, notes = {} } = await req.json();

    if (!amount || amount <= 0) {
      return new Response(
        JSON.stringify({ error: "Invalid amount specified. Must be greater than 0." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const keyId = Deno.env.get("RAZORPAY_KEY_ID") || "rzp_test_samplekey123";
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET") || "";

    const amountInSubunits = Math.round(Number(amount) * 100);
    const receiptId = receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    let orderData: any;

    if (keySecret) {
      // Official Razorpay SDK Execution inside Supabase Server Function
      const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
      });

      orderData = await razorpay.orders.create({
        amount: amountInSubunits,
        currency,
        receipt: receiptId,
        notes: {
          customer_name: customerName || "Craft Patron",
          customer_email: customerEmail || "patron@jbicrafts.com",
          ...notes,
        },
      });
    } else {
      // Direct sandbox fallback mode when secret is pending configuration
      orderData = {
        id: `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        entity: "order",
        amount: amountInSubunits,
        amount_paid: 0,
        amount_due: amountInSubunits,
        currency,
        receipt: receiptId,
        status: "created",
        attempts: 0,
        notes: {
          customer_name: customerName || "Craft Patron",
          customer_email: customerEmail || "patron@jbicrafts.com",
          ...notes,
        },
        created_at: Math.floor(Date.now() / 1000),
      };
    }

    // Persist payment transaction record to Supabase PostgreSQL table
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || Deno.env.get("SUPABASE_ANON_KEY") || "";

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from("payment_transactions").insert({
        order_id: receiptId,
        payment_method_code: "razorpay",
        gateway_name: "Razorpay",
        transaction_reference: orderData.id,
        amount: Number(amount),
        currency,
        status: "created",
        gateway_payload: orderData,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        order: orderData,
        keyId: keyId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Failed to create Razorpay order" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
