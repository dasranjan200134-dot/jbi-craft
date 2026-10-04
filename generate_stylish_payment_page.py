import sys, re

# Read current bundle
with open('public/assets/index-v2-aboutphotos.js', 'r') as f:
    text = f.read()

# 1. Remove payments from navbar
text = text.replace(',{id:"payments",label:"PAYMENTS"}', '')

pos_start = text.find('const ProfessionalPaymentPageComponent =')
pos_orders = text.find('const OrdersPageComponent =', pos_start)

if pos_start == -1 or pos_orders == -1:
    print("Error: Could not locate component boundaries!", file=sys.stderr)
    sys.exit(1)

new_stylish_payment_component = r"""const ProfessionalPaymentPageComponent = ({ cartItems, onNavigate, onClearCart, onUpdateQuantity, onRemoveItem, onQuickView, onAddToCart }) => {
  // Mode Selector: 'checkout' (Cart & Heirloom Orders), 'subscriptions' (Patron SaaS Memberships), 'custom_invoice' (B2B / Custom Commission)
  const [billingMode, setBillingMode] = _.useState(cartItems && cartItems.length > 0 ? "checkout" : "subscriptions");
  const [activeStep, setActiveStep] = _.useState(2); // 1: Items, 2: Gateway & Payment, 3: Escrow & Settlement

  // Real-Time Currency Rates & Selector
  const [currency, setCurrency] = _.useState("INR");
  const currencyRates = {
    INR: { symbol: "₹", rate: 1, name: "INR - Indian Rupee", flag: "🇮🇳", locale: "en-IN" },
    USD: { symbol: "$", rate: 0.0116, name: "USD - US Dollar", flag: "🇺🇸", locale: "en-US" },
    EUR: { symbol: "€", rate: 0.0107, name: "EUR - Euro", flag: "🇪🇺", locale: "de-DE" },
    GBP: { symbol: "£", rate: 0.0090, name: "GBP - British Pound", flag: "🇬🇧", locale: "en-GB" },
    AED: { symbol: "د.إ", rate: 0.0425, name: "AED - UAE Dirham", flag: "🇦🇪", locale: "ar-AE" },
    SGD: { symbol: "S$", rate: 0.0156, name: "SGD - Singapore Dollar", flag: "🇸🇬", locale: "en-SG" },
    CAD: { symbol: "C$", rate: 0.0158, name: "CAD - Canadian Dollar", flag: "🇨🇦", locale: "en-CA" },
    AUD: { symbol: "A$", rate: 0.0175, name: "AUD - Australian Dollar", flag: "🇦🇺", locale: "en-AU" }
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
      name: "Guild Enthusiast",
      tierTag: "Community Tier",
      badge: "Free Lifetime",
      gradient: "from-stone-900 to-stone-800",
      accent: "#a8a29e",
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
      cta: "Join Free Community",
      popular: false
    },
    {
      id: "curator",
      name: "Heritage Curator Patron",
      tierTag: "Connoisseur Choice",
      badge: "⭐ Most Popular",
      gradient: "from-[#2e2016] via-[#4a3525] to-[#20150d]",
      accent: "#d4a373",
      priceMonthly: 1499,
      priceAnnual: 14990, // ~1249/mo
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
      tierTag: "Exclusive Guild",
      badge: "👑 Royal Tier",
      gradient: "from-[#1a1324] via-[#2d1b3f] to-[#120c1a]",
      accent: "#c084fc",
      priceMonthly: 4999,
      priceAnnual: 49990, // ~4165/mo
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
    { code: "PATRON20", label: "👑 20% Patron Privilege", percent: 20, desc: "Save 20% on any heirloom allocation" },
    { code: "HERITAGE10", label: "🏛️ 10% GI Artisan", percent: 10, desc: "Direct handloom craft subsidy voucher" },
    { code: "FIRSTBUY500", label: "🎁 ₹500 First Order", flat: 500, desc: "Flat ₹500 instant welcome token" }
  ];

  const applyPromo = (codeToApply) => {
    setPromoError("");
    const code = (codeToApply || promoCode).trim().toUpperCase();
    if (code === "HERITAGE10") {
      setPromoApplied({ code: "HERITAGE10", percent: 10, discountText: "10% Craft Heritage Discount" });
      setPromoCode("HERITAGE10");
    } else if (code === "PATRON20" || code === "PATRONVIP") {
      setPromoApplied({ code: "PATRON20", percent: 20, discountText: "20% VIP Patron Privilege" });
      setPromoCode("PATRON20");
    } else if (code === "FIRSTBUY500" || code === "WELCOME500") {
      setPromoApplied({ code: "FIRSTBUY500", flat: 500, discountText: "Flat ₹500 Welcome Voucher" });
      setPromoCode("FIRSTBUY500");
    } else {
      setPromoError("Invalid code. Tap one of the golden vouchers above.");
    }
  };

  // Payment Gateway Tab Selection
  const [activeGateway, setActiveGateway] = _.useState("razorpay"); // 'razorpay', 'cards', 'upi', 'netbanking', 'crypto'

  // Gateway Settings & Dev Modal
  const [showConfigModal, setShowConfigModal] = _.useState(false);
  const [gatewayConfig, setGatewayConfig] = _.useState(() => {
    try {
      const saved = localStorage.getItem("jbi_payment_gateway_config");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      environment: "sandbox",
      razorpayKeyId: "rzp_test_JBIHeritage2026",
      razorpayKeySecret: "sec_9841abcd928174",
      stripePublishableKey: "pk_test_51MzJBIHeritageCrafts2026",
      merchantName: "JBI Heritage Crafts & Guild Atelier",
      themeColor: "#d4a373",
      autoCapture: true
    };
  });

  const [configToast, setConfigToast] = _.useState(false);

  const handleSaveConfig = (e) => {
    if (e) e.preventDefault();
    try {
      localStorage.setItem("jbi_payment_gateway_config", JSON.stringify(gatewayConfig));
      setConfigToast(true);
      setTimeout(() => setConfigToast(false), 2500);
    } catch (err) {}
  };

  // Card Form State with Interactive 3D Visualizer & Brand Auto-Detection
  const [cardData, setCardData] = _.useState({
    name: "Rashmi Ranjan Das",
    number: "4532 8920 1204 8921",
    expiry: "12/28",
    cvv: "892",
    saveCard: true,
    brand: "visa"
  });
  const [cardFlipped, setCardFlipped] = _.useState(false);

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
    { id: "HDFC", name: "HDFC Bank", logo: "🏛️", color: "from-blue-900 to-indigo-950" },
    { id: "ICICI", name: "ICICI Bank", logo: "🏢", color: "from-amber-900 to-orange-950" },
    { id: "SBI", name: "State Bank of India", logo: "🏦", color: "from-cyan-900 to-blue-950" },
    { id: "AXIS", name: "Axis Bank", logo: "🏛️", color: "from-rose-900 to-pink-950" },
    { id: "KOTAK", name: "Kotak Mahindra", logo: "🏢", color: "from-red-900 to-rose-950" }
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
      rawBaseAmount = 14500;
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
  const gstAmount = Math.round(taxableAmount * 0.05);
  const cgstAmount = Math.round(gstAmount / 2);
  const sgstAmount = gstAmount - cgstAmount;
  const finalPayable = taxableAmount;
  const artisanShare = Math.round(finalPayable * 0.85);

  // Processing & Success State
  const [isProcessing, setIsProcessing] = _.useState(false);
  const [processingStep, setProcessingStep] = _.useState("");
  const [showSuccessModal, setShowSuccessModal] = _.useState(false);
  const [completedOrder, setCompletedOrder] = _.useState(null);

  // Trigger Payment
  const handleInitiatePayment = () => {
    if (finalPayable === 0 && billingMode === "subscriptions") {
      const freeOrderData = {
        id: "PATRON-FREE-" + Date.now().toString(36).toUpperCase(),
        paymentId: "FREE_ACTIVATION_" + Date.now().toString(36).toUpperCase(),
        plan: "Guild Enthusiast",
        amount: 0,
        gateway: "Direct Free Activation",
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        items: [{ title: "Guild Enthusiast (Free Lifetime Membership)", quantity: 1, price: 0 }]
      };
      setCompletedOrder(freeOrderData);
      setShowSuccessModal(true);
      return;
    }

    setIsProcessing(true);
    setProcessingStep("Connecting to " + (activeGateway === "razorpay" ? "Razorpay 256-Bit Quantum Gateway" : activeGateway.toUpperCase() + " Secure Processing Gateway") + "...");

    setTimeout(() => {
      setProcessingStep("Verifying Tokenization & Cryptographic Provenance Hash...");
    }, 900);

    setTimeout(() => {
      setProcessingStep("Directing 85% settlement to Rural Master Artisan Escrow...");
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
        artisanBeneficiary: { name: "Master Weaver Bhaskar Meher", guild: "Bargarh Sambalpuri Handloom Guild", share: artisanShare },
        items: billingMode === "checkout" ? (cartItems && cartItems.length > 0 ? cartItems : [{ title: "Master Sambalpuri Heirloom Ikat Tapestry", price: rawBaseAmount, quantity: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" }]) : billingMode === "subscriptions" ? [{ title: `Patron Plan: ${patronPlans.find(p=>p.id===selectedPlanId)?.name} (${subscriptionCycle.toUpperCase()})`, price: finalPayable, quantity: 1 }] : [{ title: customInvoice.title, price: finalPayable, quantity: 1, milestone: customInvoice.milestone }]
      };

      setCompletedOrder(orderData);
      setShowSuccessModal(true);

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
    className: "min-h-screen bg-[#0d0f12] text-[#f3f4f6] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#d4a373] selection:text-black",
    children: a.jsxs("div", {
      className: "max-w-7xl mx-auto space-y-8",
      children: [
        
        // 1. SLEEK COMMAND HEADER & BREADCRUMBS
        a.jsxs("div", {
          className: "relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#181c24] via-[#12151c] to-[#0d0f12] border border-stone-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl",
          children: [
            // Ambient subtle glow
            a.jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl pointer-events-none" }),
            a.jsx("div", { className: "absolute bottom-0 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" }),

            a.jsxs("div", {
              className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6",
              children: [
                // Left Title & Provenance Badges
                a.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a373]",
                      children: [
                        a.jsx("button", { onClick: () => onNavigate && onNavigate("home"), className: "hover:text-white transition-colors cursor-pointer flex items-center gap-1", children: "← Storefront" }),
                        a.jsx("span", { className: "text-stone-600", children: "/" }),
                        a.jsx("span", { className: "text-stone-300", children: "Checkout Portal" }),
                        a.jsx("span", { className: "inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono", children: "● PCI-DSS QUANTUM VAULT" })
                      ]
                    }),
                    a.jsx("h1", {
                      className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight",
                      children: "Patronage & Settlement Suite"
                    }),
                    a.jsx("p", {
                      className: "text-stone-400 text-xs sm:text-sm max-w-2xl leading-relaxed",
                      children: "Multi-currency settlement architecture with 85% direct rural craft escrow, RBI tokenized card security, and instant UPI / Razorpay authorization."
                    })
                  ]
                }),

                // Right Live Controls (Currency Switcher + Gateway Config Link)
                a.jsxs("div", {
                  className: "flex items-center gap-3 flex-wrap lg:self-center shrink-0",
                  children: [
                    // Currency Picker Chip
                    a.jsxs("div", {
                      className: "flex items-center bg-[#1e2330] border border-stone-700/80 rounded-2xl px-4 py-2 text-xs font-semibold text-stone-200 shadow-inner hover:border-[#d4a373]/60 transition-all",
                      children: [
                        a.jsx("span", { className: "text-stone-400 mr-2 text-[11px] uppercase tracking-wider", children: "Currency:" }),
                        a.jsx("select", {
                          value: currency,
                          onChange: (e) => setCurrency(e.target.value),
                          className: "bg-transparent font-bold text-[#d4a373] focus:outline-none cursor-pointer pr-1",
                          children: Object.keys(currencyRates).map(k => a.jsx("option", { key: k, value: k, className: "bg-[#181c24] text-white", children: `${currencyRates[k].flag} ${k} (${currencyRates[k].symbol})` }))
                        })
                      ]
                    }),

                    // Gateway Dev Modal Button
                    a.jsxs("button", {
                      type: "button",
                      onClick: () => setShowConfigModal(true),
                      className: "flex items-center gap-2 bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-stone-200 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer border border-stone-700/80 hover:border-[#d4a373]/40",
                      children: [
                        a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                        a.jsx("span", { children: "API Gateways" }),
                        a.jsx("span", { className: "text-[10px] bg-stone-950 text-stone-300 px-2 py-0.5 rounded-full border border-stone-800 font-mono", children: gatewayConfig.environment.toUpperCase() })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Interactive Step Progress Tracker
            a.jsx("div", {
              className: "mt-8 pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-2 text-center",
              children: [
                { num: "01", title: "Allocation", desc: billingMode === "checkout" ? `${cartItems?.length || 1} Item(s)` : billingMode === "subscriptions" ? "Patron Tier" : "Custom Commission" },
                { num: "02", title: "Payment Matrix", desc: activeGateway.toUpperCase() + " Gateway" },
                { num: "03", title: "Settlement", desc: "85% Artisan Escrow" }
              ].map((step, idx) => a.jsxs("div", {
                key: idx,
                onClick: () => setActiveStep(idx + 1),
                className: `p-3 rounded-2xl transition-all cursor-pointer border ${
                  activeStep === idx + 1 ? "bg-[#252b3b]/90 border-[#d4a373] text-white shadow-lg" : "bg-[#141720]/50 border-stone-800/40 text-stone-500 hover:text-stone-300"
                }`,
                children: [
                  a.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#d4a373]", children: [a.jsx("span", { children: step.num }), a.jsx("span", { className: "text-stone-600", children: "•" }), a.jsx("span", { className: "text-stone-200 font-sans font-bold", children: step.title })] }),
                  a.jsx("span", { className: "text-[10px] text-stone-400 block mt-0.5 truncate", children: step.desc })
                ]
              }))
            })
          ]
        }),

        // 2. EXPRESS 1-CLICK BIO-CHECKOUT BAR (High-Tech Capsule)
        a.jsxs("div", {
          className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1f1712] via-[#2c1e15] to-[#1a1410] p-4 sm:p-5 border border-[#d4a373]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3.5",
              children: [
                a.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d4a373] to-[#b37a44] text-black font-black flex items-center justify-center text-lg shadow-lg", children: "⚡" }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h3", { className: "font-bold text-sm text-white tracking-wide flex items-center gap-2", children: ["Express 1-Click Biometric Checkout", a.jsx("span", { className: "text-[9px] bg-[#d4a373]/20 text-[#d4a373] border border-[#d4a373]/40 px-2 py-0.2 rounded-full font-mono", children: "INSTANT" })] }),
                    a.jsx("p", { className: "text-[11px] text-stone-400", children: "Skip form filling with pre-authorized digital wallets and zero-latency settlement." })
                  ]
                })
              ]
            }),
            // Fast Express Buttons
            a.jsxs("div", {
              className: "flex items-center gap-2.5 flex-wrap justify-center",
              children: [
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("razorpay"); handleInitiatePayment(); },
                  className: "bg-[#0b1f38] hover:bg-[#112d52] text-blue-200 border border-blue-500/40 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-blue-400 font-mono font-black text-sm", children: "R" }), a.jsx("span", { children: "Razorpay Fast" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-white hover:bg-stone-100 text-black px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-sm", children: "" }), a.jsx("span", { children: "Apple Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("upi"); handleInitiatePayment(); },
                  className: "bg-[#1e2433] hover:bg-[#283044] text-white border border-stone-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-[#4285F4] font-black", children: "G" }), a.jsx("span", { children: "Google Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-[#002f6c] hover:bg-[#003d8f] text-white border border-blue-400/40 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "font-black text-amber-300", children: "P" }), a.jsx("span", { children: "PayPal" })]
                })
              ]
            })
          ]
        }),

        // 3. BILLING MODE SELECTOR TABS (Sleek Glass Pills)
        a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 bg-[#141720] rounded-2xl border border-stone-800/80 shadow-inner",
          children: [
            { id: "subscriptions", label: "👑 Patron SaaS Memberships", desc: "Annual & Monthly Patron Tiers" },
            { id: "checkout", label: "🛍️ Cart & Craft Order Invoicing", desc: cartItems && cartItems.length > 0 ? `${cartItems.length} Item(s) in Active Bag` : "Direct Masterpiece Invoicing" },
            { id: "custom_invoice", label: "🏛️ B2B / Custom Commission", desc: "Bespoke Installation Invoicing" }
          ].map(tab => a.jsxs("button", {
            key: tab.id,
            type: "button",
            onClick: () => setBillingMode(tab.id),
            className: `p-4 rounded-xl text-left transition-all cursor-pointer border ${
              billingMode === tab.id ? "bg-gradient-to-r from-[#281f18] to-[#1a1410] text-white shadow-lg border-[#d4a373] ring-1 ring-[#d4a373]/30" : "bg-transparent text-stone-400 hover:text-stone-200 hover:bg-[#1a1e29] border-transparent"
            }`,
            children: [
              a.jsx("span", { className: `block font-bold text-xs sm:text-sm ${billingMode === tab.id ? "text-[#d4a373]" : "text-stone-300"}`, children: tab.label }),
              a.jsx("span", { className: "block text-[11px] text-stone-500 mt-0.5", children: tab.desc })
            ]
          }))
        }),

        // 4. MAIN SPLIT VIEW (Left: Interactive Config & Gateways / Right: Dynamic Summary)
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
          children: [
            // LEFT COLUMN (7 COLS): Mode-specific views + Payment Gateway Matrix
            a.jsxs("div", {
              className: "lg:col-span-7 space-y-6",
              children: [

                // VIEW A: Patron Subscription Cards
                billingMode === "subscriptions" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-6",
                  children: [
                    a.jsxs("div", {
                      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-xl font-bold text-white", children: "Select Patronage Tier" }),
                            a.jsx("p", { className: "text-xs text-stone-400", children: "Subsidize rural master weaver clusters while unlocking VIP lifetime benefits." })
                          ]
                        }),
                        // Monthly / Annual Toggle
                        a.jsxs("div", {
                          className: "flex items-center bg-[#1d222e] p-1 rounded-xl text-xs font-bold border border-stone-700/80 shrink-0",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("monthly"),
                              className: `px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${subscriptionCycle === "monthly" ? "bg-[#d4a373] text-black font-extrabold shadow-md" : "text-stone-400 hover:text-white"}`,
                              children: "Monthly"
                            }),
                            a.jsxs("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("annual"),
                              className: `px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${subscriptionCycle === "annual" ? "bg-[#d4a373] text-black font-extrabold shadow-md" : "text-stone-400 hover:text-white"}`,
                              children: [
                                a.jsx("span", { children: "Annual" }),
                                a.jsx("span", { className: "text-[9px] bg-black text-[#d4a373] px-1.5 py-0.5 rounded-full font-mono font-bold", children: "Save 20%" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // Plan Cards Grid
                    a.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                      children: patronPlans.map(plan => {
                        const price = subscriptionCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
                        const isSelected = selectedPlanId === plan.id;
                        return a.jsxs("div", {
                          key: plan.id,
                          onClick: () => setSelectedPlanId(plan.id),
                          className: `p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden bg-gradient-to-b ${plan.gradient} ${
                            isSelected ? "border-[#d4a373] ring-2 ring-[#d4a373]/40 shadow-2xl scale-[1.02]" : "border-stone-800/80 hover:border-stone-700 opacity-85 hover:opacity-100"
                          }`,
                          children: [
                            plan.popular && a.jsx("div", {
                              className: "absolute top-0 right-0 bg-[#d4a373] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md",
                              children: "⭐ Most Popular"
                            }),
                            a.jsxs("div", {
                              className: "space-y-2.5",
                              children: [
                                a.jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-[#d4a373] font-bold block", children: plan.tierTag }),
                                a.jsx("h3", { className: "font-serif text-base font-bold text-white leading-tight", children: plan.name }),
                                a.jsxs("div", {
                                  className: "py-1",
                                  children: [
                                    a.jsx("span", { className: "font-serif text-2xl font-black text-white", children: formatMoney(price) }),
                                    price > 0 && a.jsxs("span", { className: "text-[10px] text-stone-400 ml-1 font-mono", children: ["/", subscriptionCycle === "annual" ? "yr" : "mo"] })
                                  ]
                                }),
                                a.jsx("p", { className: "text-[11px] text-stone-300 leading-snug line-clamp-3", children: plan.description })
                              ]
                            }),
                            a.jsx("div", {
                              className: "pt-3 mt-3 border-t border-white/10 space-y-1.5",
                              children: plan.features.slice(0, 3).map((feat, fidx) => a.jsxs("div", {
                                key: fidx,
                                className: "flex items-start gap-1.5 text-[10px] text-stone-200",
                                children: [
                                  a.jsx("span", { className: "text-emerald-400 font-bold", children: "✓" }),
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

                // VIEW B: Cart Order Items List
                billingMode === "checkout" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("h2", { className: "font-serif text-xl font-bold text-white", children: ["Selected Masterpieces (", (cartItems?.length || 1), ")"] }),
                        a.jsx("button", {
                          type: "button",
                          onClick: () => onNavigate && onNavigate("shop"),
                          className: "text-xs font-semibold text-[#d4a373] hover:underline cursor-pointer",
                          children: "+ Add More Craft Pieces"
                        })
                      ]
                    }),

                    cartItems && cartItems.length > 0 ? a.jsx("div", {
                      className: "divide-y divide-stone-800/80",
                      children: cartItems.map(item => a.jsxs("div", {
                        key: item.id,
                        className: "py-3.5 flex items-center justify-between gap-3 text-xs",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-3.5 min-w-0",
                            children: [
                              a.jsx("img", { src: item.image, alt: item.title, className: "w-14 h-14 object-cover rounded-xl border border-stone-700/80 shrink-0 shadow-md", referrerPolicy: "no-referrer" }),
                              a.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  a.jsx("h4", { className: "font-serif font-bold text-white truncate text-sm", children: item.title }),
                                  a.jsxs("p", { className: "text-[11px] text-stone-400 mt-0.5", children: [item.craft || "Authentic GI Craft", " • ", formatMoney(item.price), " each"] }),
                                  a.jsx("span", { className: "inline-block text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono mt-1", children: "GI Hallmarked" })
                                ]
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-3 shrink-0",
                            children: [
                              onUpdateQuantity && a.jsxs("div", {
                                className: "flex items-center border border-stone-700 rounded-lg bg-[#1a1e29]",
                                children: [
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1)), className: "px-2.5 py-1 text-stone-300 hover:text-white cursor-pointer font-bold", children: "−" }),
                                  a.jsx("span", { className: "px-2 text-xs font-mono font-bold text-white", children: item.quantity }),
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, item.quantity + 1), className: "px-2.5 py-1 text-stone-300 hover:text-white cursor-pointer font-bold", children: "+" })
                                ]
                              }),
                              a.jsx("span", { className: "font-bold font-serif text-base text-[#d4a373]", children: formatMoney(item.price * item.quantity) }),
                              onRemoveItem && a.jsx("button", { type: "button", onClick: () => onRemoveItem(item.id), className: "text-stone-500 hover:text-rose-400 cursor-pointer p-1 transition-colors", title: "Remove item", children: "✕" })
                            ]
                          })
                        ]
                      }))
                    }) : a.jsxs("div", {
                      className: "p-4 rounded-2xl bg-[#1a1e29] border border-stone-800 flex items-center justify-between text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-3.5",
                          children: [
                            a.jsx("img", { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600", alt: "Master Sample", className: "w-12 h-12 object-cover rounded-xl border border-stone-700", referrerPolicy: "no-referrer" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("p", { className: "font-bold text-white", children: "Master Sambalpuri Ikat Tapestry" }),
                                a.jsx("p", { className: "text-[11px] text-stone-400", children: "Direct Heirloom Curation • GI Tag Hallmarked" })
                              ]
                            })
                          ]
                        }),
                        a.jsx("span", { className: "font-serif font-bold text-base text-[#d4a373]", children: formatMoney(14500) })
                      ]
                    })
                  ]
                }),

                // VIEW C: Custom B2B Commission & Invoicing
                billingMode === "custom_invoice" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-4",
                  children: [
                    a.jsx("h2", { className: "font-serif text-xl font-bold text-white pb-3 border-b border-stone-800", children: "B2B & Custom Heritage Commission" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "space-y-1.5 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Commission / Installation Project Title" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.title,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, title: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-medium focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Total Commission Value (₹ INR)" }),
                            a.jsx("input", {
                              type: "number",
                              value: customInvoice.amount,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, amount: Number(e.target.value) }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-bold font-mono focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Milestone Deposit Ratio" }),
                            a.jsxs("select", {
                              value: customInvoice.depositPercent,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, depositPercent: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-semibold cursor-pointer focus:border-[#d4a373] focus:outline-none",
                              children: [
                                a.jsx("option", { value: "25", children: "25% Initial Booking Advance" }),
                                a.jsx("option", { value: "50", children: "50% Material & Dye Preparation Milestone" }),
                                a.jsx("option", { value: "100", children: "100% Full Commission Settlement" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Milestone Phase Description" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.milestone,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, milestone: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // PAYMENT GATEWAY MATRIX SECTION (Interactive high-end UI)
                a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-6",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-xl font-bold text-white", children: "Choose Payment Instrument" }),
                            a.jsx("p", { className: "text-xs text-stone-400", children: "Zero processing surcharge. Real-time bank authorization." })
                          ]
                        }),
                        a.jsx("span", { className: "text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full", children: "🔒 TLS 1.3 ENCRYPTED" })
                      ]
                    }),

                    // Payment Gateway Segmented Switcher
                    a.jsx("div", {
                      className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-[#0d0f12] rounded-2xl border border-stone-800",
                      children: [
                        { id: "razorpay", label: "Razorpay", icon: "⚡", tag: "All-in-One" },
                        { id: "cards", label: "Cards", icon: "💳", tag: "Visa/MC/RuPay" },
                        { id: "upi", label: "UPI & QR", icon: "📱", tag: "Instant" },
                        { id: "netbanking", label: "NetBanking", icon: "🏛️", tag: "50+ Banks" }
                      ].map(gw => a.jsxs("button", {
                        key: gw.id,
                        type: "button",
                        onClick: () => setActiveGateway(gw.id),
                        className: `p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          activeGateway === gw.id ? "bg-gradient-to-b from-[#2a221b] to-[#1c1611] text-[#d4a373] border border-[#d4a373] shadow-lg" : "text-stone-400 hover:text-stone-200 hover:bg-[#1a1e29] border border-transparent"
                        }`,
                        children: [
                          a.jsx("span", { className: "text-lg", children: gw.icon }),
                          a.jsx("span", { className: "font-bold text-xs leading-none", children: gw.label }),
                          a.jsx("span", { className: "text-[9px] text-stone-500 font-mono", children: gw.tag })
                        ]
                      }))
                    }),

                    // TAB 1: Razorpay Quantum Gateway
                    activeGateway === "razorpay" && a.jsxs("div", {
                      className: "p-5 rounded-2xl bg-[#1a1e29] border border-stone-800 space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between bg-blue-950/60 border border-blue-800/60 p-4 rounded-xl",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                a.jsx("div", { className: "w-9 h-9 rounded-xl bg-[#0c2340] text-blue-400 font-mono font-black text-base flex items-center justify-center shadow-md", children: "R" }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("span", { className: "font-bold text-white text-sm block", children: "Razorpay Standard Checkout & UPI Intent" }),
                                    a.jsxs("span", { className: "text-[11px] text-blue-300 font-mono", children: ["Key: ", gatewayConfig.razorpayKeyId] })
                                  ]
                                })
                              ]
                            }),
                            a.jsx("span", { className: "text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/40 font-bold px-2.5 py-1 rounded-full font-mono", children: "VERIFIED SDK" })
                          ]
                        }),
                        a.jsx("p", { className: "text-stone-300 leading-relaxed", children: "Authorizes domestic and cross-border transactions via GPay, PhonePe, Paytm, RuPay, Visa, Mastercard, American Express, and 50+ Indian banking gateways with automated chargeback defense." }),
                        a.jsxs("div", {
                          className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10px] font-mono",
                          children: [
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "⚡ Instant Webhooks" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "🔒 3D Secure 2.0" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "🛡️ Escrow Guard" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "📜 GST HSN 9701" })
                          ]
                        })
                      ]
                    }),

                    // TAB 2: Interactive 3D Card
                    activeGateway === "cards" && a.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        // Holographic Metallic Card Visual
                        a.jsxs("div", {
                          className: "w-full max-w-sm mx-auto h-48 rounded-3xl p-6 bg-gradient-to-tr from-[#141210] via-[#2d2218] to-[#473424] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-[#d4a373]/40",
                          children: [
                            // Subtle circuit texture overlay
                            a.jsx("div", { className: "absolute top-0 right-0 w-36 h-36 bg-[#d4a373]/15 rounded-full blur-2xl pointer-events-none" }),
                            a.jsxs("div", {
                              className: "flex items-center justify-between relative z-10",
                              children: [
                                a.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    a.jsx("div", { className: "w-10 h-7 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 border border-amber-300 shadow-inner flex items-center justify-center text-[9px] font-black text-amber-950 font-mono", children: "EMV" }),
                                    a.jsx("span", { className: "text-stone-400 text-xs", children: "📶" })
                                  ]
                                }),
                                a.jsx("span", { className: "font-mono text-sm font-black tracking-widest uppercase text-[#d4a373]", children: cardData.brand.toUpperCase() })
                              ]
                            }),
                            a.jsx("div", {
                              className: "font-mono text-lg sm:text-xl tracking-widest text-stone-100 font-bold relative z-10",
                              children: cardData.number || "•••• •••• •••• ••••"
                            }),
                            a.jsxs("div", {
                              className: "flex items-center justify-between text-[11px] text-stone-300 uppercase relative z-10 font-mono",
                              children: [
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "CARDHOLDER" }), a.jsx("span", { className: "font-bold tracking-wider text-white", children: cardData.name || "PATRON NAME" })] }),
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "EXPIRES" }), a.jsx("span", { className: "font-bold tracking-wider text-white", children: cardData.expiry || "MM/YY" })] })
                              ]
                            })
                          ]
                        }),

                        // Card Inputs Form
                        a.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1.5 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Cardholder Full Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.name,
                                  onChange: (e) => setCardData({ ...cardData, name: e.target.value }),
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Card Number" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.number,
                                  onChange: handleCardNumberChange,
                                  placeholder: "4532 •••• •••• ••••",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono font-bold focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Expiry Date" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.expiry,
                                  onChange: (e) => setCardData({ ...cardData, expiry: e.target.value }),
                                  placeholder: "MM/YY",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "CVV / CVC" }),
                                a.jsx("input", {
                                  type: "password",
                                  maxLength: 4,
                                  value: cardData.cvv,
                                  onChange: (e) => setCardData({ ...cardData, cvv: e.target.value }),
                                  placeholder: "•••",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // TAB 3: UPI & Live Dynamic QR
                    activeGateway === "upi" && a.jsxs("div", {
                      className: "p-5 rounded-2xl bg-[#1a1e29] border border-stone-800 space-y-6 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex flex-col sm:flex-row items-center gap-6 justify-between",
                          children: [
                            // QR Visual
                            a.jsxs("div", {
                              className: "p-4 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center shrink-0 border border-stone-300",
                              children: [
                                a.jsx("img", {
                                  src: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=jbicrafts@okhdfcbank&pn=JBI%20Crafts&am=${finalPayable}&cu=INR`,
                                  alt: "UPI QR",
                                  className: "w-36 h-36 object-contain"
                                }),
                                a.jsxs("div", {
                                  className: "mt-2 text-[10px] font-mono font-bold text-stone-700 flex items-center gap-1",
                                  children: [
                                    a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping" }),
                                    a.jsxs("span", { children: ["Expires in ", a.jsx("strong", { className: "text-rose-600", children: formatQrTimer(qrTimeLeft) })] })
                                  ]
                                })
                              ]
                            }),

                            // UPI ID Form & Fast Apps
                            a.jsxs("div", {
                              className: "space-y-4 flex-1 w-full",
                              children: [
                                a.jsxs("div", {
                                  className: "space-y-1.5",
                                  children: [
                                    a.jsx("label", { className: "font-semibold text-stone-300", children: "Or Enter Your UPI ID (VPA)" }),
                                    a.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        a.jsx("input", {
                                          type: "text",
                                          value: upiId,
                                          onChange: (e) => setUpiId(e.target.value),
                                          className: "flex-1 p-3 rounded-xl border border-stone-700 bg-[#12151d] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                        }),
                                        a.jsx("button", {
                                          type: "button",
                                          onClick: handleInitiatePayment,
                                          className: "bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold px-4 rounded-xl cursor-pointer shadow-md",
                                          children: "Verify & Pay"
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx("span", { className: "text-[11px] text-stone-400 font-semibold", children: "Supported UPI Apps:" }),
                                    a.jsxs("div", {
                                      className: "grid grid-cols-4 gap-2",
                                      children: [
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "Google Pay" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "PhonePe" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "Paytm" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "CRED UPI" })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // TAB 4: NetBanking
                    activeGateway === "netbanking" && a.jsxs("div", {
                      className: "space-y-4 text-xs",
                      children: [
                        a.jsx("span", { className: "font-semibold text-stone-300 block", children: "Select Popular Bank:" }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                          children: popularBanks.map(b => a.jsxs("button", {
                            key: b.id,
                            type: "button",
                            onClick: () => setSelectedBank(b.id),
                            className: `p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                              selectedBank === b.id ? "bg-[#252b3b] border-[#d4a373] text-white shadow-lg ring-1 ring-[#d4a373]/30" : "bg-[#1a1e29] border-stone-800 text-stone-400 hover:text-white"
                            }`,
                            children: [
                              a.jsx("span", { className: "text-xl", children: b.logo }),
                              a.jsx("span", { className: "font-bold", children: b.name })
                            ]
                          }))
                        })
                      ]
                    }),

                    // B2B GST Invoicing Checkbox
                    a.jsxs("div", {
                      className: "pt-4 border-t border-stone-800 space-y-3",
                      children: [
                        a.jsxs("label", {
                          className: "flex items-center gap-2.5 cursor-pointer text-xs text-stone-300 font-semibold select-none",
                          children: [
                            a.jsx("input", {
                              type: "checkbox",
                              checked: isB2B,
                              onChange: (e) => setIsB2B(e.target.checked),
                              className: "w-4 h-4 rounded text-[#d4a373] accent-[#d4a373] cursor-pointer"
                            }),
                            a.jsx("span", { children: "🏢 Claim B2B GST Input Tax Credit (ITC Invoice)" })
                          ]
                        }),
                        isB2B && a.jsxs("div", {
                          className: "p-4 bg-[#1a1e29] rounded-2xl border border-stone-700 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "Registered Business Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.companyName,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, companyName: e.target.value }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white font-medium focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "GSTIN (15 Digits)" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.gstin,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, gstin: e.target.value.toUpperCase() }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white font-mono font-bold focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "State Jurisdiction" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.state,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, state: e.target.value }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // RIGHT COLUMN (5 COLS): Sticky Order Ledger, Golden Coupons & Escrow Guarantee
            a.jsxs("div", {
              className: "lg:col-span-5 space-y-6 lg:sticky lg:top-24",
              children: [

                // SUMMARY LEDGER CARD
                a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/90 p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden",
                  children: [
                    // Subtle background glow
                    a.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-[#d4a373]/10 rounded-full blur-3xl pointer-events-none" }),

                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800 relative z-10",
                      children: [
                        a.jsx("h3", { className: "font-serif text-xl font-bold text-white", children: "Payment Breakdown" }),
                        a.jsx("span", { className: "text-[10px] font-mono text-[#d4a373] bg-[#d4a373]/10 border border-[#d4a373]/30 px-2.5 py-0.5 rounded-full", children: currency })
                      ]
                    }),

                    // Interactive Golden Coupon Bar
                    a.jsxs("div", {
                      className: "space-y-3 relative z-10",
                      children: [
                        a.jsx("span", { className: "text-[11px] font-semibold text-stone-300 block", children: "🎁 Apply Golden Patron Privilege Code:" }),
                        a.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              value: promoCode,
                              onChange: (e) => setPromoCode(e.target.value),
                              placeholder: "Enter PATRON20, HERITAGE10...",
                              className: "flex-1 p-2.5 rounded-xl border border-stone-700 bg-[#1a1e29] text-white text-xs font-mono font-bold focus:border-[#d4a373] focus:outline-none uppercase"
                            }),
                            a.jsx("button", {
                              type: "button",
                              onClick: () => applyPromo(),
                              className: "bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold px-4 py-2.5 rounded-xl text-xs cursor-pointer shadow-md transition-all active:scale-95",
                              children: "Apply"
                            })
                          ]
                        }),
                        promoError && a.jsx("p", { className: "text-rose-400 text-[11px]", children: promoError }),
                        promoApplied && a.jsxs("div", {
                          className: "p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-between",
                          children: [
                            a.jsxs("span", { className: "font-semibold flex items-center gap-1.5", children: [a.jsx("span", { children: "✓" }), promoApplied.discountText] }),
                            a.jsx("button", { onClick: () => { setPromoApplied(null); setPromoCode(""); }, className: "text-stone-400 hover:text-white text-xs cursor-pointer", children: "Remove" })
                          ]
                        }),
                        // Quick click coupons
                        a.jsx("div", {
                          className: "flex gap-2 flex-wrap pt-1",
                          children: quickPromos.map(qp => a.jsx("button", {
                            key: qp.code,
                            type: "button",
                            onClick: () => applyPromo(qp.code),
                            className: "text-[10px] bg-[#1a1e29] hover:bg-[#252b3b] border border-stone-700 text-stone-300 px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium",
                            children: qp.label
                          }))
                        })
                      ]
                    }),

                    // Financial Breakdown Matrix
                    a.jsxs("div", {
                      className: "space-y-3 pt-4 border-t border-stone-800 text-xs relative z-10",
                      children: [
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "Gross Subtotal" }),
                            a.jsx("span", { className: "font-mono font-medium text-stone-200", children: formatMoney(rawBaseAmount) })
                          ]
                        }),
                        discountAmount > 0 && a.jsxs("div", {
                          className: "flex justify-between text-emerald-400 font-semibold",
                          children: [
                            a.jsxs("span", { children: ["Patron Privilege (", promoApplied?.code, ")"] }),
                            a.jsxs("span", { className: "font-mono", children: ["-", formatMoney(discountAmount)] })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "Craft Handling & Insured Transit" }),
                            a.jsx("span", { className: "text-emerald-400 font-bold", children: "FREE COMPLIMENTARY" })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "GST (5% HSN 9701 Included)" }),
                            a.jsx("span", { className: "font-mono text-stone-200", children: formatMoney(gstAmount) })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "pt-4 border-t border-stone-700 flex justify-between items-baseline",
                          children: [
                            a.jsxs("div", {
                              children: [
                                a.jsx("span", { className: "font-serif text-lg font-bold text-white block", children: "Total Settlement" }),
                                a.jsx("span", { className: "text-[10px] text-stone-400", children: "All taxes and insurance included" })
                              ]
                            }),
                            a.jsx("span", { className: "font-serif text-2xl sm:text-3xl font-black text-[#d4a373]", children: formatMoney(finalPayable) })
                          ]
                        })
                      ]
                    }),

                    // Direct Artisan Escrow Gauge
                    a.jsxs("div", {
                      className: "p-4 rounded-2xl bg-gradient-to-r from-[#201812] to-[#141210] border border-[#d4a373]/30 space-y-2 relative z-10",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between text-xs",
                          children: [
                            a.jsxs("span", { className: "text-stone-300 font-bold flex items-center gap-1.5", children: [a.jsx("span", { className: "text-emerald-400", children: "●" }), "Direct Artisan Escrow Share:"] }),
                            a.jsx("span", { className: "font-mono font-bold text-[#d4a373]", children: formatMoney(artisanShare) })
                          ]
                        }),
                        a.jsx("div", {
                          className: "w-full bg-stone-800 rounded-full h-2 overflow-hidden",
                          children: a.jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-[#d4a373] h-2 rounded-full", style: { width: "85%" } })
                        }),
                        a.jsx("p", { className: "text-[10px] text-stone-400", children: "85% proceeds directly disburse to rural handloom & filigree artisan co-operatives upon delivery verification." })
                      ]
                    }),

                    // PRIMARY AUTHORIZE PAYMENT BUTTON
                    a.jsxs("button", {
                      type: "button",
                      disabled: isProcessing,
                      onClick: handleInitiatePayment,
                      className: `w-full py-4 rounded-2xl font-serif text-base sm:text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3 relative z-10 cursor-pointer ${
                        isProcessing ? "bg-stone-800 text-stone-500 cursor-not-allowed" : "bg-gradient-to-r from-[#d4a373] via-[#e5b88a] to-[#c28f5e] text-black hover:brightness-110 hover:scale-[1.01] active:scale-95 shadow-[#d4a373]/20"
                      }`,
                      children: [
                        isProcessing ? a.jsxs(a.Fragment, {
                          children: [
                            a.jsx("span", { className: "w-5 h-5 border-2 border-stone-500 border-t-transparent rounded-full animate-spin" }),
                            a.jsx("span", { children: processingStep })
                          ]
                        }) : a.jsxs(a.Fragment, {
                          children: [
                            a.jsx("span", { children: "🔒" }),
                            a.jsxs("span", { children: ["Authorize & Settle ", formatMoney(finalPayable)] })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // TRUST & COMPLIANCE BADGES
                a.jsxs("div", {
                  className: "p-5 rounded-2xl bg-[#141720] border border-stone-800 space-y-3 text-xs text-stone-400",
                  children: [
                    a.jsx("h4", { className: "font-serif font-bold text-white text-sm", children: "Institutional Security Guarantee" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-2 gap-3 text-[11px]",
                      children: [
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "256-Bit SSL Quantum Safe" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "RBI Tokenized Vault" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "GI Registry Hallmark" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "100% Insured Air Transit" })] })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // 5. GATEWAY CONFIGURATION & DEVELOPER MODAL
        showConfigModal && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
          children: a.jsxs("div", {
            className: "bg-[#141720] border border-stone-700 max-w-xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between border-b border-stone-800 pb-4",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "font-serif text-xl font-bold text-white", children: "Gateway & API Sandbox Manager" }),
                      a.jsx("p", { className: "text-xs text-stone-400", children: "Manage Sandbox/Live API Keys and test webhook dispatch events." })
                    ]
                  }),
                  a.jsx("button", { onClick: () => setShowConfigModal(false), className: "text-stone-400 hover:text-white text-lg p-1 cursor-pointer", children: "✕" })
                ]
              }),

              a.jsxs("form", {
                onSubmit: handleSaveConfig,
                className: "space-y-4 text-xs",
                children: [
                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Processing Environment" }),
                      a.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "sandbox" }),
                            className: `p-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                              gatewayConfig.environment === "sandbox" ? "bg-amber-500/20 border-amber-500 text-amber-300" : "bg-[#1a1e29] border-stone-700 text-stone-400"
                            }`,
                            children: "🧪 Sandbox Mode"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "live" }),
                            className: `p-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                              gatewayConfig.environment === "live" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-[#1a1e29] border-stone-700 text-stone-400"
                            }`,
                            children: "🚀 Live Production"
                          })
                        ]
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Razorpay Key ID" }),
                      a.jsx("input", {
                        type: "text",
                        value: gatewayConfig.razorpayKeyId,
                        onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeyId: e.target.value }),
                        className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Stripe Publishable Key" }),
                      a.jsx("input", {
                        type: "text",
                        value: gatewayConfig.stripePublishableKey,
                        onChange: (e) => setGatewayConfig({ ...gatewayConfig, stripePublishableKey: e.target.value }),
                        className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "pt-4 flex items-center justify-between",
                    children: [
                      configToast ? a.jsx("span", { className: "text-emerald-400 font-bold", children: "✓ Settings Saved to LocalStorage" }) : a.jsx("span", {}),
                      a.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          a.jsx("button", { type: "button", onClick: () => setShowConfigModal(false), className: "px-4 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:text-white cursor-pointer", children: "Close" }),
                          a.jsx("button", { type: "submit", className: "px-5 py-2.5 rounded-xl bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold cursor-pointer shadow-md", children: "Save Keys" })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // 6. ORDER SUCCESS & PRINTABLE TAX INVOICE MODAL
        showSuccessModal && completedOrder && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto",
          children: a.jsxs("div", {
            className: "bg-[#141720] border border-[#d4a373]/50 max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative my-8",
            children: [
              // Top Success Ribbon
              a.jsxs("div", {
                className: "text-center space-y-2",
                children: [
                  a.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl mx-auto shadow-xl", children: "✓" }),
                  a.jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Payment & Patronage Verified" }),
                  a.jsxs("p", { className: "text-xs text-stone-400", children: ["Transaction Reference: ", a.jsx("code", { className: "text-[#d4a373] font-bold font-mono", children: completedOrder.paymentId })] })
                ]
              }),

              // Printable Invoice Sheet (Light Contrast Inside Modal)
              a.jsxs("div", {
                id: "printable-invoice",
                className: "bg-white text-stone-900 rounded-2xl p-6 shadow-inner space-y-4 text-xs border border-stone-200",
                children: [
                  a.jsxs("div", {
                    className: "flex items-start justify-between border-b border-stone-200 pb-3",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("h4", { className: "font-serif text-lg font-bold text-[#735a3e]", children: "JBI Heritage Crafts Guild" }),
                          a.jsx("p", { className: "text-[11px] text-stone-500", children: "Bhubaneswar • Odisha • India | GSTIN: 21AAACJ1234F1Z5" }),
                          a.jsx("p", { className: "text-[11px] text-stone-500", children: "HSN Code: 9701 (Handicrafts & Handlooms)" })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "text-right",
                        children: [
                          a.jsx("span", { className: "text-[10px] bg-stone-100 font-mono font-bold px-2 py-0.5 rounded border border-stone-300 block", children: "TAX INVOICE" }),
                          a.jsxs("span", { className: "text-[11px] text-stone-600 block mt-1", children: ["Date: ", completedOrder.date] }),
                          a.jsxs("span", { className: "text-[11px] text-stone-600 font-mono block", children: ["Order: ", completedOrder.id] })
                        ]
                      })
                    ]
                  }),

                  // Customer / B2B Section
                  completedOrder.isB2B && completedOrder.b2bDetails && a.jsxs("div", {
                    className: "p-2.5 bg-stone-50 rounded-lg border border-stone-200 space-y-0.5",
                    children: [
                      a.jsxs("p", { className: "font-bold text-stone-900", children: ["Billed To: ", completedOrder.b2bDetails.companyName] }),
                      a.jsxs("p", { className: "text-stone-600", children: ["GSTIN: ", completedOrder.b2bDetails.gstin, " | Jurisdiction: ", completedOrder.b2bDetails.state] })
                    ]
                  }),

                  // Items List
                  a.jsxs("div", {
                    className: "divide-y divide-stone-100",
                    children: [
                      a.jsxs("div", {
                        className: "flex justify-between font-bold text-stone-700 py-1",
                        children: [
                          a.jsx("span", { children: "Description" }),
                          a.jsx("span", { children: "Amount" })
                        ]
                      }),
                      completedOrder.items.map((it, idx) => a.jsxs("div", {
                        key: idx,
                        className: "flex justify-between py-1.5 text-stone-800",
                        children: [
                          a.jsxs("span", { children: [it.title, " × ", it.quantity] }),
                          a.jsx("span", { className: "font-mono font-semibold", children: formatMoney(it.price * it.quantity) })
                        ]
                      }))
                    ]
                  }),

                  // Totals
                  a.jsxs("div", {
                    className: "pt-3 border-t border-stone-200 space-y-1 text-right",
                    children: [
                      completedOrder.discount > 0 && a.jsxs("p", { className: "text-emerald-700 font-semibold", children: ["Promo Voucher Privilege: -", formatMoney(completedOrder.discount)] }),
                      a.jsxs("p", { className: "text-stone-600", children: ["GST (CGST 2.5% + SGST 2.5%): ", formatMoney(completedOrder.gstBreakdown?.totalGst || 0)] }),
                      a.jsxs("p", { className: "font-serif text-base font-bold text-stone-900 pt-1", children: ["Grand Total Paid: ", formatMoney(completedOrder.amount)] })
                    ]
                  })
                ]
              }),

              // Actions
              a.jsxs("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-2",
                children: [
                  a.jsxs("button", {
                    type: "button",
                    onClick: () => window.print(),
                    className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border border-stone-700",
                    children: [a.jsx("span", { children: "🖨️" }), a.jsx("span", { children: "Print Official GST Invoice" })]
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: () => { setShowSuccessModal(false); if (onNavigate) onNavigate("home"); },
                    className: "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold text-xs transition-all cursor-pointer shadow-lg",
                    children: "Return to Storefront"
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

new_text = text[:pos_start] + new_stylish_payment_component + "\n\n" + text[pos_orders:]

with open('public/assets/index-v2-aboutphotos.js', 'w') as f:
    f.write(new_text)

print("Updated stylish payment page and removed payments from navbar successfully!")
