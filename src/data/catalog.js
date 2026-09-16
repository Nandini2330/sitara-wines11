import wine from "./catalog/wine.json"
import beer from "./catalog/beer.json"
import whiskey from "./catalog/whiskey.json"
import scotch from "./catalog/scotch.json"
import vodka from "./catalog/vodka.json"
import rum from "./catalog/rum.json"
import { ARCH_COLORS } from "./bottles.js"

// Realistic wine & spirit profile resolver
function getProductProfile(name, catSlug) {
  const n = name.toLowerCase()

  // 1. BEER CATEGORIES
  if (catSlug === "beer") {
    let bottleType = "beer"
    let type = "BEER"
    let grape = "LAGER"
    let country = "INDIA"
    let region = "BREWERY SELECT"
    let basePrice = 160
    let rating = 3.8

    if (n.includes("corona")) {
      bottleType = "beerGreen"
      type = "PREMIUM"
      grape = "CERVEZA"
      country = "MEXICO"
      region = "CERVECERÍA"
      basePrice = 280
      rating = 4.3
    } else if (n.includes("hoegaarden")) {
      bottleType = "beer"
      type = "CRAFT"
      grape = "WHEAT BEER"
      country = "BELGIUM"
      region = "HOEGAARDEN"
      basePrice = 320
      rating = 4.4
    } else if (n.includes("kronenbourg") || n.includes("1664")) {
      bottleType = "beerGreen"
      type = "PREMIUM"
      grape = "BLANC ALE"
      country = "FRANCE"
      region = "STRASBOURG"
      basePrice = 340
      rating = 4.5
    } else if (n.includes("heineken") || n.includes("carlsberg")) {
      bottleType = "beerGreen"
      type = "LAGER"
      grape = "PALE LAGER"
      country = n.includes("heineken") ? "NETHERLANDS" : "DENMARK"
      region = "INTERNATIONAL"
      basePrice = 220
      rating = 4.1
    } else if (n.includes("budweiser")) {
      bottleType = "beer"
      type = "AMERICAN"
      grape = n.includes("magnum") ? "STRONG LAGER" : "KING OF BEERS"
      country = "USA"
      region = "ST. LOUIS"
      basePrice = 210
      rating = 4.0
    } else if (n.includes("bira")) {
      bottleType = "beer"
      type = "CRAFT"
      grape = n.includes("white") ? "WHITE ALE" : n.includes("blonde") ? "SUMMER BLONDE" : "SUPER STRONG"
      country = "INDIA"
      region = "DELHI CRAFT"
      basePrice = 220
      rating = 4.2
    } else if (n.includes("kingfisher")) {
      bottleType = "beer"
      type = "BEER"
      grape = n.includes("ultra") ? "ULTRA LAGER" : n.includes("strong") ? "STRONG LAGER" : "PREMIUM LAGER"
      country = "INDIA"
      region = "BENGALURU"
      basePrice = 170
      rating = 3.9
    } else if (n.includes("bro code")) {
      bottleType = "beerGreen"
      type = "CRAFT"
      grape = "SPARKLING BRUT"
      country = "INDIA"
      region = "GOA"
      basePrice = 240
      rating = 4.1
    }

    return {
      bottleType,
      primaryTags: [type, grape],
      originTags: [country, region],
      price: basePrice,
      rating,
      vivinoScore: rating.toFixed(1),
    }
  }

  // 2. WINES
  if (catSlug === "wine") {
    let bottleType = "redWine"
    let type = "RED"
    let grape = "CABERNET SHIRAZ"
    let country = "INDIA"
    let region = "NASHIK"
    let basePrice = 1195
    let rating = 3.8

    if (n.includes("moli bianco") || n.includes("bianco") || n.includes("white") || n.includes("chenin") || n.includes("sauvignon blanc") || n.includes("chardonnay")) {
      bottleType = "whiteWine"
      type = "WHITE"
      grape = n.includes("falanghina") || n.includes("moli") ? "FALANGHINA" : n.includes("chenin") ? "CHENIN BLANC" : n.includes("sauvignon") ? "SAUVIGNON BLANC" : "CHARDONNAY"
      country = n.includes("moli") || n.includes("di majo") ? "ITALY" : "INDIA"
      region = n.includes("moli") || n.includes("di majo") ? "MOLISE" : "NASHIK"
      basePrice = 1895
      rating = 3.5
    } else if (n.includes("sparkling") || n.includes("brut") || n.includes("noi") || n.includes("dia")) {
      bottleType = "sparkling"
      type = "SPARKLING"
      grape = n.includes("rosé") || n.includes("rose") ? "BRUT ROSÉ" : "BRUT METODO"
      country = "INDIA"
      region = "MAHARASHTRA"
      basePrice = 1350
      rating = 3.9
    } else if (n.includes("rosé") || n.includes("rose")) {
      bottleType = "roseWine"
      type = "ROSÉ"
      grape = "GRENACHE BLEND"
      country = "INDIA"
      region = "NASHIK"
      basePrice = 950
      rating = 3.7
    } else if (n.includes("port")) {
      bottleType = "port"
      type = "FORTIFIED"
      grape = "PORT RESERVE"
      country = "INDIA"
      region = "VALLEY RESERVE"
      basePrice = 450
      rating = 3.4
    } else if (n.includes("fratelli")) {
      bottleType = "redWine"
      type = "RED"
      grape = n.includes("kyra") ? "KYRA RESERVE" : n.includes("ziva") ? "ZIVA BLEND" : "ESTATE SANGIOVESE"
      country = "INDIA"
      region = "AKLUJ"
      basePrice = 980
      rating = 3.8
    } else if (n.includes("sula")) {
      bottleType = "redWine"
      type = "RED"
      grape = n.includes("shiraz") ? "CABERNET SHIRAZ" : "DINDORI RESERVE"
      country = "INDIA"
      region = "NASHIK"
      basePrice = 1050
      rating = 3.9
    }

    return {
      bottleType,
      primaryTags: [type, grape],
      originTags: [country, region],
      price: basePrice,
      rating,
      vivinoScore: rating.toFixed(1),
    }
  }

  // 3. WHISKEY & SCOTCH
  if (catSlug === "whiskey" || catSlug === "scotch") {
    let bottleType = catSlug === "scotch" ? "whiskeyLuxury" : "whiskey"
    let type = catSlug === "scotch" ? "SCOTCH" : "WHISKEY"
    let grape = "BLENDED"
    let country = catSlug === "scotch" ? "SCOTLAND" : "INDIA"
    let region = catSlug === "scotch" ? "HIGHLANDS" : "PREMIUM SELECTION"
    let basePrice = catSlug === "scotch" ? 2800 : 1450
    let rating = 4.0

    if (n.includes("indri") || n.includes("single malt")) {
      bottleType = "whiskeyLuxury"
      type = "SINGLE MALT"
      grape = "TRINI THREE WOOD"
      country = "INDIA"
      region = "HARYANA"
      basePrice = 4800
      rating = 4.6
    } else if (n.includes("teachers") || n.includes("vat 69") || n.includes("jagermeister")) {
      bottleType = "whiskey"
      type = n.includes("jager") ? "LIQUEUR" : "SCOTCH"
      grape = n.includes("jager") ? "HERBAL LIQUEUR" : "BLENDED SCOTCH"
      country = n.includes("jager") ? "GERMANY" : "SCOTLAND"
      region = "HERITAGE"
      basePrice = 2400
      rating = 4.2
    } else if (n.includes("monkey")) {
      bottleType = "whiskey"
      type = "BLENDED MALT"
      grape = "SCOTCH WHISKY"
      country = "SCOTLAND"
      region = "SPEYSIDE"
      basePrice = 4400
      rating = 4.5
    }

    return {
      bottleType,
      primaryTags: [type, grape],
      originTags: [country, region],
      price: basePrice,
      rating,
      vivinoScore: rating.toFixed(1),
    }
  }

  // 4. VODKA
  if (catSlug === "vodka") {
    let country = "RUSSIA"
    let region = "CRYSTAL FILTERED"
    let basePrice = 1400
    let rating = 3.8
    if (n.includes("absolut")) {
      country = "SWEDEN"
      basePrice = 2100
      rating = 4.3
    } else if (n.includes("smirnoff")) {
      country = "USA"
      basePrice = 1450
      rating = 4.1
    }
    return {
      bottleType: "vodka",
      primaryTags: ["VODKA", "DISTILLED"],
      originTags: [country, region],
      price: basePrice,
      rating,
      vivinoScore: rating.toFixed(1),
    }
  }

  // 5. RUM
  if (catSlug === "rum") {
    return {
      bottleType: "rum",
      primaryTags: ["RUM", n.includes("bacardi") ? "DARK RUM" : "DARK SPICED"],
      originTags: [n.includes("bacardi") ? "PUERTO RICO" : "INDIA", "CARIBBEAN BLEND"],
      price: n.includes("bacardi") ? 1450 : 850,
      rating: 3.9,
      vivinoScore: "3.9",
    }
  }

  // Default fallback
  return {
    bottleType: "redWine",
    primaryTags: ["ESTATE", "RESERVE"],
    originTags: ["INDIA", "FINE SELECTION"],
    price: 1200,
    rating: 3.8,
    vivinoScore: "3.8",
  }
}

function seeded(seedStr) {
  let h = 0
  for (let i = 0; i < seedStr.length; i++) h = (h * 31 + seedStr.charCodeAt(i)) >>> 0
  return h
}

function enrichCategory(cat) {
  const products = cat.products.map((p, index) => {
    const profile = getProductProfile(p.name, cat.slug)
    const h = seeded(p.id)
    const variance = ((h % 9) - 4) * 50
    const price = Math.max(120, profile.price + variance)
    const ratingVariance = +(((h % 7) - 3) * 0.1).toFixed(1)
    const rating = Math.min(5.0, Math.max(3.2, +(profile.rating + ratingVariance).toFixed(1)))
    const archBg = ARCH_COLORS[profile.bottleType] || "#E4D3EE"

    const primaryTags = p.subcategory
      ? [p.subcategory.toUpperCase(), profile.primaryTags[1] || "SELECTION"]
      : profile.primaryTags

    return {
      ...p,
      bottleType: profile.bottleType,
      primaryTags,
      originTags: profile.originTags,
      archBg,
      price,
      rating,
      vivinoScore: rating.toFixed(1),
      popularity: 100 - index,
    }
  })

  return { ...cat, products }
}

export const catalog = [
  wine,
  beer,
  whiskey,
  scotch,
  vodka,
  rum,
].map(enrichCategory)

export const categories = catalog.map(({ category, slug, tagline, image, products }) => ({
  category,
  slug,
  tagline,
  image,
  count: products.length,
}))

export function getCategory(slug) {
  return catalog.find((c) => c.slug === slug)
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return catalog.flatMap((c) =>
    c.products
      .filter((p) => p.name.toLowerCase().includes(q))
      .map((p) => ({ ...p, category: c.category, categorySlug: c.slug }))
  )
}

export const SORTS = {
  popularity: { label: "Popularity", fn: (a, b) => b.popularity - a.popularity },
  rating: { label: "Vivino Rating", fn: (a, b) => b.rating - a.rating },
  name: { label: "Name: A → Z", fn: (a, b) => a.name.localeCompare(b.name) },
}
