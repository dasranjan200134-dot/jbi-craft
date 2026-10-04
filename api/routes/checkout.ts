import { Router, Request, Response } from 'express';
import { calculateOrderTaxes } from '../services/taxEngine';
import { calculateShippingOptions } from '../services/shippingEngine';
import { validateAndApplyCoupon } from '../services/couponEngine';
import { getSupabaseAdmin, inMemoryDb } from '../services/supabase';
import { persistentDb } from '../services/db';

const router = Router();

// 1. POST /api/checkout/calculate
// Comprehensive financial calculation engine (WooCommerce-level precision)
router.post('/calculate', async (req: Request, res: Response) => {
  try {
    const {
      items = [],
      couponCode,
      shippingMethodCode = 'standard_surface',
      shippingState = 'Odisha',
      shippingCountry = 'India',
      shippingPincode,
      userId,
    } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: 'Cart is empty. Please add items to calculate checkout totals.',
      });
    }

    // 1. Compute Base Subtotal
    let subtotal = 0;
    const validatedItems = items.map((item: any) => {
      const price = Number(item.price || 0);
      const qty = Math.max(1, Number(item.quantity || 1));
      const lineTotal = price * qty;
      subtotal += lineTotal;
      return {
        id: item.id || item.productId || `item_${Math.random()}`,
        title: item.title || item.name || 'Artisan Craftwork',
        craft: item.craft || '',
        category: item.category || 'Handicrafts',
        price: price,
        quantity: qty,
        image: item.image || '',
        lineTotal: lineTotal,
      };
    });

    // 2. Validate & Compute Coupon Discount
    let discount = 0;
    let couponResult = null;
    if (couponCode && couponCode.trim()) {
      couponResult = validateAndApplyCoupon(couponCode, subtotal, userId);
      if (couponResult.isValid) {
        discount = couponResult.calculatedDiscount;
      }
    }

    // 3. Compute Dynamic Shipping
    const shippingCalc = calculateShippingOptions({
      subtotal: subtotal - discount,
      pincode: shippingPincode,
      state: shippingState,
      country: shippingCountry,
      selectedMethodCode: shippingMethodCode,
    });

    const shippingFee = shippingCalc.shippingFee;

    // 4. Compute Dynamic GST / Global Taxes
    const taxCalc = calculateOrderTaxes({
      items: validatedItems,
      shippingAddressState: shippingState,
      shippingCountry: shippingCountry,
      discountAmount: discount,
    });

    const taxAmount = taxCalc.totalTax;

    // 5. Final Grand Total
    const grandTotal = Math.round((subtotal - discount + shippingFee + taxAmount) * 100) / 100;

    res.json({
      success: true,
      breakdown: {
        itemCount: validatedItems.reduce((acc, i) => acc + i.quantity, 0),
        subtotal: subtotal,
        discount: discount,
        couponApplied: couponResult?.isValid ? couponResult.couponCode : null,
        couponDetails: couponResult,
        shippingFee: shippingFee,
        shippingMethod: shippingCalc.selectedMethod,
        availableShippingMethods: shippingCalc.availableMethods,
        freeShippingQualified: shippingCalc.freeShippingQualified,
        amountNeededForFreeShipping: shippingCalc.amountNeededForFreeShipping,
        taxAmount: taxAmount,
        taxDetails: taxCalc,
        grandTotal: grandTotal,
        currency: 'INR',
        currencySymbol: '₹',
      },
      items: validatedItems,
    });
  } catch (err: any) {
    console.error('Error calculating checkout totals:', err);
    res.status(500).json({ error: err.message || 'Calculation failed' });
  }
});

// 2. POST /api/checkout/place-order
// Atomically records the completed order in PostgreSQL & In-Memory Store
router.post('/place-order', async (req: Request, res: Response) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      city,
      state = 'Odisha',
      pincode,
      country = 'India',
      items = [],
      subtotal,
      discount = 0,
      couponApplied,
      shippingFee = 0,
      taxAmount = 0,
      totalAmount,
      paymentMethod = 'COD',
      paymentStatus = 'Unpaid',
      deliveryMethod = 'standard_surface',
      deliveryNotes,
      userId,
      transactionId,
    } = req.body;

    if (!customerName || !customerEmail || !shippingAddress) {
      return res.status(400).json({ error: 'Customer Name, Email, and Shipping Address are required' });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in order' });
    }

    const orderId = req.body.id || req.body.orderId || `ord_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
    const orderNumber = req.body.orderNumber || req.body.order_number || `JBI-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
      id: orderId,
      orderNumber: orderNumber,
      order_number: orderNumber,
      userId: userId || null,
      user_id: userId || null,
      customerName: customerName,
      customer_name: customerName,
      customerEmail: customerEmail,
      customer_email: customerEmail,
      customerPhone: customerPhone || '',
      customer_phone: customerPhone || '',
      shippingAddress: shippingAddress,
      shipping_address: shippingAddress,
      city: city || 'Bhubaneswar',
      shipping_city: city || 'Bhubaneswar',
      state: state || 'Odisha',
      shipping_state: state || 'Odisha',
      pincode: pincode || '751001',
      shipping_pincode: pincode || '751001',
      country: country || 'India',
      shipping_country: country || 'India',
      items: items,
      subtotal: Number(subtotal || 0),
      discount: Number(discount || 0),
      couponApplied: couponApplied || null,
      coupon_applied: couponApplied || null,
      shippingFee: Number(shippingFee || 0),
      shipping_fee: Number(shippingFee || 0),
      taxAmount: Number(taxAmount || 0),
      tax_amount: Number(taxAmount || 0),
      totalAmount: Number(totalAmount || 0),
      total_amount: Number(totalAmount || 0),
      paymentMethod: paymentMethod,
      payment_method: paymentMethod,
      paymentStatus: paymentStatus,
      payment_status: paymentStatus,
      deliveryMethod: deliveryMethod,
      delivery_method: deliveryMethod,
      deliveryNotes: deliveryNotes || '',
      status: paymentStatus === 'Paid' ? 'Processing' : 'Pending',
      trackingId: req.body.trackingId || req.body.trackingNumber || `IND${Math.floor(100000000 + Math.random() * 900000000)}IN`,
      tracking_id: req.body.trackingId || req.body.trackingNumber || `IND${Math.floor(100000000 + Math.random() * 900000000)}IN`,
      carrierName: 'India Post Speed Post / Delhivery',
      carrier_name: 'India Post Speed Post / Delhivery',
      createdAt: req.body.createdAt || new Date().toISOString(),
      created_at: req.body.createdAt || new Date().toISOString(),
    };

    // Save to persistent database (deduplicating and updating customer records)
    const savedOrder = await persistentDb.saveOrder(newOrder);

    res.json({
      success: true,
      orderId: savedOrder.id,
      orderNumber: savedOrder.orderNumber,
      order: savedOrder,
      message: 'Order created and persisted successfully!',
    });
  } catch (err: any) {
    console.error('Error placing order:', err);
    res.status(500).json({ error: err.message || 'Failed to place order' });
  }
});

export default router;
