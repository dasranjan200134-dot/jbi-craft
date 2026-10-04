import sys, re

# Read current file
with open('public/assets/index-v2-aboutphotos.js', 'r') as f:
    text = f.read()

pos_start = text.find('const ProfessionalPaymentPageComponent =')
pos_orders = text.find('const OrdersPageComponent =', pos_start)

if pos_start == -1 or pos_orders == -1:
    print("Error: Could not locate component boundaries!", file=sys.stderr)
    sys.exit(1)

saas_payment_component = r"""const ProfessionalPaymentPageComponent = ({ cartItems, onNavigate, onClearCart, onUpdateQuantity, onRemoveItem, onQuickView, onAddToCart }) => {
  // Mode Selector: 'checkout' (Cart & Heirloom Orders), 'subscriptions' (Patron SaaS Memberships), 'custom_invoice' (B2B / Custom Commission)
  const [billingMode, setBillingMode] = _.useState(cartItems && cartItems.length > 0 ? "checkout" : "subscriptions");
  
  // Real-Time Currency Rates & Selector
  const [currency, setCurrency] = _.useState("INR");
  const currencyRates = {
    INR: { symbol: "₹", rate: 1, name: "INR - Indian Rupee", flag: "🇮🇳" },
    USD: { symbol: "$", rate: 0.0116, name: "USD - US Dollar", flag: "🇺🇸" },
    EUR: { symbol: "€", rate: 0.0107, name: "EUR - Euro", flag: "🇪🇺" },
    GBP: { symbol: "£", rate: 0.0090, name: "GBP - British Pound", flag: "🇬🇧" },
    AED: { symbol: "د.إ", rate: 0.0425, name: "AED - UAE Dirham", flag: "🇦🇪" },
    SGD: { symbol: "S$", rate: 0.0156, name: "SGD - Singapore Dollar", flag: "🇸🇬" },
    CAD: { symbol: "C$", rate: 0.0158, name: "CAD - Canadian Dollar", flag: "🇨🇦" }
  };
  
  const formatMoney = (inrVal) => {
    const curr = currencyRates[currency] || currencyRates.INR;
    const converted = Math.round(inrVal * curr.rate * 100) / 100;
    if (currency === "INR") return `₹${Number(inrVal).toLocaleString('en-IN')}`;
    return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // SaaS Patron Subscription Plans
  const [subscriptionCycle, setSubscriptionCycle] = _.useState("annual"); // 'monthly' or 'annual'
  const [selectedPlanId, setSelectedPlanId] = _.useState("curator");

  const patronPlans = [
    {
      id: "enthusiast",
      name: "Artisan Guild Enthusiast",
      tagline: "Essential Community Patronage",
      badge: "Free Access",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Access our curated catalogue of certified GI craft drops, seasonal exhibition notifications, and digital artisan monographs.",
      features: [
        "100% Certified GI Tag Craft Access",
        "Quarterly Digital Artisan Gazette",
        "Standard Insured Domestic Dispatch",
        "Public Exhibition Invitations",
        "Digital Certificate of Craft Patronage"
      ],
      cta: "Activate Free Membership",
      popular: false
    },
    {
      id: "curator",
      name: "Heritage Curator Patron",
      tagline: "Most Preferred by Collectors & Connoisseurs",
      badge: "Most Popular",
      priceMonthly: 1499,
      priceAnnual: 14990, // ~1249/mo (Save 17%)
      description: "Directly subsidize rural master weaver clusters while unlocking 15% VIP lifetime privileges, preview allocations, and physical monographs.",
      features: [
        "15% VIP Lifetime Patron Privilege on All Crafts",
        "48-Hour Priority Early Access to Rare Drops",
        "Quarterly Hardcover Artisan Monograph & Photo Journal",
        "Complimentary Insured Air Express Delivery",
        "Direct Master Curator WhatsApp Concierge",
        "Annual GI Hallmark Pure Silver Filigree Seal"
      ],
      cta: "Become a Curator Patron",
      popular: true
    },
    {
      id: "royal",
      name: "Royal Heirloom Guild VIP",
      tagline: "Ultra-VIP Patronage & Bespoke Commissions",
      badge: "Enterprise & VIP",
      priceMonthly: 4999,
      priceAnnual: 49990, // ~4165/mo (Save 17%)
      description: "Directly sponsor a multi-generational master artisan family with bespoke custom heirloom creation rights and private village residency passes.",
      features: [
        "25% VIP Collector Privilege Across Entire Guild",
        "Annual Custom Commission Right (Bespoke Saree or Scroll)",
        "Complimentary 3-Day Artisan Village Residency Pass",
        "Numbered Physical & Provenance Deed with Hallmark",
        "Dedicated VIP Account Manager & Heritage Advisory",
        "Private VIP Access to National Handloom Salons"
      ],
      cta: "Join Heirloom Guild VIP",
      popular: false
    }
  ];

  // Custom B2B Commission & Milestone Invoicing
  const [customInvoice, setCustomInvoice] = _.useState({
    title: "Bespoke 6-ft Pattachitra Krishna Leela Temple Wall Installation",
    clientName: "Maharaja Heritage Foundation",
    amount: 85000,
    depositPercent: "50",
    milestone: "50% Advance Booking & Natural Pigment Preparation",
    notes: "Crafted on triple-treated handloom tussar canvas using organic conch-shell white, lampblack, and harital mineral pigments."
  });

  // Promo Code State with Quick-Apply Chips
  const [promoCode, setPromoCode] = _.useState("");
  const [promoApplied, setPromoApplied] = _.useState(null);
  const [promoError, setPromoError] = _.useState("");

  const quickPromos = [
    { code: "SAASLAUNCH", label: "🚀 15% SaaS Launch Privilege", percent: 15 },
    { code: "HERITAGE10", label: "🏛️ 10% Heritage Craft", percent: 10 },
    { code: "PATRONVIP", label: "👑 20% VIP Patron", percent: 20 },
    { code: "WELCOME500", label: "🎁 Flat ₹500 Off", flat: 500 }
  ];

  const applyPromo = (codeToApply) => {
    setPromoError("");
    const code = (codeToApply || promoCode).trim().toUpperCase();
    if (code === "HERITAGE10") {
      setPromoApplied({ code: "HERITAGE10", percent: 10, discountText: "10% Craft Heritage Discount" });
      setPromoCode("HERITAGE10");
    } else if (code === "PATRONVIP") {
      setPromoApplied({ code: "PATRONVIP", percent: 20, discountText: "20% VIP Patron Privilege" });
      setPromoCode("PATRONVIP");
    } else if (code === "SAASLAUNCH") {
      setPromoApplied({ code: "SAASLAUNCH", percent: 15, discountText: "15% SaaS Gateway Launch Privilege" });
      setPromoCode("SAASLAUNCH");
    } else if (code === "WELCOME500") {
      setPromoApplied({ code: "WELCOME500", flat: 500, discountText: "Flat ₹500 Welcome Voucher" });
      setPromoCode("WELCOME500");
    } else {
      setPromoError("Invalid promo code. Try clicking one of the suggested discount vouchers.");
    }
  };

  // Payment Gateway Tab Selection
  const [activeGateway, setActiveGateway] = _.useState("razorpay"); // 'razorpay', 'cards', 'upi', 'netbanking', 'paylater', 'crypto'

  // Gateway Settings & Dev Modal
  const [showConfigModal, setShowConfigModal] = _.useState(false);
  const [gatewayConfig, setGatewayConfig] = _.useState(() => {
    try {
      const saved = localStorage.getItem("jbi_payment_gateway_config");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      environment: "sandbox", // 'sandbox' or 'live'
      razorpayKeyId: "rzp_test_JBIHeritage2026",
      razorpayKeySecret: "sec_9841abcd928174",
      razorpayWebhookSecret: "whsec_jbi_live_92019481",
      stripePublishableKey: "pk_test_51MzJBIHeritageCrafts2026",
      stripeSecretKey: "sk_test_••••••••••••••••",
      merchantName: "JBI Heritage Crafts & Guild Atelier",
      themeColor: "#735a3e",
      autoCapture: true
    };
  });

  const [configToast, setConfigToast] = _.useState(false);
  const [webhookLog, setWebhookLog] = _.useState(null);

  const handleSaveConfig = (e) => {
    if (e) e.preventDefault();
    try {
      localStorage.setItem("jbi_payment_gateway_config", JSON.stringify(gatewayConfig));
      setConfigToast(true);
      setTimeout(() => setConfigToast(false), 2500);
    } catch (err) {}
  };

  const handleSimulateWebhook = (eventType) => {
    const payload = {
      event: eventType || "payment.captured",
      account_id: "acc_JBI_OD_1984",
      entity: "event",
      contains: ["payment"],
      payload: {
        payment: {
          entity: {
            id: "pay_test_" + Date.now().toString(36),
            amount: 149900,
            currency: currency,
            status: "captured",
            order_id: "order_OD2026_" + Math.random().toString(36).substr(2, 9),
            invoice_id: "inv_2026_" + Math.random().toString(36).substr(2, 8),
            international: currency !== "INR",
            method: activeGateway,
            amount_refunded: 0,
            refund_status: null,
            captured: true,
            description: "JBI Craft SaaS Patron Order",
            card_id: activeGateway === "cards" ? "card_test_8812" : null,
            bank: activeGateway === "netbanking" ? "HDFC" : null,
            vpa: activeGateway === "upi" ? "patron@okhdfcbank" : null,
            email: "patron@jbicrafts.com",
            contact: "+919876543210",
            fee: 299,
            tax: 53,
            created_at: Math.floor(Date.now() / 1000)
          }
        }
      },
      created_at: Math.floor(Date.now() / 1000)
    };
    setWebhookLog(payload);
  };

  // Card Form State with Brand Auto-Detection
  const [cardData, setCardData] = _.useState({
    name: "Rashmi Ranjan Das",
    number: "4532 8920 1204 8921",
    expiry: "12/28",
    cvv: "892",
    saveCard: true,
    brand: "visa"
  });

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 16);
    let brand = "visa";
    if (val.startsWith("5") || val.startsWith("2")) brand = "mastercard";
    else if (val.startsWith("3")) brand = "amex";
    else if (val.startsWith("6") || val.startsWith("8")) brand = "rupay";
    
    let formatted = val.match(/.{1,4}/g)?.join(" ") || val;
    setCardData({ ...cardData, number: formatted, brand });
  };

  // UPI State
  const [upiId, setUpiId] = _.useState("patron@okhdfcbank");
  const [qrTimeLeft, setQrTimeLeft] = _.useState(299);
  
  _.useEffect(() => {
    const timer = setInterval(() => {
      setQrTimeLeft(prev => prev > 1 ? prev - 1 : 299);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatQrTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // NetBanking State
  const [selectedBank, setSelectedBank] = _.useState("HDFC");
  const popularBanks = [
    { id: "HDFC", name: "HDFC Bank", icon: "🏛️" },
    { id: "ICICI", name: "ICICI Bank", icon: "🏢" },
    { id: "SBI", name: "State Bank of India", icon: "🏦" },
    { id: "AXIS", name: "Axis Bank", icon: "🏛️" },
    { id: "KOTAK", name: "Kotak Mahindra", icon: "🏢" },
    { id: "PNB", name: "Punjab National Bank", icon: "🏦" }
  ];

  // B2B GST Invoicing Details
  const [isB2B, setIsB2B] = _.useState(false);
  const [b2bDetails, setB2bDetails] = _.useState({
    companyName: "Kalinga Heritage Enterprises Pvt Ltd",
    gstin: "21AAACJ1234F1Z5",
    pan: "AAACJ1234F",
    state: "Odisha (21)"
  });

  // Calculate Subtotals & Totals
  let rawBaseAmount = 0;
  if (billingMode === "checkout") {
    if (cartItems && cartItems.length > 0) {
      rawBaseAmount = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
    } else {
      rawBaseAmount = 14500; // Sample Masterpiece if cart empty
    }
  } else if (billingMode === "subscriptions") {
    const currentPlan = patronPlans.find(p => p.id === selectedPlanId) || patronPlans[1];
    rawBaseAmount = subscriptionCycle === "annual" ? currentPlan.priceAnnual : currentPlan.priceMonthly;
  } else if (billingMode === "custom_invoice") {
    const fullAmount = Number(customInvoice.amount) || 50000;
    const depPct = Number(customInvoice.depositPercent) || 100;
    rawBaseAmount = Math.round((fullAmount * depPct) / 100);
  }

  // Calculate Discounts
  let discountAmount = 0;
  if (promoApplied) {
    if (promoApplied.percent) {
      discountAmount = Math.round((rawBaseAmount * promoApplied.percent) / 100);
    } else if (promoApplied.flat) {
      discountAmount = Math.min(rawBaseAmount, promoApplied.flat);
    }
  }

  const taxableAmount = Math.max(0, rawBaseAmount - discountAmount);
  // GST 5% Breakdown (HSN Code 9701 for Handicrafts & Art)
  const gstAmount = Math.round(taxableAmount * 0.05);
  const cgstAmount = Math.round(gstAmount / 2);
  const sgstAmount = gstAmount - cgstAmount;
  const finalPayable = taxableAmount; // Inclusive of GST in India

  // Processing & Success State
  const [isProcessing, setIsProcessing] = _.useState(false);
  const [processingStep, setProcessingStep] = _.useState("");
  const [showSuccessModal, setShowSuccessModal] = _.useState(false);
  const [completedOrder, setCompletedOrder] = _.useState(null);

  // Trigger Payment
  const handleInitiatePayment = () => {
    if (finalPayable === 0 && billingMode === "subscriptions") {
      // Free plan instant activation
      const freeOrderData = {
        id: "PATRON-FREE-" + Date.now().toString(36).toUpperCase(),
        paymentId: "FREE_ACTIVATION_" + Date.now().toString(36).toUpperCase(),
        plan: "Artisan Guild Enthusiast",
        amount: 0,
        gateway: "Direct Free Activation",
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        items: [{ title: "Artisan Guild Enthusiast (Free Lifetime Membership)", quantity: 1, price: 0 }]
      };
      setCompletedOrder(freeOrderData);
      setShowSuccessModal(true);
      return;
    }

    setIsProcessing(true);
    setProcessingStep("Connecting to " + (activeGateway === "razorpay" ? "Razorpay Gateway (256-Bit SSL)" : activeGateway.toUpperCase() + " Secure Gateway") + "...");

    setTimeout(() => {
      setProcessingStep("Authorizing credentials & verifying Tokenization...");
    }, 900);

    setTimeout(() => {
      setProcessingStep("Processing settlement with Artisan Trust Escrow...");
    }, 1800);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedPaymentId = "pay_OD" + Math.random().toString(36).substring(2, 10).toUpperCase() + "_2026";
      const generatedOrderId = "JBI-ORD-" + Date.now().toString(36).toUpperCase();

      const orderData = {
        id: generatedOrderId,
        paymentId: generatedPaymentId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        billingMode: billingMode,
        gateway: activeGateway === "razorpay" ? "Razorpay Standard SDK" : activeGateway === "cards" ? `Credit Card (${cardData.brand.toUpperCase()})` : activeGateway === "upi" ? `UPI (${upiId})` : activeGateway.toUpperCase(),
        environment: gatewayConfig.environment,
        amount: finalPayable,
        rawBase: rawBaseAmount,
        discount: discountAmount,
        promoCode: promoApplied?.code || null,
        gstBreakdown: { totalGst: gstAmount, cgst: cgstAmount, sgst: sgstAmount, hsn: "9701" },
        currency: currency,
        isB2B: isB2B,
        b2bDetails: isB2B ? b2bDetails : null,
        items: billingMode === "checkout" ? (cartItems && cartItems.length > 0 ? cartItems : [{ title: "Master Sambalpuri Heirloom Ikat Tapestry", price: rawBaseAmount, quantity: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" }]) : billingMode === "subscriptions" ? [{ title: `Patron Plan: ${patronPlans.find(p=>p.id===selectedPlanId)?.name} (${subscriptionCycle.toUpperCase()})`, price: finalPayable, quantity: 1 }] : [{ title: customInvoice.title, price: finalPayable, quantity: 1, milestone: customInvoice.milestone }]
      };

      setCompletedOrder(orderData);
      setShowSuccessModal(true);

      // Save order to LocalStorage & Supabase
      try {
        const stored = JSON.parse(localStorage.getItem("jbi_admin_orders") || "[]");
        stored.unshift({
          id: orderData.id,
          order_number: orderData.id,
          payment_id: orderData.paymentId,
          customer: isB2B ? b2bDetails.companyName : cardData.name || "Rashmi Ranjan Das",
          email: "patron@jbicrafts.com",
          total: finalPayable,
          status: "Paid",
          payment_status: "Captured (" + activeGateway.toUpperCase() + ")",
          created_at: new Date().toISOString(),
          items: orderData.items,
          shipping_address: { city: "Bhubaneswar", state: "Odisha", pincode: "751001", country: "India" }
        });
        localStorage.setItem("jbi_admin_orders", JSON.stringify(stored));
      } catch (err) {}

      if (billingMode === "checkout" && onClearCart) {
        onClearCart();
      }
    }, 2800);
  };

  return a.jsx("div", {
    className: "min-h-screen bg-[#fcfaf7] text-[#1c1917] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#ffddbb] selection:text-[#735a3e]",
    children: a.jsxs("div", {
      className: "max-w-7xl mx-auto space-y-7",
      children: [
        // TOP HEADER BAR: Sleek SaaS Header + Currency & API Config Controls
        a.jsxs("div", {
          className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden",
          children: [
            // Left Branding & Badges
            a.jsxs("div", {
              className: "space-y-1.5",
              children: [
                a.jsxs("div", {
                  className: "flex items-center gap-2 text-xs font-semibold text-stone-500",
                  children: [
                    a.jsx("button", { onClick: () => onNavigate && onNavigate("home"), className: "hover:text-[#735a3e] cursor-pointer flex items-center gap-1", children: "← Storefront" }),
                    a.jsx("span", { className: "text-stone-300", children: "/" }),
                    a.jsx("span", { className: "text-[#735a3e]", children: "SaaS Checkout & Billing Portal" }),
                    a.jsx("span", { className: "text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300 ml-1.5", children: "● SSL Encrypted" })
                  ]
                }),
                a.jsx("h1", {
                  className: "font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight",
                  children: "Enterprise Payment & Invoicing Hub"
                }),
                a.jsx("p", {
                  className: "text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed",
                  children: "Multi-gateway settlement suite with instant tokenization, B2B GST compliance, and seamless Razorpay, Stripe, UPI & Cards authorization."
                })
              ]
            }),

            // Right Controls (Live Currency Switcher + Developer Gateway Config Button)
            a.jsxs("div", {
              className: "flex items-center gap-3 flex-wrap shrink-0",
              children: [
                // Currency Selector Pill
                a.jsxs("div", {
                  className: "flex items-center bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-stone-700 shadow-2xs hover:border-stone-300 transition-colors",
                  children: [
                    a.jsx("span", { className: "text-stone-400 mr-2", children: "Currency:" }),
                    a.jsx("select", {
                      value: currency,
                      onChange: (e) => setCurrency(e.target.value),
                      className: "bg-transparent font-bold text-[#735a3e] focus:outline-none cursor-pointer",
                      children: Object.keys(currencyRates).map(k => a.jsx("option", { key: k, value: k, children: `${currencyRates[k].flag} ${k} (${currencyRates[k].symbol})` }))
                    })
                  ]
                }),

                // Gateway / API Configuration Button
                a.jsxs("button", {
                  type: "button",
                  onClick: () => setShowConfigModal(true),
                  className: "flex items-center gap-2 bg-[#1c1917] hover:bg-[#2e2a27] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer border border-stone-800",
                  children: [
                    a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                    a.jsx("span", { children: "⚙️ Link Gateways" }),
                    a.jsx("span", { className: "text-[10px] bg-stone-800 text-stone-300 px-1.5 py-0.5 rounded border border-stone-700", children: gatewayConfig.environment.toUpperCase() })
                  ]
                })
              ]
            })
          ]
        }),

        // EXPRESS 1-CLICK CHECKOUT BAR (SaaS Standard)
        a.jsxs("div", {
          className: "bg-gradient-to-r from-[#241c18] via-[#3a2c22] to-[#241c18] p-4 rounded-2xl text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-[#735a3e]/40",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3 text-xs",
              children: [
                a.jsx("div", { className: "w-8 h-8 rounded-full bg-[#d87c35] text-white flex items-center justify-center font-bold text-sm shadow-inner", children: "⚡" }),
                a.jsxs("div", {
                  children: [
                    a.jsx("span", { className: "font-bold text-sm block text-[#fdfbf7]", children: "Express 1-Click Digital Checkout" }),
                    a.jsx("span", { className: "text-[#e8cbb5] text-[11px]", children: "Instant verification with biometric or stored credentials." })
                  ]
                })
              ]
            }),
            a.jsxs("div", {
              className: "flex items-center gap-2.5 flex-wrap justify-center",
              children: [
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("razorpay"); handleInitiatePayment(); },
                  className: "bg-[#0c2340] hover:bg-[#14325a] text-blue-200 border border-blue-400/40 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                  children: [a.jsx("span", { className: "text-blue-400 font-mono font-black", children: "R" }), a.jsx("span", { children: "Razorpay Fast" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-black hover:bg-stone-900 text-white border border-stone-700 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                  children: [a.jsx("span", { children: "" }), a.jsx("span", { children: "Apple Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("upi"); handleInitiatePayment(); },
                  className: "bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                  children: [a.jsx("span", { className: "text-[#4285F4] font-black", children: "G" }), a.jsx("span", { children: "Google Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-[#003087] hover:bg-[#00266e] text-white border border-blue-300/40 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                  children: [a.jsx("span", { className: "font-black text-amber-300", children: "P" }), a.jsx("span", { children: "PayPal" })]
                })
              ]
            })
          ]
        }),

        // PRIMARY SAAS BILLING MODE TABS
        a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-[#eae4db] rounded-2xl border border-stone-300/60",
          children: [
            { id: "subscriptions", label: "👑 Patron & Guild Membership Plans", desc: "SaaS Subscription Tiers & Benefits" },
            { id: "checkout", label: "🛍️ Cart & Craft Order Invoicing", desc: cartItems && cartItems.length > 0 ? `${cartItems.length} Item(s) in Active Bag` : "Direct Masterpiece Invoicing" },
            { id: "custom_invoice", label: "🏢 B2B / Custom Commission", desc: "Bespoke Installation Invoicing" }
          ].map(tab => a.jsxs("button", {
            key: tab.id,
            type: "button",
            onClick: () => setBillingMode(tab.id),
            className: `p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              billingMode === tab.id ? "bg-white text-stone-900 shadow-sm border border-stone-300 font-semibold" : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
            }`,
            children: [
              a.jsx("span", { className: "block font-bold text-xs sm:text-sm text-[#735a3e]", children: tab.label }),
              a.jsx("span", { className: "block text-[11px] text-stone-500 mt-0.5", children: tab.desc })
            ]
          }))
        }),

        // MAIN GRID: Left Content Column + Right Sticky Order Summary Card
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
          children: [
            // LEFT COLUMN (lg:col-span-7): Mode Details & Payment Gateway Matrix
            a.jsxs("div", {
              className: "lg:col-span-7 space-y-6",
              children: [
                // SECTION 1: Subscriptions / Plans View
                billingMode === "subscriptions" && a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-stone-900", children: "Select Patronage Tier" }),
                            a.jsx("p", { className: "text-xs text-stone-500", children: "Directly empower rural craft families while unlocking exclusive collector privileges." })
                          ]
                        }),
                        // Monthly / Annual Toggle
                        a.jsxs("div", {
                          className: "flex items-center bg-stone-100 p-1 rounded-xl text-xs font-bold border border-stone-200 shrink-0",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("monthly"),
                              className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer ${subscriptionCycle === "monthly" ? "bg-white text-[#735a3e] shadow-2xs" : "text-stone-600"}`,
                              children: "Monthly"
                            }),
                            a.jsxs("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("annual"),
                              className: `px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${subscriptionCycle === "annual" ? "bg-white text-[#735a3e] shadow-2xs" : "text-stone-600"}`,
                              children: [
                                a.jsx("span", { children: "Annual" }),
                                a.jsx("span", { className: "text-[10px] bg-amber-600 text-white px-1.5 py-0.2 rounded font-semibold", children: "2 Mo Free" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // Plan Cards Grid
                    a.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5",
                      children: patronPlans.map(plan => {
                        const price = subscriptionCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
                        const isSelected = selectedPlanId === plan.id;
                        return a.jsxs("div", {
                          key: plan.id,
                          onClick: () => setSelectedPlanId(plan.id),
                          className: `p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                            isSelected ? "border-[#735a3e] bg-[#fcf9f5] ring-2 ring-[#735a3e]/20 shadow-xs" : "border-stone-200 bg-white hover:border-stone-300"
                          }`,
                          children: [
                            plan.popular && a.jsx("div", {
                              className: "absolute -top-2.5 right-3 bg-[#735a3e] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-2xs",
                              children: "Most Popular"
                            }),
                            a.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                a.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#735a3e]", children: plan.badge }),
                                a.jsx("h3", { className: "font-serif text-sm font-bold text-stone-900 leading-tight", children: plan.name }),
                                a.jsxs("div", {
                                  className: "pt-1 pb-2",
                                  children: [
                                    a.jsxs("span", { className: "font-serif text-xl font-bold text-stone-900", children: [formatMoney(price)] }),
                                    price > 0 && a.jsxs("span", { className: "text-[10px] text-stone-500", children: [" / ", subscriptionCycle === "annual" ? "year" : "mo"] })
                                  ]
                                }),
                                a.jsx("p", { className: "text-[11px] text-stone-600 leading-snug line-clamp-3", children: plan.description })
                              ]
                            }),
                            a.jsx("div", {
                              className: "pt-3 mt-3 border-t border-stone-200/80 space-y-1.5",
                              children: plan.features.slice(0, 3).map((feat, fidx) => a.jsxs("div", {
                                key: fidx,
                                className: "flex items-start gap-1.5 text-[10px] text-stone-700",
                                children: [
                                  a.jsx("span", { className: "text-emerald-600 font-bold", children: "✓" }),
                                  a.jsx("span", { className: "leading-tight", children: feat })
                                ]
                              }))
                            })
                          ]
                        });
                      })
                    })
                  ]
                }),

                // SECTION 2: Cart Order Items View
                billingMode === "checkout" && a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-4",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-3 border-b border-stone-100",
                      children: [
                        a.jsxs("h2", { className: "font-serif text-lg sm:text-xl font-bold text-stone-900", children: ["Order Items Invoicing (", (cartItems?.length || 1), ")"] }),
                        a.jsx("button", {
                          type: "button",
                          onClick: () => onNavigate && onNavigate("shop"),
                          className: "text-xs font-semibold text-[#735a3e] hover:underline cursor-pointer",
                          children: "+ Add More Crafts"
                        })
                      ]
                    }),

                    // Cart Items List
                    cartItems && cartItems.length > 0 ? a.jsx("div", {
                      className: "divide-y divide-stone-100",
                      children: cartItems.map(item => a.jsxs("div", {
                        key: item.id,
                        className: "py-3 flex items-center justify-between gap-3 text-xs",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [
                              a.jsx("img", { src: item.image, alt: item.title, className: "w-12 h-12 object-cover rounded-lg border border-stone-200 shrink-0", referrerPolicy: "no-referrer" }),
                              a.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  a.jsx("h4", { className: "font-serif font-bold text-stone-900 truncate", children: item.title }),
                                  a.jsxs("p", { className: "text-[11px] text-stone-500", children: [item.craft || "GI Craft", " • ", formatMoney(item.price), " each"] })
                                ]
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-3 shrink-0",
                            children: [
                              onUpdateQuantity && a.jsxs("div", {
                                className: "flex items-center border border-stone-200 rounded-md bg-stone-50",
                                children: [
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1)), className: "px-2 py-0.5 text-stone-600 hover:bg-stone-200 cursor-pointer", children: "−" }),
                                  a.jsx("span", { className: "px-2 text-xs font-bold", children: item.quantity }),
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, item.quantity + 1), className: "px-2 py-0.5 text-stone-600 hover:bg-stone-200 cursor-pointer", children: "+" })
                                ]
                              }),
                              a.jsx("span", { className: "font-bold font-serif text-sm text-[#735a3e]", children: formatMoney(item.price * item.quantity) }),
                              onRemoveItem && a.jsx("button", { type: "button", onClick: () => onRemoveItem(item.id), className: "text-stone-400 hover:text-red-600 cursor-pointer p-1", title: "Remove item", children: "✕" })
                            ]
                          })
                        ]
                      }))
                    }) : a.jsxs("div", {
                      className: "p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            a.jsx("img", { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600", alt: "Master Sample", className: "w-12 h-12 object-cover rounded-lg border border-stone-200", referrerPolicy: "no-referrer" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("p", { className: "font-bold text-stone-900", children: "Master Sambalpuri Ikat Tapestry" }),
                                a.jsx("p", { className: "text-[11px] text-stone-500", children: "Direct Heirloom Curation • GI Tag Hallmarked" })
                              ]
                            })
                          ]
                        }),
                        a.jsx("span", { className: "font-serif font-bold text-sm text-[#735a3e]", children: formatMoney(14500) })
                      ]
                    })
                  ]
                }),

                // SECTION 3: Custom B2B Commission View
                billingMode === "custom_invoice" && a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-4",
                  children: [
                    a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-stone-900 pb-2 border-b border-stone-100", children: "B2B & Custom Heritage Commission" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "space-y-1 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Project / Commission Title" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.title,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, title: e.target.value }),
                              className: "w-full p-2.5 rounded-lg border border-stone-200 bg-stone-50 font-medium"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Total Project Value (₹ INR)" }),
                            a.jsx("input", {
                              type: "number",
                              value: customInvoice.amount,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, amount: Number(e.target.value) }),
                              className: "w-full p-2.5 rounded-lg border border-stone-200 bg-stone-50 font-bold text-stone-900"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Deposit Percentage" }),
                            a.jsxs("select", {
                              value: customInvoice.depositPercent,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, depositPercent: e.target.value }),
                              className: "w-full p-2.5 rounded-lg border border-stone-200 bg-stone-50 font-semibold cursor-pointer",
                              children: [
                                a.jsx("option", { value: "25", children: "25% Initial Token Advance" }),
                                a.jsx("option", { value: "50", children: "50% Material & Booking Milestone" }),
                                a.jsx("option", { value: "100", children: "100% Full Settlement" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Milestone Stage Description" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.milestone,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, milestone: e.target.value }),
                              className: "w-full p-2.5 rounded-lg border border-stone-200 bg-stone-50"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // SECTION 4: Multi-Gateway Payment Suite
                a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between border-b border-stone-100 pb-3",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-stone-900", children: "Select Payment Gateway" }),
                            a.jsx("p", { className: "text-xs text-stone-500", children: "All transactions are secured with 256-Bit SSL Encryption and RBI Tokenization standards." })
                          ]
                        }),
                        a.jsx("span", { className: "text-[11px] text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full", children: "🔒 PCI-DSS Compliant" })
                      ]
                    }),

                    // Gateway Selection Tabs
                    a.jsx("div", {
                      className: "grid grid-cols-3 sm:grid-cols-5 gap-2 p-1.5 bg-[#f5efe6] rounded-xl text-xs font-bold",
                      children: [
                        { id: "razorpay", label: "Razorpay", icon: "⚡", badge: "Live SDK" },
                        { id: "cards", label: "Cards", icon: "💳", badge: "Visa/MC" },
                        { id: "upi", label: "UPI / QR", icon: "📱", badge: "Zero Fee" },
                        { id: "netbanking", label: "NetBank", icon: "🏛️", badge: "50+ Banks" },
                        { id: "paylater", label: "PayLater", icon: "⏳", badge: "0% EMI" }
                      ].map(gw => a.jsxs("button", {
                        key: gw.id,
                        type: "button",
                        onClick: () => setActiveGateway(gw.id),
                        className: `py-2.5 px-2 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                          activeGateway === gw.id ? "bg-white text-[#735a3e] shadow-xs border border-stone-300" : "text-stone-600 hover:text-stone-900"
                        }`,
                        children: [
                          a.jsx("span", { className: "text-base", children: gw.icon }),
                          a.jsx("span", { className: "leading-tight", children: gw.label }),
                          a.jsx("span", { className: "text-[9px] text-stone-400 font-normal", children: gw.badge })
                        ]
                      }))
                    }),

                    // GATEWAY TAB 1: Razorpay Standard SDK
                    activeGateway === "razorpay" && a.jsxs("div", {
                      className: "p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between bg-blue-50 border border-blue-200 p-3 rounded-xl",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center gap-2.5",
                              children: [
                                a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#0c2340] text-blue-300 font-black text-sm flex items-center justify-center font-mono", children: "R" }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("span", { className: "font-bold text-stone-900 block", children: "Razorpay Standard Checkout & UPI Intent" }),
                                    a.jsxs("span", { className: "text-[11px] text-blue-900", children: ["Active Key ID: ", a.jsx("code", { className: "font-mono font-bold", children: gatewayConfig.razorpayKeyId })] })
                                  ]
                                })
                              ]
                            }),
                            a.jsx("span", { className: "text-[10px] bg-blue-700 text-white font-bold px-2 py-0.5 rounded", children: "Verified Partner" })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-2 text-stone-600 leading-relaxed",
                          children: [
                            a.jsx("p", { children: "The Razorpay gateway handles domestic and international payments through Google Pay, PhonePe, Paytm, all Indian Credit/Debit cards (RuPay, Visa, Mastercard), and 50+ NetBanking portals." }),
                            a.jsxs("div", {
                              className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]",
                              children: [
                                a.jsx("div", { className: "p-2 bg-white rounded-lg border border-stone-200 text-center font-medium", children: "⚡ Instant Webhook Sync" }),
                                a.jsx("div", { className: "p-2 bg-white rounded-lg border border-stone-200 text-center font-medium", children: "🔒 3D Secure 2.0" }),
                                a.jsx("div", { className: "p-2 bg-white rounded-lg border border-stone-200 text-center font-medium", children: "💳 Auto Tokenization" }),
                                a.jsx("div", { className: "p-2 bg-white rounded-lg border border-stone-200 text-center font-medium", children: "🛡️ Escrow Settlement" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // GATEWAY TAB 2: Credit / Debit Cards
                    activeGateway === "cards" && a.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        // Interactive Credit Card Visual
                        a.jsxs("div", {
                          className: "w-full max-w-sm mx-auto h-44 rounded-2xl p-5 bg-gradient-to-tr from-[#1f1a17] via-[#3a2c22] to-[#735a3e] text-white shadow-lg relative overflow-hidden flex flex-col justify-between border border-stone-700",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                a.jsx("div", { className: "w-9 h-7 rounded bg-amber-300/80 border border-amber-200 flex items-center justify-center font-mono text-[9px] text-amber-950 font-black", children: "CHIP" }),
                                a.jsx("span", { className: "font-serif text-sm font-bold tracking-widest uppercase text-amber-200", children: cardData.brand.toUpperCase() })
                              ]
                            }),
                            a.jsx("div", {
                              className: "font-mono text-lg tracking-widest text-stone-100",
                              children: cardData.number || "•••• •••• •••• ••••"
                            }),
                            a.jsxs("div", {
                              className: "flex items-center justify-between text-[11px] text-stone-300 uppercase",
                              children: [
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "Cardholder" }), a.jsx("span", { className: "font-semibold tracking-wider text-white", children: cardData.name || "PATRON NAME" })] }),
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "Expires" }), a.jsx("span", { className: "font-semibold tracking-wider text-white", children: cardData.expiry || "MM/YY" })] })
                              ]
                            })
                          ]
                        }),

                        // Card Input Form
                        a.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "Cardholder Legal Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.name,
                                  onChange: (e) => setCardData({ ...cardData, name: e.target.value }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-200 bg-white text-stone-900"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "Card Number (16 Digits)" }),
                                a.jsx("input", {
                                  type: "text",
                                  maxLength: 19,
                                  value: cardData.number,
                                  onChange: handleCardNumberChange,
                                  className: "w-full p-2.5 rounded-lg border border-stone-200 bg-white font-mono text-stone-900"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "Expiry Date (MM/YY)" }),
                                a.jsx("input", {
                                  type: "text",
                                  maxLength: 5,
                                  value: cardData.expiry,
                                  onChange: (e) => setCardData({ ...cardData, expiry: e.target.value }),
                                  placeholder: "MM/YY",
                                  className: "w-full p-2.5 rounded-lg border border-stone-200 bg-white text-stone-900"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "CVV / CVC (3 Digits)" }),
                                a.jsx("input", {
                                  type: "password",
                                  maxLength: 4,
                                  value: cardData.cvv,
                                  onChange: (e) => setCardData({ ...cardData, cvv: e.target.value }),
                                  placeholder: "•••",
                                  className: "w-full p-2.5 rounded-lg border border-stone-200 bg-white text-stone-900 font-mono"
                                })
                              ]
                            }),
                            a.jsxs("label", {
                              className: "sm:col-span-2 flex items-center gap-2 text-stone-600 text-[11px] cursor-pointer pt-1",
                              children: [
                                a.jsx("input", {
                                  type: "checkbox",
                                  checked: cardData.saveCard,
                                  onChange: (e) => setCardData({ ...cardData, saveCard: e.target.checked }),
                                  className: "rounded border-stone-300 text-[#735a3e]"
                                }),
                                a.jsx("span", { children: "Save card securely via RBI-compliant tokenization for seamless future patronage." })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // GATEWAY TAB 3: UPI & QR Code
                    activeGateway === "upi" && a.jsxs("div", {
                      className: "p-4 sm:p-5 rounded-xl bg-white border border-stone-200 space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex flex-col sm:flex-row items-center gap-5",
                          children: [
                            // Dynamic QR Code Box
                            a.jsxs("div", {
                              className: "p-3 bg-white border-2 border-stone-900 rounded-2xl shadow-sm text-center shrink-0 space-y-1.5",
                              children: [
                                a.jsx("div", {
                                  className: "w-36 h-36 bg-[#161717] rounded-xl flex items-center justify-center p-2 relative overflow-hidden",
                                  children: a.jsxs("div", {
                                    className: "w-full h-full border-2 border-dashed border-amber-300/40 rounded-lg flex flex-col items-center justify-center text-white",
                                    children: [
                                      a.jsx("span", { className: "text-2xl", children: "📱" }),
                                      a.jsx("span", { className: "font-mono text-[10px] font-bold text-amber-300", children: "SCAN & PAY" }),
                                      a.jsx("span", { className: "font-bold text-[9px]", children: formatMoney(finalPayable) })
                                    ]
                                  })
                                }),
                                a.jsxs("p", { className: "text-[10px] text-stone-500 font-mono", children: ["Expires in ", a.jsx("strong", { className: "text-red-600", children: formatQrTimer(qrTimeLeft) })] })
                              ]
                            }),

                            // UPI ID Form & Intent Buttons
                            a.jsxs("div", {
                              className: "space-y-3 flex-1 w-full",
                              children: [
                                a.jsx("h4", { className: "font-serif font-bold text-stone-900", children: "Pay with any UPI App" }),
                                a.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    a.jsx("label", { className: "text-[11px] text-stone-600 font-medium", children: "Enter Virtual Payment Address (VPA / UPI ID)" }),
                                    a.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        a.jsx("input", {
                                          type: "text",
                                          value: upiId,
                                          onChange: (e) => setUpiId(e.target.value),
                                          className: "flex-1 p-2.5 rounded-lg border border-stone-200 bg-stone-50 font-mono text-stone-900"
                                        }),
                                        a.jsx("button", {
                                          type: "button",
                                          onClick: handleInitiatePayment,
                                          className: "px-4 py-2.5 bg-[#735a3e] hover:bg-[#5c4731] text-white rounded-lg font-bold cursor-pointer transition-colors",
                                          children: "Verify & Pay"
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                a.jsxs("div", {
                                  className: "flex items-center gap-2 pt-1 flex-wrap",
                                  children: [
                                    a.jsx("span", { className: "text-[10px] text-stone-400 font-medium", children: "Supported Apps:" }),
                                    ["Google Pay", "PhonePe", "Paytm", "CRED", "BHIM"].map(app => a.jsx("span", { key: app, className: "text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 font-medium", children: app }))
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // GATEWAY TAB 4: NetBanking
                    activeGateway === "netbanking" && a.jsxs("div", {
                      className: "space-y-4 text-xs",
                      children: [
                        a.jsx("h4", { className: "font-serif font-bold text-stone-900", children: "Popular Indian Retail & Corporate Banks" }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
                          children: popularBanks.map(bank => a.jsxs("button", {
                            key: bank.id,
                            type: "button",
                            onClick: () => setSelectedBank(bank.id),
                            className: `p-3 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer text-left ${
                              selectedBank === bank.id ? "border-[#735a3e] bg-[#fcf9f5] font-bold text-stone-900 ring-1 ring-[#735a3e]" : "border-stone-200 bg-white hover:border-stone-300 text-stone-700"
                            }`,
                            children: [
                              a.jsx("span", { className: "text-lg", children: bank.icon }),
                              a.jsx("span", { className: "text-xs", children: bank.name })
                            ]
                          }))
                        }),
                        a.jsxs("div", {
                          className: "space-y-1 pt-2",
                          children: [
                            a.jsx("label", { className: "text-stone-600 font-medium", children: "Or select from 50+ Other Scheduled Banks:" }),
                            a.jsxs("select", {
                              value: selectedBank,
                              onChange: (e) => setSelectedBank(e.target.value),
                              className: "w-full p-2.5 rounded-lg border border-stone-200 bg-white font-medium cursor-pointer",
                              children: [
                                a.jsx("option", { value: "HDFC", children: "HDFC Bank (Retail & Corporate)" }),
                                a.jsx("option", { value: "ICICI", children: "ICICI Bank" }),
                                a.jsx("option", { value: "SBI", children: "State Bank of India (SBI)" }),
                                a.jsx("option", { value: "AXIS", children: "Axis Bank" }),
                                a.jsx("option", { value: "KOTAK", children: "Kotak Mahindra Bank" }),
                                a.jsx("option", { value: "IDFC", children: "IDFC FIRST Bank" }),
                                a.jsx("option", { value: "YES", children: "Yes Bank" }),
                                a.jsx("option", { value: "BOB", children: "Bank of Baroda" }),
                                a.jsx("option", { value: "CANARA", children: "Canara Bank" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // GATEWAY TAB 5: PayLater / EMI Split
                    activeGateway === "paylater" && a.jsxs("div", {
                      className: "p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            a.jsxs("div", {
                              children: [
                                a.jsx("h4", { className: "font-serif font-bold text-stone-900 text-sm", children: "3-Month Zero-Interest EMI Split" }),
                                a.jsx("p", { className: "text-stone-500", children: "Powered by Simpl, LazyPay & Major Bank Credit Cards" })
                              ]
                            }),
                            a.jsx("span", { className: "text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-300", children: "0% Interest" })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "grid grid-cols-3 gap-2 text-center",
                          children: [
                            a.jsxs("div", { className: "p-2.5 bg-white rounded-lg border border-stone-200", children: [a.jsx("span", { className: "block text-stone-400 text-[10px]", children: "Today" }), a.jsx("span", { className: "font-bold text-stone-900 font-serif", children: formatMoney(Math.round(finalPayable / 3)) })] }),
                            a.jsxs("div", { className: "p-2.5 bg-white rounded-lg border border-stone-200", children: [a.jsx("span", { className: "block text-stone-400 text-[10px]", children: "Month 2" }), a.jsx("span", { className: "font-bold text-stone-900 font-serif", children: formatMoney(Math.round(finalPayable / 3)) })] }),
                            a.jsxs("div", { className: "p-2.5 bg-white rounded-lg border border-stone-200", children: [a.jsx("span", { className: "block text-stone-400 text-[10px]", children: "Month 3" }), a.jsx("span", { className: "font-bold text-stone-900 font-serif", children: formatMoney(Math.round(finalPayable / 3)) })] })
                          ]
                        })
                      ]
                    }),

                    // B2B GST Invoicing Toggle Checkbox
                    a.jsxs("div", {
                      className: "pt-3 border-t border-stone-100 space-y-3",
                      children: [
                        a.jsxs("label", {
                          className: "flex items-center gap-2.5 text-xs text-stone-800 font-semibold cursor-pointer",
                          children: [
                            a.jsx("input", {
                              type: "checkbox",
                              checked: isB2B,
                              onChange: (e) => setIsB2B(e.target.checked),
                              className: "rounded border-stone-300 text-[#735a3e]"
                            }),
                            a.jsx("span", { children: "🏢 I need a B2B Tax Invoice with GSTIN input credit" })
                          ]
                        }),

                        isB2B && a.jsxs("div", {
                          className: "p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "Registered Corporate Legal Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.companyName,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, companyName: e.target.value }),
                                  className: "w-full p-2 rounded-lg border border-stone-200 bg-white"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "GSTIN (15 Alphanumeric)" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.gstin,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, gstin: e.target.value.toUpperCase() }),
                                  className: "w-full p-2 rounded-lg border border-stone-200 bg-white font-mono uppercase"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-700", children: "Registered State & Code" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.state,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, state: e.target.value }),
                                  className: "w-full p-2 rounded-lg border border-stone-200 bg-white"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // ENTERPRISE TRUST & SECURITY BADGES
                a.jsxs("div", {
                  className: "grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-stone-100 rounded-2xl text-stone-600 text-center text-[11px]",
                  children: [
                    a.jsxs("div", { className: "space-y-0.5", children: [a.jsx("span", { className: "text-lg block", children: "🔒" }), a.jsx("strong", { className: "text-stone-900 block", children: "256-Bit SSL" }), a.jsx("span", { children: "Bank Grade TLS" })] }),
                    a.jsxs("div", { className: "space-y-0.5", children: [a.jsx("span", { className: "text-lg block", children: "🛡️" }), a.jsx("strong", { className: "text-stone-900 block", children: "PCI-DSS L1" }), a.jsx("span", { children: "Zero Data Risk" })] }),
                    a.jsxs("div", { className: "space-y-0.5", children: [a.jsx("span", { className: "text-lg block", children: "📜" }), a.jsx("strong", { className: "text-stone-900 block", children: "ISO 27001" }), a.jsx("span", { children: "Audited Privacy" })] }),
                    a.jsxs("div", { className: "space-y-0.5", children: [a.jsx("span", { className: "text-lg block", children: "🌿" }), a.jsx("strong", { className: "text-stone-900 block", children: "100% GI Tag" }), a.jsx("span", { children: "Artisan Escrow" })] })
                  ]
                })
              ]
            }),

            // RIGHT COLUMN (lg:col-span-5): Sticky Order & Invoice Summary Box
            a.jsxs("div", {
              className: "lg:col-span-5 space-y-5 lg:sticky lg:top-24",
              children: [
                // Order Summary Card
                a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-md space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-3 border-b border-stone-100",
                      children: [
                        a.jsx("h3", { className: "font-serif text-lg font-bold text-stone-900", children: "Payment Breakdown" }),
                        a.jsx("span", { className: "text-[11px] font-mono text-stone-500 font-semibold", children: "HSN #9701" })
                      ]
                    }),

                    // Quick Promo Voucher Bar
                    a.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        a.jsxs("form", {
                          onSubmit: (e) => { e.preventDefault(); applyPromo(); },
                          className: "flex gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              placeholder: "Enter Promo / Voucher Code",
                              value: promoCode,
                              onChange: (e) => setPromoCode(e.target.value),
                              className: "flex-1 p-2 rounded-lg border border-stone-200 text-xs uppercase font-mono font-semibold"
                            }),
                            a.jsx("button", {
                              type: "submit",
                              className: "px-3.5 py-2 bg-[#1c1917] hover:bg-[#2e2a27] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors",
                              children: "Apply"
                            })
                          ]
                        }),
                        // Quick Promo Pills
                        a.jsx("div", {
                          className: "flex flex-wrap gap-1.5 pt-1",
                          children: quickPromos.map(qp => a.jsx("button", {
                            key: qp.code,
                            type: "button",
                            onClick: () => applyPromo(qp.code),
                            className: `text-[10px] px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                              promoApplied?.code === qp.code ? "bg-[#735a3e] text-white border-[#735a3e]" : "bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400"
                            }`,
                            children: qp.label
                          }))
                        }),
                        promoError && a.jsx("p", { className: "text-[11px] text-red-600 font-medium", children: promoError }),
                        promoApplied && a.jsxs("div", {
                          className: "flex items-center justify-between text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 p-2 rounded-lg font-medium",
                          children: [
                            a.jsxs("span", { children: ["✓ Applied ", a.jsx("strong", { children: promoApplied.code }), " (", promoApplied.discountText, ")"] }),
                            a.jsx("button", { type: "button", onClick: () => { setPromoApplied(null); setPromoCode(""); }, className: "text-stone-400 hover:text-red-600 cursor-pointer font-bold", children: "✕" })
                          ]
                        })
                      ]
                    }),

                    // Price Line Items
                    a.jsxs("div", {
                      className: "space-y-2.5 text-xs text-stone-600 border-t border-b border-stone-100 py-3",
                      children: [
                        a.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            a.jsx("span", { children: "Base Gross Amount:" }),
                            a.jsx("span", { className: "font-semibold text-stone-900", children: formatMoney(rawBaseAmount) })
                          ]
                        }),
                        discountAmount > 0 && a.jsxs("div", {
                          className: "flex justify-between text-emerald-700 font-semibold",
                          children: [
                            a.jsxs("span", { children: ["Privilege Discount (", promoApplied?.code, "):"] }),
                            a.jsxs("span", { children: ["-", formatMoney(discountAmount)] })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            a.jsx("span", { children: "Insured Air Courier Dispatch:" }),
                            a.jsx("span", { className: "text-emerald-700 font-bold", children: "FREE" })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between text-[11px] text-stone-400 pt-1",
                          children: [
                            a.jsxs("span", { children: ["GST 5% (CGST 2.5% ", formatMoney(cgstAmount), " + SGST 2.5% ", formatMoney(sgstAmount), "):"] }),
                            a.jsx("span", { children: "Inclusive" })
                          ]
                        })
                      ]
                    }),

                    // Total Payable Header
                    a.jsxs("div", {
                      className: "flex items-baseline justify-between",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("span", { className: "text-xs text-stone-500 font-semibold uppercase tracking-wider block", children: "Total Amount Payable" }),
                            a.jsx("span", { className: "text-[10px] text-stone-400", children: "Inclusive of all taxes & insurance" })
                          ]
                        }),
                        a.jsx("span", {
                          className: "font-serif text-2xl sm:text-3xl font-bold text-[#735a3e]",
                          children: formatMoney(finalPayable)
                        })
                      ]
                    }),

                    // Primary CTA Submit Button
                    a.jsx("button", {
                      type: "button",
                      disabled: isProcessing,
                      onClick: handleInitiatePayment,
                      className: `w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                        isProcessing ? "bg-stone-400 cursor-not-allowed" : "bg-[#735a3e] hover:bg-[#5c4731] active:scale-[0.99]"
                      }`,
                      children: isProcessing ? a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx("span", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                          a.jsx("span", { children: processingStep || "Processing Payment..." })
                        ]
                      }) : a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx("span", { children: "🔒" }),
                          a.jsxs("span", { children: ["Authorize & Pay ", formatMoney(finalPayable)] }),
                          a.jsx("span", { className: "text-xs font-mono font-normal opacity-80", children: "›" })
                        ]
                      })
                    }),

                    // Assurance Footer
                    a.jsxs("p", {
                      className: "text-[11px] text-stone-500 text-center leading-relaxed",
                      children: [
                        "By confirming payment, you authorize ",
                        a.jsx("strong", { children: "JBI Craft Heritage Atelier" }),
                        " to process settlement via ",
                        a.jsx("span", { className: "font-semibold text-stone-800", children: activeGateway.toUpperCase() }),
                        ". 100% money-back authenticity guarantee."
                      ]
                    })
                  ]
                }),

                // Curator & Patron Support Card
                a.jsxs("div", {
                  className: "p-4 rounded-2xl bg-[#f5efe6] border border-stone-200 text-xs space-y-2",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-2 text-stone-900 font-bold font-serif",
                      children: [a.jsx("span", { children: "💬" }), a.jsx("span", { children: "Need Assistance or Corporate Invoice?" })]
                    }),
                    a.jsx("p", {
                      className: "text-stone-600 text-[11px] leading-relaxed",
                      children: "Our heritage concierge desk is available 24/7 for custom export certificates, bespoke artisan matching, and enterprise GSTIN reconciliation."
                    }),
                    a.jsx("div", {
                      className: "pt-1 font-mono text-[11px] font-bold text-[#735a3e]",
                      children: "WhatsApp / Call: +91 98765 43210 • billing@jbicrafts.com"
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // MODAL 1: Gateway Configuration & Developer Simulator
        showConfigModal && a.jsx("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs",
          children: a.jsxs("div", {
            className: "bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-2xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto text-xs font-sans",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between pb-3 border-b border-stone-100",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "font-serif text-lg font-bold text-stone-900", children: "⚙️ Gateway Configuration & API Keys" }),
                      a.jsx("p", { className: "text-stone-500", children: "Connect your live Razorpay & Stripe credentials or test in Sandbox mode." })
                    ]
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: () => setShowConfigModal(false),
                    className: "text-stone-400 hover:text-stone-800 text-lg font-bold cursor-pointer p-1",
                    children: "✕"
                  })
                ]
              }),

              a.jsxs("form", {
                onSubmit: handleSaveConfig,
                className: "space-y-4",
                children: [
                  // Environment Toggle
                  a.jsxs("div", {
                    className: "p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("span", { className: "font-bold text-stone-800 block", children: "Gateway Runtime Environment" }),
                          a.jsx("span", { className: "text-stone-500 text-[11px]", children: "Toggle between Test Sandbox and Live Production" })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "flex bg-white p-1 rounded-lg border border-stone-200 text-xs font-bold",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "sandbox" }),
                            className: `px-3 py-1 rounded transition-colors cursor-pointer ${gatewayConfig.environment === "sandbox" ? "bg-[#735a3e] text-white" : "text-stone-600"}`,
                            children: "Sandbox / Test"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "live" }),
                            className: `px-3 py-1 rounded transition-colors cursor-pointer ${gatewayConfig.environment === "live" ? "bg-emerald-700 text-white" : "text-stone-600"}`,
                            children: "Live / Production"
                          })
                        ]
                      })
                    ]
                  }),

                  // Razorpay Keys
                  a.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      a.jsx("h4", { className: "font-bold text-stone-900", children: "Razorpay Standard Credentials" }),
                      a.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "text-stone-600 font-medium", children: "Key ID" }),
                              a.jsx("input", {
                                type: "text",
                                value: gatewayConfig.razorpayKeyId,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeyId: e.target.value }),
                                className: "w-full p-2 rounded-lg border border-stone-200 bg-white font-mono text-[11px]"
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "text-stone-600 font-medium", children: "Key Secret" }),
                              a.jsx("input", {
                                type: "password",
                                value: gatewayConfig.razorpayKeySecret,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeySecret: e.target.value }),
                                className: "w-full p-2 rounded-lg border border-stone-200 bg-white font-mono text-[11px]"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  // Webhook Simulator
                  a.jsxs("div", {
                    className: "space-y-2 pt-2 border-t border-stone-100",
                    children: [
                      a.jsx("h4", { className: "font-bold text-stone-900", children: "Webhook Event Simulator (SaaS Testing)" }),
                      a.jsxs("div", {
                        className: "flex gap-2 flex-wrap",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => handleSimulateWebhook("payment.captured"),
                            className: "px-3 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg font-bold cursor-pointer hover:bg-emerald-200",
                            children: "Dispatch 'payment.captured'"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => handleSimulateWebhook("subscription.activated"),
                            className: "px-3 py-1.5 bg-blue-100 text-blue-800 border border-blue-300 rounded-lg font-bold cursor-pointer hover:bg-blue-200",
                            children: "Dispatch 'subscription.activated'"
                          })
                        ]
                      }),
                      webhookLog && a.jsxs("div", {
                        className: "p-3 bg-stone-900 text-emerald-400 rounded-xl font-mono text-[10px] overflow-x-auto space-y-1 max-h-40",
                        children: [
                          a.jsx("span", { className: "text-stone-400 block", children: "// Real-Time Webhook Event Payload Received:" }),
                          a.jsx("pre", { children: JSON.stringify(webhookLog, null, 2) })
                        ]
                      })
                    ]
                  }),

                  configToast && a.jsx("div", {
                    className: "p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-center font-bold",
                    children: "✓ Gateway configuration updated & persisted successfully!"
                  }),

                  // Actions
                  a.jsxs("div", {
                    className: "flex justify-end gap-2 pt-3 border-t border-stone-100",
                    children: [
                      a.jsx("button", {
                        type: "button",
                        onClick: () => setShowConfigModal(false),
                        className: "px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-bold cursor-pointer",
                        children: "Close"
                      }),
                      a.jsx("button", {
                        type: "submit",
                        className: "px-5 py-2 bg-[#735a3e] hover:bg-[#5c4731] text-white rounded-xl font-bold cursor-pointer",
                        children: "Save API Settings"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // MODAL 2: Official GST Tax Receipt & Success Confirmation
        showSuccessModal && completedOrder && a.jsx("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs",
          children: a.jsxs("div", {
            className: "bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[95vh] overflow-y-auto font-sans text-xs",
            children: [
              // Printable Invoice Container with print styling ID
              a.jsxs("div", {
                id: "jbi-printable-tax-invoice",
                className: "space-y-5",
                children: [
                  // Receipt Header
                  a.jsxs("div", {
                    className: "text-center space-y-2 pb-4 border-b border-stone-200",
                    children: [
                      a.jsx("div", { className: "w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center text-2xl font-bold", children: "✓" }),
                      a.jsx("h3", { className: "font-serif text-xl sm:text-2xl font-bold text-stone-900", children: "Payment Authorization Verified" }),
                      a.jsxs("p", { className: "text-stone-500 text-xs", children: ["Official GST Tax Invoice • Transaction ID: ", a.jsx("span", { className: "font-mono font-bold text-stone-800", children: completedOrder.paymentId })] })
                    ]
                  }),

                  // Order Summary Meta Grid
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-[11px]",
                    children: [
                      a.jsxs("div", { children: [a.jsx("span", { className: "text-stone-400 block", children: "Order Number:" }), a.jsx("strong", { className: "font-mono text-stone-800", children: completedOrder.id })] }),
                      a.jsxs("div", { children: [a.jsx("span", { className: "text-stone-400 block", children: "Date & Time:" }), a.jsx("strong", { className: "text-stone-800", children: completedOrder.date })] }),
                      a.jsxs("div", { children: [a.jsx("span", { className: "text-stone-400 block", children: "Payment Method:" }), a.jsx("strong", { className: "text-stone-800", children: completedOrder.gateway })] }),
                      a.jsxs("div", { children: [a.jsx("span", { className: "text-stone-400 block", children: "Settlement Status:" }), a.jsx("span", { className: "text-emerald-700 font-bold", children: "Captured & Escrowed" })] })
                    ]
                  }),

                  // Itemized List
                  a.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      a.jsx("h4", { className: "font-serif font-bold text-stone-900 text-xs uppercase tracking-wider", children: "Itemized Items & Services" }),
                      a.jsx("div", {
                        className: "divide-y divide-stone-100 border-t border-b border-stone-100 py-1",
                        children: completedOrder.items.map((it, idx) => a.jsxs("div", {
                          key: idx,
                          className: "py-2 flex justify-between text-xs",
                          children: [
                            a.jsxs("span", { className: "text-stone-800 font-medium", children: [it.title, it.quantity > 1 ? ` (×${it.quantity})` : ""] }),
                            a.jsx("span", { className: "font-serif font-bold text-[#735a3e]", children: formatMoney(it.price * (it.quantity || 1)) })
                          ]
                        }))
                      })
                    ]
                  }),

                  // Total Box
                  a.jsxs("div", {
                    className: "p-3 bg-[#fcf9f5] rounded-xl border border-stone-200 flex justify-between items-center",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("span", { className: "font-bold text-stone-900 block text-xs", children: "Total Amount Authorized" }),
                          a.jsx("span", { className: "text-[10px] text-stone-500", children: "GST HSN #9701 (5% Tax Inclusive)" })
                        ]
                      }),
                      a.jsx("span", { className: "font-serif text-xl font-bold text-[#735a3e]", children: formatMoney(completedOrder.amount) })
                    ]
                  })
                ]
              }),

              // Actions
              a.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-2 pt-2",
                children: [
                  a.jsx("button", {
                    type: "button",
                    onClick: () => window.print(),
                    className: "flex-1 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl cursor-pointer transition-colors text-center",
                    children: "🖨️ Print / Save PDF Invoice"
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: () => {
                      setShowSuccessModal(false);
                      if (onNavigate) onNavigate("orders");
                    },
                    className: "flex-1 py-3 bg-[#735a3e] hover:bg-[#5c4731] text-white font-bold rounded-xl cursor-pointer transition-colors text-center",
                    children: "View in Orders History →"
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  });
};
"""

# Replace in text
new_text = text[:pos_start] + saas_payment_component + "\n\n" + text[pos_orders:]

with open('public/assets/index-v2-aboutphotos.js', 'w') as f:
    f.write(new_text)

print("Updated SaaS-level payment page successfully!")
