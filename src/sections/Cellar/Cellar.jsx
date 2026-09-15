import { useState, useMemo } from "react"
import CatalogCard from "../../components/CatalogCard/CatalogCard"
import { catalog } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

export default function Cellar() {
  const { lang, t } = useLanguage()
  const [activePill, setActivePill] = useState("ALL POURS")

  const CELLAR_PILLS = [
    { label: "ALL POURS", labelMR: "सर्व प्रॉडक्ट्स", filter: () => true },
    { label: "RED WINE", labelMR: "रेड वाईन्स", filter: (p) => p.catSlug === "wine" || p.bottleType === "redWine" || p.primaryTags?.includes("RED") || ["sula", "fratelli", "samara", "port"].some((w) => p.name.toLowerCase().includes(w)) },
    { label: "WHITE WINE", labelMR: "व्हाईट वाईन्स", filter: (p) => p.catSlug === "wine" || p.bottleType === "whiteWine" || p.primaryTags?.includes("WHITE") || ["york", "kyra", "dia"].some((w) => p.name.toLowerCase().includes(w)) },
    { label: "SPARKLING WINE", labelMR: "स्पार्कलींग वाईन्स", filter: (p) => p.catSlug === "wine" || p.bottleType === "sparkling" || p.primaryTags?.includes("SPARKLING") || ["dia", "ziva"].some((w) => p.name.toLowerCase().includes(w)) },
    { label: "BEER", labelMR: "बीअर साठा", filter: (p) => p.catSlug === "beer" || p.bottleType === "beer" || p.bottleType === "beerGreen" },
    { label: "WHISKEY", labelMR: "व्हिस्की साठा", filter: (p) => p.catSlug === "whiskey" || p.bottleType === "whiskey" },
    { label: "SCOTCH", labelMR: "स्कॉच साठा", filter: (p) => p.catSlug === "scotch" || p.bottleType === "whiskeyLuxury" },
    { label: "VODKA", labelMR: "व्होडका", filter: (p) => p.catSlug === "vodka" || p.bottleType === "vodka" },
    { label: "RUM", labelMR: "रम", filter: (p) => p.catSlug === "rum" || p.bottleType === "rum" },
  ]

  const filteredBottles = useMemo(() => {
    const pill = CELLAR_PILLS.find((p) => p.label === activePill) || CELLAR_PILLS[0]
    const allProds = catalog.flatMap((c) => c.products.map((prod) => ({ ...prod, catSlug: c.slug })))
    const matches = allProds.filter(pill.filter)
    return matches.slice(0, 4)
  }, [activePill])

  return (
    <section id="cellar" style={{ padding: "88px 0", background: "var(--color-cream)" }}>
      <div className="container">
        {/* Banner with Cellar Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 36,
            borderBottom: "2px solid var(--color-burgundy)",
            paddingBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {/* Center: CHECK THE CELLAR / DISCOVER */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                letterSpacing: "0.12em",
                color: "#943823",
                textTransform: "uppercase",
              }}
            >
              {t("checkCellar")}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(48px, 7vw, 92px)",
                  color: "var(--color-burgundy)",
                  lineHeight: 0.88,
                  margin: "4px 0 0",
                }}
              >
                {t("discover")}
              </h2>
              <span style={{ fontSize: 44 }} aria-label="Wine lover">🍷</span>
            </div>
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {CELLAR_PILLS.map((pill) => {
            const isActive = activePill === pill.label
            const pillText = lang === "MR" ? pill.labelMR : pill.label
            return (
              <button
                key={pill.label}
                onClick={() => setActivePill(pill.label)}
                style={{
                  height: 38,
                  padding: "0 18px",
                  borderRadius: "var(--radius-sm)",
                  background: isActive ? "#943823" : "#F4EBE1",
                  color: isActive ? "#FFF9F3" : "#5A1717",
                  border: `1px solid ${isActive ? "#943823" : "var(--color-beige)"}`,
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                }}
              >
                {pillText}
              </button>
            )
          })}
        </div>

        {/* 4-Bottle Arch Grid */}
        <div
          className="cellar-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px 24px",
          }}
        >
          {filteredBottles.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
