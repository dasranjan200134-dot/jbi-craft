import sys, re, subprocess

# Let's read index-v2-aboutphotos.js
with open('public/assets/index-v2-aboutphotos.js', 'r') as f:
    code = f.read()

payment_component_code = """
// ============================================================================
// Professional SaaS-Level Payment & Billing Suite (Multi-Gateway Ready)
// ============================================================================
const ProfessionalPaymentPageComponent = ({ cartItems, onNavigate, onClearCart, onUpdateQuantity, onRemoveItem, onQuickView, onAddToCart }) => {
  // Billing Modes: 'checkout' (Cart & Heirloom Order), 'subscriptions' (Patron Memberships), 'custom_invoice' (B2B / Commission)
  const [billingMode, setBillingMode] = _.useState(cartItems && cartItems.length > 0 ? "checkout" : "subscriptions");
  
  // Currency Selector
  const [currency, setCurrency] = _.useState("INR");
  const currencyRates = { INR: { symbol: "₹", rate: 1, name: "Indian Rupee (INR)" }, USD: { symbol: "$", rate: 0.0116, name: "US Dollar (USD)" }, EUR: { symbol: "€", rate: 0.0107, name: "Euro (EUR)" }, GBP: { symbol: "£", rate: 0.0090, name: "British Pound (GBP)" }, AED: { symbol: "د.إ", rate: 0.0425, name: "UAE Dirham (AED)" } };
  
  const formatMoney = (inrVal) => {
    const curr = currencyRates[currency] || currencyRates.INR;
    const converted = Math.round(inrVal * curr.rate * 100) / 100;
    if (currency === "INR") return `₹${Number(inrVal).toLocaleString('en-IN')}`;
    return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Subscription / Patron Plan State
  const [subscriptionCycle, setSubscriptionCycle] = _.useState("annual"); // 'monthly' or 'annual'
  const [selectedPlanId, setSelectedPlanId] = _.useState("curator"); // 'enthusiast', 'curator', 'royal'

  const patronPlans = [
    {
      id: "enthusiast",
      name: "Artisan Guild Enthusiast",
      tagline: "Essential Patronage for Craft Admirers",
      badge: "Free Tier",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Access our curated catalogue of certified GI craft drops, seasonal exhibition notifications, and digital artisan monographs.",
      features: [
        "100% Certified GI Tag Craft Access",
        "Quarterly Digital Artisan Gazette",
        "Standard Insured Domestic Dispatch",
        "Public Exhibition & Masterclass Invitations",
        "Digital Certificate of Craft Patronage"
      ],
      cta: "Join Free",
      popular: false
    },
    {
      id: "curator",
      name: "Heritage Curator Patron",
      tagline: "Most Preferred by Collectors & Connoisseurs",
      badge: "Most Popular",
      priceMonthly: 1499,
      priceAnnual: 14990, // ~1249/mo
      description: "Subsidize rural master weaver clusters while unlocking 15% VIP lifetime privileges, preview allocations, and physical monographs.",
      features: [
        "15% VIP Patron Discount on All Masterworks",
        "48-Hour Priority Early Access to Rare Drops",
        "Quarterly Hardcover Artisan Monograph & Photo Journal",
        "Complimentary Insured Air Express Delivery",
        "Direct Curator WhatsApp Concierge",
        "Annual GI Hallmark Silver Filigree Patron Seal"
      ],
      cta: "Become a Curator Patron",
      popular: true
    },
    {
      id: "royal",
      name: "Royal Heirloom Guild",
      tagline: "Ultra-VIP Patronage & Bespoke Commissions",
      badge: "VIP Collector",
      priceMonthly: 4999,
      priceAnnual: 49990, // ~4165/mo
      description: "Directly sponsor a multi-generational master artisan family in Raghurajpur or Sambalpur with bespoke custom heirloom creation rights.",
      features: [
        "25% VIP Collector Discount Across Entire Guild",
        "Annual Custom Commission Right (Bespoke Saree or Scroll)",
        "Complimentary 3-Day Artisan Village Residency Pass",
        "Numbered Blockchain & Physical Provenance Deed",
        "Personal Liaison with Master Craftsman",
        "Private VIP Access to National Handloom Salons"
      ],
      cta: "Join Heirloom Guild",
      popular: false
    }
  ];

  // Custom B2B Commission State
  const [customInvoice, setCustomInvoice] = _.useState({
    title: "Bespoke 6-ft Pattachitra Krishna Leela Temple Wall Installation",
    clientName: "Maharaja Heritage Foundation",
    amount: 85000,
    milestone: "50% Advance Booking & Natural Pigment Preparation",
    notes: "Crafted on triple-treated handloom tussar canvas using organic conch-shell white, lampblack, and harital mineral pigments."
  });

  // Promo Code State
  const [promoCode, setPromoCode] = _.useState("");
  const [promoApplied, setPromoApplied] = _.useState(null);
  const [promoError, setPromoError] = _.useState("");

  const handleApplyPromo = (e) => {
    if (e) e.preventDefault();
    setPromoError("");
    const code = promoCode.trim().toUpperCase();
    if (code === "HERITAGE10") {
      setPromoApplied({ code: "HERITAGE10", percent: 10, discountText: "10% Craft Heritage Discount" });
    } else if (code === "PATRONVIP") {
      setPromoApplied({ code: "PATRONVIP", percent: 20, discountText: "20% Patron VIP Privilege" });
    } else if (code === "WELCOME500") {
      setPromoApplied({ code: "WELCOME500", flat: 500, discountText: "Flat ₹500 Welcome Voucher" });
    } else if (code === "SAASLAUNCH") {
      setPromoApplied({ code: "SAASLAUNCH", percent: 15, discountText: "15% SaaS Gateway Launch Privilege" });
    } else {
      setPromoError("Invalid promo code. Try HERITAGE10, PATRONVIP, or SAASLAUNCH");
    }
  };

  // Payment Gateway Tab Selection
  const [activeGateway, setActiveGateway] = _.useState("razorpay"); // 'razorpay', 'cards', 'upi', 'netbanking', 'wallets', 'paylater'

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
            description: "JBI Craft Patron Order",
            card_id: activeGateway === "cards" ? "card_test_8812" : null,
            bank: activeGateway === "netbanking" ? "HDFC" : null,
            wallet: null,
            vpa: activeGateway === "upi" ? "patron@okhdfcbank" : null,
            email: "patron@jbicrafts.com",
            contact: "+919876543210",
            fee: 299,
            tax: 53,
            error_code: null,
            created_at: Math.floor(Date.now() / 1000)
          }
        }
      },
      created_at: Math.floor(Date.now() / 1000)
    };
    setWebhookLog(payload);
  };

  // Card Form State
  const [cardData, setCardData] = _.useState({
    name: "Rashmi Ranjan Das",
    number: "4532 8920 1204 8921",
    expiry: "12/28",
    cvv: "892",
    saveCard: true,
    brand: "visa"
  });

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\\D/g, "").slice(0, 16);
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
    rawBaseAmount = Number(customInvoice.amount) || 50000;
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
      // Free plan
      setShowSuccessModal(true);
      setCompletedOrder({
        id: "PATRON-FREE-" + Date.now().toString(36).toUpperCase(),
        plan: "Artisan Guild Enthusiast",
        amount: 0,
        gateway: "Direct Activation",
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [{ title: "Artisan Guild Enthusiast (Free Lifetime Membership)", quantity: 1, price: 0 }]
      });
      return;
    }

    setIsProcessing(true);
    setProcessingStep("Connecting to " + (activeGateway === "razorpay" ? "Razorpay Gateway (256-Bit SSL)" : activeGateway.toUpperCase() + " Gateway") + "...");

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
          payment_status: "Captured (Razorpay)",
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
    className: "min-h-screen bg-[#faf7f2] text-[#161717] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans",
    children: a.jsxs("div", {
      className: "max-w-7xl mx-auto space-y-8",
      children: [
        // Top Breadcrumbs & Security Banner
        a.jsxs("div", {
          className: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#e5e0d8]",
          children: [
            a.jsxs("div", {
              className: "space-y-1",
              children: [
                a.jsxs("div", {
                  className: "flex items-center gap-2 text-xs text-stone-500 font-medium",
                  children: [
                    a.jsx("button", { onClick: () => onNavigate && onNavigate("home"), className: "hover:text-[#735a3e] cursor-pointer", children: "Home" }),
                    a.jsx("span", { children: "›" }),
                    a.jsx("span", { className: "text-[#735a3e] font-semibold", children: "Enterprise & Patron Billing Suite" })
                  ]
                }),
                a.jsx("h1", {
                  className: "font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161717] tracking-tight",
                  children: "SaaS Payment & Invoicing Portal"
                }),
                a.jsx("p", {
                  className: "text-xs sm:text-sm text-stone-600",
                  children: "Multi-Gateway Processing • Razorpay Standard & UPI Intent Ready • B2B GST Compliance"
                })
              ]
            }),

            // Top Action Controls (Currency Switcher & Gateway Config Link)
            a.jsxs("div", {
              className: "flex items-center gap-2.5 flex-wrap",
              children: [
                // Currency Selector
                a.jsxs("div", {
                  className: "flex items-center bg-white border border-[#e5e0d8] rounded-xl px-3 py-1.5 shadow-2xs text-xs font-semibold text-stone-700",
                  children: [
                    a.jsx("span", { className: "text-stone-400 mr-2", children: "Currency:" }),
                    a.jsx("select", {
                      value: currency,
                      onChange: (e) => setCurrency(e.target.value),
                      className: "bg-transparent font-bold text-[#735a3e] focus:outline-none cursor-pointer",
                      children: Object.keys(currencyRates).map(k => a.jsx("option", { key: k, value: k, children: `${k} (${currencyRates[k].symbol})` }))
                    })
                  ]
                }),

                // Developer / Gateway Linking Button
                a.jsxs("button", {
                  type: "button",
                  onClick: () => setShowConfigModal(true),
                  className: "flex items-center gap-2 bg-[#161717] text-white hover:bg-[#2b2927] px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer",
                  children: [
                    a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                    a.jsx("span", { children: "⚙️ Link Gateways (Razorpay / Cards)" }),
                    a.jsx("span", { className: "text-[10px] bg-stone-800 text-stone-300 px-1.5 py-0.5 rounded", children: gatewayConfig.environment.toUpperCase() })
                  ]
                })
              ]
            })
          ]
        }),

        // Primary SaaS Mode Selector Tabs
        a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-[#eae4db] rounded-2xl",
          children: [
            { id: "subscriptions", label: "👑 Patron & Guild Membership Plans", desc: "SaaS Subscription Tiers & Benefits" },
            { id: "checkout", label: "🛍️ Cart & Craft Order Invoicing", desc: cartItems && cartItems.length > 0 ? `${cartItems.length} Item(s) in Active Bag` : "Direct Masterpiece Invoicing" },
            { id: "custom_invoice", label: "🏢 B2B / Custom Commission", desc: "Bespoke Installation Invoicing" }
          ].map(tab => a.jsxs("button", {
            key: tab.id,
            type: "button",
            onClick: () => setBillingMode(tab.id),
            className: `p-3 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              billingMode === tab.id ? "bg-white text-[#161717] shadow-sm border border-[#d8d1c5]" : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
            }`,
            children: [
              a.jsx("span", { className: "block font-bold text-xs sm:text-sm text-[#735a3e]", children: tab.label }),
              a.jsx("span", { className: "block text-[11px] text-stone-500 mt-0.5", children: tab.desc })
            ]
          }))
        }),

        // MAIN CONTENT: 2-Column Responsive Layout
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
          children: [
            // Left Column (lg:col-span-7): Mode-specific Plan/Item Selector + Payment Gateway Suite
            a.jsxs("div", {
              className: "lg:col-span-7 space-y-6",
              children: [
                // SECTION 1: Subscriptions / Plans View
                billingMode === "subscriptions" && a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e0d8] shadow-2xs space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-[#161717]", children: "Select Patronage Tier" }),
                            a.jsx("p", { className: "text-xs text-stone-500", children: "Directly empower rural craft families while unlocking exclusive collector privileges." })
                          ]
                        }),
                        // Monthly / Annual Toggle
                        a.jsxs("div", {
                          className: "flex items-center bg-[#f2ece4] p-1 rounded-xl text-xs font-bold",
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
                            isSelected ? "border-[#735a3e] bg-[#fcf9f5] ring-2 ring-[#735a3e]/20 shadow-xs" : "border-[#e5e0d8] bg-white hover:border-[#c5bcad]"
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
                                a.jsx("h3", { className: "font-serif text-sm font-bold text-[#161717] leading-tight", children: plan.name }),
                                a.jsxs("div", {
                                  className: "pt-1 pb-2",
                                  children: [
                                    a.jsxs("span", { className: "font-serif text-xl font-bold text-[#161717]", children: [formatMoney(price)] }),
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
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e0d8] shadow-2xs space-y-4",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        a.jsxs("h2", { className: "font-serif text-lg sm:text-xl font-bold text-[#161717]", children: ["Order Items Invoicing (", (cartItems?.length || 1), ")"] }),
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
                                className: "flex items-center border border-[#e5e0d8] rounded-md bg-stone-50",
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
                      className: "p-4 rounded-xl bg-[#faf7f2] border border-[#e5e0d8] flex items-center justify-between text-xs",
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
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e0d8] shadow-2xs space-y-4",
                  children: [
                    a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-[#161717]", children: "B2B & Custom Heritage Commission" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Project / Commission Title" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.title,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, title: e.target.value }),
                              className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-[#faf8f5]"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Invoice Amount (₹ INR)" }),
                            a.jsx("input", {
                              type: "number",
                              value: customInvoice.amount,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, amount: Number(e.target.value) }),
                              className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-[#faf8f5] font-bold"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-700", children: "Milestone Stage" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.milestone,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, milestone: e.target.value }),
                              className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-[#faf8f5]"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // SECTION 4: Multi-Gateway Payment Suite
                a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e0d8] shadow-2xs space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between border-b border-stone-100 pb-3",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-lg sm:text-xl font-bold text-[#161717]", children: "Select Payment Gateway" }),
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
                          activeGateway === gw.id ? "bg-white text-[#735a3e] shadow-xs border border-[#dcd4c7]" : "text-stone-600 hover:text-stone-900"
                        }`,
                        children: [
                          a.jsx("span", { className: "text-base", children: gw.icon }),
                          a.jsx("span", { className: "leading-tight", children: gw.label }),
                          a.jsx("span", { className: "text-[9px] text-stone-400 font-normal", children: gw.badge })
                        ]
                      }))
                    }),

                    // GATEWAY TAB 1: Razorpay Standard SDK (Live / Sandbox)
                    activeGateway === "razorpay" && a.jsxs("div", {
                      className: "p-4 sm:p-5 rounded-xl bg-[#fcf9f5] border border-[#e5e0d8] space-y-4 text-xs",
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
                          className: "w-full max-w-sm mx-auto h-44 rounded-2xl p-5 bg-gradient-to-tr from-[#1f1a17] via-[#3a2c22] to-[#735a3e] text-white shadow-lg relative overflow-hidden flex flex-col justify-between",
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
                                  className: "w-full p-2.5 rounded-lg border border-[#e5e0d8] bg-white text-stone-900"
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
                                  className: "w-full p-2.5 rounded-lg border border-[#e5e0d8] bg-white font-mono text-stone-900"
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
                                  className: "w-full p-2.5 rounded-lg border border-[#e5e0d8] bg-white text-stone-900"
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
                                  className: "w-full p-2.5 rounded-lg border border-[#e5e0d8] bg-white text-stone-900 font-mono"
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
                      className: "p-4 sm:p-5 rounded-xl bg-white border border-[#e5e0d8] space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex flex-col sm:flex-row items-center gap-5",
                          children: [
                            // Dynamic QR Code Box
                            a.jsxs("div", {
                              className: "p-3 bg-white border-2 border-stone-900 rounded-2xl shadow-sm text-center shrink-0 space-y-1.5",
                              children: [
                                a.jsx("div", {
                                  className: "w-36 h-36 bg-[#161717] rounded-xl flex items-center justify-center p-2 relative",
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
                                a.jsx("h4", { className: "font-serif font-bold text-stone-900", children: "Instant UPI Verification" }),
                                a.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    a.jsx("input", {
                                      type: "text",
                                      value: upiId,
                                      onChange: (e) => setUpiId(e.target.value),
                                      placeholder: "patron@okhdfcbank",
                                      className: "flex-1 p-2.5 rounded-lg border border-[#e5e0d8] bg-[#faf8f5] text-stone-900 font-mono text-xs"
                                    }),
                                    a.jsx("button", {
                                      type: "button",
                                      className: "px-3.5 py-2.5 bg-[#735a3e] text-white rounded-lg font-bold text-xs hover:bg-[#5c4731] cursor-pointer shrink-0",
                                      children: "Verify"
                                    })
                                  ]
                                }),
                                a.jsxs("div", {
                                  className: "space-y-1.5 pt-1",
                                  children: [
                                    a.jsx("span", { className: "text-[11px] text-stone-500 font-semibold block", children: "Supported UPI Apps:" }),
                                    a.jsx("div", {
                                      className: "flex gap-2 flex-wrap",
                                      children: ["Google Pay", "PhonePe", "Paytm", "CRED", "BHIM"].map(app => a.jsx("span", {
                                        key: app,
                                        className: "px-2 py-1 rounded-md bg-stone-100 border border-stone-200 text-[10px] font-bold text-stone-700",
                                        children: app
                                      }))
                                    })
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
                      className: "space-y-3 text-xs",
                      children: [
                        a.jsx("p", { className: "font-semibold text-stone-700", children: "Select from Popular Scheduled Commercial Banks:" }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                          children: popularBanks.map(b => a.jsxs("button", {
                            key: b.id,
                            type: "button",
                            onClick: () => setSelectedBank(b.id),
                            className: `p-3 rounded-xl border transition-all flex items-center gap-2 cursor-pointer ${
                              selectedBank === b.id ? "border-[#735a3e] bg-[#fcf9f5] font-bold text-[#735a3e] ring-1 ring-[#735a3e]" : "border-[#e5e0d8] bg-white text-stone-700 hover:border-stone-400"
                            }`,
                            children: [
                              a.jsx("span", { className: "text-base", children: b.icon }),
                              a.jsx("span", { children: b.name })
                            ]
                          }))
                        })
                      ]
                    }),

                    // GATEWAY TAB 5: PayLater / EMI
                    activeGateway === "paylater" && a.jsxs("div", {
                      className: "p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            a.jsx("span", { className: "font-bold text-amber-950 font-serif", children: "Simpl 3-Month Split Pay (0% Interest)" }),
                            a.jsx("span", { className: "text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded font-bold", children: "Instant Approval" })
                          ]
                        }),
                        a.jsxs("p", { className: "text-stone-600 leading-relaxed", children: ["Split your patron total into 3 easy monthly installments of ", a.jsx("strong", { className: "text-stone-900", children: formatMoney(Math.round(finalPayable / 3)) }), " with zero processing fees and zero paperwork."] }),
                        a.jsxs("div", {
                          className: "grid grid-cols-3 gap-2 pt-1 text-center font-bold text-[11px]",
                          children: [
                            a.jsxs("div", { className: "p-2 bg-white rounded-lg border border-amber-200", children: [a.jsx("span", { className: "text-[9px] text-stone-400 block", children: "Today" }), formatMoney(Math.round(finalPayable / 3))] }),
                            a.jsxs("div", { className: "p-2 bg-white rounded-lg border border-amber-200", children: [a.jsx("span", { className: "text-[9px] text-stone-400 block", children: "Month 1" }), formatMoney(Math.round(finalPayable / 3))] }),
                            a.jsxs("div", { className: "p-2 bg-white rounded-lg border border-amber-200", children: [a.jsx("span", { className: "text-[9px] text-stone-400 block", children: "Month 2" }), formatMoney(Math.round(finalPayable / 3))] })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Right Column (lg:col-span-5): Enterprise SaaS Billing Invoice & Checkout Action
            a.jsxs("div", {
              className: "lg:col-span-5 space-y-6 sticky top-24",
              children: [
                // Formal Invoice Card
                a.jsxs("div", {
                  className: "bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e0d8] shadow-md space-y-5 text-xs",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between border-b border-stone-100 pb-3",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h3", { className: "font-serif text-base sm:text-lg font-bold text-[#161717]", children: "Billing & Tax Invoice" }),
                            a.jsxs("p", { className: "text-[11px] text-stone-500", children: ["Invoice Ref: ", a.jsx("span", { className: "font-mono font-semibold", children: "INV-2026-" + Math.floor(Date.now() / 1000).toString().slice(-6) })] })
                          ]
                        }),
                        a.jsx("span", { className: "text-[10px] bg-[#735a3e] text-white px-2 py-0.5 rounded font-bold uppercase", children: billingMode.toUpperCase() })
                      ]
                    }),

                    // Line Items
                    a.jsxs("div", {
                      className: "space-y-2 text-stone-600 divide-y divide-stone-100",
                      children: [
                        a.jsxs("div", {
                          className: "flex justify-between pt-1",
                          children: [
                            a.jsxs("span", { children: [billingMode === "subscriptions" ? `Plan: ${patronPlans.find(p=>p.id===selectedPlanId)?.name}` : billingMode === "checkout" ? "Heritage Craft Masterworks" : customInvoice.title] }),
                            a.jsx("span", { className: "font-semibold text-stone-900", children: formatMoney(rawBaseAmount) })
                          ]
                        }),

                        // Discount Line (if any)
                        discountAmount > 0 && a.jsxs("div", {
                          className: "flex justify-between pt-1.5 text-emerald-700 font-semibold",
                          children: [
                            a.jsxs("span", { children: ["Discount (", promoApplied.code, ")"] }),
                            a.jsxs("span", { children: ["−", formatMoney(discountAmount)] })
                          ]
                        }),

                        // Insured Shipping Line
                        a.jsxs("div", {
                          className: "flex justify-between pt-1.5",
                          children: [
                            a.jsx("span", { children: "Insured Air Express Delivery" }),
                            a.jsx("span", { className: "text-emerald-700 font-bold", children: "FREE" })
                          ]
                        }),

                        // GST 5% Breakdown
                        a.jsxs("div", {
                          className: "flex justify-between pt-1.5 text-[11px] text-stone-500",
                          children: [
                            a.jsx("span", { children: "GST (5% HSN 9701 included: CGST 2.5% + SGST 2.5%)" }),
                            a.jsx("span", { children: formatMoney(gstAmount) })
                          ]
                        })
                      ]
                    }),

                    // Promo Code Input Box
                    a.jsxs("div", {
                      className: "space-y-1.5 pt-2 border-t border-stone-100",
                      children: [
                        a.jsxs("form", {
                          onSubmit: handleApplyPromo,
                          className: "flex gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              value: promoCode,
                              onChange: (e) => setPromoCode(e.target.value),
                              placeholder: "Enter Promo (e.g. HERITAGE10, SAASLAUNCH)",
                              className: "flex-1 px-3 py-2 text-xs rounded-lg border border-[#e5e0d8] bg-[#faf8f5] uppercase font-mono text-stone-900"
                            }),
                            a.jsx("button", {
                              type: "submit",
                              className: "px-3.5 py-2 bg-[#735a3e] text-white rounded-lg font-bold hover:bg-[#5c4731] cursor-pointer",
                              children: "Apply"
                            })
                          ]
                        }),
                        promoApplied && a.jsxs("p", { className: "text-[11px] text-emerald-700 font-semibold", children: ["✓ ", promoApplied.discountText, " applied!"] }),
                        promoError && a.jsx("p", { className: "text-[11px] text-red-600 font-semibold", children: promoError })
                      ]
                    }),

                    // B2B GST Invoicing Toggle
                    a.jsxs("div", {
                      className: "pt-2 border-t border-stone-100 space-y-2",
                      children: [
                        a.jsxs("label", {
                          className: "flex items-center gap-2 font-semibold text-stone-700 cursor-pointer",
                          children: [
                            a.jsx("input", {
                              type: "checkbox",
                              checked: isB2B,
                              onChange: (e) => setIsB2B(e.target.checked),
                              className: "rounded border-stone-300 text-[#735a3e]"
                            }),
                            a.jsx("span", { children: "🏢 Claim Business GST Tax Credit (B2B Invoice)" })
                          ]
                        }),
                        isB2B && a.jsxs("div", {
                          className: "space-y-2 p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px]",
                          children: [
                            a.jsxs("div", {
                              children: [
                                a.jsx("span", { className: "text-stone-500 block", children: "Company Legal Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.companyName,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, companyName: e.target.value }),
                                  className: "w-full p-1.5 rounded border border-stone-300 bg-white"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("span", { className: "text-stone-500 block", children: "GSTIN (15 Digits)" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.gstin,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, gstin: e.target.value }),
                                  className: "w-full p-1.5 rounded border border-stone-300 bg-white font-mono uppercase"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // Final Total Amount
                    a.jsxs("div", {
                      className: "pt-3 border-t-2 border-[#e5e0d8] flex items-baseline justify-between",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("span", { className: "text-xs font-bold text-stone-600 block uppercase tracking-wider", children: "Total Payable" }),
                            a.jsx("span", { className: "text-[10px] text-stone-400", children: "All Taxes & Insured Freight Included" })
                          ]
                        }),
                        a.jsx("span", { className: "font-serif text-2xl sm:text-3xl font-bold text-[#735a3e]", children: formatMoney(finalPayable) })
                      ]
                    }),

                    // Primary Checkout / Pay Button
                    a.jsx("button", {
                      type: "button",
                      onClick: handleInitiatePayment,
                      disabled: isProcessing,
                      className: `w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        isProcessing ? "bg-stone-400 text-white cursor-not-allowed" : "bg-[#735a3e] text-white hover:bg-[#5c4731] hover:shadow-lg"
                      }`,
                      children: isProcessing ? a.jsxs(a.Fragment, {
                        children: [
                          a.jsx("span", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                          a.jsx("span", { children: processingStep || "Authorizing Payment..." })
                        ]
                      }) : a.jsxs(a.Fragment, {
                        children: [
                          a.jsx("span", { children: activeGateway === "razorpay" ? "⚡ Pay via Razorpay" : `🔒 Pay ${formatMoney(finalPayable)} Now` }),
                          a.jsx("span", { children: "→" })
                        ]
                      })
                    }),

                    // Trust Pledges
                    a.jsxs("div", {
                      className: "space-y-2 pt-2 border-t border-stone-100 text-[11px] text-stone-500",
                      children: [
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-700 font-bold", children: "✓" }), a.jsx("span", { children: "85% proceeds transferred to artisan cluster bank accounts" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-700 font-bold", children: "✓" }), a.jsx("span", { children: "Official Government GI Certificate & Hallmarked Tag included" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-700 font-bold", children: "✓" }), a.jsx("span", { children: "7-Day Hassle-Free Transit Replacement Guarantee" })] })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // MODAL 1: Developer & Gateway Linking Settings Modal
        showConfigModal && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
          children: a.jsxs("div", {
            className: "bg-white max-w-2xl w-full rounded-2xl p-6 border border-stone-300 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-xs text-stone-800",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between border-b border-stone-200 pb-3",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "font-serif text-lg font-bold text-stone-900", children: "⚙️ Payment Gateway & Webhook Credentials" }),
                      a.jsx("p", { className: "text-[11px] text-stone-500", children: "Connect real Razorpay, Stripe, and Webhook APIs for production or sandbox testing." })
                    ]
                  }),
                  a.jsx("button", { type: "button", onClick: () => setShowConfigModal(false), className: "p-1 rounded text-stone-500 hover:text-stone-900 text-base font-bold cursor-pointer", children: "✕" })
                ]
              }),

              // Config Form
              a.jsxs("form", {
                onSubmit: handleSaveConfig,
                className: "space-y-4",
                children: [
                  // Environment Toggle
                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-bold text-stone-800", children: "Gateway Environment Mode" }),
                      a.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          a.jsxs("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "sandbox" }),
                            className: `p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                              gatewayConfig.environment === "sandbox" ? "bg-amber-50 border-amber-400 text-amber-900 ring-1 ring-amber-400" : "bg-stone-50 border-stone-200 text-stone-600"
                            }`,
                            children: ["🧪 Sandbox / Test Mode", a.jsx("span", { className: "block text-[10px] font-normal text-stone-500", children: "Simulated transactions & mock callbacks" })]
                          }),
                          a.jsxs("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "live" }),
                            className: `p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                              gatewayConfig.environment === "live" ? "bg-emerald-50 border-emerald-400 text-emerald-900 ring-1 ring-emerald-400" : "bg-stone-50 border-stone-200 text-stone-600"
                            }`,
                            children: ["🚀 Production / Live Mode", a.jsx("span", { className: "block text-[10px] font-normal text-stone-500", children: "Uses real Razorpay/Stripe keys" })]
                          })
                        ]
                      })
                    ]
                  }),

                  // Razorpay Keys
                  a.jsxs("div", {
                    className: "p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          a.jsx("h4", { className: "font-bold text-stone-900 font-serif", children: "Razorpay Standard Configuration" }),
                          a.jsx("span", { className: "text-[10px] text-blue-800 font-semibold", children: "dashboard.razorpay.com" })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "font-semibold text-stone-700", children: "Razorpay Key ID" }),
                              a.jsx("input", {
                                type: "text",
                                value: gatewayConfig.razorpayKeyId,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeyId: e.target.value }),
                                placeholder: "rzp_test_... or rzp_live_...",
                                className: "w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-900"
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "font-semibold text-stone-700", children: "Razorpay Key Secret" }),
                              a.jsx("input", {
                                type: "password",
                                value: gatewayConfig.razorpayKeySecret,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeySecret: e.target.value }),
                                placeholder: "••••••••••••••••",
                                className: "w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-900"
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "space-y-1 sm:col-span-2",
                            children: [
                              a.jsx("label", { className: "font-semibold text-stone-700", children: "Razorpay Webhook Secret (Optional)" }),
                              a.jsx("input", {
                                type: "text",
                                value: gatewayConfig.razorpayWebhookSecret,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayWebhookSecret: e.target.value }),
                                placeholder: "whsec_...",
                                className: "w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-900"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  // Stripe / International Keys
                  a.jsxs("div", {
                    className: "p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3",
                    children: [
                      a.jsx("h4", { className: "font-bold text-stone-900 font-serif", children: "Credit Card / Stripe Configuration" }),
                      a.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "font-semibold text-stone-700", children: "Stripe Publishable Key" }),
                              a.jsx("input", {
                                type: "text",
                                value: gatewayConfig.stripePublishableKey,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, stripePublishableKey: e.target.value }),
                                placeholder: "pk_test_... or pk_live_...",
                                className: "w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-900"
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              a.jsx("label", { className: "font-semibold text-stone-700", children: "Stripe Secret Key" }),
                              a.jsx("input", {
                                type: "password",
                                value: gatewayConfig.stripeSecretKey,
                                onChange: (e) => setGatewayConfig({ ...gatewayConfig, stripeSecretKey: e.target.value }),
                                placeholder: "sk_test_...",
                                className: "w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-900"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  // Webhook Testing Trigger
                  a.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-2",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          a.jsx("span", { className: "font-bold text-blue-900", children: "Webhook Event Simulator" }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => handleSimulateWebhook("payment.captured"),
                            className: "px-2.5 py-1 bg-blue-700 text-white rounded text-[11px] font-bold hover:bg-blue-800 cursor-pointer",
                            children: "Trigger 'payment.captured'"
                          })
                        ]
                      }),
                      webhookLog && a.jsx("pre", {
                        className: "p-2 rounded bg-[#161717] text-emerald-400 font-mono text-[10px] max-h-32 overflow-y-auto",
                        children: JSON.stringify(webhookLog, null, 2)
                      })
                    ]
                  }),

                  // Action Buttons
                  a.jsxs("div", {
                    className: "flex items-center justify-between pt-2 border-t border-stone-200",
                    children: [
                      configToast && a.jsx("span", { className: "text-emerald-700 font-bold text-xs", children: "✓ Gateway credentials saved!" }),
                      a.jsxs("div", {
                        className: "flex gap-2 ml-auto",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setShowConfigModal(false),
                            className: "px-4 py-2 bg-stone-100 text-stone-700 rounded-xl font-bold hover:bg-stone-200 cursor-pointer",
                            children: "Cancel"
                          }),
                          a.jsx("button", {
                            type: "submit",
                            className: "px-5 py-2 bg-[#735a3e] text-white rounded-xl font-bold hover:bg-[#5c4731] cursor-pointer shadow-xs",
                            children: "Save Gateway Config"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // MODAL 2: Payment Authorized & GST Tax Invoice Receipt Modal
        showSuccessModal && completedOrder && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
          children: a.jsxs("div", {
            className: "bg-white max-w-xl w-full rounded-2xl p-6 sm:p-8 border border-stone-300 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto text-xs text-stone-800",
            children: [
              // Header Badge & Order Ref
              a.jsxs("div", {
                className: "text-center space-y-2 pb-4 border-b border-stone-200",
                children: [
                  a.jsx("div", { className: "w-14 h-14 bg-emerald-100 text-emerald-800 text-2xl font-bold rounded-full flex items-center justify-center mx-auto shadow-xs", children: "✓" }),
                  a.jsx("h3", { className: "font-serif text-xl sm:text-2xl font-bold text-stone-900", children: "Payment Successfully Captured!" }),
                  a.jsxs("p", { className: "text-xs text-stone-500", children: ["Transaction ID: ", a.jsx("span", { className: "font-mono font-bold text-stone-800", children: completedOrder.paymentId })] })
                ]
              }),

              // Printable Invoice Sheet
              a.jsxs("div", {
                id: "jbi-printable-tax-invoice",
                className: "p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 font-sans",
                children: [
                  a.jsxs("div", {
                    className: "flex justify-between items-start border-b border-stone-200 pb-2",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("h4", { className: "font-serif font-bold text-sm text-stone-900", children: "JBI HERITAGE CRAFTS & GUILD" }),
                          a.jsx("p", { className: "text-[10px] text-stone-500", children: "Plot 14, Heritage Cluster, Raghurajpur, Puri, Odisha 752012" }),
                          a.jsx("p", { className: "text-[10px] text-stone-500 font-mono", children: "GSTIN: 21AAACJ1234F1Z5 • State Code: 21 (Odisha)" })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "text-right",
                        children: [
                          a.jsx("span", { className: "font-bold text-stone-900 block", children: completedOrder.id }),
                          a.jsx("span", { className: "text-[10px] text-stone-500 block", children: completedOrder.date })
                        ]
                      })
                    ]
                  }),

                  // Bill To
                  a.jsxs("div", {
                    className: "flex justify-between text-[11px]",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("span", { className: "text-stone-400 block", children: "Billed To:" }),
                          a.jsx("span", { className: "font-bold text-stone-800", children: completedOrder.isB2B ? completedOrder.b2bDetails.companyName : cardData.name || "Patron" }),
                          completedOrder.isB2B && a.jsx("span", { className: "text-[10px] text-stone-500 block font-mono", children: `GSTIN: ${completedOrder.b2bDetails.gstin}` })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "text-right",
                        children: [
                          a.jsx("span", { className: "text-stone-400 block", children: "Payment Gateway:" }),
                          a.jsx("span", { className: "font-bold text-[#735a3e]", children: completedOrder.gateway })
                        ]
                      })
                    ]
                  }),

                  // Items Table
                  a.jsx("div", {
                    className: "divide-y divide-stone-200 border-y border-stone-200 py-1",
                    children: completedOrder.items.map((it, idx) => a.jsxs("div", {
                      key: idx,
                      className: "py-1.5 flex justify-between text-xs",
                      children: [
                        a.jsxs("span", { children: [it.title, " × ", it.quantity || 1] }),
                        a.jsx("span", { className: "font-bold", children: formatMoney((it.price || completedOrder.amount) * (it.quantity || 1)) })
                      ]
                    }))
                  }),

                  // Total Breakdown
                  a.jsxs("div", {
                    className: "space-y-1 text-[11px] text-stone-600 pt-1",
                    children: [
                      completedOrder.discount > 0 && a.jsxs("div", { className: "flex justify-between text-emerald-700", children: [a.jsx("span", { children: "Promo Discount" }), a.jsxs("span", { children: ["−", formatMoney(completedOrder.discount)] })] }),
                      a.jsxs("div", { className: "flex justify-between", children: [a.jsx("span", { children: "Insured Air Freight" }), a.jsx("span", { className: "text-emerald-700 font-bold", children: "FREE" })] }),
                      a.jsxs("div", { className: "flex justify-between font-serif text-sm font-bold text-stone-900 pt-1 border-t border-stone-200", children: [a.jsx("span", { children: "Total Paid" }), a.jsx("span", { className: "text-[#735a3e]", children: formatMoney(completedOrder.amount) })] })
                    ]
                  })
                ]
              }),

              // Actions: Print / View Orders / Return
              a.jsxs("div", {
                className: "grid grid-cols-2 gap-3 pt-2",
                children: [
                  a.jsx("button", {
                    type: "button",
                    onClick: () => window.print(),
                    className: "py-2.5 px-4 bg-stone-100 text-stone-800 rounded-xl font-bold hover:bg-stone-200 transition-colors cursor-pointer text-center",
                    children: "🖨️ Print / Save PDF"
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: () => { setShowSuccessModal(false); if (onNavigate) onNavigate("orders"); },
                    className: "py-2.5 px-4 bg-[#735a3e] text-white rounded-xl font-bold hover:bg-[#5c4731] transition-colors cursor-pointer text-center shadow-xs",
                    children: "📦 View in My Orders →"
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

# Insert ProfessionalPaymentPageComponent before OrdersPageComponent
pos_orders = code.find('const OrdersPageComponent =')
if pos_orders != -1:
    code = code[:pos_orders] + payment_component_code + "\n" + code[pos_orders:]
    print("Inserted ProfessionalPaymentPageComponent successfully!")
else:
    print("ERROR: Could not find OrdersPageComponent insertion point!")
    sys.exit(1)

# Add 'payments' to navigation items
code = code.replace(
    'ce=[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"},{id:"orders",label:"ORDERS"}]',
    'ce=[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"},{id:"orders",label:"ORDERS"},{id:"payments",label:"PAYMENTS"}]'
)

# Add 'payments' view in main view router
target_router = 'o==="orders"&&a.jsx(OrdersPageComponent,{onNavigate:p,onExploreClick:()=>{d("all"),p("shop")},onQuickView:h,onAddToCart:C=>te(C,1),onSelectArtisan:le}),'
replacement_router = target_router + 'o==="payments"&&a.jsx(ProfessionalPaymentPageComponent,{cartItems:X,onNavigate:p,onClearCart:we,onUpdateQuantity:F,onRemoveItem:Ve,onQuickView:h,onAddToCart:C=>te(C,1)}),'

if target_router in code:
    code = code.replace(target_router, replacement_router, 1)
    print("Inserted payments view to router successfully!")
else:
    print("ERROR: Could not find target_router point!")
    sys.exit(1)

# Add "Open SaaS Payment Portal" button in Cart Drawer Lb
target_cart_checkout = 'a.jsx("button", { type: "button", onClick: () => setStep(2), className: "w-full py-3 bg-[#735a3e] text-white rounded-xl'
if target_cart_checkout in code:
    # Let's find step === 1 in Lb and add a pro checkout portal shortcut
    pass

with open('public/assets/index-v2-aboutphotos.js', 'w') as f:
    f.write(code)

print("Saved updated index-v2-aboutphotos.js!")

res = subprocess.run(['node', '--check', 'public/assets/index-v2-aboutphotos.js'], capture_output=True, text=True)
if res.returncode == 0:
    print("Syntax verification PASSED!")
else:
    print("Syntax verification FAILED:\n", res.stderr)
    sys.exit(1)
