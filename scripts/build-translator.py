import json
import os

languages = [
    { "id": "australia", "name": "Astralia", "country": "Australia", "lang": "English (AU)", "script": "English", "code": "en", "region": "global", "flag": "🇦🇺", "label": "Astralia — English (AU)" },
    { "id": "usa", "name": "USA", "country": "United States (USA)", "lang": "English (US)", "script": "English", "code": "en", "region": "global", "flag": "🇺🇸", "label": "USA — English (US)" },
    { "id": "uae", "name": "UAE", "country": "United Arab Emirates (UAE)", "lang": "العربية (Arabic)", "script": "العربية", "code": "ar", "dir": "rtl", "region": "middle-east", "flag": "🇦🇪", "label": "UAE — العربية (Arabic)" },
    { "id": "queit", "name": "Queit", "country": "Kuwait (Queit)", "lang": "العربية (Kuwaiti)", "script": "العربية", "code": "ar", "dir": "rtl", "region": "middle-east", "flag": "🇰🇼", "label": "Queit — العربية (Kuwaiti Arabic)" },
    { "id": "london", "name": "London", "country": "United Kingdom (London)", "lang": "English (UK)", "script": "English", "code": "en", "region": "global", "flag": "🇬🇧", "label": "London — English (UK)" },
    { "id": "nepal", "name": "Nepal", "country": "Nepal", "lang": "नेपाली (Nepali)", "script": "नेपाली", "code": "ne", "region": "subcontinent", "flag": "🇳🇵", "label": "Nepal — नेपाली (Nepali)" },
    { "id": "china", "name": "China", "country": "China (PRC)", "lang": "中文 (Chinese)", "script": "简体中文", "code": "zh-CN", "region": "asia", "flag": "🇨🇳", "label": "China — 中文 (Simplified Chinese)" },
    { "id": "bhutan", "name": "Bhutan", "country": "Bhutan (Kingdom)", "lang": "རྫོང་ཁ (Dzongkha)", "script": "རྫོང་ཁ", "code": "dz", "region": "asia", "flag": "🇧🇹", "label": "Bhutan — རྫོང་ཁ (Dzongkha)" },
    { "id": "shri-lanka", "name": "Shri lanka", "country": "Sri Lanka (Shri lanka)", "lang": "සිංහල (Sinhala)", "script": "සිංහල", "code": "si", "region": "subcontinent", "flag": "🇱🇰", "label": "Shri lanka — සිංහල (Sinhala)" },
    { "id": "default", "name": "India / Default", "country": "India (Original Heritage)", "lang": "English (Original)", "script": "English", "code": "en", "region": "subcontinent", "flag": "🇮🇳", "label": "India / Default — English (Original)" }
]

# Common dictionary phrases
translations = {
    # 1. Navigation & Header
    "SELECT LANGUAGE": {
        "ar": "اختر اللغة",
        "ne": "भाषा छान्नुहोस्",
        "zh-CN": "选择语言",
        "dz": "སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
        "si": "භාෂාව තෝරන්න"
    },
    "Select Language": {
        "ar": "اختر اللغة",
        "ne": "भाषा छान्नुहोस्",
        "zh-CN": "选择语言",
        "dz": "སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
        "si": "භාෂාව තෝරන්න"
    },
    "Global Atelier": {
        "ar": "الأتيليه العالمي",
        "ne": "ग्लोबल एटलियर",
        "zh-CN": "全球艺坊",
        "dz": "འཛམ་གླིང་ལག་བཟོ་ཁང",
        "si": "ගෝලීය කලාගාරය"
    },
    "GLOBAL ATELIER": {
        "ar": "الأتيليه العالمي",
        "ne": "ग्लोबल एटलियर",
        "zh-CN": "全球艺坊",
        "dz": "འཛམ་གླིང་ལག་བཟོ་ཁང",
        "si": "ගෝලීය කලාගාරය"
    },
    "Select Country & Language": {
        "ar": "اختر الدولة واللغة",
        "ne": "देश र भाषा छान्नुहोस्",
        "zh-CN": "选择国家与语言",
        "dz": "རྒྱལ་ཁབ་དང་སྐད་ཡིག་གདམ་ཁ་རྐྱབས",
        "si": "රට සහ භාෂාව තෝරන්න"
    },
    "Search country or language...": {
        "ar": "البحث عن الدولة أو اللغة...",
        "ne": "देश वा भाषा खोज्नुहोस्...",
        "zh-CN": "搜索国家或语言...",
        "dz": "རྒྱལ་ཁབ་དང་སྐད་ཡིག་འཚོལ་ཞིབ...",
        "si": "රට හෝ භාෂාව සොයන්න..."
    },
    "Reset to English (Original)": {
        "ar": "إعادة التعيين إلى الإنجليزية (الأصلية)",
        "ne": "मूल अङ्ग्रेजीमा फर्काउनुहोस्",
        "zh-CN": "重置为原始英文",
        "dz": "དབྱིན་སྐད་ངོ་མར་སླར་གསོ་བྱེད",
        "si": "මුල් ඉංග්‍රීසි භාෂාවට නැවත සකසන්න"
    },
    "JBI Cultural Engine": {
        "ar": "محرك جي بي آي الثقافي",
        "ne": "JBI सांस्कृतिक इन्जिन",
        "zh-CN": "JBI 文化翻译引擎",
        "dz": "JBI ལམ་སྲོལ་འཕྲུལ་ཆས",
        "si": "JBI සංස්කෘතික පද්ධතිය"
    },
    "HOME": {
        "ar": "الرئيسية",
        "ne": "गृहपृष्ठ",
        "zh-CN": "首页",
        "dz": "གདོང་ཤོག",
        "si": "මුල් පිටුව"
    },
    "SHOP": {
        "ar": "المتجر",
        "ne": "पसल",
        "zh-CN": "商店",
        "dz": "ཚོང་ཁང",
        "si": "වෙළඳසැල"
    },
    "ABOUT": {
        "ar": "من نحن",
        "ne": "हाम्रो बारेमा",
        "zh-CN": "关于我们",
        "dz": "ང་བཅས་ཀྱི་སྐོར",
        "si": "අප ගැන"
    },
    "CONTACT": {
        "ar": "اتصل بنا",
        "ne": "सम्पर्क",
        "zh-CN": "联系我们",
        "dz": "འབྲེལ་གཏུགས",
        "si": "අප අමතන්න"
    },
    "ORDERS": {
        "ar": "الطلبات",
        "ne": "अर्डरहरू",
        "zh-CN": "我的订单",
        "dz": "མངགས་ཐོ",
        "si": "ඇණවුම්"
    },
    "Home": {
        "ar": "الرئيسية",
        "ne": "गृहपृष्ठ",
        "zh-CN": "首页",
        "dz": "གདོང་ཤོག",
        "si": "මුල් පිටුව"
    },
    "Shop": {
        "ar": "المتجر",
        "ne": "पसल",
        "zh-CN": "商店",
        "dz": "ཚོང་ཁང",
        "si": "වෙළඳසැල"
    },
    "About": {
        "ar": "من نحن",
        "ne": "हाम्रो बारेमा",
        "zh-CN": "关于我们",
        "dz": "ང་བཅས་ཀྱི་སྐོར",
        "si": "අප ගැන"
    },
    "Contact": {
        "ar": "اتصل بنا",
        "ne": "सम्पर्क",
        "zh-CN": "联系我们",
        "dz": "འབྲེལ་གཏུགས",
        "si": "අප අමතන්න"
    },
    "Orders": {
        "ar": "الطلبات",
        "ne": "अर्डरहरू",
        "zh-CN": "我的订单",
        "dz": "མངགས་ཐོ",
        "si": "ඇණවුම්"
    },
    "JBI Craft": {
        "ar": "حرف جي بي آي",
        "ne": "JBI हस्तकला",
        "zh-CN": "JBI 传统手工艺",
        "dz": "JBI ལག་བཟོ",
        "si": "JBI හස්ත කර්මාන්ත"
    },
    "JBI Crafts": {
        "ar": "حرف جي بي آي",
        "ne": "JBI हस्तकला",
        "zh-CN": "JBI 传统手工艺",
        "dz": "JBI ལག་བཟོ",
        "si": "JBI හස්ත කර්මාන්ත"
    },
    "Search crafts, saris, decor...": {
        "ar": "البحث عن الحرف اليدوية، الساري، الديكور...",
        "ne": "हस्तकला, साडी, सजावट खोज्नुहोस्...",
        "zh-CN": "搜索手工艺品、纱丽、家居摆件...",
        "dz": "ལག་བཟོ་ གོས་ཆེན་ མཛེས་ཆས་འཚོལ་ཞིབ...",
        "si": "හස්ත කර්මාන්ත, සාරි, සැරසිලි සොයන්න..."
    },
    "Search crafts...": {
        "ar": "البحث عن الحرف اليدوية...",
        "ne": "हस्तकला खोज्नुहोस्...",
        "zh-CN": "搜索手工艺品...",
        "dz": "ལག་བཟོ་འཚོལ་ཞིབ...",
        "si": "හස්ත කර්මාන්ත සොයන්න..."
    },
    "Search products...": {
        "ar": "البحث عن المنتجات...",
        "ne": "उत्पादनहरू खोज्नुहोस्...",
        "zh-CN": "搜索商品...",
        "dz": "ཅ་ལག་འཚོལ་ཞིབ...",
        "si": "නිෂ්පාදන සොයන්න..."
    },
    "SHOP NOW": {
        "ar": "تسوق الآن",
        "ne": "अहिले किनमेल गर्नुहोस्",
        "zh-CN": "立即选购",
        "dz": "ད་ལྟོ་ཉོ",
        "si": "දැන් මිලදී ගන්න"
    },
    "Shop Now": {
        "ar": "تسوق الآن",
        "ne": "अहिले किनमेल गर्नुहोस्",
        "zh-CN": "立即选购",
        "dz": "ད་ལྟོ་ཉོ",
        "si": "දැන් මිලදී ගන්න"
    },
    "ADD TO BAG": {
        "ar": "أضف إلى السلة",
        "ne": "झोलामा राख्नुहोस्",
        "zh-CN": "加入购物袋",
        "dz": "ཁུག་མའི་ནང་བཙུགས",
        "si": "මල්ලට එක් කරන්න"
    },
    "Add to Bag": {
        "ar": "أضف إلى السلة",
        "ne": "झोलामा राख्नुहोस्",
        "zh-CN": "加入购物袋",
        "dz": "ཁུག་མའི་ནང་བཙུགས",
        "si": "මල්ලට එක් කරන්න"
    },
    "Add To Bag": {
        "ar": "أضف إلى السلة",
        "ne": "झोलामा राख्नुहोस्",
        "zh-CN": "加入购物袋",
        "dz": "ཁུག་མའི་ནང་བཙུགས",
        "si": "මල්ලට එක් කරන්න"
    },
    "Added": {
        "ar": "تمت الإضافة",
        "ne": "थपियो",
        "zh-CN": "已加入",
        "dz": "བཙུགས་ཟིན",
        "si": "එක් කරන ලදි"
    },
    "BUY NOW": {
        "ar": "اشتري الآن",
        "ne": "अहिले किन्नुहोस्",
        "zh-CN": "立即购买",
        "dz": "ད་ལྟོ་ཉོ",
        "si": "දැන් මිලදී ගන්න"
    },
    "Buy Now": {
        "ar": "اشتري الآن",
        "ne": "अहिले किन्नुहोस्",
        "zh-CN": "立即购买",
        "dz": "ད་ལྟོ་ཉོ",
        "si": "දැන් මිලදී ගන්න"
    },
    "EXPLORE CRAFTS": {
        "ar": "استكشف الحرف",
        "ne": "कलाकृतिहरू हेर्नुहोस्",
        "zh-CN": "探索非遗手艺",
        "dz": "ལག་བཟོ་འཚོལ་ཞིབ",
        "si": "කලාකෘති ගවේෂණය කරන්න"
    },
    "Explore Crafts": {
        "ar": "استكشف الحرف",
        "ne": "कलाकृतिहरू हेर्नुहोस्",
        "zh-CN": "探索非遗手艺",
        "dz": "ལག་བཟོ་འཚོལ་ཞིབ",
        "si": "කලාකෘති ගවේෂණය කරන්න"
    },
    "VIEW DETAILS": {
        "ar": "عرض التفاصيل",
        "ne": "विवरण हेर्नुहोस्",
        "zh-CN": "查看详情",
        "dz": "རྒྱས་བཤད་བལྟ",
        "si": "විස්තර බලන්න"
    },
    "View Details": {
        "ar": "عرض التفاصيل",
        "ne": "विवरण हेर्नुहोस्",
        "zh-CN": "查看详情",
        "dz": "རྒྱས་བཤད་བལྟ",
        "si": "විස්තර බලන්න"
    },
    "EXPLORE COLLECTION": {
        "ar": "استكشف المجموعة",
        "ne": "सङ्ग्रह हेर्नुहोस्",
        "zh-CN": "浏览典藏系列",
        "dz": "བསྡུ་གསོག་འཚོལ་ཞིབ",
        "si": "එකතුව ගවේෂණය කරන්න"
    },
    "Explore Collection": {
        "ar": "استكشف المجموعة",
        "ne": "सङ्ग्रह हेर्नुहोस्",
        "zh-CN": "浏览典藏系列",
        "dz": "བསྡུ་གསོག་འཚོལ་ཞིབ",
        "si": "එකතුව ගවේෂණය කරන්න"
    },
    "Handcrafted Treasures from Master Artisans": {
        "ar": "كنوز مصنوعة يدوياً من كبار الحرفيين",
        "ne": "मास्टर कारीगरहरूबाट हस्तनिर्मित बहुमूल्य वस्तुहरू",
        "zh-CN": "传承大师匠心打造的珍品手作",
        "dz": "ལག་བཟོ་མཁས་པ་ཚུ་གིས་བཟོ་བའི་རིན་ཆེན་ཅ་ལག",
        "si": "ප්‍රවීණ ශිල්පීන්ගේ අතින් නිර්මාණය වූ අගනා නිමැවුම්"
    },
    "Preserving Odisha Heritage through sustainable and authentic craftsmanship": {
        "ar": "الحفاظ على تراث أوديشا من خلال الحرفية المستدامة والأصيلة",
        "ne": "दिगो र प्रामाणिक हस्तकलाको माध्यमबाट ओडिशाको सम्पदा संरक्षण",
        "zh-CN": "以环保永续的纯正工艺传承奥迪沙千年非遗精髓",
        "dz": "རྒྱུན་བརྟན་དང་ངོ་མའི་ལག་བཟོའི་ཐོག་ལས་ཨོ་ཌི་ཤའི་ལམ་སྲོལ་ཉམས་སྲུང་འབདཝ",
        "si": "තිරසාර හා සත්‍ය හස්ත කර්මාන්තය තුළින් ඔඩිෂා උරුමය සුරැකීම"
    },
    "Preserving Odisha Heritage through sustainable and authentic craftsmanship.": {
        "ar": "الحفاظ على تراث أوديشا من خلال الحرفية المستدامة والأصيلة.",
        "ne": "दिगो र प्रामाणिक हस्तकलाको माध्यमबाट ओडिशाको सम्पदा संरक्षण।",
        "zh-CN": "以环保永续的纯正工艺传承奥迪沙千年非遗精髓。",
        "dz": "རྒྱུན་བརྟན་དང་ངོ་མའི་ལག་བཟོའི་ཐོག་ལས་ཨོ་ཌི་ཤའི་ལམ་སྲོལ་ཉམས་སྲུང་འབདཝ།",
        "si": "තිරසාර හා සත්‍ය හස්ත කර්මාන්තය තුළින් ඔඩිෂා උරුමය සුරැකීම."
    },
    "Preserving Odisha Heritage": {
        "ar": "الحفاظ على تراث أوديشا",
        "ne": "ओडिशाको सम्पदा संरक्षण",
        "zh-CN": "传承奥迪沙非遗",
        "dz": "ཨོ་ཌི་ཤའི་ལམ་སྲོལ་ཉམས་སྲུང",
        "si": "ඔඩිෂා උරුමය සුරැකීම"
    },
    "Authentic Craftsmanship": {
        "ar": "حرفية أصلية",
        "ne": "प्रामाणिक हस्तकला",
        "zh-CN": "纯正匠人手作",
        "dz": "ངོ་མའི་ལག་བཟོ",
        "si": "සත්‍ය හස්ත කර්මාන්තය"
    },
    "Direct From Artisans": {
        "ar": "مباشرة من الحرفيين",
        "ne": "प्रत्यक्ष कारीगरहरूबाट",
        "zh-CN": "手艺人源头直供",
        "dz": "ལག་བཟོ་པ་ལས་ཐད་ཀར",
        "si": "ශිල්පීන්ගෙන් ඍජුවම"
    },
    "Eco-Friendly Heritage": {
        "ar": "تراث صديق للبيئة",
        "ne": "पर्यावरण-मैत्री सम्पदा",
        "zh-CN": "环保自然非遗",
        "dz": "མཐའ་འཁོར་དང་མཐུན་པའི་ལམ་སྲོལ",
        "si": "පරිසර හිතකාමී උරුමය"
    },
    "100% Genuine Craftsmanship": {
        "ar": "حرفية أصلية 100٪",
        "ne": "१००% वास्तविक हस्तकला",
        "zh-CN": "100% 纯正非遗工艺",
        "dz": "༡༠༠% ངོ་མའི་ལག་བཟོ",
        "si": "100% සත්‍ය හස්ත කර්මාන්තය"
    },
    "Direct Master Artisans": {
        "ar": "مباشرة من كبار الحرفيين",
        "ne": "प्रत्यक्ष मास्टर कारीगरहरू",
        "zh-CN": "国家级工艺美术大师直连",
        "dz": "ལག་བཟོ་མཁས་པ་ཐད་ཀར",
        "si": "ප්‍රවීණ ශිල්පීන් ඍජුවම"
    },
    "Free Insured Shipping": {
        "ar": "شحن مجاني مؤمن عليه",
        "ne": "निःशुल्क बिमा गरिएको ढुवानी",
        "zh-CN": "全额保价包邮",
        "dz": "ཉེན་སྲུང་ཡོད་པའི་སྐྱེལ་འདྲེན་རིན་མེད",
        "si": "නොමිලේ රක්ෂිත නැව්ගත කිරීම"
    },
    "Free Shipping Across India": {
        "ar": "شحن مجاني في جميع أنحاء الهند",
        "ne": "भारतभर निःशुल्क ढुवानी",
        "zh-CN": "全印度免费配送",
        "dz": "རྒྱ་གར་རྒྱལ་ཡོངས་སྐྱེལ་འདྲེན་རིན་མེད",
        "si": "ඉන්දියාව පුරා නොමිලේ බෙදාහැරීම"
    },
    "Worldwide Dispatch": {
        "ar": "شحن لجميع أنحاء العالم",
        "ne": "विश्वव्यापी ढुवानी",
        "zh-CN": "全球直邮速递",
        "dz": "འཛམ་གླིང་ཡོངས་ལ་སྐྱེལ་འདྲེན",
        "si": "ලොව පුරා බෙදාහැරීම"
    },
    "GI Tagged Provenance": {
        "ar": "منشأ موثق بالمؤشر الجغرافي",
        "ne": "GI ट्याग गरिएको प्रामाणिकता",
        "zh-CN": "国家地理标志原产地认证",
        "dz": "ས་གནས་ངོ་རྟགས་ཡོད་པའི་ཐོན་སྐྱེད",
        "si": "භූගෝලීය දර්ශක සහතිකය"
    },
    "All Categories": {
        "ar": "جميع الفئات",
        "ne": "सबै श्रेणीहरू",
        "zh-CN": "全部分类",
        "dz": "དབྱེ་ཁག་ཆ་མཉམ",
        "si": "සියලුම කාණ්ඩ"
    },
    "All Treasures": {
        "ar": "جميع الكنوز",
        "ne": "सबै कलाकृतिहरू",
        "zh-CN": "全部珍品",
        "dz": "རིན་ཆེན་ཅ་ལག་ཆ་མཉམ",
        "si": "සියලුම වස්තු"
    },
    "ALL TREASURES": {
        "ar": "جميع الكنوز",
        "ne": "सबै कलाकृतिहरू",
        "zh-CN": "全部珍品",
        "dz": "རིན་ཆེན་ཅ་ལག་ཆ་མཉམ",
        "si": "සියලුම වස්තු"
    },
    "Handloom & Sarees": {
        "ar": "المنسوجات اليدوية والساري",
        "ne": "हाते तान र साडीहरू",
        "zh-CN": "传统织布与纱丽",
        "dz": "ཐགས་རས་དང་གོས་ཆེན",
        "si": "අත්යන්ත්‍ර සහ සාරි"
    },
    "Handloom & Textiles": {
        "ar": "المنسوجات اليدوية",
        "ne": "हाते तान र कपडाहरू",
        "zh-CN": "手工纺织品",
        "dz": "ལག་ཐགས་རས",
        "si": "අත්යන්ත්‍ර රෙදිපිළි"
    },
    "Dokra Metal Craft": {
        "ar": "حرف الدوكرا النحاسية",
        "ne": "डोकरा धातु हस्तकला",
        "zh-CN": "多克拉失蜡铜铸艺术",
        "dz": "ཌོཀ་ར་ཟངས་ཀྱི་ལག་བཟོ",
        "si": "ඩොක්රා ලෝහ කර්මාන්තය"
    },
    "Dokra Brass Metal": {
        "ar": "حرف الدوكرا النحاسية",
        "ne": "डोकरा धातु हस्तकला",
        "zh-CN": "多克拉铜艺",
        "dz": "ཌོཀ་ར་ཟངས",
        "si": "ඩොක්රා පිත්තල ලෝහ"
    },
    "Pattachitra Paintings": {
        "ar": "لوحات باتاتشيترا",
        "ne": "पट्टचित्र चित्रकला",
        "zh-CN": "帕塔奇特拉矿物唐卡卷轴画",
        "dz": "པ་ཊ་ཅི་ཏྲ་ཐང་ཀ",
        "si": "පට්ටචිත්‍ර චිත්‍ර"
    },
    "Jute & Natural Fiber": {
        "ar": "الجوت والألياف الطبيعية",
        "ne": "जुट र प्राकृतिक रेसाहरू",
        "zh-CN": "黄麻与天然植物纤维编织",
        "dz": "རྩྭ་རས་དང་རང་བཞིན་རྒྱུ་ཆས",
        "si": "ගෝනි නූල් සහ ස්වාභාවික කෙඳි"
    },
    "Jute & Natural Fibers": {
        "ar": "الجوت والألياف الطبيعية",
        "ne": "जुट र प्राकृतिक रेसाहरू",
        "zh-CN": "黄麻与植物纤维",
        "dz": "རྩྭ་རས་དང་རང་བཞིན་རྒྱུ་ཆས",
        "si": "ගෝනි නූල් සහ ස්වාභාවික කෙඳි"
    },
    "Terracotta & Clay": {
        "ar": "الفخار والطين التراكوتا",
        "ne": "माटोको भाँडाकुँडा",
        "zh-CN": "红陶与手工陶艺",
        "dz": "ས་དཀར་དང་འདམ་བཟོ",
        "si": "ටෙරකොටා සහ මැටි"
    },
    "Terracotta & Pottery": {
        "ar": "الفخار والتراكوتا",
        "ne": "माटो र टेराकोटा कला",
        "zh-CN": "陶艺与红陶",
        "dz": "འདམ་བཟོ",
        "si": "මැටි කර්මාන්තය"
    },
    "Tribal Jewellery": {
        "ar": "المجوهرات القبلية",
        "ne": "आदिवासी गहनाहरू",
        "zh-CN": "部落非遗银饰与珠宝",
        "dz": "མི་སྡེའི་རྒྱན་ཆ",
        "si": "ගෝත්‍රික ආභරණ"
    },
    "Sabai Grass Crafts": {
        "ar": "حرف عشب ساباي",
        "ne": "सबाइ घाँसका सामानहरू",
        "zh-CN": "萨拜草编艺术",
        "dz": "ས་བའི་རྩྭ་ལག་བཟོ",
        "si": "සබායි තණකොළ නිර්මාණ"
    },
    "Paddy Straw Art": {
        "ar": "فن قش الأرز",
        "ne": "परालको कला",
        "zh-CN": "天然稻草拼贴微雕",
        "dz": "སོག་མའི་རི་མོ",
        "si": "පිදුරු කලා නිර්මාණ"
    },
    "Curated Masterpieces": {
        "ar": "تحف مختارة بعناية",
        "ne": "उत्कृष्ट कलाकृतिहरू",
        "zh-CN": "精选传世大师杰作",
        "dz": "དམིགས་བསལ་ལག་བཟོ",
        "si": "තෝරාගත් විශිෂ්ට කෘති"
    },
    "Filter by Category": {
        "ar": "تصفية حسب الفئة",
        "ne": "श्रेणी अनुसार छान्नुहोस्",
        "zh-CN": "按分类筛选",
        "dz": "དབྱེ་ཁག་ལྟར་ཚགས་མ",
        "si": "කාණ්ඩය අනුව පෙරන්න"
    },
    "Sort By": {
        "ar": "ترتيب حسب",
        "ne": "क्रमबद्ध गर्नुहोस्",
        "zh-CN": "排序方式",
        "dz": "གོ་རིམ་སྒྲིག",
        "si": "පිළිවෙල සකසන්න"
    },
    "Featured": {
        "ar": "المميزة",
        "ne": "विशेष",
        "zh-CN": "馆长推荐",
        "dz": "དམིགས་བསལ",
        "si": "විශේෂාංගගත"
    },
    "Price: Low to High": {
        "ar": "السعر: من الأقل إلى الأعلى",
        "ne": "मूल्य: कम देखि धेरै",
        "zh-CN": "价格：从低到高",
        "dz": "གོང་ཚད་དམའ་བ་ལས་མཐོ་བ",
        "si": "මිල: අඩු සිට වැඩි දක්වා"
    },
    "Price: High to Low": {
        "ar": "السعر: من الأعلى إلى الأقل",
        "ne": "मूल्य: धेरै देखि कम",
        "zh-CN": "价格：从高到低",
        "dz": "གོང་ཚད་མཐོ་བ་ལས་དམའ་བ",
        "si": "මිල: වැඩි සිට අඩු දක්වා"
    },
    "Customer Rating": {
        "ar": "تقييم العملاء",
        "ne": "ग्राहक मूल्याङ्कन",
        "zh-CN": "顾客好评度",
        "dz": "ཉོ་མིའི་བསམ་འཆར",
        "si": "පාරිභෝගික ශ්‍රේණිගත කිරීම්"
    },
    "Newest Arrivals": {
        "ar": "أحدث المنتجات",
        "ne": "नयाँ आगमन",
        "zh-CN": "最新上架",
        "dz": "གསརཔ་ཐོན་པ",
        "si": "අලුත්ම පැමිණීම්"
    },
    "In Stock": {
        "ar": "متوفر في المخزون",
        "ne": "उपलब्ध छ",
        "zh-CN": "现货在库",
        "dz": "མཛོད་ཁང་ནང་ཡོད",
        "si": "තොග ඇත"
    },
    "Out of Stock": {
        "ar": "نفد من المخزون",
        "ne": "सकियो",
        "zh-CN": "暂时缺货",
        "dz": "མཛོད་ཁང་ནང་མེད",
        "si": "තොග අවසන්"
    },
    "Atelier Bag": {
        "ar": "حقيبة التسوق",
        "ne": "झोला",
        "zh-CN": "艺坊购物袋",
        "dz": "ཉོ་ཆའི་ཁུག་མ",
        "si": "සාප්පු මල්ල"
    },
    "Cart": {
        "ar": "السلة",
        "ne": "झोला",
        "zh-CN": "购物车",
        "dz": "ཁུག་མ",
        "si": "සාප්පු මල්ල"
    },
    "Wishlist": {
        "ar": "المفضلة",
        "ne": "मनपर्ने सूची",
        "zh-CN": "心愿收藏",
        "dz": "དགའ་བའི་ཐོ",
        "si": "පැතුම් ලැයිස්තුව"
    },
    "Saved items": {
        "ar": "العناصر المحفوظة",
        "ne": "सुरक्षित वस्तुहरू",
        "zh-CN": "已收藏宝贝",
        "dz": "ཉར་ཚགས་ཅ་ལག",
        "si": "සුරැකි අයිතම"
    },
    "Your Bag is Empty": {
        "ar": "حقيبة التسوق فارغة",
        "ne": "तपाईंको झोला खाली छ",
        "zh-CN": "您的购物袋还是空的",
        "dz": "ཁྱོད་ཀྱི་ཁུག་མ་སྟོངམ་ཨིན་མས",
        "si": "ඔබගේ සාප්පු මල්ල හිස්ය"
    },
    "Your bag is currently empty.": {
        "ar": "حقيبة التسوق الخاصة بك فارغة حالياً.",
        "ne": "तपाईंको झोला अहिले खाली छ।",
        "zh-CN": "您尚未将任何心仪手作加入购物袋。",
        "dz": "ད་ལྟོ་ཁྱོད་ཀྱི་ཁུག་མ་སྟོངམ་ཨིན།",
        "si": "ඔබගේ සාප්පු මල්ල දැනට හිස්ය."
    },
    "Subtotal": {
        "ar": "المجموع الفرعي",
        "ne": "उप-कुल",
        "zh-CN": "商品小计",
        "dz": "བསྡོམས་ཆུང",
        "si": "උප එකතුව"
    },
    "Total": {
        "ar": "الإجمالي",
        "ne": "कुल",
        "zh-CN": "合计总额",
        "dz": "བསྡོམས",
        "si": "එකතුව"
    },
    "Proceed to Checkout": {
        "ar": "المتابعة لإتمام الطلب",
        "ne": "भुक्तानी गर्न अगाडि बढ्नुहोस्",
        "zh-CN": "前往结算",
        "dz": "རྩིས་རྒྱག་པར་འགྱོ",
        "si": "මිලදී ගැනීමට ඉදිරියට"
    },
    "Continue Shopping": {
        "ar": "مواصلة التسوق",
        "ne": "किनमेल जारी राख्नुहोस्",
        "zh-CN": "继续挑选",
        "dz": "འཕྲོ་མཐུད་དེ་ཉོ",
        "si": "තවදුරටත් සාප්පු සවාරි යන්න"
    },
    "Sign In": {
        "ar": "تسجيل الدخول",
        "ne": "साइन इन गर्नुहोस्",
        "zh-CN": "登录",
        "dz": "ནང་འཛུལ",
        "si": "ඇතුල් වන්න"
    },
    "Sign In / Register": {
        "ar": "تسجيل الدخول / إنشاء حساب",
        "ne": "साइन इन / दर्ता",
        "zh-CN": "登录 / 注册",
        "dz": "ནང་འཛུལ་ / ཐོ་བཀོད",
        "si": "ඇතුල් වන්න / ලියාපදිංචි වන්න"
    },
    "Register": {
        "ar": "إنشاء حساب",
        "ne": "दर्ता गर्नुहोस्",
        "zh-CN": "立即注册",
        "dz": "ཐོ་བཀོད",
        "si": "ලියාපදිංචි වන්න"
    },
    "Create Account": {
        "ar": "إنشاء حساب جديد",
        "ne": "नयाँ खाता खोल्नुहोस्",
        "zh-CN": "创建新账号",
        "dz": "རྩིས་ཁྲ་གསརཔ་བཟོ",
        "si": "ගිණුමක් සාදන්න"
    },
    "Sign Out": {
        "ar": "تسجيل الخروج",
        "ne": "साइन आउट",
        "zh-CN": "退出登录",
        "dz": "ཕྱིར་ཐོན",
        "si": "ඉවත් වන්න"
    },
    "My Orders": {
        "ar": "طلباتي",
        "ne": "मेरा अर्डरहरू",
        "zh-CN": "我的订单",
        "dz": "ངེའི་མངགས་ཐོ",
        "si": "මගේ ඇණවුම්"
    },
    "Admin Dashboard": {
        "ar": "لوحة تحكم الإدارة",
        "ne": "व्यवस्थापक ड्यासबोर्ड",
        "zh-CN": "管理控制台",
        "dz": "འཛིན་སྐྱོང་ཚད་འཛིན་ཁང",
        "si": "පරිපාලක පුවරුව"
    },
    "Close": {
        "ar": "إغلاق",
        "ne": "बन्द गर्नुहोस्",
        "zh-CN": "关闭",
        "dz": "ཁ་བསྡམས",
        "si": "වසා දමන්න"
    },
    "Back to Store": {
        "ar": "العودة إلى المتجر",
        "ne": "पसलमा फर्कनुहोस्",
        "zh-CN": "返回商城",
        "dz": "ཚོང་ཁང་ནང་ལོག",
        "si": "නැවත වෙළඳසැලට"
    },
    "Customer Support": {
        "ar": "خدمة العملاء",
        "ne": "ग्राहक सेवा",
        "zh-CN": "客户服务",
        "dz": "ཉོ་མིའི་རྒྱབ་སྐྱོར",
        "si": "පාරිභෝගික සහාය"
    },
    "Contact Us": {
        "ar": "اتصل بنا",
        "ne": "सम्पर्क गर्नुहोस्",
        "zh-CN": "联系我们",
        "dz": "འབྲེལ་གཏུགས་འབད",
        "si": "අප අමතන්න"
    },
    "Send Message": {
        "ar": "إرسال الرسالة",
        "ne": "सन्देश पठाउनुहोस्",
        "zh-CN": "发送留言",
        "dz": "འཕྲིན་ཡིག་གཏང",
        "si": "පණිවිඩය යවන්න"
    },
    "About Us": {
        "ar": "من نحن",
        "ne": "हाम्रो बारेमा",
        "zh-CN": "关于我们",
        "dz": "ང་བཅས་ཀྱི་སྐོར",
        "si": "අප ගැන"
    },
    "Our Story": {
        "ar": "قصتنا",
        "ne": "हाम्रो कथा",
        "zh-CN": "品牌故事",
        "dz": "ང་བཅས་ཀྱི་ལོ་རྒྱུས",
        "si": "අපගේ කතාව"
    },
    "Our Heritage": {
        "ar": "تراثنا",
        "ne": "हाम्रो सम्पदा",
        "zh-CN": "千年非遗传承",
        "dz": "ང་བཅས་ཀྱི་ལམ་སྲོལ",
        "si": "අපගේ උරුමය"
    },
    "Master Artisans": {
        "ar": "كبار الحرفيين",
        "ne": "मास्टर कारीगरहरू",
        "zh-CN": "非遗传承大师",
        "dz": "ལག་བཟོ་མཁས་པ་ཚུ",
        "si": "ප්‍රවීණ ශිල්පීන්"
    },
    "All Rights Reserved": {
        "ar": "جميع الحقوق محفوظة",
        "ne": "सबै अधिकार सुरक्षित छन्",
        "zh-CN": "保留所有权利",
        "dz": "ཐོབ་དབང་ཆ་མཉམ་ཡོད",
        "si": "සියලුම හිමිකම් ඇවිරිණි"
    },
    "Order Summary": {
        "ar": "ملخص الطلب",
        "ne": "अर्डर सारांश",
        "zh-CN": "订单概要",
        "dz": "མངགས་ཐོའི་བསྡོམས",
        "si": "ඇණවුම් සාරාංශය"
    },
    "Items": {
        "ar": "العناصر",
        "ne": "वस्तुहरू",
        "zh-CN": "件商品",
        "dz": "ཅ་ལག",
        "si": "අයිතම"
    },
    "Quantity": {
        "ar": "الكمية",
        "ne": "मात्रा",
        "zh-CN": "数量",
        "dz": "གྲངས་ཚད",
        "si": "ප්‍රමාණය"
    },
    "Remove": {
        "ar": "إزالة",
        "ne": "हटाउनुहोस्",
        "zh-CN": "移除",
        "dz": "བཏོན་གཏང",
        "si": "ඉවත් කරන්න"
    },
    "Checkout": {
        "ar": "إتمام الطلب",
        "ne": "चेकआउट",
        "zh-CN": "结账",
        "dz": "རྩིས་རྒྱག",
        "si": "පිටවීම"
    },
    "Shipping Address": {
        "ar": "عنوان الشحن",
        "ne": "ढुवानी ठेगाना",
        "zh-CN": "收货地址",
        "dz": "སྐྱེལ་འདྲེན་ཁ་བྱང",
        "si": "නැව්ගත කිරීමේ ලිපිනය"
    },
    "Full Name": {
        "ar": "الاسم الكامل",
        "ne": "पूरा नाम",
        "zh-CN": "收货人姓名",
        "dz": "མིང་ཆ་ཚང",
        "si": "සම්පූර්ණ නම"
    },
    "Email Address": {
        "ar": "البريد الإلكتروني",
        "ne": "इमेल ठेगाना",
        "zh-CN": "电子邮箱",
        "dz": "གློག་འཕྲིན་ཁ་བྱང",
        "si": "විද්‍යුත් තැපැල් ලිපිනය"
    },
    "Phone Number": {
        "ar": "رقم الهاتف",
        "ne": "फोन नम्बर",
        "zh-CN": "联系电话",
        "dz": "བརྒྱུད་འཕྲིན་ཨང",
        "si": "දුරකථන අංකය"
    },
    "Address Line 1": {
        "ar": "العنوان - السطر 1",
        "ne": "ठेगाना लाइन १",
        "zh-CN": "详细街道地址",
        "dz": "ཁ་བྱང་གྱལ་ ༡",
        "si": "ලිපින පේළිය 1"
    },
    "City": {
        "ar": "المدينة",
        "ne": "शहर",
        "zh-CN": "城市",
        "dz": "གྲོང་ཁྱེར",
        "si": "නගරය"
    },
    "State": {
        "ar": "الولاية / المنطقة",
        "ne": "राज्य / प्रदेश",
        "zh-CN": "省份 / 地区",
        "dz": "མངའ་སྡེ",
        "si": "පළාත"
    },
    "PIN / Postal Code": {
        "ar": "الرمز البريدي",
        "ne": "पिन / हुलाक कोड",
        "zh-CN": "邮政编码",
        "dz": "སྦྲག་ཨང",
        "si": "තැපැල් කේතය"
    },
    "PIN Code": {
        "ar": "الرمز البريدي",
        "ne": "पिन कोड",
        "zh-CN": "邮政编码",
        "dz": "སྦྲག་ཨང",
        "si": "තැපැල් කේතය"
    },
    "Place Order": {
        "ar": "تأكيد الطلب",
        "ne": "अर्डर पुष्टि गर्नुहोस्",
        "zh-CN": "提交订单",
        "dz": "མངགས་ཐོ་བཀོད",
        "si": "ඇණවුම තහවුරු කරන්න"
    },
    "Payment Method": {
        "ar": "طريقة الدفع",
        "ne": "भुक्तानी विधि",
        "zh-CN": "支付方式",
        "dz": "དངུལ་སྤྲོད་ཐབས་ལམ",
        "si": "ගෙවීම් ක්‍රමය"
    },
    "Cash on Delivery": {
        "ar": "الدفع عند الاستلام",
        "ne": "डेलिभरीमा नगद",
        "zh-CN": "货到付款",
        "dz": "ཅ་ལག་འབྱོར་སྐབས་དངུལ་སྤྲོད",
        "si": "භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම"
    },
    "Online Payment": {
        "ar": "الدفع الإلكتروني عبر الإنترنت",
        "ne": "अनलाइन भुक्तानी",
        "zh-CN": "在线支付",
        "dz": "ཡོངས་འབྲེལ་དངུལ་སྤྲོད",
        "si": "මාර්ගගත ගෙවීම්"
    },
    "Card / UPI / NetBanking": {
        "ar": "بطاقة ائتمان / UPI / بنك",
        "ne": "कार्ड / UPI / नेट बैंकिङ",
        "zh-CN": "银行卡 / UPI / 快捷网银",
        "dz": "དངུལ་བྱང་ / UPI / དངུལ་ཁང",
        "si": "කාඩ්පත් / UPI / බැංකු ගිණුම්"
    },
    "Order Confirmed": {
        "ar": "تم تأكيد الطلب بنجاح",
        "ne": "अर्डर स्वीकृत भयो",
        "zh-CN": "订单已确认",
        "dz": "མངགས་ཐོ་གཏན་འཁེལ་བྱུང་ཡི",
        "si": "ඇණවුම තහවුරු විය"
    },
    "Thank you for supporting traditional Indian artisans": {
        "ar": "شكراً لدعمكم الحرفيين التقليديين",
        "ne": "परम्परागत भारतीय कारीगरहरूलाई समर्थन गर्नुभएकोमा धन्यवाद",
        "zh-CN": "感谢您对印度传统非遗手艺人的珍贵支持",
        "dz": "སྲོལ་རྒྱུན་རྒྱ་གར་གྱི་ལག་བཟོ་པ་ཚུ་ལུ་རྒྱབ་སྐྱོར་གནང་པར་བཀྲིན་ཆེ",
        "si": "සාම්ප්‍රදායික ඉන්දියානු ශිල්පීන්ට සහාය දැක්වීම ගැන ඔබට ස්තූතියි"
    },
    "Back to Home": {
        "ar": "العودة إلى الرئيسية",
        "ne": "गृहपृष्ठमा फर्कनुहोस्",
        "zh-CN": "返回首页",
        "dz": "གདོང་ཤོག་ནང་ལོག",
        "si": "නැවත මුල් පිටුවට"
    },
    "Track Order": {
        "ar": "تتبع الطلب",
        "ne": "अर्डर ट्र्याक गर्नुहोस्",
        "zh-CN": "追踪物流",
        "dz": "མངགས་ཐོ་འཚོལ་ཞིབ",
        "si": "ඇණවුම සොයා බලන්න"
    },
    "Reviews": {
        "ar": "التقييمات",
        "ne": "समीक्षाहरू",
        "zh-CN": "评价",
        "dz": "བསམ་འཆར",
        "si": "සමාලෝචන"
    },
    "Customer Reviews": {
        "ar": "آراء العملاء",
        "ne": "ग्राहक समीक्षाहरू",
        "zh-CN": "顾客真实评价",
        "dz": "ཉོ་མིའི་བསམ་འཆར",
        "si": "පාරිභෝගික සමාලෝචන"
    },
    "Write a Review": {
        "ar": "أكتب تقييماً",
        "ne": "समीक्षा लेख्नुहोस्",
        "zh-CN": "撰写评价",
        "dz": "བསམ་འཆར་འབྲི",
        "si": "සමාලෝචනයක් ලියන්න"
    },
    "Material": {
        "ar": "المادة",
        "ne": "सामग्री",
        "zh-CN": "工艺材质",
        "dz": "རྒྱུ་ཆས",
        "si": "ද්‍රව්‍ය"
    },
    "Dimensions": {
        "ar": "الأبعاد",
        "ne": "आयाम",
        "zh-CN": "尺寸规格",
        "dz": "ཚད",
        "si": "මානයන්"
    },
    "Care Instructions": {
        "ar": "تعليمات العناية",
        "ne": "हेरचाह निर्देशनहरू",
        "zh-CN": "保养指南",
        "dz": "ཉར་ཚགས་བཀོད་རྒྱ",
        "si": "නඩත්තු උපදෙස්"
    },
    "Origin": {
        "ar": "المنشأ",
        "ne": "उत्पत्ति",
        "zh-CN": "非遗产地",
        "dz": "བྱུང་ས",
        "si": "මූලාරම්භය"
    },
    "Odisha, India": {
        "ar": "أوديشا، الهند",
        "ne": "ओडिशा, भारत",
        "zh-CN": "印度 · 奥迪沙",
        "dz": "ཨོ་ཌི་ཤ། རྒྱ་གར",
        "si": "ඔඩිෂා, ඉන්දියාව"
    },
    "Handmade with Love": {
        "ar": "صُنع يدوياً بحب",
        "ne": "मायाले हातले बनाइएको",
        "zh-CN": "纯手工温度匠造",
        "dz": "བྱམས་བརྩེའི་ཐོག་ལག་བཟོ་བཟོས་པ",
        "si": "ආදරයෙන් අතින් සාදන ලදි"
    },
    "Verified Masterpiece": {
        "ar": "تحفة فنية أصلية موثقة",
        "ne": "प्रमाणित उत्कृष्ट कलाकृति",
        "zh-CN": "官方认证大师手作",
        "dz": "བདེན་དཔང་ཡོད་པའི་ལག་བཟོ",
        "si": "තහවුරු කළ විශිෂ්ට කෘතිය"
    },
    "Free Shipping": {
        "ar": "شحن مجاني",
        "ne": "निःशुल्क ढुवानी",
        "zh-CN": "包邮免运费",
        "dz": "སྐྱེལ་འདྲེན་རིན་མེད",
        "si": "නොමිලේ නැව්ගත කිරීම"
    },
    "Search": {
        "ar": "بحث",
        "ne": "खोज्नुहोस्",
        "zh-CN": "搜索",
        "dz": "འཚོལ་ཞིབ",
        "si": "සොයන්න"
    },
    "Filter": {
        "ar": "تصفية",
        "ne": "छान्नुहोस्",
        "zh-CN": "筛选",
        "dz": "ཚགས་མ",
        "si": "පෙරහන"
    },
    "Reset": {
        "ar": "إعادة تعيين",
        "ne": "रिसेट",
        "zh-CN": "重置",
        "dz": "སླར་གསོ",
        "si": "නැවත සකසන්න"
    },
    "Apply": {
        "ar": "تطبيق",
        "ne": "लागू गर्नुहोस्",
        "zh-CN": "应用",
        "dz": "ལག་ལེན་འཐབ",
        "si": "යොදන්න"
    },
    "Discount": {
        "ar": "خصم",
        "ne": "छुट",
        "zh-CN": "优惠折扣",
        "dz": "གཅོག་ཆ",
        "si": "වට්ටම්"
    },
    "Save": {
        "ar": "حفظ",
        "ne": "सुरक्षित गर्नुहोस्",
        "zh-CN": "保存",
        "dz": "ཉར་ཚགས",
        "si": "සුරකින්න"
    },
    "Cancel": {
        "ar": "إلغاء",
        "ne": "रद्द गर्नुहोस्",
        "zh-CN": "取消",
        "dz": "ཆ་མེད",
        "si": "අවලංගු කරන්න"
    },
    "Delete": {
        "ar": "حذف",
        "ne": "मेटाउनुहोस्",
        "zh-CN": "删除",
        "dz": "བཏོན་གཏང",
        "si": "මකන්න"
    },
    "Edit": {
        "ar": "تعديل",
        "ne": "सम्पादन गर्नुहोस्",
        "zh-CN": "编辑",
        "dz": "ཞུན་དག",
        "si": "සංස්කරණය කරන්න"
    },
    "View": {
        "ar": "عرض",
        "ne": "हेर्नुहोस्",
        "zh-CN": "查看",
        "dz": "བལྟ",
        "si": "බලන්න"
    },
    "Success": {
        "ar": "نجاح",
        "ne": "सफल",
        "zh-CN": "成功",
        "dz": "ལེགས་གྲུབ",
        "si": "සාර්ථකයි"
    },
    "Error": {
        "ar": "خطأ",
        "ne": "त्रुटि",
        "zh-CN": "出错了",
        "dz": "འཛོལ་བ",
        "si": "දෝෂයකි"
    },
    "Loading...": {
        "ar": "جاري التحميل...",
        "ne": "लोड हुँदैछ...",
        "zh-CN": "加载中...",
        "dz": "བཙུགས་དོ་...",
        "si": "පූරණය වෙමින් පවතී..."
    },
    "Loading Products...": {
        "ar": "جاري تحميل المنتجات...",
        "ne": "उत्पादनहरू लोड हुँदैछ...",
        "zh-CN": "正在加载手工作品...",
        "dz": "ཅ་ལག་བཙུགས་དོ་...",
        "si": "නිෂ්පාදන පූරණය වෙමින් පවතී..."
    },
    "No products found": {
        "ar": "لم يتم العثور على منتجات",
        "ne": "कुनै उत्पादन भेटिएन",
        "zh-CN": "未找到符合条件的商品",
        "dz": "ཅ་ལག་མ་ཐོབ",
        "si": "නිෂ්පාදන හමු නොවීය"
    },
    "Try changing search or filters": {
        "ar": "يرجى تجربة تغيير البحث أو الفلاتر",
        "ne": "खोज वा फिल्टर परिवर्तन गरेर हेर्नुहोस्",
        "zh-CN": "尝试更改搜索词或重置筛选条件",
        "dz": "འཚོལ་ཞིབ་བམ་ཚགས་མ་བསྒྱུར་བཅོས་འབད",
        "si": "සෙවීම හෝ පෙරහන් වෙනස් කර බලන්න"
    },
    "The Sacred Craft Process": {
        "ar": "عملية الحرفة المقدسة",
        "ne": "पवित्र हस्तकला प्रक्रिया",
        "zh-CN": "神圣非遗手作工序",
        "dz": "དམ་པའི་ལག་བཟོའི་རིམ་པ",
        "si": "පූජනීය ශිල්ප ක්‍රියාවලිය"
    },
    "Pancha Varna (5 Sacred Mineral Pigments)": {
        "ar": "بانشا فارنا (5 أصباغ معدنية مقدسة)",
        "ne": "पञ्च वर्ण (५ पवित्र खनिज रङहरू)",
        "zh-CN": "五彩矿物颜料 (Pancha Varna)",
        "dz": "རྡོ་ཚོན་སྣ་ལྔ",
        "si": "පංච වර්ණ (පූජනීය ඛනිජ වර්ණක 5)"
    },
    "Raghurajpur Heritage Village": {
        "ar": "قرية راغوراجبور التراثية",
        "ne": "रघुराजपुर सम्पदा गाउँ",
        "zh-CN": "拉古拉杰普尔非遗文化村",
        "dz": "ར་གུ་རཱཇ་པུར་ལམ་སྲོལ་གཡུས",
        "si": "රඝුරාජ්පූර් උරුම ගම්මානය"
    },
    "Master Artisan": {
        "ar": "كبير الحرفيين",
        "ne": "मास्टर कारीगर",
        "zh-CN": "非遗大师",
        "dz": "ལག་བཟོ་མཁས་པ",
        "si": "ප්‍රවීණ ශිල්පියා"
    },
    "Handmade in Odisha, India": {
        "ar": "صُنع يدوياً في أوديشا، الهند",
        "ne": "ओडिशा, भारतमा हातले बनाइएको",
        "zh-CN": "印度奥迪沙纯手工制作",
        "dz": "ཨོ་ཌི་ཤ་ རྒྱ་གར་ནང་ལག་བཟོ་བཟོས་པ",
        "si": "ඉන්දියාවේ ඔඩිෂාහි අතින් සාදන ලදි"
    },
    "NEW USER OFFER": {
        "ar": "عرض المستخدم الجديد",
        "ne": "नयाँ प्रयोगकर्ता अफर",
        "zh-CN": "新客专享礼遇",
        "dz": "ལག་ལེན་པ་གསརཔ་གི་གོ་སྐབས",
        "si": "නව පරිශීලක දීමනාව"
    },
    "EXPLORE": {
        "ar": "استكشاف",
        "ne": "अन्वेषण",
        "zh-CN": "探索",
        "dz": "འཚོལ་ཞིབ",
        "si": "ගවේෂණය"
    },
    "Explore": {
        "ar": "استكشاف",
        "ne": "अन्वेषण",
        "zh-CN": "探索",
        "dz": "འཚོལ་ཞིབ",
        "si": "ගවේෂණය"
    },
    "Discover Handcrafted Odisha": {
        "ar": "اكتشف حرف أوديشا اليدوية",
        "ne": "ओडिशाको हस्तकला अन्वेषण गर्नुहोस्",
        "zh-CN": "探索印度奥迪沙手工非遗珍品",
        "dz": "ཨོ་ཌི་ཤའི་ལག་བཟོ་འཚོལ་ཞིབ་འབད",
        "si": "ඔඩිෂා හස්ත කර්මාන්ත සොයා ගන්න"
    },
    "Authentic GI-Tagged Heirlooms Direct from Master Craftsperson Guilds": {
        "ar": "تحف موثقة بالمؤشر الجغرافي مباشرة من نقابات الحرفيين",
        "ne": "मास्टर शिल्पकार गिल्डहरूबाट प्रत्यक्ष प्रामाणिक GI-ट्याग गरिएका कलाकृतिहरू",
        "zh-CN": "源自奥迪沙国家级手工艺大师行会的正品非遗珍宝",
        "dz": "ལག་བཟོ་མཁས་པའི་ཚོགས་པ་ལས་ཐད་ཀར་ཐོབ་པའི་ངོ་མའི་ཅ་ལག",
        "si": "ප්‍රවීණ ශිල්පී සංගම් වෙතින් ඍජුවම ලබාගත් සත්‍ය භාණ්ඩ"
    }
}

# Compile per-language dictionaries
dict_by_lang = {
    "ar": {},
    "ne": {},
    "zh-CN": {},
    "dz": {},
    "si": {}
}

for text_en, lang_map in translations.items():
    for l_code, target_val in lang_map.items():
        if l_code in dict_by_lang:
            dict_by_lang[l_code][text_en] = target_val

js_code = f"""/**
 * JBI Craft - High Performance Multi-Language Translation Engine
 * 100% Client-side, zero external script conflicts, zero language mixing.
 */
(function() {{
  'use strict';

  const LANGUAGE_OPTIONS = {json.dumps(languages, ensure_ascii=False, indent=4)};

  const DICTIONARY = {json.dumps(dict_by_lang, ensure_ascii=False, indent=4)};

  let activeCountryId = "default";
  let activeLangCode = "en";

  // Cache to track pristine original text of every text node and placeholder
  const nodeOriginals = new WeakMap();

  // Clear any conflicting legacy Google Translate cookies
  function clearGoogleCookies() {{
    try {{
      const domains = [window.location.hostname, "." + window.location.hostname, ""];
      const paths = ["/", ""];
      domains.forEach(d => {{
        paths.forEach(p => {{
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + p + (d ? "; domain=" + d : "");
        }});
      }});
    }} catch(e) {{}}
  }}

  function showToast(msg, flag) {{
    try {{
      let container = document.getElementById("jbi-lang-toast-container");
      if (!container) {{
        container = document.createElement("div");
        container.id = "jbi-lang-toast-container";
        container.style.cssText = "position:fixed;bottom:28px;right:28px;z-index:999999;pointer-events:none;display:flex;flex-direction:column;gap:10px;";
        document.body.appendChild(container);
      }}
      const toast = document.createElement("div");
      toast.style.cssText = "background:linear-gradient(135deg, #1c1917 0%, #292524 100%);color:#fff;padding:12px 22px;border-radius:9999px;font-family:sans-serif;font-size:13px;font-weight:600;box-shadow:0 14px 35px rgba(0,0,0,0.35);border:1.5px solid rgba(212,175,55,0.6);display:flex;align-items:center;gap:12px;animation:jbiFadeIn 0.25s ease-out forwards;pointer-events:auto;";
      toast.innerHTML = `<span style="font-size:20px;line-height:1;">${{flag || '🌐'}}</span> <span>${{msg}}</span>`;
      container.appendChild(toast);
      setTimeout(() => {{
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px) scale(0.96)";
        toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {{
          try {{ toast.remove(); }} catch(e) {{}}
        }}, 350);
      }}, 2800);
    }} catch(e) {{}}
  }}

  function translateText(text, langCode) {{
    if (!text || typeof text !== "string") return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    
    const table = DICTIONARY[langCode];
    if (!table) return text;

    // 1. Direct exact dictionary lookup
    if (table[trimmed]) {{
      return text.replace(trimmed, table[trimmed]);
    }}

    // 2. Case insensitive lookup
    const lowerTrimmed = trimmed.toLowerCase();
    for (const key of Object.keys(table)) {{
      if (key.toLowerCase() === lowerTrimmed) {{
        return text.replace(trimmed, table[key]);
      }}
    }}

    return text;
  }}

  // Restore DOM completely to 100% pristine original English state
  function restoreDOM() {{
    try {{
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walker.nextNode())) {{
        if (nodeOriginals.has(node)) {{
          const orig = nodeOriginals.get(node);
          if (node.nodeValue !== orig) {{
            node.nodeValue = orig;
          }}
        }}
      }}
      document.querySelectorAll("input[data-orig-placeholder]").forEach(input => {{
        input.placeholder = input.getAttribute("data-orig-placeholder") || input.placeholder;
      }});
      document.querySelectorAll("[data-orig-title]").forEach(el => {{
        el.title = el.getAttribute("data-orig-title") || el.title;
      }});
      document.querySelectorAll("[data-orig-aria-label]").forEach(el => {{
        el.setAttribute("aria-label", el.getAttribute("data-orig-aria-label"));
      }});
    }} catch(e) {{
      console.warn("[JBITranslator restoreDOM error]", e);
    }}
  }}

  // Translate DOM cleanly from original English
  function translateDOM() {{
    if (activeCountryId === "default" || activeLangCode === "en") {{
      restoreDOM();
      return;
    }}

    try {{
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {{
        acceptNode(node) {{
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          const tag = node.parentElement.tagName;
          if (tag === "SCRIPT" || tag === "STYLE" || tag === "CODE" || tag === "NOSCRIPT" || tag === "TEXTAREA" || node.parentElement.closest("#jbi-lang-dropdown") || node.parentElement.closest("#google_translate_element") || node.parentElement.closest("#jbi-theme-dock")) {{
            return NodeFilter.FILTER_REJECT;
          }}
          return NodeFilter.FILTER_ACCEPT;
        }}
      }});

      let node;
      while ((node = walker.nextNode())) {{
        const currentVal = node.nodeValue;
        if (!currentVal || !currentVal.trim()) continue;

        // If we have not yet captured the clean original English for this node
        if (!nodeOriginals.has(node)) {{
          nodeOriginals.set(node, currentVal);
        }}

        const origEnglish = nodeOriginals.get(node);
        const translated = translateText(origEnglish, activeLangCode);
        if (translated && translated !== node.nodeValue) {{
          node.nodeValue = translated;
        }}
      }}

      // Placeholders
      document.querySelectorAll("input[placeholder]").forEach(input => {{
        if (input.closest("#jbi-lang-dropdown")) return;
        if (!input.hasAttribute("data-orig-placeholder")) {{
          input.setAttribute("data-orig-placeholder", input.placeholder);
        }}
        const orig = input.getAttribute("data-orig-placeholder");
        const translated = translateText(orig, activeLangCode);
        if (translated && translated !== input.placeholder) {{
          input.placeholder = translated;
        }}
      }});

      // Titles
      document.querySelectorAll("[title]").forEach(el => {{
        if (el.closest("#jbi-lang-dropdown")) return;
        if (!el.hasAttribute("data-orig-title")) {{
          el.setAttribute("data-orig-title", el.title);
        }}
        const orig = el.getAttribute("data-orig-title");
        const translated = translateText(orig, activeLangCode);
        if (translated && translated !== el.title) {{
          el.title = translated;
        }}
      }});

      // Aria-labels
      document.querySelectorAll("[aria-label]").forEach(el => {{
        if (el.closest("#jbi-lang-dropdown")) return;
        if (!el.hasAttribute("data-orig-aria-label")) {{
          el.setAttribute("data-orig-aria-label", el.getAttribute("aria-label"));
        }}
        const orig = el.getAttribute("data-orig-aria-label");
        const translated = translateText(orig, activeLangCode);
        if (translated && translated !== el.getAttribute("aria-label")) {{
          el.setAttribute("aria-label", translated);
        }}
      }});
    }} catch(e) {{
      console.warn("[JBITranslator translateDOM error]", e);
    }}
  }}

  function setLanguage(countryId) {{
    clearGoogleCookies();
    const opt = LANGUAGE_OPTIONS.find(o => o.id === countryId) || LANGUAGE_OPTIONS[LANGUAGE_OPTIONS.length - 1];
    activeCountryId = opt.id;
    activeLangCode = opt.code;

    try {{
      localStorage.setItem("jbi_selected_country", opt.id);
      localStorage.setItem("jbi_selected_lang", opt.code);
    }} catch(e) {{}}

    // RTL / LTR Layout Handlers
    if (opt.dir === "rtl") {{
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.body.classList.add("dir-rtl");
    }} else {{
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", opt.code || "en");
      document.body.classList.remove("dir-rtl");
    }}

    // Step 1: Always cleanly restore DOM to English first to prevent ANY multi-language mixing
    restoreDOM();

    // Step 2: Apply new translation if non-English
    if (opt.id !== "default" && opt.code !== "en") {{
      translateDOM();
      showToast(`Language changed to ${{opt.name}} (${{opt.lang}})`, opt.flag);
    }} else {{
      showToast("Language restored to English (Original Heritage)", "🇮🇳");
    }}

    window.dispatchEvent(new CustomEvent("jbi_language_changed", {{ detail: opt }}));
  }}

  // Throttled Observer to smoothly handle React re-renders without mixing
  let translateTimer = null;
  const observer = new MutationObserver(mutations => {{
    if (activeCountryId === "default" || activeLangCode === "en") return;
    clearTimeout(translateTimer);
    translateTimer = setTimeout(() => {{
      requestAnimationFrame(translateDOM);
    }}, 60);
  }});

  document.addEventListener("DOMContentLoaded", () => {{
    clearGoogleCookies();
    observer.observe(document.body, {{ childList: true, subtree: true }});
    try {{
      const saved = localStorage.getItem("jbi_selected_country");
      if (saved && saved !== "default") {{
        setLanguage(saved);
      }}
    }} catch(e) {{}}
  }});

  window.JBITranslator = {{
    options: LANGUAGE_OPTIONS,
    setLanguage: setLanguage,
    getCurrentCountry: () => activeCountryId,
    getCurrentLang: () => activeLangCode,
    translateDOM: translateDOM,
    translateNow: translateDOM,
    restoreDOM: restoreDOM
  }};
}})();
"""

with open("public/assets/translator.js", "w", encoding="utf-8") as f:
    f.write(js_code)

print("SUCCESS: public/assets/translator.js successfully written!")
