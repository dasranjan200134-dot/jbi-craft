import { inMemoryDb } from './supabase';

export interface ShippingMethodOption {
  id: string;
  code: string;
  name: string;
  carrier: string;
  rate: number;
  isFree: boolean;
  freeThreshold?: number | null;
  minDays: number;
  maxDays: number;
  isFragileInsured: boolean;
  notes?: string;
}

export interface ShippingCalculationParams {
  subtotal: number;
  pincode?: string;
  state?: string;
  country?: string;
  selectedMethodCode?: string;
  totalWeightGrams?: number;
}

export function calculateShippingOptions(params: ShippingCalculationParams): {
  availableMethods: ShippingMethodOption[];
  selectedMethod: ShippingMethodOption;
  shippingFee: number;
  freeShippingQualified: boolean;
  amountNeededForFreeShipping: number;
} {
  const {
    subtotal,
    country = 'India',
    selectedMethodCode = 'standard_surface',
  } = params;

  const isInternational = country.trim().toLowerCase() !== 'india';

  let methods: ShippingMethodOption[] = [];

  if (isInternational) {
    methods = [
      {
        id: 'ship_intl',
        code: 'international_express',
        name: 'International Global Craft Courier',
        carrier: 'DHL Express Worldwide',
        rate: 2400.0,
        isFree: false,
        freeThreshold: null,
        minDays: 6,
        maxDays: 12,
        isFragileInsured: true,
        notes: 'Doorstep tracked global delivery with customs clearance assistance.',
      },
    ];
  } else {
    // Domestic India shipping rules
    methods = [
      {
        id: 'ship_standard',
        code: 'standard_surface',
        name: 'Standard Craft Surface Shipping',
        carrier: 'India Post Speed Post / Delhivery',
        rate: subtotal >= 999 ? 0.0 : 80.0,
        isFree: subtotal >= 999,
        freeThreshold: 999.0,
        minDays: 3,
        maxDays: 6,
        isFragileInsured: true,
        notes: 'Eco-friendly ground transport across India. Free above ₹999.',
      },
      {
        id: 'ship_express',
        code: 'express_air',
        name: 'Express Priority Air Delivery',
        carrier: 'BlueDart Express Air',
        rate: subtotal >= 2999 ? 0.0 : 190.0,
        isFree: subtotal >= 2999,
        freeThreshold: 2999.0,
        minDays: 1,
        maxDays: 3,
        isFragileInsured: true,
        notes: 'Direct air-cargo priority express with dedicated dispatch handling.',
      },
      {
        id: 'ship_guild',
        code: 'artisan_heritage_crate',
        name: 'Artisan Guild Custom Wooden Crate Delivery',
        carrier: 'Artisan Logistics Guild',
        rate: subtotal >= 4999 ? 0.0 : 350.0,
        isFree: subtotal >= 4999,
        freeThreshold: 4999.0,
        minDays: 4,
        maxDays: 8,
        isFragileInsured: true,
        notes: 'Specialized shock-proof wooden framing for fragile Dokra & Stone sculptures.',
      },
    ];
  }

  // Find chosen method or fallback to first available
  const selected = methods.find((m) => m.code === selectedMethodCode) || methods[0];
  const fee = selected.rate;
  const isFreeQual = selected.isFree;
  const standardThreshold = 999.0;
  const diffNeeded = subtotal < standardThreshold ? standardThreshold - subtotal : 0;

  return {
    availableMethods: methods,
    selectedMethod: selected,
    shippingFee: fee,
    freeShippingQualified: isFreeQual,
    amountNeededForFreeShipping: diffNeeded,
  };
}
