import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const TRANSLATIONS = {
  EN: {
    // Header & Nav
    home: "Home",
    shop: "Shop",
    wines: "Wines",
    beer: "Beer",
    whiskey: "Whiskey",
    scotch: "Scotch",
    vodka: "Vodka",
    rum: "Rum",
    call: "CALL",
    callNow: "Call Now",
    searchPlaceholder: "Search Beer, Wine, Whiskey, Scotch, Vodka, Rum...",
    searchHeading: "SEARCH PRODUCTS & BRANDS",
    viewCategory: "View Category →",

    // Hero Section
    heroSub: "Sitara Cellars & Wines",
    heroTitleLine1: "The Art",
    heroTitleLine2: "of a Good",
    heroTitleAccent: "pour.",
    heroDesc: "From sun-drenched vineyards and handpicked estate grapes to pristine cold-stored cellars. Discover wines and beers selected for moments worth remembering.",
    exploreWines: "Explore Wines 🍷",
    viewCategories: "View All Categories",
    estateGrown: "100% ESTATE GROWN",
    pristineHarvest: "PRISTINE HARVEST",
    curatedSelectionsTag: "CURATED SELECTIONS",
    perfectPour: "THE PERFECT POUR",

    // Featured Categories
    exploreByCategory: "Explore By Category",
    discoverYourPour: "DISCOVER YOUR POUR",
    browseAllCategories: "Browse All Categories",
    exploreCategoryBtn: "EXPLORE CATEGORY →",
    wineTagline: "Estate Cabernet, Shiraz & Rosé",
    beerTagline: "Craft Brews & Chilled Strong Beers",
    whiskeyTagline: "Single Malts & Premium Blends",
    scotchTagline: "Signature Blends & Liqueurs",
    vodkaTagline: "Triple Distilled & Pure Spirits",
    rumTagline: "Dark Vatted & Caribbean Rum",

    // Curated Picks
    sommelierTag: "Handpicked By Sommelier",
    curatedTitle: "CURATED SELECTIONS",

    // Cellar
    checkCellar: "CHECK THE CELLAR",
    discover: "DISCOVER",

    // Collections
    choicestTitle: "OUR CHOICEST SELECTIONS...",
    viewAllCol: "VIEW ALL COLLECTIONS",
    bestSellers: "BEST SELLERS",
    freshShelf: "FRESH ON THE SHELF",
    insiderPicks: "THE INSIDER PICKS",

    // Reviews
    patronTestimonials: "PATRON TESTIMONIALS",
    whatPatronsSay: "WHAT OUR PATRONS SAY",
    verified: "✓ Verified Purchase",

    // Footer
    connectWithUs: "CONNECT WITH US",
    getInTouch: "GET IN TOUCH",
    conciergeCall: "DIRECT CALL BOOKING",
    storeHours: "STORE HOURS",
    openDaily: "Open Daily 10:00 AM - 10:30 PM",
    storeAddress: "STORE ADDRESS",
    addressLine: "Sitara Beer & Wines, Main Road, Maharashtra",
    reserved: "© Reserved by Sitara",
  },
  MR: {
    // Header & Nav
    home: "मुख्य पान",
    shop: "मद्य दालन",
    wines: "वाईन्स",
    beer: "बीअर",
    whiskey: "व्हिस्की",
    scotch: "स्कॉच",
    vodka: "व्होडका",
    rum: "रम",
    call: "कॉल करा",
    callNow: "कॉल करा",
    searchPlaceholder: "बीअर, वाईन्स, व्हिस्की, स्कॉच शोधा...",
    searchHeading: "उत्पादने व ब्रँड शोधा",
    viewCategory: "कॅटेगिरी पहा →",

    // Hero Section
    heroSub: "सितारा बेअर आणि वाईन्स",
    heroTitleLine1: "उत्कृष्ट",
    heroTitleLine2: "स्वादाची",
    heroTitleAccent: "कला.",
    heroDesc: "थेट द्राक्षबागांमधून निवडलेल्या उत्तम वाईन्स, थंडगार बीअर आणि प्रीमियम व्हिस्की. तुमच्या खास प्रसंगांसाठी सर्वोत्तम मद्य साठा.",
    exploreWines: "वाईन्स पहा 🍷",
    viewCategories: "सर्व कॅटेगिरी पहा",
    estateGrown: "१००% अस्सल द्राक्षबाग",
    pristineHarvest: "ताजा द्राक्ष साठा",
    curatedSelectionsTag: "खास निवडक साठा",
    perfectPour: "सर्वोत्तम स्वाद",

    // Featured Categories
    exploreByCategory: "कॅटेगिरीनुसार शोधा",
    discoverYourPour: "तुमची आवडती कॅटेगिरी निवडा",
    browseAllCategories: "सर्व कॅटेगिरी पहा",
    exploreCategoryBtn: "कॅटेगिरी पहा →",
    wineTagline: "अस्सल रेड, व्हाईट आणि रोझ वाईन्स",
    beerTagline: "थंडगार क्राफ्ट बीअर आणि स्ट्रॉंग बीअर",
    whiskeyTagline: "सिंगल माल्ट आणि प्रीमियम व्हिस्की",
    scotchTagline: "सिग्नेचर ब्लेंड्स आणि स्कॉच",
    vodkaTagline: "ट्रिपल डिस्टिल्ड शुध्द व्होडका",
    rumTagline: "डार्क व्हेटेड आणि कॅरिबियन रम",

    // Curated Picks
    sommelierTag: "आमचे खास कलेक्शन",
    curatedTitle: "पसंतीचे उत्तम प्रॉडक्ट्स",

    // Cellar
    checkCellar: "सितारा स्टोअर कलेक्शन",
    discover: "एक्सप्लोर करा",

    // Collections
    choicestTitle: "आमचे सर्वोत्तम कलेक्शन...",
    viewAllCol: "सर्व कलेक्शन पहा",
    bestSellers: "बेस्ट सेलिंग",
    freshShelf: "नवीन साठा",
    insiderPicks: "खास पसंती",

    // Reviews
    patronTestimonials: "ग्राहकांचे अभिप्राय",
    whatPatronsSay: "ग्राहकांचे अनुभव",
    verified: "✓ पडताळणी केलेले ग्राहक",

    // Footer
    connectWithUs: "आमच्याशी संपर्क साधा",
    getInTouch: "संपर्क साधा",
    conciergeCall: "थेट फोन बुकिंग",
    storeHours: "स्टोअरची वेळ",
    openDaily: "दररोज सकाळी १०:०० ते रात्री १०:३०",
    storeAddress: "स्टोअरचा पत्ता",
    addressLine: "सितारा बीअर अँड वाईन्स, मुख्य रस्ता, महाराष्ट्र",
    reserved: "© सर्व हक्क सुरक्षित - सितारा",
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("EN")

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "MR" : "EN"))
  }

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.EN[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      lang: "EN",
      setLang: () => {},
      toggleLanguage: () => {},
      t: (key) => key,
    }
  }
  return context
}
