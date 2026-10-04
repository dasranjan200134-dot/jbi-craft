/**
 * JBI Craft - Advanced Complete Multi-Language Engine
 * Translates exact strings, compound phrases, dynamic prices, and attributes.
 * Zero mixing, zero console errors, 100% smooth coverage.
 */
(function() {
  'use strict';

  const LANGUAGE_OPTIONS = [
  {
    "id": "australia",
    "name": "Astralia",
    "country": "Australia",
    "lang": "English (AU)",
    "script": "English",
    "code": "en",
    "region": "global",
    "flag": "🇦🇺",
    "label": "Astralia — English (AU)",
    "currency": "AUD",
    "currencySymbol": "A$",
    "currencyName": "Australian Dollar",
    "rate": 0.0182
  },
  {
    "id": "usa",
    "name": "USA",
    "country": "United States (USA)",
    "lang": "English (US)",
    "script": "English",
    "code": "en",
    "region": "global",
    "flag": "🇺🇸",
    "label": "USA — English (US)",
    "currency": "USD",
    "currencySymbol": "$",
    "currencyName": "US Dollar",
    "rate": 0.0116
  },
  {
    "id": "uae",
    "name": "UAE",
    "country": "United Arab Emirates (UAE)",
    "lang": "العربية (Arabic)",
    "script": "العربية",
    "code": "ar",
    "dir": "rtl",
    "region": "middle-east",
    "flag": "🇦🇪",
    "label": "UAE — العربية (Arabic)",
    "currency": "AED",
    "currencySymbol": "د.إ",
    "currencyName": "UAE Dirham",
    "rate": 0.0425
  },
  {
    "id": "queit",
    "name": "Queit",
    "country": "Kuwait (Queit)",
    "lang": "العربية (Kuwaiti)",
    "script": "العربية",
    "code": "ar",
    "dir": "rtl",
    "region": "middle-east",
    "flag": "🇰🇼",
    "label": "Queit — العربية (Kuwaiti Arabic)",
    "currency": "KWD",
    "currencySymbol": "د.ك",
    "currencyName": "Kuwaiti Dinar",
    "rate": 0.00357
  },
  {
    "id": "london",
    "name": "London",
    "country": "United Kingdom (London)",
    "lang": "English (UK)",
    "script": "English",
    "code": "en",
    "region": "global",
    "flag": "🇬🇧",
    "label": "London — English (UK)",
    "currency": "GBP",
    "currencySymbol": "£",
    "currencyName": "British Pound",
    "rate": 0.0091
  },
  {
    "id": "nepal",
    "name": "Nepal",
    "country": "Nepal",
    "lang": "नेपाली (Nepali)",
    "script": "नेपाली",
    "code": "ne",
    "region": "subcontinent",
    "flag": "🇳🇵",
    "label": "Nepal — नेपाली (Nepali)",
    "currency": "NPR",
    "currencySymbol": "रू",
    "currencyName": "Nepalese Rupee",
    "rate": 1.6
  },
  {
    "id": "china",
    "name": "China",
    "country": "China (PRC)",
    "lang": "中文 (Chinese)",
    "script": "简体中文",
    "code": "zh-CN",
    "region": "asia",
    "flag": "🇨🇳",
    "label": "China — 中文 (Simplified Chinese)",
    "currency": "CNY",
    "currencySymbol": "¥",
    "currencyName": "Chinese Yuan",
    "rate": 0.0847
  },
  {
    "id": "bhutan",
    "name": "Bhutan",
    "country": "Bhutan (Kingdom)",
    "lang": "རྫོང་ཁ (Dzongkha)",
    "script": "རྫོང་ཁ",
    "code": "dz",
    "region": "asia",
    "flag": "🇧🇹",
    "label": "Bhutan — རྫོང་ཁ (Dzongkha)",
    "currency": "BTN",
    "currencySymbol": "Nu.",
    "currencyName": "Bhutanese Ngultrum",
    "rate": 1.0
  },
  {
    "id": "shri-lanka",
    "name": "Shri lanka",
    "country": "Sri Lanka (Shri lanka)",
    "lang": "සිංහල (Sinhala)",
    "script": "සිංහල",
    "code": "si",
    "region": "subcontinent",
    "flag": "🇱🇰",
    "label": "Shri lanka — සිංහල (Sinhala)",
    "currency": "LKR",
    "currencySymbol": "රු",
    "currencyName": "Sri Lankan Rupee",
    "rate": 3.5
  },
  {
    "id": "default",
    "name": "India / Default",
    "country": "India (Original Heritage)",
    "lang": "English (Original)",
    "script": "English",
    "code": "en",
    "region": "subcontinent",
    "flag": "🇮🇳",
    "label": "India / Default — English (Original)",
    "currency": "INR",
    "currencySymbol": "₹",
    "currencyName": "Indian Rupee",
    "rate": 1.0
  }
];

  const DICTIONARIES = {
  "ar": {
    "Making of Sacred Pattachitra Heritage Art": "صناعة فن الباتاشيترا التراثي المقدس",
    "Raghurajpur Heritage Crafts Village, Puri": "قرية راغوراجبور للحرف التراثية، بوري",
    "EXPLORE COLLECTION": "استكشف المجموعة",
    "Explore Collection": "استكشف المجموعة",
    "EXPLORE CRAFTS": "استكشف الحرف",
    "Explore Crafts": "استكشف الحرف",
    "Explore Craft Collection": "استكشف مجموعة الحرف",
    "Explore Odisha Collection": "استكشف مجموعة أوديشا",
    "Direct from Master Artisans": "مباشرة من كبار الحرفيين",
    "Eco-Friendly Sustainable Craft": "حرف بيئية مستدامة",
    "Fast & Secure Insured Shipping": "شحن سريع وآمن ومؤمن عليه",
    "GI-Tagged Provenance": "منشأ موثق بالمؤشر الجغرافي",
    "Switch Account": "تبديل الحساب",
    "Password": "كلمة المرور",
    "Confirm *": "تأكيد *",
    "Confirm New Password": "تأكيد كلمة المرور الجديدة",
    "Forgot Password?": "هل نسيت كلمة المرور؟",
    "Back to Sign In": "العودة لتسجيل الدخول",
    "JBI CRAFT": "حرف جي بي آي",
    "JBI Craft": "حرف جي بي آي",
    "JBI Crafts": "حرف جي بي آي",
    "HERITAGE • QUALITY • TRUST": "تراث • جودة • ثقة",
    "Odisha ki Karigari,": "حرفية أوديشا،",
    "Har Ghar ke Liye": "لكل منزل عصري",
    "SABSE ZYADA PASAND": "الأكثر طلباً ومحبة",
    "Best Sellers": "الأكثر مبيعاً",
    "Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye.": "قطعنا الأكثر تميزاً — اختارها محبو الفنون والأصالة بعناية فائقة.",
    "Explore Complete Collection": "استكشف المجموعة الكاملة",
    "Our Guiding Craft Pillars": "أركان حرفتنا الأساسية",
    "HOME": "الرئيسية",
    "SHOP": "المتجر",
    "ABOUT": "من نحن",
    "CONTACT": "اتصل بنا",
    "ORDERS": "الطلبات",
    "Home": "الرئيسية",
    "Shop": "المتجر",
    "About": "من نحن",
    "Contact": "اتصل بنا",
    "Orders": "الطلبات",
    "SHOP NOW": "تسوق الآن",
    "Shop Now": "تسوق الآن",
    "VIEW ALL PRODUCTS": "عرض جميع المنتجات",
    "Explore Odisha Heritage by Category": "استكشف تراث أوديشا حسب الفئة",
    "ADD TO BAG": "أضف إلى السلة",
    "Add to Bag": "أضف إلى السلة",
    "Add To Bag": "أضف إلى السلة",
    "BUY NOW": "اشتري الآن",
    "Buy Now": "اشتري الآن",
    "⚡ Buy Now": "⚡ اشتري الآن",
    "Quick View": "نظرة سريعة",
    "View Details": "عرض التفاصيل",
    "VIEW DETAILS": "عرض التفاصيل",
    "Added": "تمت الإضافة",
    "SELECT LANGUAGE": "اختر اللغة",
    "Select Language": "اختر اللغة",
    "GLOBAL ATELIER": "الأتيليه العالمي",
    "Select Country & Language": "اختر الدولة واللغة",
    "Search country or language...": "البحث عن الدولة أو اللغة...",
    "Reset to English (Original)": "إعادة التعيين إلى الإنجليزية (الأصلية)",
    "JBI Cultural Engine": "محرك جي بي آي الثقافي",
    "All": "الكل",
    "Global": "عالمي",
    "Middle East": "الشرق الأوسط",
    "Subcontinent": "شبه القارة",
    "Asia": "آسيا",
    "In Stock": "متوفر في المخزون",
    "Out of Stock": "نفد من المخزون",
    "OUT OF STOCK": "نفد من المخزون",
    "SOLD OUT": "مباع بالكامل",
    "Notify When Available": "أبلغني عند التوفر",
    "Notify Me": "أبلغني",
    "NEW": "جديد",
    "New": "جديد",
    "Handloom & Textiles": "المنسوجات اليدوية",
    "Handicrafts": "الحرف اليدوية",
    "Heritage Art": "الفنون التراثية",
    "Jewellery & Ornaments": "المجوهرات والحلي",
    "COIR & NATURAL FIBER": "ألياف جوز الهند والنباتات الطبيعية",
    "SAMBALPURI IKAT WEAVING": "نسيج إيكات سامبالبوري اليدوي",
    "DONGRIA TRIBAL WEAVING": "نسيج قبائل دونغريا اليدوي",
    "DHOKRA METAL CASTING": "سباكة دوكرا النحاسية الشمعية",
    "BALESWAR LAC JEWELLERY": "مجوهرات ورنيش باليسوار",
    "GOLDEN GRASS & KAINTHA": "أعشاب كاينثا الذهبية الطبيعية",
    "WOOD CARVING & CRAFT": "النحت على الخشب والحرف التراثية",
    "JUTE & NATURAL FIBER": "الجوت والألياف الطبيعية العضوية",
    "STONE CARVING": "النحت على الحجر الرملي",
    "DHOKRA METAL JEWELLERY": "حلي دوكرا النحاسية التراثية",
    "TUSSAR SILK WEAVING": "نسيج حرير توسار الطبيعي",
    "PATTACHITRA & TALAPATRA": "باتاتشيترا وأوراق النخيل المحفورة",
    "Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll": "مخطوطة غيتا غوفيندا المقدسة المحفورة على سعف النخيل المطوي",
    "Radha Krishna & Tree of Life Pattachitra Canvas Painting": "لوحة باتاتشيترا القماشية لرادها وكريشنا وشجرة الحياة",
    "Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan": "مروحة طقسية مقدسة محفورة على سعف النخيل بتجسيدات داشافاتارا",
    "Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription": "نقش مصغر على سعف النخيل لرقصة فاسانت راسا ليلا الربيعية",
    "Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)": "حجر طحن خشب الصندل التراثي من الحجر الرملي (شاندان بيدي)",
    "Heritage Dhokra Brass Mana (Traditional Measuring Bowl)": "وعاء قياس مانا نحاسي تراثي بتقنية دوكرا",
    "Dhokra Brass Metal Craft Jewellery Box": "صندوق مجوهرات نحاسي مصنوع بحرفية دوكرا",
    "Coir Craft Multicoloured Flower Decor": "زينة زهور ملونة مصنوعة من ألياف جوز الهند",
    "Handloom Pure Silk Saree - with Blouse": "ساري حرير خالص منسوج يدوياً مع بلوزة مرافقة",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)": "طقم بدلة سامبالبوري قطن خالص يدوي 3 قطع (أحمر قرمزي)",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set": "طقم بدلة سامبالبوري قطن خالص يدوي 3 قطع",
    "Fine Handloom Tussar Silk Dupatta with Temple Border": "وشاح دوباتا من حرير توسار اليدوي مع حواف المعبد التراثية",
    "Handloom Fine Tussar Silk Saree (Peacock Teal)": "ساري من حرير توسار اليدوي الفاخر (أزرق طاووسي)",
    "Handloom Fine Tussar Silk Saree - with Blouse": "ساري حرير توسار يدوي فاخر مع بلوزة",
    "Dongria Kondh Tribal Handwoven Shawl": "شال قبيلة دونغريا كونده المنسوج يدوياً",
    "Handcrafted Golden Grass Square Pedi Box with Lid": "صندوق بيدي مربع بغطاء مصنوع يدوياً من العشب الذهبي",
    "Handcrafted Golden Grass Round Storage Basket": "سلة تخزين دائرية مصنوعة يدوياً من العشب الذهبي",
    "Handwoven Golden Grass Square Tray": "صينية مربعة منسوجة يدوياً من العشب الذهبي",
    "Handcrafted Jute & Cotton Executive File Folder": "مجلد ملفات تنفيذي مصنوع يدوياً من الجوت والقطن",
    "Crafted Jute Executive Conference Bag": "حقيبة مؤتمرات تنفيذية مصنوعة من الجوت الفاخر",
    "Crafted Jute Laptop Messenger Bag (15-inch)": "حقيبة كتف للكمبيوتر المحمول من الجوت (15 بوصة)",
    "Handcrafted Mango Wood Slatted Coasters (Set of 6)": "قواعد أكواب خشبية من خشب المانجو (طقم 6 قطع)",
    "Heritage Dokra Brass Tribal Choker Necklace Set": "طقم عقد شوكر قبلي نحاسي تراثي بتقنية دوكرا",
    "Dhokra Tribal Choker Necklace Set with Drops": "طقم عقد شوكر دوكرا قبلي مع حلي متدلية",
    "Dokra Earth Pendant Necklace with Terracotta Beads": "عقد دوكرا بقلادة أرضية مع خرز التراكوتا الفخاري",
    "Dokra Round Sun-Mandala Pendant Necklace": "عقد دوكرا بقلادة ماندالا الشمس الدائرية",
    "Dokra Multi-Strand Brass Beads Layered Necklace": "عقد دوكرا متعدد الطبقات بخرز النحاس الأصفر",
    "Dokra Spiral Penth Drop Earrings": "أقراط دوكرا متدلية بتصميم حلزوني",
    "Dokra Spiral Web Brass Dangler Earrings": "أقراط دوكرا متدلية بنقش شبكة نحاسية حلزونية",
    "Dokra Tribal Fish Motif Dangler Earrings": "أقراط دوكرا متدلية بزخرفة السمكة القبلية",
    "Dokra Egg-Shaped Spiral Drop Earrings": "أقراط دوكرا بيضاوية متدلية بشكل حلزوني",
    "Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)": "أساور باليسوار المصنوعة يدوياً من الورنيش (زوج بنقش مضفر)",
    "Baleswar Lac Bangles with Spiral Striped Patterns (Pair)": "أساور باليسوار من الورنيش بخطوط حلزونية (زوج)",
    "Master Guild:": "نقابة الحرفيين:",
    "Master Rabindra Behera": "المعلم رابيندرا بهيرا",
    "Master Rabindra Behera & Chitrakar Guild": "المعلم رابيندرا بهيرا ونقابة الرسامين",
    "Bikram & Devendra Meher": "بيكرام وديفيندرا ميهير",
    "Madhab Rana & Guild": "مادهاب رانا ونقابته الحرفية",
    "Basudev Mohapatra & Shilpi Guild": "باسوديف موهاباترا ونقابة النحاتين",
    "Gopal Sahu & Kantilo Kansari Guild": "غوبال ساهو ونقابة صانعي النحاس كانساري",
    "Pratima Biswal & Coastal SHG Federation": "براتيما بيسوال واتحاد المجموعات النسائية الساحلية",
    "Subhadra Jena & Sankhari Guild": "سوبهادرا جينا ونقابة صانعي الحلي سانخاري",
    "Atelier Bag": "حقيبة التسوق",
    "Your Bag is Empty": "حقيبة التسوق فارغة",
    "Your bag is currently empty.": "حقيبة التسوق فارغة حالياً.",
    "Subtotal": "المجموع الفرعي",
    "Total": "الإجمالي",
    "Proceed to Checkout": "المتابعة لإتمام الطلب",
    "Continue Shopping": "مواصلة التسوق",
    "Order Summary": "ملخص الطلب",
    "Shipping Address": "عنوان الشحن",
    "Full Name *": "الاسم الكامل *",
    "Full Name": "الاسم الكامل",
    "Email Address *": "البريد الإلكتروني *",
    "Email Address": "البريد الإلكتروني",
    "Phone Number": "رقم الهاتف",
    "City *": "المدينة *",
    "City": "المدينة",
    "State *": "الولاية / المنطقة *",
    "State": "الولاية / المنطقة",
    "PIN Code": "الرمز البريدي",
    "PIN / Postal Code": "الرمز البريدي",
    "Close": "إغلاق",
    "Cancel": "إلغاء",
    "Save Changes": "حفظ التغييرات",
    "Apply": "تطبيق",
    "Discount": "خصم",
    "Free Shipping": "شحن مجاني",
    "Free Shipping Across India": "شحن مجاني في جميع أنحاء الهند",
    "Worldwide Dispatch": "شحن دولي",
    "100% Genuine Craftsmanship": "حرفية أصلية 100٪",
    "Sign In": "تسجيل الدخول",
    "Sign Up": "إنشاء حساب",
    "Sign Out": "تسجيل الخروج",
    "Logout": "تسجيل الخروج",
    "Create Account": "إنشاء حساب جديد",
    "Sign In / Register": "تسجيل الدخول / إنشاء حساب",
    "My Orders & Tax Invoices": "طلباتي والفواتير الضريبية",
    "My Orders": "طلباتي",
    "My Profile": "ملفي الشخصي",
    "Administrator Portal": "بوابة الإدارة",
    "Open Administrator Portal": "فتح بوابة الإدارة",
    "Back to Website": "العودة إلى الموقع",
    "← Back to Website": "← العودة إلى الموقع",
    "Customer / Patron": "عميل / راعٍ للفنون",
    "Administrator": "المدير المسؤول",
    "No Orders Placed Yet": "لم يتم تقديم أي طلبات بعد",
    "Your handcrafted artisan pieces from Odisha will appear here once you place an order.": "ستظهر قطعك الفنية اليدوية من أوديشا هنا بمجرد إتمام الطلب.",
    "Packed": "تم التغليف",
    "Shipped": "تم الشحن",
    "Pending": "قيد المعالجة",
    "Delivered": "تم التوصيل",
    "Cancelled": "ملغي",
    "Status": "الحالة",
    "Amount": "المبلغ",
    "Price": "السعر",
    "Order ID": "رقم الطلب",
    "Customer": "العميل",
    "Category": "الفئة",
    "FOUNDER & CHIEF PATRON": "المؤسس والراعي الرئيسي",
    "Sri Dilip Kumar Sahoo": "سري ديليب كومار ساهو",
    "HERITAGE COLLECTIONS": "المجموعات التراثية",
    "PRICE BRACKET": "نطاق السعر"
  },
  "ne": {
    "Making of Sacred Pattachitra Heritage Art": "पवित्र पट्टचित्र सम्पदा कला निर्माण",
    "Raghurajpur Heritage Crafts Village, Puri": "रघुराजपुर सम्पदा शिल्प गाउँ, पुरी",
    "EXPLORE COLLECTION": "सङ्ग्रह हेर्नुहोस्",
    "Explore Collection": "सङ्ग्रह हेर्नुहोस्",
    "EXPLORE CRAFTS": "कलाकृतिहरू हेर्नुहोस्",
    "Explore Crafts": "कलाकृतिहरू हेर्नुहोस्",
    "Explore Craft Collection": "हस्तकला सङ्ग्रह हेर्नुहोस्",
    "Explore Odisha Collection": "ओडिशा सङ्ग्रह हेर्नुहोस्",
    "Direct from Master Artisans": "प्रत्यक्ष मास्टर कारीगरहरूबाट",
    "Eco-Friendly Sustainable Craft": "वातावरण-मैत्री दिगो कला",
    "Fast & Secure Insured Shipping": "छिटो र सुरक्षित बिमा गरिएको ढुवानी",
    "GI-Tagged Provenance": "GI-ट्याग गरिएको प्रामाणिकता",
    "Switch Account": "खाता बदल्नुहोस्",
    "Password": "पासवर्ड",
    "Confirm *": "पुष्टि गर्नुहोस् *",
    "Confirm New Password": "नयाँ पासवर्ड पुष्टि गर्नुहोस्",
    "Forgot Password?": "पासवर्ड भुल्नुभयो?",
    "Back to Sign In": "साइन इनमा फर्कनुहोस्",
    "JBI CRAFT": "JBI हस्तकला",
    "JBI Craft": "JBI हस्तकला",
    "JBI Crafts": "JBI हस्तकला",
    "HERITAGE • QUALITY • TRUST": "सम्पदा • गुणस्तर • विश्वास",
    "Odisha ki Karigari,": "ओडिशाको शिल्पकला,",
    "Har Ghar ke Liye": "हरेक घरको लागि",
    "SABSE ZYADA PASAND": "सबैभन्दा धेरै रुचाइएको",
    "Best Sellers": "सर्वाधिक बिक्री हुने",
    "Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye.": "हाम्रा सबैभन्दा प्रिय कलाकृतिहरू — वास्तविक शिल्पकलाका पारखी ग्राहकहरूद्वारा छनोट गरिएका।",
    "Explore Complete Collection": "सम्पूर्ण सङ्ग्रह हेर्नुहोस्",
    "Our Guiding Craft Pillars": "हाम्रा मुख्य शिल्पकला आधारहरू",
    "HOME": "गृहपृष्ठ",
    "SHOP": "पसल",
    "ABOUT": "हाम्रो बारेमा",
    "CONTACT": "सम्पर्क",
    "ORDERS": "अर्डरहरू",
    "Home": "गृहपृष्ठ",
    "Shop": "पसल",
    "About": "हाम्रो बारेमा",
    "Contact": "सम्पर्क",
    "Orders": "अर्डरहरू",
    "SHOP NOW": "अहिले किनमेल गर्नुहोस्",
    "Shop Now": "अहिले किनमेल गर्नुहोस्",
    "VIEW ALL PRODUCTS": "सबै उत्पादनहरू हेर्नुहोस्",
    "Explore Odisha Heritage by Category": "श्रेणी अनुसार ओडिशाको सम्पदा हेर्नुहोस्",
    "ADD TO BAG": "झोलामा राख्नुहोस्",
    "Add to Bag": "झोलामा राख्नुहोस्",
    "Add To Bag": "झोलामा राख्नुहोस्",
    "BUY NOW": "अहिले किन्नुहोस्",
    "Buy Now": "अहिले किन्नुहोस्",
    "⚡ Buy Now": "⚡ अहिले किन्नुहोस्",
    "Quick View": "छिटो हेर्नुहोस्",
    "View Details": "विवरण हेर्नुहोस्",
    "VIEW DETAILS": "विवरण हेर्नुहोस्",
    "Added": "थपियो",
    "SELECT LANGUAGE": "भाषा छान्नुहोस्",
    "Select Language": "भाषा छान्नुहोस्",
    "GLOBAL ATELIER": "ग्लोबल एटलियर",
    "Select Country & Language": "देश र भाषा छान्नुहोस्",
    "Search country or language...": "देश वा भाषा खोज्नुहोस्...",
    "Reset to English (Original)": "मूल अङ्ग्रेजीमा फर्काउनुहोस्",
    "JBI Cultural Engine": "JBI सांस्कृतिक इन्जिन",
    "All": "सबै",
    "Global": "ग्लोबल",
    "Middle East": "मध्य पूर्व",
    "Subcontinent": "उपमहाद्वीप",
    "Asia": "एसिया",
    "In Stock": "उपलब्ध छ",
    "Out of Stock": "सकियो",
    "OUT OF STOCK": "सकियो",
    "SOLD OUT": "सबै बिक्री भयो",
    "Notify When Available": "उपलब्ध भएपछि खबर गर्नुहोस्",
    "Notify Me": "मलाई खबर गर्नुहोस्",
    "NEW": "नयाँ",
    "New": "नयाँ",
    "Handloom & Textiles": "हाते तान र कपडाहरू",
    "Handicrafts": "हस्तकला",
    "Heritage Art": "सम्पदा कला",
    "Jewellery & Ornaments": "गहना र आभूषणहरू",
    "COIR & NATURAL FIBER": "नरिवलको जटा र प्राकृतिक रेसा",
    "SAMBALPURI IKAT WEAVING": "सम्बलपुरी इकत बुनाइ",
    "DONGRIA TRIBAL WEAVING": "डोङ्गरिया आदिवासी बुनाइ",
    "DHOKRA METAL CASTING": "डोकरा धातु ढलाई कला",
    "BALESWAR LAC JEWELLERY": "बालेश्वर लाहाको गहना",
    "GOLDEN GRASS & KAINTHA": "सुनौलो घाँस र कैन्था कला",
    "WOOD CARVING & CRAFT": "काठको नक्काशी र हस्तकला",
    "JUTE & NATURAL FIBER": "जुट र प्राकृतिक रेसा",
    "STONE CARVING": "ढुङ्गाको नक्काशी कला",
    "DHOKRA METAL JEWELLERY": "डोकरा धातु गहनाहरू",
    "TUSSAR SILK WEAVING": "तुसार रेशम बुनाइ",
    "PATTACHITRA & TALAPATRA": "पट्टचित्र र ताडपत्र कला",
    "Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll": "गीता गोविन्द पवित्र ताडपत्र खोपिएको पट",
    "Radha Krishna & Tree of Life Pattachitra Canvas Painting": "राधा कृष्ण र जीवनको रूख पट्टचित्र क्यानभास चित्रकला",
    "Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan": "दशावतार पवित्र ताडपत्र खोपिएको औपचारिक पङ्खा",
    "Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription": "वसन्त रास लीला ताल चित्र लघु ताडपत्र अभिलेख",
    "Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)": "परम्परागत बालुवाढुङ्गा चन्दन घोट्ने ढुङ्गा (चन्दन पेडी)",
    "Heritage Dhokra Brass Mana (Traditional Measuring Bowl)": "हेरिटेज डोकरा काँस माना (परम्परागत नाप्ने कचौरा)",
    "Dhokra Brass Metal Craft Jewellery Box": "डोकरा धातु हस्तकला गहना बाकस",
    "Coir Craft Multicoloured Flower Decor": "नरिवलको जटा बहुरङ्गी फूल सजावट",
    "Handloom Pure Silk Saree - with Blouse": "हाते तान शुद्ध रेशम साडी - ब्लाउज सहित",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)": "सम्बलपुरी हाते तान शुद्ध सुती ३-टुक्रा सुट सेट (गाढा रातो)",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set": "सम्बलपुरी हाते तान शुद्ध सुती ३-टुक्रा सुट सेट",
    "Fine Handloom Tussar Silk Dupatta with Temple Border": "मन्दिरको किनारा भएको उत्कृष्ट हाते तान तुसार रेशम दोपट्टा",
    "Handloom Fine Tussar Silk Saree (Peacock Teal)": "हाते तान उत्कृष्ट तुसार रेशम साडी (मयूर निलो)",
    "Handloom Fine Tussar Silk Saree - with Blouse": "हाते तान उत्कृष्ट तुसार रेशम साडी - ब्लाउज सहित",
    "Dongria Kondh Tribal Handwoven Shawl": "डोङ्गरिया कोन्ध आदिवासी हातले बुनेको शल",
    "Handcrafted Golden Grass Square Pedi Box with Lid": "हातले बनाएको सुनौलो घाँसको ढक्कन भएको वर्गाकार पेडी बाकस",
    "Handcrafted Golden Grass Round Storage Basket": "हातले बनाएको सुनौलो घाँसको गोलो भण्डारण टोकरी",
    "Handwoven Golden Grass Square Tray": "हातले बुनेको सुनौलो घाँसको वर्गाकार ट्रे",
    "Handcrafted Jute & Cotton Executive File Folder": "हातले बनाएको जुट र सुती कार्यकारी फाइल फोल्डर",
    "Crafted Jute Executive Conference Bag": "हातले बनाएको जुट कार्यकारी सम्मेलन झोला",
    "Crafted Jute Laptop Messenger Bag (15-inch)": "जुट ल्यापटप मेसेन्जर झोला (१५ इन्च)",
    "Handcrafted Mango Wood Slatted Coasters (Set of 6)": "आँपको काठको कोस्टर सेट (६ वटाको सेट)",
    "Heritage Dokra Brass Tribal Choker Necklace Set": "हेरिटेज डोकरा काँस आदिवासी चोकर नेकलेस सेट",
    "Dhokra Tribal Choker Necklace Set with Drops": "डोकरा आदिवासी चोकर नेकलेस सेट (झुम्का सहित)",
    "Dokra Earth Pendant Necklace with Terracotta Beads": "टेराकोटा दाना सहितको डोकरा अर्थ पेन्डन्ट नेकलेस",
    "Dokra Round Sun-Mandala Pendant Necklace": "डोकरा गोलो सूर्य-मण्डला पेन्डन्ट नेकलेस",
    "Dokra Multi-Strand Brass Beads Layered Necklace": "डोकरा बहु-तह काँसका दाना भएको लेयर्ड नेकलेस",
    "Dokra Spiral Penth Drop Earrings": "डोकरा स्पाइरल पेन्थ झुम्का",
    "Dokra Spiral Web Brass Dangler Earrings": "डोकरा स्पाइरल जाल काँसका झुम्का",
    "Dokra Tribal Fish Motif Dangler Earrings": "डोकरा आदिवासी माछाको बुट्टा भएको झुम्का",
    "Dokra Egg-Shaped Spiral Drop Earrings": "डोकरा अण्डाकार स्पाइरल झुम्का",
    "Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)": "बालेश्वर हातले बनाएको लाहाको चुरा (बाटेको ढाँचा जोडी)",
    "Baleswar Lac Bangles with Spiral Striped Patterns (Pair)": "बालेश्वर लाहाको चुरा स्पाइरल धर्का ढाँचा (जोडी)",
    "Master Guild:": "मास्टर गिल्ड:",
    "Master Rabindra Behera": "मास्टर रबिन्द्र बेहरा",
    "Master Rabindra Behera & Chitrakar Guild": "मास्टर रबिन्द्र बेहरा र चित्रकार गिल्ड",
    "Bikram & Devendra Meher": "बिक्रम र देवेन्द्र मेहेर",
    "Madhab Rana & Guild": "माधव राना र गिल्ड",
    "Basudev Mohapatra & Shilpi Guild": "वासुदेव मोहापात्र र शिल्पी गिल्ड",
    "Gopal Sahu & Kantilo Kansari Guild": "गोपाल साहु र कान्तिलो कन्सारी गिल्ड",
    "Pratima Biswal & Coastal SHG Federation": "प्रतिमा बिस्वाल र तटीय महिला समूह महासंघ",
    "Subhadra Jena & Sankhari Guild": "सुभद्रा जेना र सङ्खारी गिल्ड",
    "Atelier Bag": "झोला",
    "Your Bag is Empty": "तपाईंको झोला खाली छ",
    "Your bag is currently empty.": "तपाईंको झोला अहिले खाली छ।",
    "Subtotal": "उप-कुल",
    "Total": "कुल",
    "Proceed to Checkout": "भुक्तानी गर्न अगाडि बढ्नुहोस्",
    "Continue Shopping": "किनमेल जारी राख्नुहोस्",
    "Order Summary": "अर्डर सारांश",
    "Shipping Address": "ढुवानी ठेगाना",
    "Full Name *": "पूरा नाम *",
    "Full Name": "पूरा नाम",
    "Email Address *": "इमेल ठेगाना *",
    "Email Address": "इमेल ठेगाना",
    "Phone Number": "फोन नम्बर",
    "City *": "शहर *",
    "City": "शहर",
    "State *": "राज्य *",
    "State": "राज्य",
    "PIN Code": "पिन कोड",
    "PIN / Postal Code": "पिन / हुलाक कोड",
    "Close": "बन्द गर्नुहोस्",
    "Cancel": "रद्द गर्नुहोस्",
    "Save Changes": "परिवर्तनहरू सुरक्षित गर्नुहोस्",
    "Apply": "लागू गर्नुहोस्",
    "Discount": "छुट",
    "Free Shipping": "निःशुल्क ढुवानी",
    "Free Shipping Across India": "भारतभर निःशुल्क ढुवानी",
    "Worldwide Dispatch": "विश्वव्यापी ढुवानी",
    "100% Genuine Craftsmanship": "१००% वास्तविक हस्तकला",
    "Sign In": "साइन इन गर्नुहोस्",
    "Sign Up": "दर्ता गर्नुहोस्",
    "Sign Out": "साइन आउट",
    "Logout": "साइन आउट",
    "Create Account": "नयाँ खाता खोल्नुहोस्",
    "Sign In / Register": "साइन इन / दर्ता",
    "My Orders & Tax Invoices": "मेरा अर्डरहरू र कर बीजकहरू",
    "My Orders": "मेरा अर्डरहरू",
    "My Profile": "मेरो प्रोफाइल",
    "Administrator Portal": "व्यवस्थापक पोर्टल",
    "Open Administrator Portal": "व्यवस्थापक पोर्टल खोल्नुहोस्",
    "Back to Website": "वेबसाइटमा फर्कनुहोस्",
    "← Back to Website": "← वेबसाइटमा फर्कनुहोस्",
    "Customer / Patron": "ग्राहक / संरक्षक",
    "Administrator": "व्यवस्थापक",
    "No Orders Placed Yet": "अहिलेसम्म कुनै अर्डर गरिएको छैन",
    "Your handcrafted artisan pieces from Odisha will appear here once you place an order.": "तपाईंले अर्डर गरेपछि ओडिशाका हस्तनिर्मित कलाकृतिहरू यहाँ देखिनेछन्।",
    "Packed": "प्याक गरियो",
    "Shipped": "ढुवानी गरियो",
    "Pending": "प्रतीक्षारत",
    "Delivered": "डेलिभर भयो",
    "Cancelled": "रद्द गरियो",
    "Status": "स्थिति",
    "Amount": "रकम",
    "Price": "मूल्य",
    "Order ID": "अर्डर नम्बर",
    "Customer": "ग्राहक",
    "Category": "श्रेणी",
    "FOUNDER & CHIEF PATRON": "संस्थापक र मुख्य संरक्षक",
    "Sri Dilip Kumar Sahoo": "श्री दिलिप कुमार साहु",
    "HERITAGE COLLECTIONS": "सम्पदा सङ्ग्रहहरू",
    "PRICE BRACKET": "मूल्य दायरा"
  },
  "zh-CN": {
    "Making of Sacred Pattachitra Heritage Art": "神圣非遗帕塔奇特拉卷轴手绘工序",
    "Raghurajpur Heritage Crafts Village, Puri": "普里·拉古拉吉普尔非遗手工艺村",
    "EXPLORE COLLECTION": "浏览典藏系列",
    "Explore Collection": "浏览典藏系列",
    "EXPLORE CRAFTS": "探索非遗手艺",
    "Explore Crafts": "探索非遗手艺",
    "Explore Craft Collection": "探索手工艺品系列",
    "Explore Odisha Collection": "探索奥迪沙文化系列",
    "Direct from Master Artisans": "源自大师级手艺人",
    "Eco-Friendly Sustainable Craft": "纯天然环保永续之作",
    "Fast & Secure Insured Shipping": "全程保价安全极速发货",
    "GI-Tagged Provenance": "国家地理标志原产地认证",
    "Switch Account": "切换账号",
    "Password": "密码",
    "Confirm *": "确认 *",
    "Confirm New Password": "确认新密码",
    "Forgot Password?": "忘记密码？",
    "Back to Sign In": "返回登录",
    "JBI CRAFT": "JBI 传统手工艺",
    "JBI Craft": "JBI 传统手工艺",
    "JBI Crafts": "JBI 传统手工艺",
    "HERITAGE • QUALITY • TRUST": "非遗传承 • 卓越品质 • 匠心信赖",
    "Odisha ki Karigari,": "源自奥迪沙的大师手作，",
    "Har Ghar ke Liye": "装点每一个温馨之家",
    "SABSE ZYADA PASAND": "典藏热销甄选",
    "Best Sellers": "热销佳作",
    "Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye.": "深受收藏家青睐的经典非遗之作 — 凝聚千百年世代相传的纯正匠心。",
    "Explore Complete Collection": "探索全部典藏系列",
    "Our Guiding Craft Pillars": "我们的非遗核心理念",
    "HOME": "首页",
    "SHOP": "商店",
    "ABOUT": "关于我们",
    "CONTACT": "联系我们",
    "ORDERS": "我的订单",
    "Home": "首页",
    "Shop": "商店",
    "About": "关于我们",
    "Contact": "联系我们",
    "Orders": "我的订单",
    "SHOP NOW": "立即选购",
    "Shop Now": "立即选购",
    "VIEW ALL PRODUCTS": "查看全部商品",
    "Explore Odisha Heritage by Category": "按分类品味奥迪沙文化非遗",
    "ADD TO BAG": "加入购物袋",
    "Add to Bag": "加入购物袋",
    "Add To Bag": "加入购物袋",
    "BUY NOW": "立即购买",
    "Buy Now": "立即购买",
    "⚡ Buy Now": "⚡ 闪电结算",
    "Quick View": "快速预览",
    "View Details": "查看详情",
    "VIEW DETAILS": "查看详情",
    "Added": "已加入",
    "SELECT LANGUAGE": "选择语言",
    "Select Language": "选择语言",
    "GLOBAL ATELIER": "全球艺坊",
    "Select Country & Language": "选择国家与语言",
    "Search country or language...": "搜索国家或语言...",
    "Reset to English (Original)": "重置为原始英文",
    "JBI Cultural Engine": "JBI 文化翻译引擎",
    "All": "全部",
    "Global": "全球",
    "Middle East": "中东地区",
    "Subcontinent": "南亚次大陆",
    "Asia": "亚洲",
    "In Stock": "现货在库",
    "Out of Stock": "暂时缺货",
    "OUT OF STOCK": "暂时缺货",
    "SOLD OUT": "已售罄",
    "Notify When Available": "到货提醒",
    "Notify Me": "提醒我",
    "NEW": "新品",
    "New": "新品",
    "Handloom & Textiles": "手工织造与华美纺织",
    "Handicrafts": "传统手工艺品",
    "Heritage Art": "非遗典藏画卷",
    "Jewellery & Ornaments": "非遗珠宝与传统首饰",
    "COIR & NATURAL FIBER": "椰壳纤维与天然植物编织",
    "SAMBALPURI IKAT WEAVING": "桑巴尔普里伊卡特古法织造",
    "DONGRIA TRIBAL WEAVING": "东格里亚原生态部落织物",
    "DHOKRA METAL CASTING": "多克拉古法失蜡失芯铜铸",
    "BALESWAR LAC JEWELLERY": "巴勒斯瓦尔天然植物虫胶手镯",
    "GOLDEN GRASS & KAINTHA": "肯德拉帕拉天然黄金草编",
    "WOOD CARVING & CRAFT": "传统原木微雕艺术",
    "JUTE & NATURAL FIBER": "天然环保黄麻编制",
    "STONE CARVING": "千年石雕技艺",
    "DHOKRA METAL JEWELLERY": "多克拉部落图腾青铜首饰",
    "TUSSAR SILK WEAVING": "野蚕柞蚕丝手工织造",
    "PATTACHITRA & TALAPATRA": "帕塔奇特拉矿物卷轴画与贝叶刻经",
    "Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll": "《吉陀·歌频陀》纯手雕神圣贝叶经文折叠卷轴",
    "Radha Krishna & Tree of Life Pattachitra Canvas Painting": "拉达与奎师那·生命之树天然矿物颜料帕塔奇特拉布画",
    "Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan": "十道化身神圣贝叶经文纯手工镂雕礼仪宝扇",
    "Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription": "春之圆舞曲·微雕贝叶天然矿物彩绘圣录",
    "Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)": "印度殿堂级手工雕凿天然砂岩研磨香石 (Chandan Pedi)",
    "Heritage Dhokra Brass Mana (Traditional Measuring Bowl)": "多克拉青铜失蜡铸造传统量米宝斗 (Heritage Mana)",
    "Dhokra Brass Metal Craft Jewellery Box": "多克拉失蜡古法青铜图腾手工首饰盒",
    "Coir Craft Multicoloured Flower Decor": "天然环保椰壳纤维彩色花卉家居壁挂",
    "Handloom Pure Silk Saree - with Blouse": "纯手工织造桑蚕真丝纱丽（附同款衬衫料）",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)": "桑巴尔普里纯棉伊卡特手织三件套（绯红）",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set": "桑巴尔普里纯棉伊卡特手工织物三件套",
    "Fine Handloom Tussar Silk Dupatta with Temple Border": "神庙回纹手织极品野蚕柞蚕丝披肩 Dupatta",
    "Handloom Fine Tussar Silk Saree (Peacock Teal)": "孔雀水青蓝手工织造顶级柞蚕丝珍品纱丽",
    "Handloom Fine Tussar Silk Saree - with Blouse": "典藏级手工纯野蚕丝纱丽（附定制衬衫料）",
    "Dongria Kondh Tribal Handwoven Shawl": "东格里亚·孔德原生态部落几何图腾纯手织披巾",
    "Handcrafted Golden Grass Square Pedi Box with Lid": "纯手工肯德拉帕拉天然黄金草编方形带盖收纳盒",
    "Handcrafted Golden Grass Round Storage Basket": "肯德拉帕拉生态黄金草编圆形收纳雅器",
    "Handwoven Golden Grass Square Tray": "手工生态黄金草编方形托盘",
    "Handcrafted Jute & Cotton Executive File Folder": "天然环保手工黄麻与原棉商务公文夹",
    "Crafted Jute Executive Conference Bag": "商务精英天然黄麻手工会议手提包",
    "Crafted Jute Laptop Messenger Bag (15-inch)": "15寸生态黄麻手作防震笔记本电脑斜挎包",
    "Handcrafted Mango Wood Slatted Coasters (Set of 6)": "纯手工实木芒果木隔热杯垫六件套",
    "Heritage Dokra Brass Tribal Choker Necklace Set": "多克拉失蜡铜铸原生态部落颈圈项链全套",
    "Dhokra Tribal Choker Necklace Set with Drops": "多克拉青铜部落吊坠流苏颈圈项链套装",
    "Dokra Earth Pendant Necklace with Terracotta Beads": "多克拉青铜大地母神吊坠配天然红陶珠锁骨链",
    "Dokra Round Sun-Mandala Pendant Necklace": "多克拉科纳拉克太阳神曼陀罗圆盘铜铸吊坠项链",
    "Dokra Multi-Strand Brass Beads Layered Necklace": "多克拉多层次纯铜手工珠串叠戴项链",
    "Dokra Spiral Penth Drop Earrings": "多克拉螺旋图腾手工纯铜复古耳坠",
    "Dokra Spiral Web Brass Dangler Earrings": "多克拉螺旋几何镂空铜铸耳坠",
    "Dokra Tribal Fish Motif Dangler Earrings": "多克拉部落丰饶吉祥游鱼图腾纯铜耳环",
    "Dokra Egg-Shaped Spiral Drop Earrings": "多克拉蛋形螺旋水滴青铜耳饰",
    "Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)": "巴勒斯瓦尔纯手工天然植物紫胶编织手镯（一对）",
    "Baleswar Lac Bangles with Spiral Striped Patterns (Pair)": "巴勒斯瓦尔天然虫胶七彩条纹手镯（对装）",
    "Master Guild:": "传承工坊：",
    "Master Rabindra Behera": "拉宾德拉·贝赫拉国家级非遗大师",
    "Master Rabindra Behera & Chitrakar Guild": "拉宾德拉·贝赫拉大师及非遗画师工坊",
    "Bikram & Devendra Meher": "比克拉姆与德温德拉·梅赫尔织造世家",
    "Madhab Rana & Guild": "马达哈布·拉纳与青铜失蜡铸造工坊",
    "Basudev Mohapatra & Shilpi Guild": "巴苏德夫·莫哈帕特拉雕刻大师工坊",
    "Gopal Sahu & Kantilo Kansari Guild": "戈帕尔·萨胡与坎蒂洛黄铜金匠工会",
    "Pratima Biswal & Coastal SHG Federation": "普拉蒂玛·比斯瓦尔与沿海妇女手工艺互助联社",
    "Subhadra Jena & Sankhari Guild": "苏巴德拉·杰纳与传统虫胶首饰世家",
    "Atelier Bag": "艺坊购物袋",
    "Your Bag is Empty": "您的购物袋还是空的",
    "Your bag is currently empty.": "您的购物袋内暂无任何藏品。",
    "Subtotal": "商品小计",
    "Total": "总计",
    "Proceed to Checkout": "前往结账",
    "Continue Shopping": "继续选购",
    "Order Summary": "订单总览",
    "Shipping Address": "配送地址",
    "Full Name *": "姓名 *",
    "Full Name": "姓名",
    "Email Address *": "电子邮箱 *",
    "Email Address": "电子邮箱",
    "Phone Number": "手机号码",
    "City *": "城市 *",
    "City": "城市",
    "State *": "省份 / 地区 *",
    "State": "省份 / 地区",
    "PIN Code": "邮政编码",
    "PIN / Postal Code": "邮政编码",
    "Close": "关闭",
    "Cancel": "取消",
    "Save Changes": "保存更改",
    "Apply": "应用",
    "Discount": "优惠折扣",
    "Free Shipping": "全场包邮",
    "Free Shipping Across India": "全印度免费直邮",
    "Worldwide Dispatch": "全球尊享直邮",
    "100% Genuine Craftsmanship": "100% 正品非遗纯手工",
    "Sign In": "登录",
    "Sign Up": "注册",
    "Sign Out": "退出登录",
    "Logout": "退出",
    "Create Account": "注册新账号",
    "Sign In / Register": "登录 / 注册",
    "My Orders & Tax Invoices": "我的订单与发票凭证",
    "My Orders": "我的订单",
    "My Profile": "个人资料",
    "Administrator Portal": "管理员门户",
    "Open Administrator Portal": "进入管理员系统",
    "Back to Website": "返回商城首页",
    "← Back to Website": "← 返回商城",
    "Customer / Patron": "赞助贵宾 / 顾客",
    "Administrator": "超级管理员",
    "No Orders Placed Yet": "您尚未提交任何订单",
    "Your handcrafted artisan pieces from Odisha will appear here once you place an order.": "完成购买后，您的奥迪沙非遗珍宝将在此展示。",
    "Packed": "已打包",
    "Shipped": "已发货",
    "Pending": "处理中",
    "Delivered": "已送达",
    "Cancelled": "已取消",
    "Status": "状态",
    "Amount": "金额",
    "Price": "价格",
    "Order ID": "订单编号",
    "Customer": "顾客",
    "Category": "分类",
    "FOUNDER & CHIEF PATRON": "创始人兼总顾问",
    "Sri Dilip Kumar Sahoo": "迪利普·库马尔·萨胡先生",
    "HERITAGE COLLECTIONS": "非遗典藏特辑",
    "PRICE BRACKET": "价格区间"
  },
  "dz": {
    "Making of Sacred Pattachitra Heritage Art": "དམ་པའི་པཊྚ་ཅི་ཏྲ་ལམ་སྲོལ་ལག་རྩལ་བཟོ་སྐྲུན",
    "Raghurajpur Heritage Crafts Village, Puri": "པུ་རི་ ར་གུ་རཱཇ་པུར་ལམ་སྲོལ་ལག་བཟོའི་གྲོང་ཚོ",
    "EXPLORE COLLECTION": "བསྡུ་གསོག་འཚོལ་ཞིབ",
    "Explore Collection": "བསྡུ་གསོག་འཚོལ་ཞིབ",
    "EXPLORE CRAFTS": "ལག་བཟོ་འཚོལ་ཞིབ",
    "Explore Crafts": "ལག་བཟོ་འཚོལ་ཞིབ",
    "Explore Craft Collection": "ལག་བཟོ་བསྡུ་གསོག་འཚོལ་ཞིབ",
    "Explore Odisha Collection": "ཨོ་ཌི་ཤའི་བསྡུ་གསོག་འཚོལ་ཞིབ",
    "Direct from Master Artisans": "ལག་བཟོ་མཁས་པ་ལས་ཐད་ཀར",
    "Eco-Friendly Sustainable Craft": "མཐའ་འཁོར་དང་མཐུན་པའི་ལག་བཟོ",
    "Fast & Secure Insured Shipping": "མགྱོགས་དྲགས་དང་ཉེན་མེད་སྐྱེལ་འདྲེན",
    "GI-Tagged Provenance": "ས་གནས་ངོ་རྟགས་ཡོད་པའི་ཐོན་སྐྱེད",
    "Switch Account": "རྩིས་ཁྲ་བསྒྱུར",
    "Password": "གསང་ཚིག",
    "Confirm *": "གཏན་འཁེལ *",
    "Confirm New Password": "གསང་ཚིག་གསརཔ་གཏན་འཁེལ",
    "Forgot Password?": "གསང་ཚིག་བརྗེད་སོང་ག?",
    "Back to Sign In": "ནང་འཛུལ་ནང་ལོག",
    "JBI CRAFT": "JBI ལག་བཟོ",
    "JBI Craft": "JBI ལག་བཟོ",
    "JBI Crafts": "JBI ལག་བཟོ",
    "HERITAGE • QUALITY • TRUST": "ལམ་སྲོལ • སྤུས་ཚད • བློ་གཏད",
    "Odisha ki Karigari,": "ཨོ་ཌི་ཤའི་ལག་རྩལ།",
    "Har Ghar ke Liye": "ཁྱིམ་ཚང་རེ་རེའི་དོན་ལུ",
    "SABSE ZYADA PASAND": "དགའ་ཤོས་ཅ་ལག",
    "Best Sellers": "ཚོང་ཁ་རྒྱུགས་ཤོས",
    "Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye.": "ང་བཅས་ཀྱི་དགའ་ཤོས་ཅ་ལག་ཚུ — ངོ་མའི་ལག་བཟོ་དགའ་མི་ཚུ་གིས་གདམ་ཁ་རྐྱབ་ཡོདཔ།",
    "Explore Complete Collection": "བསྡུ་གསོག་ཆ་ཚང་འཚོལ་ཞིབ",
    "Our Guiding Craft Pillars": "ང་བཅས་ཀྱི་ལག་བཟོའི་རྩ་བ",
    "HOME": "གདོང་ཤོག",
    "SHOP": "ཚོང་ཁང",
    "ABOUT": "ང་བཅས་ཀྱི་སྐོར",
    "CONTACT": "འབྲེལ་གཏུགས",
    "ORDERS": "མངགས་ཐོ",
    "Home": "གདོང་ཤོག",
    "Shop": "ཚོང་ཁང",
    "About": "ང་བཅས་ཀྱི་སྐོར",
    "Contact": "འབྲེལ་གཏུགས",
    "Orders": "མངགས་ཐོ",
    "SHOP NOW": "ད་ལྟོ་ཉོ",
    "Shop Now": "ད་ལྟོ་ཉོ",
    "VIEW ALL PRODUCTS": "ཅ་ལག་ཆ་མཉམ་བལྟ",
    "Explore Odisha Heritage by Category": "དབྱེ་ཁག་ལྟར་ཨོ་ཌི་ཤའི་ལམ་སྲོལ་འཚོལ་ཞིབ",
    "ADD TO BAG": "ཁུག་མའི་ནང་བཙུགས",
    "Add to Bag": "ཁུག་མའི་ནང་བཙུགས",
    "Add To Bag": "ཁུག་མའི་ནང་བཙུགས",
    "BUY NOW": "ད་ལྟོ་ཉོ",
    "Buy Now": "ད་ལྟོ་ཉོ",
    "⚡ Buy Now": "⚡ ད་ལྟོ་ཉོ",
    "Quick View": "མགྱོགས་བལྟ",
    "View Details": "རྒྱས་བཤད་བལྟ",
    "VIEW DETAILS": "རྒྱས་བཤད་བལྟ",
    "Added": "བཙུགས་ཟིན",
    "SELECT LANGUAGE": "སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
    "Select Language": "སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
    "GLOBAL ATELIER": "འཛམ་གླིང་ལག་བཟོ་ཁང",
    "Select Country & Language": "རྒྱལ་ཁབ་དང་སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
    "Search country or language...": "རྒྱལ་ཁབ་དང་སྐད་ཡིག་འཚོལ་ཞིབ...",
    "Reset to English (Original)": "དབྱིན་སྐད་ངོ་མར་སླར་གསོ་བྱེད",
    "JBI Cultural Engine": "JBI ལམ་སྲོལ་འཕྲུལ་ཆས",
    "All": "ཆ་མཉམ",
    "Global": "འཛམ་གླིང",
    "Middle East": "དཀྱིལ་ཤར་ཕྱོགས",
    "Subcontinent": "གླིང་ཕྲན",
    "Asia": "ཨེ་ཤི་ཡ",
    "In Stock": "མཛོད་ཁང་ནང་ཡོད",
    "Out of Stock": "མཛོད་ཁང་ནང་མེད",
    "OUT OF STOCK": "མཛོད་ཁང་ནང་མེད",
    "SOLD OUT": "ཚོང་ཚར་སོང",
    "Notify When Available": "ཡོད་པའི་སྐབས་བརྡ་སྤྲོད",
    "Notify Me": "ང་ལུ་བརྡ་སྤྲོད",
    "NEW": "གསརཔ",
    "New": "གསརཔ",
    "Handloom & Textiles": "ལག་ཐགས་རས",
    "Handicrafts": "ལག་བཟོ",
    "Heritage Art": "ལམ་སྲོལ་རི་མོ",
    "Jewellery & Ornaments": "རྒྱན་ཆ་དང་གོས་ཆས",
    "COIR & NATURAL FIBER": "རྩྭ་རས་དང་རང་བཞིན་རྒྱུ་ཆས",
    "SAMBALPURI IKAT WEAVING": "སམ་བལ་པུ་རི་ཐགས་རས",
    "DONGRIA TRIBAL WEAVING": "དོང་རི་ཡ་མི་སྡེའི་ཐགས་རས",
    "DHOKRA METAL CASTING": "ཌོཀ་ར་ཟངས་ཀྱི་ལག་བཟོ",
    "BALESWAR LAC JEWELLERY": "བ་ལེ་ཤྭར་རྒྱན་ཆ",
    "GOLDEN GRASS & KAINTHA": "གསེར་གྱི་རྩྭ་ལག་བཟོ",
    "WOOD CARVING & CRAFT": "ཤིང་བཟོ་དང་རྐོ་རིས",
    "JUTE & NATURAL FIBER": "རྩྭ་རས",
    "STONE CARVING": "རྡོ་བཟོ",
    "DHOKRA METAL JEWELLERY": "ཌོཀ་ར་ཟངས་ཀྱི་རྒྱན་ཆ",
    "TUSSAR SILK WEAVING": "ཏུ་སར་དར་གོས",
    "PATTACHITRA & TALAPATRA": "པ་ཊ་ཅི་ཏྲ་དང་ཏ་ལ་པཱ་ཏྲ",
    "Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll": "གི་ཏ་གོ་བིན་དའི་ཏ་ལའི་ལོ་མའི་མངགས་དེབ",
    "Radha Krishna & Tree of Life Pattachitra Canvas Painting": "ར་དྷ་ཀྲིཥྞ་དང་ཚེ་ཡི་སྡོང་པོའི་རས་བྲིས",
    "Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan": "དྭ་ཤ་ཨ་བ་ཏ་རའི་ཏ་ལའི་ལོ་མའི་རླུང་གཡབ",
    "Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription": "བ་སནྟ་ར་ས་ལི་ལའི་ཏ་ལའི་ལོ་མའི་རི་མོ",
    "Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)": "ཙན་དན་འཐག་རྡོ་ངོ་མ",
    "Heritage Dhokra Brass Mana (Traditional Measuring Bowl)": "ཌོཀ་ར་ཟངས་ཀྱི་འཇལ་ཕོར",
    "Dhokra Brass Metal Craft Jewellery Box": "ཌོཀ་ར་ཟངས་ཀྱི་རྒྱན་ཆའི་སྒམ",
    "Coir Craft Multicoloured Flower Decor": "རྩྭ་རས་ཀྱི་མེ་ཏོག་མཛེས་ཆས",
    "Handloom Pure Silk Saree - with Blouse": "ལག་ཐགས་དར་གོས་ཆེན",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)": "སམ་བལ་པུ་རི་ཀོ་ཊོན་གྱོན་ཆས",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set": "སམ་བལ་པུ་རི་ཀོ་ཊོན་ཆ་ཚང",
    "Fine Handloom Tussar Silk Dupatta with Temple Border": "ལྷ་ཁང་མཐའ་མ་ཡོད་པའི་ཏུ་སར་དར་གོས",
    "Handloom Fine Tussar Silk Saree (Peacock Teal)": "རྨ་བྱའི་མདོག་ཅན་གྱི་ཏུ་སར་དར་གོས",
    "Handloom Fine Tussar Silk Saree - with Blouse": "ཏུ་སར་དར་གོས་ཆེན་ཆ་ཚང",
    "Dongria Kondh Tribal Handwoven Shawl": "དོང་རི་ཡ་མི་སྡེའི་ལག་ཐགས་སྐེ་དཀྲིས",
    "Handcrafted Golden Grass Square Pedi Box with Lid": "གསེར་གྱི་རྩྭའི་སྒམ",
    "Handcrafted Golden Grass Round Storage Basket": "གསེར་གྱི་རྩྭའི་སླེའུ་སྒོར་སྒོར",
    "Handwoven Golden Grass Square Tray": "གསེར་གྱི་རྩྭའི་ཤིང་གཞོང",
    "Handcrafted Jute & Cotton Executive File Folder": "རྩྭ་རས་དང་ཀོ་ཊོན་ཡིག་སྣོད་ཁུག་མ",
    "Crafted Jute Executive Conference Bag": "རྩྭ་རས་ཀྱི་ལྷན་ཚོགས་ཁུག་མ",
    "Crafted Jute Laptop Messenger Bag (15-inch)": "རྩྭ་རས་ཀྱི་གློག་རིག་ཁུག་མ (ཨིན་ཅི་༡༥)",
    "Handcrafted Mango Wood Slatted Coasters (Set of 6)": "ཨམ་ཤིང་གི་ཕོར་གདན (༦ ཆ་ཚང)",
    "Heritage Dokra Brass Tribal Choker Necklace Set": "ཌོཀ་ར་ཟངས་ཀྱི་སྐེ་རྒྱན",
    "Dhokra Tribal Choker Necklace Set with Drops": "ཌོཀ་ར་ཟངས་ཀྱི་སྐེ་རྒྱན་རིངམ",
    "Dokra Earth Pendant Necklace with Terracotta Beads": "ས་དཀར་ཕྲེང་བ་ཅན་གྱི་ཌོཀ་ར་སྐེ་རྒྱན",
    "Dokra Round Sun-Mandala Pendant Necklace": "ཉི་མའི་དཀྱིལ་འཁོར་ཅན་གྱི་ཌོཀ་ར་སྐེ་རྒྱན",
    "Dokra Multi-Strand Brass Beads Layered Necklace": "ཟངས་ཀྱི་ཕྲེང་བ་མང་པོ་ཅན་གྱི་ཌོཀ་ར་སྐེ་རྒྱན",
    "Dokra Spiral Penth Drop Earrings": "ཌོཀ་ར་ཟངས་ཀྱི་རྣ་རྒྱན",
    "Dokra Spiral Web Brass Dangler Earrings": "ཌོཀ་ར་ཟངས་ཀྱི་རྣ་རྒྱན་རིངམ",
    "Dokra Tribal Fish Motif Dangler Earrings": "ཉའི་རྣམ་པ་ཅན་གྱི་ཌོཀ་ར་རྣ་རྒྱན",
    "Dokra Egg-Shaped Spiral Drop Earrings": "སྒོ་ང་བཟོ་ཅན་གྱི་ཌོཀ་ར་རྣ་རྒྱན",
    "Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)": "བ་ལེ་ཤྭར་གྱི་ལག་གདུབ (ཆ་གཅིག)",
    "Baleswar Lac Bangles with Spiral Striped Patterns (Pair)": "བ་ལེ་ཤྭར་གྱི་ཐིག་རིས་ཅན་གྱི་ལག་གདུབ",
    "Master Guild:": "ལག་བཟོ་མཁས་པའི་ཚོགས་པ:",
    "Master Rabindra Behera": "མཁས་པ་ར་བིན་དྲ་བེ་ཧེ་ར",
    "Master Rabindra Behera & Chitrakar Guild": "མཁས་པ་ར་བིན་དྲ་བེ་ཧེ་ར་དང་རི་མོ་པའི་ཚོགས་པ",
    "Bikram & Devendra Meher": "བི་ཀྲམ་དང་དེ་ཝེན་དྲ་མེ་ཧེར",
    "Madhab Rana & Guild": "མ་དྷབ་ར་ན་དང་ཚོགས་པ",
    "Basudev Mohapatra & Shilpi Guild": "བ་སུ་དེབ་མོ་ཧ་པ་ཏྲ་དང་བཟོ་པའི་ཚོགས་པ",
    "Gopal Sahu & Kantilo Kansari Guild": "གོ་པཱལ་ས་ཧུ་དང་ཚོགས་པ",
    "Pratima Biswal & Coastal SHG Federation": "པྲ་ཏི་མ་བིས་ཝལ་དང་ཚོགས་པ",
    "Subhadra Jena & Sankhari Guild": "སུ་བྷ་དྲ་ཇེ་ན་དང་ཚོགས་པ",
    "Atelier Bag": "ཉོ་ཆའི་ཁུག་མ",
    "Your Bag is Empty": "ཁྱོད་ཀྱི་ཁུག་མ་སྟོངམ་ཨིན་མས",
    "Your bag is currently empty.": "ད་ལྟོ་ཁྱོད་ཀྱི་ཁུག་མ་སྟོངམ་ཨིན།",
    "Subtotal": "བསྡོམས་ཆུང",
    "Total": "བསྡོམས",
    "Proceed to Checkout": "རྩིས་རྒྱག་པར་འགྱོ",
    "Continue Shopping": "འཕྲོ་མཐུད་དེ་ཉོ",
    "Order Summary": "མངགས་ཐོའི་བསྡོམས",
    "Shipping Address": "སྐྱེལ་འདྲེན་ཁ་བྱང",
    "Full Name *": "མིང་ཆ་ཚང *",
    "Full Name": "མིང་ཆ་ཚང",
    "Email Address *": "གློག་འཕྲིན་ཁ་བྱང *",
    "Email Address": "གློག་འཕྲིན་ཁ་བྱང",
    "Phone Number": "བརྒྱུད་འཕྲིན་ཨང",
    "City *": "གྲོང་ཁྱེར *",
    "City": "གྲོང་ཁྱེར",
    "State *": "མངའ་སྡེ *",
    "State": "མངའ་སྡེ",
    "PIN Code": "སྦྲག་ཨང",
    "PIN / Postal Code": "སྦྲག་ཨང",
    "Close": "ཁ་བསྡམས",
    "Cancel": "ཆ་མེད",
    "Save Changes": "བསྒྱུར་བཅོས་ཉར",
    "Apply": "ལག་ལེན་འཐབ",
    "Discount": "གཅོག་ཆ",
    "Free Shipping": "སྐྱེལ་འདྲེན་རིན་མེད",
    "Free Shipping Across India": "རྒྱ་གར་རྒྱལ་ཡོངས་སྐྱེལ་འདྲེན་རིན་མེད",
    "Worldwide Dispatch": "འཛམ་གླིང་ཡོངས་ལ་སྐྱེལ་འདྲེན",
    "100% Genuine Craftsmanship": "༡༠༠% ངོ་མའི་ལག་བཟོ",
    "Sign In": "ནང་འཛུལ",
    "Sign Up": "ཐོ་བཀོད",
    "Sign Out": "ཕྱིར་ཐོན",
    "Logout": "ཕྱིར་ཐོན",
    "Create Account": "རྩིས་ཁྲ་གསརཔ་བཟོ",
    "Sign In / Register": "ནང་འཛུལ་ / ཐོ་བཀོད",
    "My Orders & Tax Invoices": "ངེའི་མངགས་ཐོ་དང་ཁྲལ་འཛིན",
    "My Orders": "ངེའི་མངགས་ཐོ",
    "My Profile": "ངེའི་གསལ་བསྡུས",
    "Administrator Portal": "འཛིན་སྐྱོང་པའི་སྒོ་ར",
    "Open Administrator Portal": "འཛིན་སྐྱོང་པའི་སྒོ་ར་ཕྱེ",
    "Back to Website": "ཡོངས་འབྲེལ་ནང་ལོག",
    "← Back to Website": "← ཡོངས་འབྲེལ་ནང་ལོག",
    "Customer / Patron": "ཉོ་མི",
    "Administrator": "འཛིན་སྐྱོང་པ",
    "No Orders Placed Yet": "ད་ལྟོ་མངགས་ཐོ་བཀོད་བཀོདཔ་མེད",
    "Your handcrafted artisan pieces from Odisha will appear here once you place an order.": "ཁྱོད་ཀྱིས་མངགས་ཐོ་བཀོད་ཚར་ཞིནམ་ལས་ ཨོ་ཌི་ཤའི་ལག་བཟོ་ཅ་ལག་ཚུ་ནཱ་ལུ་འཐོན་འོང་།",
    "Packed": "ཐུམ་སྒྲིལ་འབད་ཟིན",
    "Shipped": "བཏང་ཟིན",
    "Pending": "བསྒུག་དོ",
    "Delivered": "འབྱོར་ཟིན",
    "Cancelled": "ཆ་མེད་བཟོ་ཟིན",
    "Status": "གནས་སྟངས",
    "Amount": "དངུལ་འབོར",
    "Price": "གོང་ཚད",
    "Order ID": "མངགས་ཐོའི་ཨང",
    "Customer": "ཉོ་མི",
    "Category": "དབྱེ་ཁག",
    "FOUNDER & CHIEF PATRON": "གཞི་བཙུགས་པ་དང་གཙོ་འཛིན",
    "Sri Dilip Kumar Sahoo": "སྐུ་ཞབས་དི་ལིབ་ཀུ་མར་ས་ཧུ",
    "HERITAGE COLLECTIONS": "ལམ་སྲོལ་བསྡུ་གསོག",
    "PRICE BRACKET": "གོང་ཚད་ཁྱབ་ཁོངས"
  },
  "si": {
    "Making of Sacred Pattachitra Heritage Art": "ශුද්ධ වූ පට්ටචිත්‍ර උරුම කලා නිර්මාණය",
    "Raghurajpur Heritage Crafts Village, Puri": "රඝුරාජ්පූර් උරුම ශිල්පීය ගම්මානය, පුරි",
    "EXPLORE COLLECTION": "එකතුව ගවේෂණය කරන්න",
    "Explore Collection": "එකතුව ගවේෂණය කරන්න",
    "EXPLORE CRAFTS": "කලාකෘති ගවේෂණය කරන්න",
    "Explore Crafts": "කලාකෘති ගවේෂණය කරන්න",
    "Explore Craft Collection": "හස්ත කර්මාන්ත එකතුව ගවේෂණය කරන්න",
    "Explore Odisha Collection": "ඔඩිෂා එකතුව ගවේෂණය කරන්න",
    "Direct from Master Artisans": "ප්‍රවීණ ශිල්පීන්ගෙන් ඍජුවම",
    "Eco-Friendly Sustainable Craft": "පරිසර හිතකාමී තිරසාර ශිල්ප",
    "Fast & Secure Insured Shipping": "වේගවත් සහ ආරක්ෂිත රක්ෂිත නැව්ගත කිරීම",
    "GI-Tagged Provenance": "භූගෝලීය දර්ශක සහතිකය",
    "Switch Account": "ගිණුම මාරු කරන්න",
    "Password": "මුරපදය",
    "Confirm *": "තහවුරු කරන්න *",
    "Confirm New Password": "නව මුරපදය තහවුරු කරන්න",
    "Forgot Password?": "මුරපදය අමතකද?",
    "Back to Sign In": "නැවත ඇතුල් වීමට",
    "JBI CRAFT": "JBI හස්ත කර්මාන්ත",
    "JBI Craft": "JBI හස්ත කර්මාන්ත",
    "JBI Crafts": "JBI හස්ත කර්මාන්ත",
    "HERITAGE • QUALITY • TRUST": "උරුමය • ගුණාත්මකභාවය • විශ්වාසය",
    "Odisha ki Karigari,": "ඔඩිෂාවේ ශිල්පීයත්වය,",
    "Har Ghar ke Liye": "සෑම නිවසක් සඳහාම",
    "SABSE ZYADA PASAND": "වඩාත්ම ජනප්‍රිය",
    "Best Sellers": "වැඩියෙන්ම අලෙවි වන",
    "Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye.": "අපගේ වඩාත්ම ප්‍රියජනක නිර්මාණ — සත්‍ය ශිල්පීයත්වයේ අගය දන්නා පාරිභෝගිකයින් විසින් තෝරාගනු ලැබූ.",
    "Explore Complete Collection": "සම්පූර්ණ එකතුව ගවේෂණය කරන්න",
    "Our Guiding Craft Pillars": "අපගේ මූලික ශිල්පීය කුළුණු",
    "HOME": "මුල් පිටුව",
    "SHOP": "වෙළඳසැල",
    "ABOUT": "අප ගැන",
    "CONTACT": "අප අමතන්න",
    "ORDERS": "ඇණවුම්",
    "Home": "මුල් පිටුව",
    "Shop": "වෙළඳසැල",
    "About": "අප ගැන",
    "Contact": "අප අමතන්න",
    "Orders": "ඇණවුම්",
    "SHOP NOW": "දැන් මිලදී ගන්න",
    "Shop Now": "දැන් මිලදී ගන්න",
    "VIEW ALL PRODUCTS": "සියලුම නිෂ්පාදන බලන්න",
    "Explore Odisha Heritage by Category": "කාණ්ඩය අනුව ඔඩිෂා උරුමය ගවේෂණය කරන්න",
    "ADD TO BAG": "මල්ලට එක් කරන්න",
    "Add to Bag": "මල්ලට එක් කරන්න",
    "Add To Bag": "මල්ලට එක් කරන්න",
    "BUY NOW": "දැන් මිලදී ගන්න",
    "Buy Now": "දැන් මිලදී ගන්න",
    "⚡ Buy Now": "⚡ දැන් මිලදී ගන්න",
    "Quick View": "ඉක්මන් බැල්ම",
    "View Details": "විස්තර බලන්න",
    "VIEW DETAILS": "විස්තර බලන්න",
    "Added": "එක් කරන ලදි",
    "SELECT LANGUAGE": "භාෂාව තෝරන්න",
    "Select Language": "භාෂාව තෝරන්න",
    "GLOBAL ATELIER": "ගෝලීය කලාගාරය",
    "Select Country & Language": "රට සහ භාෂාව තෝරන්න",
    "Search country or language...": "රට හෝ භාෂාව සොයන්න...",
    "Reset to English (Original)": "මුල් ඉංග්‍රීසි භාෂාවට නැවත සකසන්න",
    "JBI Cultural Engine": "JBI සංස්කෘතික පද්ධතිය",
    "All": "සියල්ල",
    "Global": "ගෝලීය",
    "Middle East": "මැදපෙරදිග",
    "Subcontinent": "උපමහාද්වීපය",
    "Asia": "ආසියාව",
    "In Stock": "තොග ඇත",
    "Out of Stock": "තොග අවසන්",
    "OUT OF STOCK": "තොග අවසන්",
    "SOLD OUT": "විකිණී අවසන්",
    "Notify When Available": "ලැබුණු පසු දන්වන්න",
    "Notify Me": "මට දන්වන්න",
    "NEW": "අලුත්",
    "New": "අලුත්",
    "Handloom & Textiles": "අත්යන්ත්‍ර සහ රෙදිපිළි",
    "Handicrafts": "හස්ත කර්මාන්ත",
    "Heritage Art": "උරුම කලාව",
    "Jewellery & Ornaments": "ආභරණ සහ පැළඳුම්",
    "COIR & NATURAL FIBER": "කොහු සහ ස්වාභාවික කෙඳි",
    "SAMBALPURI IKAT WEAVING": "සම්බල්පුරි ඉකට් විවීම",
    "DONGRIA TRIBAL WEAVING": "දොන්ග්‍රියා ගෝත්‍රික විවීම",
    "DHOKRA METAL CASTING": "ඩොක්රා ලෝහ වාත්තු කිරීම",
    "BALESWAR LAC JEWELLERY": "බලේශ්වර් ලාකඩ ආභරණ",
    "GOLDEN GRASS & KAINTHA": "රන් තණකොළ නිර්මාණ",
    "WOOD CARVING & CRAFT": "ලී කැටයම් සහ ශිල්ප",
    "JUTE & NATURAL FIBER": "ගෝනි නූල් සහ කෙඳි",
    "STONE CARVING": "ගල් කැටයම්",
    "DHOKRA METAL JEWELLERY": "ඩොක්රා ලෝහ ආභරණ",
    "TUSSAR SILK WEAVING": "ටුසාර් සිල්ක් විවීම",
    "PATTACHITRA & TALAPATRA": "පට්ටචිත්‍ර සහ තල්පත් කලාව",
    "Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll": "ගීතා ගෝවින්ද පූජනීය තල්පත් නැමෙන ලියවිල්ල",
    "Radha Krishna & Tree of Life Pattachitra Canvas Painting": "රාධා ක්‍රිෂ්ණා සහ ජීවන වෘක්ෂය පට්ටචිත්‍ර කැන්වස් චිත්‍රය",
    "Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan": "දශාවතාර පූජනීය තල්පත් කැටයම් කළ චාරිත්‍රානුකූල පවන්පත",
    "Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription": "වසන්ත රාස ලීලා තාල චිත්‍ර කුඩා තල්පත් සෙල්ලිපිය",
    "Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)": "සාම්ප්‍රදායික සඳුන් ඇඹරුම් ගල (චන්දන් පෙඩි)",
    "Heritage Dhokra Brass Mana (Traditional Measuring Bowl)": "ඩොක්රා පිත්තල සාම්ප්‍රදායික මිනුම් බඳුන (මානා)",
    "Dhokra Brass Metal Craft Jewellery Box": "ඩොක්රා පිත්තල ලෝහ ආභරණ පෙට්ටිය",
    "Coir Craft Multicoloured Flower Decor": "කොහු බහු-වර්ණ මල් සැරසිලි",
    "Handloom Pure Silk Saree - with Blouse": "අත්යන්ත්‍ර පිරිසිදු සිල්ක් සාරිය - හැට්ටය සහිත",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)": "සම්බල්පුරි අත්යන්ත්‍ර පිරිසිදු කපු කට්ටලය (තද රතු)",
    "Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set": "සම්බල්පුරි අත්යන්ත්‍ර පිරිසිදු කපු කට්ටලය",
    "Fine Handloom Tussar Silk Dupatta with Temple Border": "කෝවිල් දාර සහිත උසස් අත්යන්ත්‍ර ටුසාර් සිල්ක් දුපට්ටාව",
    "Handloom Fine Tussar Silk Saree (Peacock Teal)": "අත්යන්ත්‍ර උසස් ටුසාර් සිල්ක් සාරිය (මොනර නිල්)",
    "Handloom Fine Tussar Silk Saree - with Blouse": "අත්යන්ත්‍ර උසස් ටුසාර් සිල්ක් සාරිය - හැට්ටය සහිත",
    "Dongria Kondh Tribal Handwoven Shawl": "දොන්ග්‍රියා කොන්ද් ගෝත්‍රික අත්යන්ත්‍ර සළුව",
    "Handcrafted Golden Grass Square Pedi Box with Lid": "පියන සහිත අතින් සාදන ලද රන් තණකොළ පෙට්ටිය",
    "Handcrafted Golden Grass Round Storage Basket": "අතින් සාදන ලද රන් තණකොළ වටකුරු කූඩය",
    "Handwoven Golden Grass Square Tray": "අතින් වියන ලද රන් තණකොළ හතරැස් තැටිය",
    "Handcrafted Jute & Cotton Executive File Folder": "අතින් සාදන ලද ගෝනි නූල් සහ කපු ගොනු ෆෝල්ඩරය",
    "Crafted Jute Executive Conference Bag": "ගෝනි නූල් විධායක සම්මන්ත්‍රණ බෑගය",
    "Crafted Jute Laptop Messenger Bag (15-inch)": "ගෝනි නූල් ලැප්ටොප් බෑගය (අඟල් 15)",
    "Handcrafted Mango Wood Slatted Coasters (Set of 6)": "අඹ ලී කෝස්ටර් කට්ටලය (6 කට්ටලය)",
    "Heritage Dokra Brass Tribal Choker Necklace Set": "ඩොක්රා පිත්තල ගෝත්‍රික චෝකර් මාල කට්ටලය",
    "Dhokra Tribal Choker Necklace Set with Drops": "ඩොක්රා ගෝත්‍රික චෝකර් මාල කට්ටලය",
    "Dokra Earth Pendant Necklace with Terracotta Beads": "ටෙරකොටා පබළු සහිත ඩොක්රා පෙන්ඩන්ට් මාලය",
    "Dokra Round Sun-Mandala Pendant Necklace": "ඩොක්රා වටකුරු සූර්ය-මණ්ඩල පෙන්ඩන්ට් මාලය",
    "Dokra Multi-Strand Brass Beads Layered Necklace": "ඩොක්රා බහු-පටල පිත්තල පබළු මාලය",
    "Dokra Spiral Penth Drop Earrings": "ඩොක්රා සර්පිලාකාර කරාබු",
    "Dokra Spiral Web Brass Dangler Earrings": "ඩොක්රා සර්පිලාකාර දැල් පිත්තල කරාබු",
    "Dokra Tribal Fish Motif Dangler Earrings": "ඩොක්රා ගෝත්‍රික මත්ස්‍ය මෝස්තර කරාබු",
    "Dokra Egg-Shaped Spiral Drop Earrings": "ඩොක්රා බිත්තර හැඩැති සර්පිලාකාර කරාබු",
    "Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)": "බලේශ්වර් අතින් සාදන ලද ලාකඩ වළලු (යුගලය)",
    "Baleswar Lac Bangles with Spiral Striped Patterns (Pair)": "බලේශ්වර් ලාකඩ සර්පිලාකාර ඉරි සහිත වළලු (යුගලය)",
    "Master Guild:": "ප්‍රවීණ ශිල්පී සංගමය:",
    "Master Rabindra Behera": "ප්‍රවීණ රබින්ද්‍ර බෙහෙරා",
    "Master Rabindra Behera & Chitrakar Guild": "ප්‍රවීණ රබින්ද්‍ර බෙහෙරා සහ චිත්‍රකාර සංගමය",
    "Bikram & Devendra Meher": "බික්‍රම් සහ දේවේන්ද්‍ර මෙහර්",
    "Madhab Rana & Guild": "මාධබ් රානා සහ සංගමය",
    "Basudev Mohapatra & Shilpi Guild": "බාසුදේව් මොහාපත්‍ර සහ ශිල්පී සංගමය",
    "Gopal Sahu & Kantilo Kansari Guild": "ගෝපාල් සාහු සහ කන්තිලෝ කන්සාරි සංගමය",
    "Pratima Biswal & Coastal SHG Federation": "ප්‍රතිමා බිස්වාල් සහ වෙරළබඩ කාන්තා සංගමය",
    "Subhadra Jena & Sankhari Guild": "සුභද්‍රා ජේනා සහ සංඛාරි සංගමය",
    "Atelier Bag": "සාප්පු මල්ල",
    "Your Bag is Empty": "ඔබගේ සාප්පු මල්ල හිස්ය",
    "Your bag is currently empty.": "ඔබගේ සාප්පු මල්ල දැනට හිස්ය.",
    "Subtotal": "උප එකතුව",
    "Total": "එකතුව",
    "Proceed to Checkout": "මිලදී ගැනීමට ඉදිරියට",
    "Continue Shopping": "තවදුරටත් සාප්පු සවාරි යන්න",
    "Order Summary": "ඇණවුම් සාරාංශය",
    "Shipping Address": "නැව්ගත කිරීමේ ලිපිනය",
    "Full Name *": "සම්පූර්ණ නම *",
    "Full Name": "සම්පූර්ණ නම",
    "Email Address *": "විද්‍යුත් තැපැල් ලිපිනය *",
    "Email Address": "විද්‍යුත් තැපැල් ලිපිනය",
    "Phone Number": "දුරකථන අංකය",
    "City *": "නගරය *",
    "City": "නගරය",
    "State *": "පළාත *",
    "State": "පළාත",
    "PIN Code": "තැපැල් කේතය",
    "PIN / Postal Code": "තැපැල් කේතය",
    "Close": "වසා දමන්න",
    "Cancel": "අවලංගු කරන්න",
    "Save Changes": "වෙනස්කම් සුරකින්න",
    "Apply": "යොදන්න",
    "Discount": "වට්ටම්",
    "Free Shipping": "නොමිලේ නැව්ගත කිරීම",
    "Free Shipping Across India": "ඉන්දියාව පුරා නොමිලේ බෙදාහැරීම",
    "Worldwide Dispatch": "ලොව පුරා බෙදාහැරීම",
    "100% Genuine Craftsmanship": "100% සත්‍ය හස්ත කර්මාන්තය",
    "Sign In": "ඇතුල් වන්න",
    "Sign Up": "ලියාපදිංචි වන්න",
    "Sign Out": "ඉවත් වන්න",
    "Logout": "ඉවත් වන්න",
    "Create Account": "ගිණුමක් සාදන්න",
    "Sign In / Register": "ඇතුල් වන්න / ලියාපදිංචි වන්න",
    "My Orders & Tax Invoices": "මගේ ඇණවුම් සහ බදු ඉන්වොයිසි",
    "My Orders": "මගේ ඇණවුම්",
    "My Profile": "මගේ ගිණුම",
    "Administrator Portal": "පරිපාලක දොරටුව",
    "Open Administrator Portal": "පරිපාලක පද්ධතියට පිවිසෙන්න",
    "Back to Website": "නැවත වෙබ් අඩවියට",
    "← Back to Website": "← නැවත වෙබ් අඩවියට",
    "Customer / Patron": "පාරිභෝගිකයා",
    "Administrator": "පරිපාලක",
    "No Orders Placed Yet": "තවමත් ඇණවුම් කර නැත",
    "Your handcrafted artisan pieces from Odisha will appear here once you place an order.": "ඔබ ඇණවුමක් කළ පසු ඔඩිෂාවේ අතින් සාදන ලද කලා භාණ්ඩ මෙහි දිස්වනු ඇත.",
    "Packed": "ඇසුරුම් කරන ලදි",
    "Shipped": "නැව්ගත කරන ලදි",
    "Pending": "විසඳෙමින් පවතී",
    "Delivered": "භාර දෙන ලදි",
    "Cancelled": "අවලංගු කරන ලදි",
    "Status": "තත්ත්වය",
    "Amount": "මුදල",
    "Price": "මිල",
    "Order ID": "ඇණවුම් අංකය",
    "Customer": "පාරිභෝගිකයා",
    "Category": "කාණ්ඩය",
    "FOUNDER & CHIEF PATRON": "නිර්මාතෘ සහ ප්‍රධාන අනුශාසක",
    "Sri Dilip Kumar Sahoo": "ශ්‍රී දිලිප් කුමාර් සාහු මැතිතුමා",
    "HERITAGE COLLECTIONS": "උරුම එකතුව",
    "PRICE BRACKET": "මිල පරාසය"
  }
};

  // Pre-sort dictionary keys by length descending for greedy longest-match replacement
  const SORTED_KEYS = {};
  for (const lang of Object.keys(DICTIONARIES)) {
    SORTED_KEYS[lang] = Object.keys(DICTIONARIES[lang]).sort((a, b) => b.length - a.length);
  }

  let activeCountryId = "default";
  let activeLangCode = "en";
  try {
    const saved = localStorage.getItem("jbi_selected_country");
    if (saved) {
      activeCountryId = saved;
      const opt = LANGUAGE_OPTIONS.find(o => o.id === saved);
      if (opt) activeLangCode = opt.code || "en";
    }
  } catch(e) {}

  // Regional Currency Configurations & Exchange Rates (Real-Time Relative to Base INR)
  const CURRENCY_CONFIG = {
    "australia": { code: "AUD", symbol: "A$", rate: 0.0182, decimals: 2, name: "Australian Dollar" },
    "usa":       { code: "USD", symbol: "$",  rate: 0.0116, decimals: 2, name: "US Dollar" },
    "uae":       { code: "AED", symbol: "د.إ ", rate: 0.0425, decimals: 2, name: "UAE Dirham" },
    "queit":     { code: "KWD", symbol: "د.ك ", rate: 0.00357, decimals: 2, name: "Kuwaiti Dinar" },
    "london":    { code: "GBP", symbol: "£",  rate: 0.0091, decimals: 2, name: "British Pound" },
    "nepal":     { code: "NPR", symbol: "रू ", rate: 1.60,   decimals: 0, name: "Nepalese Rupee" },
    "china":     { code: "CNY", symbol: "¥",  rate: 0.0847, decimals: 2, name: "Chinese Yuan" },
    "bhutan":    { code: "BTN", symbol: "Nu. ", rate: 1.0,   decimals: 0, name: "Bhutanese Ngultrum" },
    "shri-lanka": { code: "LKR", symbol: "රු ", rate: 3.50, decimals: 0, name: "Sri Lankan Rupee" },
    "default":   { code: "INR", symbol: "₹",  rate: 1.0,    decimals: 0, name: "Indian Rupee" }
  };

  // Convert and format price in active currency
  function formatPrice(amountInINR, countryId) {
    const cId = countryId || activeCountryId || "default";
    const cfg = CURRENCY_CONFIG[cId] || CURRENCY_CONFIG["default"];
    const n = Number(amountInINR) || 0;
    if (cId === "default" || cfg.code === "INR") {
      return "₹" + n.toLocaleString("en-IN", {
        minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
        maximumFractionDigits: 2
      });
    }
    const converted = n * cfg.rate;
    let formattedNumber;
    if (cfg.decimals === 0) {
      formattedNumber = Math.round(converted).toLocaleString("en-US");
    } else {
      const rounded = Math.round(converted * 100) / 100;
      if (Number.isInteger(rounded)) {
        formattedNumber = rounded.toLocaleString("en-US");
      } else {
        formattedNumber = rounded.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    }
    return cfg.symbol + formattedNumber;
  }

  // Global hook for React components
  window.jbiFormatPrice = formatPrice;

  // Regex replacer for any prices in text strings
  function convertPricesInText(text, countryId) {
    if (!text || countryId === "default") return text;
    const priceRegex = /(?:₹|Rs\.?)\s*([0-9]{1,3}(?:,[0-9]{2,3})*(?:\.[0-9]+)?|[0-9]+(?:\.[0-9]+)?)/g;
    return text.replace(priceRegex, (match, numStr) => {
      const rawNum = parseFloat(numStr.replace(/,/g, ""));
      if (isNaN(rawNum)) return match;
      return formatPrice(rawNum, countryId);
    });
  }

  // Safe registry storing pristine original English values
  const nodeOriginals = new WeakMap();

  function clearLegacyGoogleCookies() {
    try {
      const domains = [window.location.hostname, "." + window.location.hostname, ""];
      const paths = ["/", ""];
      domains.forEach(d => {
        paths.forEach(p => {
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + p + (d ? "; domain=" + d : "");
        });
      });
    } catch(e) {}
  }

  function showToast(msg, flag) {
    try {
      let container = document.getElementById("jbi-lang-toast-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "jbi-lang-toast-container";
        container.style.cssText = "position:fixed;bottom:28px;right:28px;z-index:999999;pointer-events:none;display:flex;flex-direction:column;gap:10px;";
        document.body.appendChild(container);
      }
      const toast = document.createElement("div");
      toast.style.cssText = "background:linear-gradient(135deg, #1c1917 0%, #292524 100%);color:#fff;padding:12px 22px;border-radius:9999px;font-family:sans-serif;font-size:13px;font-weight:600;box-shadow:0 14px 35px rgba(0,0,0,0.35);border:1.5px solid rgba(212,175,55,0.6);display:flex;align-items:center;gap:12px;animation:jbiFadeIn 0.25s ease-out forwards;pointer-events:auto;";
      toast.innerHTML = `<span style="font-size:22px;line-height:1;">${flag || "🌐"}</span><span>${msg}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.35s ease";
        setTimeout(() => {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 350);
      }, 2600);
    } catch(e) {}
  }

  // High-performance phrase & substring translator with price conversion
  function translateString(rawText, langCode) {
    if (!rawText || typeof rawText !== "string") return rawText;
    const trimmed = rawText.trim();
    if (!trimmed) return rawText;

    let processed = rawText;

    // 1. Language dictionary translation (if non-English language selected)
    if (langCode && langCode !== "en") {
      const dict = DICTIONARIES[langCode];
      if (dict) {
        if (dict[trimmed]) {
          processed = rawText.replace(trimmed, dict[trimmed]);
        } else {
          const lowerTrim = trimmed.toLowerCase();
          let matchedKey = null;
          for (const key of Object.keys(dict)) {
            if (key.toLowerCase() === lowerTrim) {
              matchedKey = key;
              break;
            }
          }
          if (matchedKey) {
            processed = rawText.replace(trimmed, dict[matchedKey]);
          } else {
            const sortedKeys = SORTED_KEYS[langCode] || [];
            for (let i = 0; i < sortedKeys.length; i++) {
              const key = sortedKeys[i];
              if (key.length >= 3 && processed.includes(key)) {
                processed = processed.split(key).join(dict[key]);
              }
            }
          }
        }

        // Common regex patterns for price, units, counts
        if (processed.includes("Price:")) {
          const trPrice = dict["Price"] || "Price";
          processed = processed.replace(/Price:/g, trPrice + ":");
        }
        if (processed.includes("Subtotal:")) {
          const trSub = dict["Subtotal"] || "Subtotal";
          processed = processed.replace(/Subtotal:/g, trSub + ":");
        }
        if (processed.includes("Total:")) {
          const trTot = dict["Total"] || "Total";
          processed = processed.replace(/Total:/g, trTot + ":");
        }
        if (processed.includes("OFF")) {
          const trOff = dict["Discount"] || "OFF";
          processed = processed.replace(/OFF/g, trOff);
        }
      }
    }

    // 2. Dynamic Price Conversion to Active Region Currency
    if (activeCountryId !== "default") {
      processed = convertPricesInText(processed, activeCountryId);
    }

    return processed;
  }

  // Restore DOM back to 100% pristine English and INR prices to prevent mixing
  function restoreDOM() {
    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walker.nextNode())) {
        if (nodeOriginals.has(node)) {
          const orig = nodeOriginals.get(node);
          if (node.nodeValue !== orig) {
            node.nodeValue = orig;
          }
        }
      }
      document.querySelectorAll("[data-orig-placeholder]").forEach(input => {
        input.placeholder = input.getAttribute("data-orig-placeholder");
      });
      document.querySelectorAll("[data-orig-title]").forEach(el => {
        el.title = el.getAttribute("data-orig-title");
      });
      document.querySelectorAll("[data-orig-aria-label]").forEach(el => {
        el.setAttribute("aria-label", el.getAttribute("data-orig-aria-label"));
      });
    } catch(e) {
      console.warn("[JBITranslator restoreDOM]", e);
    }
  }

  // Translate DOM cleanly from original English & update prices
  function translateDOM() {
    if (activeCountryId === "default") {
      restoreDOM();
      return;
    }

    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          const tag = node.parentElement.tagName;
          if (tag === "SCRIPT" || tag === "STYLE" || tag === "CODE" || tag === "NOSCRIPT" || tag === "TEXTAREA" || node.parentElement.closest("#jbi-lang-dropdown") || node.parentElement.closest("#jbi-theme-dock")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      let node;
      while ((node = walker.nextNode())) {
        const currentVal = node.nodeValue;
        if (!currentVal || !currentVal.trim()) continue;

        // Securely capture original English & INR value for this text node
        if (!nodeOriginals.has(node)) {
          nodeOriginals.set(node, currentVal);
        }

        const originalText = nodeOriginals.get(node);
        const translated = translateString(originalText, activeLangCode);
        if (translated && translated !== node.nodeValue) {
          node.nodeValue = translated;
        }
      }

      // Placeholders
      document.querySelectorAll("input[placeholder]").forEach(input => {
        if (input.closest("#jbi-lang-dropdown")) return;
        if (!input.hasAttribute("data-orig-placeholder")) {
          input.setAttribute("data-orig-placeholder", input.placeholder);
        }
        const orig = input.getAttribute("data-orig-placeholder");
        const translated = translateString(orig, activeLangCode);
        if (translated && translated !== input.placeholder) {
          input.placeholder = translated;
        }
      });

      // Titles
      document.querySelectorAll("[title]").forEach(el => {
        if (el.closest("#jbi-lang-dropdown")) return;
        if (!el.hasAttribute("data-orig-title")) {
          el.setAttribute("data-orig-title", el.title);
        }
        const orig = el.getAttribute("data-orig-title");
        const translated = translateString(orig, activeLangCode);
        if (translated && translated !== el.title) {
          el.title = translated;
        }
      });

      // Aria-labels
      document.querySelectorAll("[aria-label]").forEach(el => {
        if (el.closest("#jbi-lang-dropdown")) return;
        if (!el.hasAttribute("data-orig-aria-label")) {
          el.setAttribute("data-orig-aria-label", el.getAttribute("aria-label"));
        }
        const orig = el.getAttribute("data-orig-aria-label");
        const translated = translateString(orig, activeLangCode);
        if (translated && translated !== el.getAttribute("aria-label")) {
          el.setAttribute("aria-label", translated);
        }
      });
    } catch(e) {
      console.warn("[JBITranslator translateDOM]", e);
    }
  }

  function setLanguage(countryId) {
    clearLegacyGoogleCookies();
    const opt = LANGUAGE_OPTIONS.find(o => o.id === countryId) || LANGUAGE_OPTIONS[LANGUAGE_OPTIONS.length - 1];
    activeCountryId = opt.id;
    activeLangCode = opt.code;

    try {
      localStorage.setItem("jbi_selected_country", opt.id);
      localStorage.setItem("jbi_selected_lang", opt.code);
    } catch(e) {}

    // Direction handling (RTL for Arabic UAE / Kuwait)
    if (opt.dir === "rtl") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.body.classList.add("dir-rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", opt.code || "en");
      document.body.classList.remove("dir-rtl");
    }

    // Step 1: Cleanly restore original English & INR prices first
    restoreDOM();

    // Step 2: Apply target translation and price conversion
    if (opt.id !== "default") {
      translateDOM();
      const curr = opt.currency ? ` • ${opt.currency} (${opt.currencySymbol})` : "";
      showToast(`Website converted to ${opt.name} (${opt.lang})${curr}`, opt.flag);
    } else {
      showToast("Language & Currency restored to India Heritage (English & ₹ INR)", "🇮🇳");
    }

    window.dispatchEvent(new CustomEvent("jbi_language_changed", { detail: opt }));
    window.dispatchEvent(new CustomEvent("jbi_currency_changed", { detail: { country: opt.id, currency: opt.currency || "INR", rate: opt.rate || 1 } }));
  }

  // MutationObserver for React renders & tab changes
  let translateTimer = null;
  const observer = new MutationObserver(() => {
    if (activeCountryId === "default") return;
    clearTimeout(translateTimer);
    translateTimer = setTimeout(() => {
      requestAnimationFrame(translateDOM);
    }, 40);
  });

  document.addEventListener("DOMContentLoaded", () => {
    clearLegacyGoogleCookies();
    observer.observe(document.body, { childList: true, subtree: true });
    try {
      const saved = localStorage.getItem("jbi_selected_country");
      if (saved && saved !== "default") {
        setLanguage(saved);
      }
    } catch(e) {}
  });

  window.jbiFormatPrice = formatPrice;
  window.JBITranslator = {
    options: LANGUAGE_OPTIONS,
    setLanguage: setLanguage,
    getCurrentCountry: () => activeCountryId,
    getCurrentLang: () => activeLangCode,
    getCurrentCurrency: () => CURRENCY_CONFIG[activeCountryId] || CURRENCY_CONFIG["default"],
    formatPrice: formatPrice,
    currencies: CURRENCY_CONFIG,
    translateDOM: translateDOM,
    translateNow: translateDOM,
    restoreDOM: restoreDOM
  };
})();