export interface TaxCalculationItem {
  id: string;
  title: string;
  category?: string;
  craft?: string;
  price: number;
  quantity: number;
}

export interface TaxBreakdown {
  taxableAmount: number;
  totalTax: number;
  isInterState: boolean;
  isExport: boolean;
  cgst: number;
  sgst: number;
  igst: number;
  effectiveRate: number;
  gstin: string;
  itemsBreakdown: Array<{
    itemId: string;
    itemTitle: string;
    hsnCode: string;
    rate: number;
    taxAmount: number;
  }>;
}

// Default Merchant State is Odisha (GST State Code: 21)
const MERCHANT_STATE = 'ODISHA';
const MERCHANT_GSTIN = '21AAACJ1234F1Z8';

export function getHsnCodeAndRate(category?: string, craft?: string): { hsn: string; rate: number } {
  const cat = (category || '').toLowerCase();
  const crf = (craft || '').toLowerCase();

  if (cat.includes('textile') || cat.includes('handloom') || cat.includes('saree') || crf.includes('sambalpuri') || crf.includes('kotpad')) {
    return { hsn: '5208', rate: 5.0 }; // 5% GST for Handloom & Khadi / Silk
  }
  if (cat.includes('silver') || cat.includes('filigree') || cat.includes('tarakasi') || crf.includes('filigree')) {
    return { hsn: '7113', rate: 18.0 }; // 18% for Precious Silver Artware
  }
  if (cat.includes('art') || cat.includes('painting') || crf.includes('pattachitra') || crf.includes('talapatra')) {
    return { hsn: '9701', rate: 12.0 }; // 12% for Original Paintings & Engravings
  }
  if (cat.includes('metal') || cat.includes('dhokra') || cat.includes('dokra') || cat.includes('bell metal')) {
    return { hsn: '7419', rate: 12.0 }; // 12% for Brass / Bell Metal Handicrafts
  }

  // Standard craft rate
  return { hsn: '9703', rate: 12.0 };
}

export function calculateOrderTaxes(params: {
  items: TaxCalculationItem[];
  shippingAddressState?: string;
  shippingCountry?: string;
  discountAmount?: number;
}): TaxBreakdown {
  const { items, shippingAddressState = 'Odisha', shippingCountry = 'India', discountAmount = 0 } = params;

  const isExport = shippingCountry.trim().toLowerCase() !== 'india';
  const customerState = (shippingAddressState || '').trim().toUpperCase();
  const isInterState = !isExport && (customerState !== MERCHANT_STATE && customerState !== 'ORISSA' && customerState !== '21');

  let subtotal = 0;
  items.forEach((item) => {
    subtotal += Number(item.price) * Number(item.quantity);
  });

  const netTaxable = Math.max(0, subtotal - discountAmount);

  if (isExport) {
    // 0% Zero-Rated Export with Bond / LUT compliance
    return {
      taxableAmount: netTaxable,
      totalTax: 0.0,
      isInterState: false,
      isExport: true,
      cgst: 0.0,
      sgst: 0.0,
      igst: 0.0,
      effectiveRate: 0.0,
      gstin: MERCHANT_GSTIN,
      itemsBreakdown: items.map((i) => ({
        itemId: i.id,
        itemTitle: i.title,
        hsnCode: getHsnCodeAndRate(i.category, i.craft).hsn,
        rate: 0,
        taxAmount: 0,
      })),
    };
  }

  // Calculate proportional weighted taxes across items
  let totalCalculatedTax = 0;
  const itemsBreakdown = items.map((item) => {
    const itemSub = Number(item.price) * Number(item.quantity);
    const itemProportion = subtotal > 0 ? itemSub / subtotal : 0;
    const itemNetTaxable = netTaxable * itemProportion;

    const { hsn, rate } = getHsnCodeAndRate(item.category, item.craft);
    const tax = Math.round((itemNetTaxable * rate) / 100 * 100) / 100;
    totalCalculatedTax += tax;

    return {
      itemId: item.id,
      itemTitle: item.title,
      hsnCode: hsn,
      rate: rate,
      taxAmount: tax,
    };
  });

  totalCalculatedTax = Math.round(totalCalculatedTax * 100) / 100;
  const effectiveRate = netTaxable > 0 ? Math.round((totalCalculatedTax / netTaxable) * 1000) / 10 : 12.0;

  if (isInterState) {
    return {
      taxableAmount: netTaxable,
      totalTax: totalCalculatedTax,
      isInterState: true,
      isExport: false,
      cgst: 0.0,
      sgst: 0.0,
      igst: totalCalculatedTax,
      effectiveRate: effectiveRate,
      gstin: MERCHANT_GSTIN,
      itemsBreakdown,
    };
  } else {
    // Intra-State Odisha: Split equally into CGST and SGST
    const halfTax = Math.round((totalCalculatedTax / 2) * 100) / 100;
    return {
      taxableAmount: netTaxable,
      totalTax: totalCalculatedTax,
      isInterState: false,
      isExport: false,
      cgst: halfTax,
      sgst: totalCalculatedTax - halfTax,
      igst: 0.0,
      effectiveRate: effectiveRate,
      gstin: MERCHANT_GSTIN,
      itemsBreakdown,
    };
  }
}
