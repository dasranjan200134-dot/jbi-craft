import { Router, Request, Response } from 'express';
import { createRazorpayOrder, verifyPaymentSignature, verifyWebhookSignature } from '../services/razorpay';
import { getSupabaseAdmin, inMemoryDb } from '../services/supabase';
import { persistentDb } from '../services/db';

const router = Router();

// 1. GET /api/payments/config
// Returns public payment configuration for client checkout (No secret keys exposed)
router.get('/config', (req: Request, res: Response) => {
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_samplekey123';
  res.json({
    success: true,
    razorpay: {
      keyId: keyId,
      currency: 'INR',
      merchantName: 'JBI Craft & Artisans Atelier',
      themeColor: '#7c2d12',
    },
    supportedMethods: [
      { id: 'upi', name: 'Instant UPI / QR Code (GPay, PhonePe, Paytm)', active: true },
      { id: 'cards', name: 'Credit & Debit Cards (Visa, MasterCard, RuPay, Amex)', active: true },
      { id: 'netbanking', name: '50+ Indian Bank Net Banking Portals', active: true },
      { id: 'cod', name: 'Cash on Delivery (COD)', active: true },
      { id: 'bank_transfer', name: 'Direct NEFT/RTGS Artisan Guild Wire', active: true },
    ],
  });
});

// 2. POST /api/payments/razorpay/create-order
// Generates official Razorpay Order ID for customer checkout
router.post('/razorpay/create-order', async (req: Request, res: Response) => {
  try {
    const { amount, currency = 'INR', receipt, notes, customerName, customerEmail } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Valid payment amount is required' });
    }

    const receiptId = receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const orderParams = {
      amount: Number(amount),
      currency: currency,
      receipt: receiptId,
      notes: {
        customer_name: customerName || 'Valued Patron',
        customer_email: customerEmail || 'patron@jbicraft.com',
        source: 'JBI Craft Storefront',
        ...notes,
      },
    };

    const razorpayOrder = await createRazorpayOrder(orderParams);

    // Save initial transaction state
    const transactionRecord = {
      id: `txn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      order_id: receiptId,
      gateway_name: 'Razorpay',
      gateway_order_id: razorpayOrder.id,
      amount: Number(amount),
      currency: currency,
      status: 'created',
      customer_email: customerEmail,
      created_at: new Date().toISOString(),
    };

    inMemoryDb.transactions.unshift(transactionRecord);

    // Persist to Supabase if table exists
    try {
      const supabase = getSupabaseAdmin();
      await supabase.from('payment_transactions').insert({
        order_id: receiptId,
        payment_method_code: 'RAZORPAY',
        gateway_name: 'Razorpay',
        transaction_reference: razorpayOrder.id,
        amount: Number(amount),
        currency: currency,
        status: 'pending',
        gateway_payload: razorpayOrder,
      });
    } catch (e) {
      // Non-blocking fallback
    }

    res.json({
      success: true,
      order: razorpayOrder,
      keyId: razorpayOrder.key_id,
    });
  } catch (err: any) {
    console.error('Error creating Razorpay order:', err);
    res.status(500).json({ error: err.message || 'Failed to initialize payment gateway' });
  }
});

// 3. POST /api/payments/razorpay/verify
// Cryptographic payment verification using HMAC-SHA256
router.post('/razorpay/verify', async (req: Request, res: Response) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_id,
      customer_email,
      amount,
    } = req.body;

    if (!razorpay_payment_id) {
      return res.status(400).json({ error: 'Missing payment ID from gateway' });
    }

    const verification = verifyPaymentSignature({
      razorpay_order_id: razorpay_order_id || '',
      razorpay_payment_id: razorpay_payment_id || '',
      razorpay_signature: razorpay_signature || '',
    });

    if (!verification.verified) {
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed: Invalid cryptographic signature',
      });
    }

    // Update transaction and order records
    const txnIndex = inMemoryDb.transactions.findIndex(
      (t) => t.gateway_order_id === razorpay_order_id || t.order_id === order_id
    );

    const updatedTxn = {
      id: `txn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      order_id: order_id || 'STORE-ORDER',
      gateway_name: 'Razorpay',
      gateway_order_id: razorpay_order_id,
      gateway_payment_id: razorpay_payment_id,
      amount: Number(amount || 0),
      status: 'captured',
      customer_email: customer_email,
      verified_at: new Date().toISOString(),
    };

    if (txnIndex >= 0) {
      inMemoryDb.transactions[txnIndex] = { ...inMemoryDb.transactions[txnIndex], ...updatedTxn };
    } else {
      inMemoryDb.transactions.unshift(updatedTxn);
    }

    // Update persistent database and memory store
    if (order_id) {
      persistentDb.updateOrderStatus(order_id, 'Processing');
    }

    // Update in Supabase
    try {
      const supabase = getSupabaseAdmin();
      if (order_id) {
        await supabase
          .from('orders')
          .update({
            payment_status: 'Paid',
            status: 'Processing',
          })
          .eq('id', order_id);

        await supabase.from('payment_transactions').insert({
          order_id: order_id,
          payment_method_code: 'RAZORPAY',
          gateway_name: 'Razorpay',
          transaction_reference: razorpay_payment_id,
          amount: Number(amount || 0),
          status: 'captured',
          gateway_payload: { razorpay_order_id, razorpay_payment_id, razorpay_signature },
        });

        await supabase.from('order_tracking_history').insert({
          order_id: order_id,
          status: 'Payment Captured (Razorpay)',
          notes: `Payment verified ID: ${razorpay_payment_id}`,
          updated_by: 'Razorpay Webhook/Client Verification',
        });
      }
    } catch (e) {
      // Non-blocking
    }

    res.json({
      success: true,
      verified: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      message: 'Payment verified and captured successfully!',
    });
  } catch (err: any) {
    console.error('Error verifying payment:', err);
    res.status(500).json({ error: err.message || 'Verification failed' });
  }
});

// 4. POST /api/payments/razorpay/webhook
// Handles server-to-server asynchronous webhooks from Razorpay
router.post('/razorpay/webhook', async (req: Request, res: Response) => {
  try {
    const signature = req.headers['x-razorpay-signature'] as string;
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '';

    // Verify webhook signature if secret configured
    if (webhookSecret && signature) {
      const isValid = verifyWebhookSignature(JSON.stringify(req.body), signature, webhookSecret);
      if (!isValid) {
        return res.status(400).json({ error: 'Invalid webhook signature' });
      }
    }

    const event = req.body.event;
    const payload = req.body.payload;

    console.log(`Received Razorpay Webhook Event: ${event}`);

    if (event === 'payment.captured' || event === 'order.paid') {
      const paymentEntity = payload?.payment?.entity;
      const paymentId = paymentEntity?.id;
      const orderId = paymentEntity?.order_id;
      const amount = (paymentEntity?.amount || 0) / 100;
      const email = paymentEntity?.email;

      // Update in persistent database
      const receipt = paymentEntity?.notes?.receipt || paymentEntity?.description;
      if (receipt) {
        persistentDb.updateOrderStatus(receipt, 'Processing');
      }

      // Update in database
      try {
        const supabase = getSupabaseAdmin();

        if (receipt) {
          await supabase
            .from('orders')
            .update({ payment_status: 'Paid', status: 'Processing' })
            .or(`id.eq.${receipt},order_number.eq.${receipt}`);
        }

        await supabase.from('payment_transactions').insert({
          order_id: receipt || orderId || 'WEBHOOK',
          payment_method_code: 'RAZORPAY_WEBHOOK',
          gateway_name: 'Razorpay',
          transaction_reference: paymentId,
          amount: amount,
          status: 'captured',
          gateway_payload: payload,
        });
      } catch (e) {
        console.warn('Webhook Supabase sync notice:', e);
      }
    }

    res.json({ status: 'ok', received: true });
  } catch (err: any) {
    console.error('Razorpay webhook processing error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
