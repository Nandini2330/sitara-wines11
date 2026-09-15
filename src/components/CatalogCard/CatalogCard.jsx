import { Phone } from "lucide-react"
import { useState } from "react"
import BottleImage from "../BottleImage/BottleImage"

// Dynamic tag chip styling matching the reference screenshot exactly
const GET_TAG_STYLE = (tag) => {
  const t = (tag || "").toUpperCase()
  if (t === "WHITE" || t === "FALANGHINA" || t === "SAUVIGNON BLANC" || t === "CHENIN BLANC" || t === "CHARDONNAY") {
    return { bg: "#DCE8C9", fg: "#354A18" }
  }
  if (t === "RED" || t === "SYRAH" || t === "PINOT NOIR" || t === "MONTEPULCIANO" || t === "CABERNET SHIRAZ" || t === "SANGIOVESE") {
    return { bg: "#E5D3F0", fg: "#4A1A46" }
  }
  if (t === "ROSÉ" || t === "ROSE" || t === "GRENACHE") {
    return { bg: "#F8D7DA", fg: "#721C24" }
  }
  if (t === "SPARKLING" || t === "BRUT" || t === "CHAMPAGNE" || t === "LUXURY" || t === "SUPER PREMIUM") {
    return { bg: "#EFE3C8", fg: "#6E5218" }
  }
  if (t === "BEER" || t === "LAGER" || t === "WHEAT BEER" || t === "CRAFT" || t === "CERVEZA") {
    return { bg: "#EFE3C8", fg: "#7A5A1F" }
  }
  if (t === "WHISKEY" || t === "SCOTCH" || t === "SINGLE MALT") {
    return { bg: "#F4DEC8", fg: "#7C3B12" }
  }
  if (t === "VODKA" || t === "CANS" || t === "RTD" || t === "PREMIUM") {
    return { bg: "#D8E4E8", fg: "#1F4A5A" }
  }
  if (t === "ITALY" || t === "MOLISE" || t === "FRANCE" || t === "LANGUEDOC" || t === "SOUTH AFRICA" || t === "FRANSCHHOEK" || t === "INDIA" || t === "NASHIK") {
    return { bg: "#DFD8EE", fg: "#3F2648" }
  }
  return { bg: "#E8DED2", fg: "#554A42" }
}

export default function CatalogCard({ product, onWishlistToggle }) {
  const [wished, setWished] = useState(false)
  const [imgError, setImgError] = useState(false)

  if (!product) return null

  const handleWish = (e) => {
    e.stopPropagation()
    const next = !wished
    setWished(next)
    if (onWishlistToggle) onWishlistToggle(product, next)
  }

  const primaryTags = product.primaryTags || ["WINE", "ESTATE"]
  const originTags = product.originTags || ["INDIA", "NASHIK"]

  return (
    <article
      className="catalog-card-item"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        transition: "transform 350ms cubic-bezier(.22,1,.36,1)",
      }}
    >
      {/* Arch backdrop with centered Bottle */}
      <div
        className="card-arch-wrapper"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 290,
          aspectRatio: "1 / 1.25",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Pastel Arch */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "92%",
            height: "78%",
            borderRadius: "140px 140px 0 0",
            background: product.archBg || "#E4D3EE",
            transition: "all 400ms ease",
          }}
        />

        {/* Crisp Cutout Bottle Image */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "82%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 12,
            transition: "transform 450ms cubic-bezier(.22,1,.36,1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08) translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) translateY(0)")}
        >
          {product.image && !imgError ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              style={{
                maxHeight: "94%",
                maxWidth: "88%",
                objectFit: "contain",
                filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.25))",
              }}
            />
          ) : (
            <BottleImage
              type={product.bottleType || "redWine"}
              name={product.name}
              year={product.year || "2024"}
              brand={product.brand}
            />
          )}
        </div>
      </div>

      {/* Product Title */}
      <h3
        className="card-title"
        style={{
          marginTop: 20,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "var(--font-display)",
          letterSpacing: "0.02em",
          color: "var(--color-charcoal)",
          lineHeight: 1.15,
          maxWidth: 260,
          minHeight: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {product.name}
      </h3>

      {/* Dual Row Tag Chips matching the reference screenshot */}
      <div
        className="card-tags-wrapper"
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Row 1: Wine/Drink Type + Grape/Style */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          {primaryTags.map((t) => {
            const s = GET_TAG_STYLE(t)
            return (
              <span
                key={t}
                className="card-tag-chip"
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: s.bg,
                  color: s.fg,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            )
          })}
        </div>

        {/* Row 2: Country + Region */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          {originTags.map((t) => {
            const s = GET_TAG_STYLE(t)
            return (
              <span
                key={t}
                className="card-tag-chip"
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: s.bg,
                  color: s.fg,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            )
          })}
        </div>
      </div>

      {/* Direct Call Now Button */}
      <a
        href="tel:+919876543210"
        className="card-call-btn"
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: 14,
          width: "100%",
          maxWidth: 260,
          height: 40,
          background: "var(--color-burgundy)",
          color: "var(--color-cream)",
          border: "none",
          borderRadius: "var(--radius-sm)",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textDecoration: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          boxShadow: "0 4px 14px rgba(90,23,23,0.25)",
          transition: "all var(--transition-fast)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#721c1c")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-burgundy)")}
      >
        <Phone size={15} fill="currentColor" /> Call Now
      </a>
    </article>
  )
}
