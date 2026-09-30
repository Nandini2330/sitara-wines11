import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import CatalogCard from "../../components/CatalogCard/CatalogCard"
import { catalog } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

export default function CuratedPicks() {
  const scrollRef = useRef(null)
  const { t } = useLanguage()

  const curatedBottles = [
    catalog.find((c) => c.slug === "wine")?.products[0],
    catalog.find((c) => c.slug === "beer")?.products[0],
    catalog.find((c) => c.slug === "whiskey")?.products[0],
    catalog.find((c) => c.slug === "scotch")?.products.find((p) => p.image) || catalog.find((c) => c.slug === "scotch")?.products[0],
    catalog.find((c) => c.slug === "vodka")?.products[0],
    catalog.find((c) => c.slug === "rum")?.products[0],
  ].filter(Boolean)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="curated-picks" style={{ padding: "96px 0", background: "var(--color-ivory)" }}>
      <div className="container">
        {/* Header with Navigation Arrows */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "#943823" }}>
              {t("sommelierTag")}
            </span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--color-burgundy)", marginTop: 6, margin: 0 }}>
              {t("curatedTitle")}
            </h2>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--color-beige)",
                background: "var(--color-cream)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
            >
              <ArrowLeft size={20} color="var(--color-burgundy)" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--color-beige)",
                background: "var(--color-cream)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
            >
              <ArrowRight size={20} color="var(--color-burgundy)" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: 28,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            paddingBottom: 20,
          }}
        >
          {curatedBottles.map((product) => (
            <div key={product.id} className="curated-carousel-item" style={{ flex: "0 0 280px", scrollSnapAlign: "start" }}>
              <CatalogCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
