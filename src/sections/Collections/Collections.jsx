import { useState } from "react"
import { Link } from "react-router-dom"
import FadeUp from "../../components/FadeUp/FadeUp"
import CatalogCard from "../../components/CatalogCard/CatalogCard"
import { catalog } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

export default function Collections() {
  const { lang, t } = useLanguage()
  const [activeTab, setActiveTab] = useState("bestsellers")

  const TABS = [
    {
      id: "bestsellers",
      label: t("bestSellers"),
      getItems: () => [
        catalog.find((c) => c.slug === "wine")?.products[0],
        catalog.find((c) => c.slug === "beer")?.products[0],
        catalog.find((c) => c.slug === "whiskey")?.products[0],
        catalog.find((c) => c.slug === "scotch")?.products.find((p) => p.image) || catalog.find((c) => c.slug === "scotch")?.products[0],
      ].filter(Boolean),
    },
    {
      id: "fresh",
      label: t("freshShelf"),
      getItems: () => [
        catalog.find((c) => c.slug === "vodka")?.products[0],
        catalog.find((c) => c.slug === "rum")?.products[0],
        catalog.find((c) => c.slug === "beer")?.products[5],
        catalog.find((c) => c.slug === "wine")?.products[1],
      ].filter(Boolean),
    },
    {
      id: "insider",
      label: t("insiderPicks"),
      getItems: () => [
        catalog.find((c) => c.slug === "whiskey")?.products[1],
        catalog.find((c) => c.slug === "scotch")?.products.filter((p) => p.image)[1] || catalog.find((c) => c.slug === "scotch")?.products[1],
        catalog.find((c) => c.slug === "vodka")?.products[1],
        catalog.find((c) => c.slug === "rum")?.products[1],
      ].filter(Boolean),
    },
  ]

  const currentTab = TABS.find((tab) => tab.id === activeTab) || TABS[0]
  const items = currentTab.getItems()

  return (
    <section aria-label="Our Choicest Selections" style={{ position: "relative", background: "var(--color-ivory)", paddingBottom: 96 }}>
      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          minHeight: 480,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: "linear-gradient(rgba(20,5,5,0.45), rgba(20,5,5,0.65)), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "72px 0 0",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <h2
              className="display"
              style={{
                fontSize: "clamp(48px, 8vw, 100px)",
                lineHeight: 0.9,
                color: "#FFF9F3",
                letterSpacing: "0.01em",
                maxWidth: 700,
              }}
            >
              {t("choicestTitle")}
            </h2>
            <Link
              to="/shop"
              style={{
                display: "inline-block",
                marginTop: 20,
                background: "#943823",
                color: "#FFF9F3",
                padding: "14px 28px",
                borderRadius: "var(--radius-sm)",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {t("viewAllCol")}
            </Link>
          </FadeUp>
        </div>

        {/* 3 Bottom Tabs */}
        <div style={{ background: "rgba(230, 220, 205, 0.9)", backdropFilter: "blur(8px)", borderTop: "1px solid var(--color-beige)" }}>
          <div
            className="container collections-tabs"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              padding: 0,
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="collections-tab-btn"
                style={{
                  padding: "20px 16px",
                  background: activeTab === tab.id ? "var(--color-ivory)" : "transparent",
                  border: "none",
                  borderRight: "1px solid var(--color-beige)",
                  borderBottom: activeTab === tab.id ? "3px solid #943823" : "3px solid transparent",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  letterSpacing: "0.06em",
                  color: activeTab === tab.id ? "var(--color-burgundy)" : "var(--color-charcoal)",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 200ms ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Bottles Grid */}
      <div className="container" style={{ marginTop: 56 }}>
        <div
          className="collections-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px 24px",
          }}
        >
          {items.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
