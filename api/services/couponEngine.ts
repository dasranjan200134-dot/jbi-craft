import { inMemoryDb } from './supabase';

export interface CouponValidationResult {
  isValid: boolean;
  couponCode: string;
  discountType: 'percentage' | 'flat_amount';
  discountValue: number;
  calculatedDiscount: number;
  message: string;
  minOrderValue?: number;
}

export function validateAndApplyCoupon(
  code: string,
  subtotal: number,
  userId?: string
): CouponValidationResult {
  const normalizedCode = (code || '').trim().toUpperCase();

  if (!normalizedCode) {
    return {
      isValid: false,
      couponCode: '',
      discountType: 'flat_amount',
      discountValue: 0,
      calculatedDiscount: 0,
      message: 'Please enter a coupon code.',
    };
  }

  const coupon = inMemoryDb.coupons.find(
    (c) => c.code.toUpperCase() === normalizedCode && c.is_active
  );

  if (!coupon) {
    return {
      isValid: false,
      couponCode: normalizedCode,
      discountType: 'flat_amount',
      discountValue: 0,
      calculatedDiscount: 0,
      message: `Coupon code "${normalizedCode}" is invalid or expired.`,
    };
  }

  // Check minimum spend
  if (coupon.min_order_value && subtotal < coupon.min_order_value) {
    return {
      isValid: false,
      couponCode: normalizedCode,
      discountType: coupon.discount_type,
      discountValue: coupon.discount_value,
      calculatedDiscount: 0,
      minOrderValue: coupon.min_order_value,
      message: `Coupon requires a minimum order value of ₹${coupon.min_order_value.toLocaleString('en-IN')}. Add ₹${(coupon.min_order_value - subtotal).toLocaleString('en-IN')} more to qualify!`,
    };
  }

  // Check expiration
  if (coupon.valid_until && new Date(coupon.valid_until) < new Date()) {
    return {
      isValid: false,
      couponCode: normalizedCode,
      discountType: coupon.discount_type,
      discountValue: coupon.discount_value,
      calculatedDiscount: 0,
      message: 'This coupon offer has expired.',
    };
  }

  // Calculate discount
  let discount = 0;
  if (coupon.discount_type === 'percentage') {
    discount = (subtotal * coupon.discount_value) / 100;
    if (coupon.max_discount_limit && discount > coupon.max_discount_limit) {
      discount = coupon.max_discount_limit;
    }
  } else {
    discount = Math.min(coupon.discount_value, subtotal);
  }

  discount = Math.round(discount * 100) / 100;

  return {
    isValid: true,
    couponCode: coupon.code,
    discountType: coupon.discount_type,
    discountValue: coupon.discount_value,
    calculatedDiscount: discount,
    message: `Coupon "${coupon.code}" applied! You saved ₹${discount.toLocaleString('en-IN')}.`,
  };
}
