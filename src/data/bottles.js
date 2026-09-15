// Arch background colors (soft pastel matching the reference design)
export const ARCH_COLORS = {
  whiteWine: "#DCE8CA",   // Soft sage green (like Di Majo Norante, Moli Bianco in screenshot)
  redWine: "#E4D3EE",     // Soft lilac lavender (like The Chocolate Block in screenshot)
  roseWine: "#F8DDD2",    // Soft warm blush peach
  sparkling: "#EFE3C8",   // Soft golden champagne ivory
  beer: "#EFE3C8",        // Warm amber cream
  beerGreen: "#D6E8D6",   // Muted pale mint green
  beerCan: "#D8E4E8",     // Soft mist blue
  whiskey: "#F5DEC9",     // Soft honey amber
  whiskeyLuxury: "#EFE3C8",// Pale gold ivory
  vodka: "#D8E4E8",       // Soft glacier blue
  rum: "#E8D3D3",         // Soft rosewood cream
  port: "#E5D0D0",        // Soft mulberry blush
}

// Deterministic arch color based on drink type and product ID
export function getArchColor(bottleType = "redWine", seed = "") {
  if (ARCH_COLORS[bottleType]) return ARCH_COLORS[bottleType]
  const list = Object.values(ARCH_COLORS)
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return list[h % list.length]
}

export const archColor = (seed) => getArchColor("redWine", seed)
