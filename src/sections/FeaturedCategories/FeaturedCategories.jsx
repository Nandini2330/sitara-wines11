import { Link } from "react-router-dom"
import FadeUp from "../../components/FadeUp/FadeUp"
import { catalog } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

const CATEGORY_META = {
  wine: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930440/sitara_wines/wines/Sula_Cabernet_Shiraz.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930442/sitara_wines/wines/Sula.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930428/sitara_wines/wines/Fratelli.png",
    ],
    archBg: "#E4D3EE",
    taglineKey: "wineTagline",
    nameMR: "वाईन्स",
  },
  beer: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930528/sitara_wines/beer/Tuborg_Classic_2024.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930504/sitara_wines/beer/Kingfisher_Strong_2021.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930460/sitara_wines/beer/Budweiser_Magnum_2023.png",
    ],
    archBg: "#F8E7BE",
    taglineKey: "beerTagline",
    nameMR: "बीअर",
  },
  whiskey: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930581/sitara_wines/whiskey/Royal_Stag.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930548/sitara_wines/whiskey/Blenders_Pride.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930564/sitara_wines/whiskey/Imperial_Blue.png",
    ],
    archBg: "#FCE3CD",
    taglineKey: "whiskeyTagline",
    nameMR: "व्हिस्की",
  },
  scotch: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930593/sitara_wines/Scotch/Vat_69.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930590/sitara_wines/Scotch/Signature.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930588/sitara_wines/Scotch/J_germeister.png",
    ],
    archBg: "#E1D9CD",
    taglineKey: "scotchTagline",
    nameMR: "स्कॉच",
  },
  vodka: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930603/sitara_wines/vodka/Smirnoff.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930595/sitara_wines/vodka/Absolut.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930600/sitara_wines/vodka/Romanov.png",
    ],
    archBg: "#D7ECF4",
    taglineKey: "vodkaTagline",
    nameMR: "व्होडका",
  },
  rum: {
    bottles: [
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930610/sitara_wines/rum/Bacardi_Black.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930618/sitara_wines/rum/Old_Monk_XXX.png",
      "https://res.cloudinary.com/ut5a0auh/image/upload/v1787930613/sitara_wines/rum/Captain_Morgan.png",
    ],
    archBg: "#F5D6C6",
    taglineKey: "rumTagline",
    nameMR: "रम",
  },
}

export default function FeaturedCategories() {
  const { lang, t } = useLanguage()

  return (
    <section id="categories" style={{ padding: "88px 0", background: "var(--color-ivory)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="eyebrow" style={{ color: "#943823" }}>
              {t("exploreByCategory")}
            </span>
            <h2 className="display" style={{ fontSize: "clamp(44px, 6vw, 76px)", color: "var(--color-burgundy)", marginTop: 6 }}>
              {t("discoverYourPour")}
            </h2>
          </div>
          <Link
            to="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              background: "var(--color-cream)",
              border: "1.5px solid #943823",
              color: "#943823",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(148, 56, 35, 0.08)",
              transition: "all 250ms ease",
            }}
          >
            {t("browseAllCategories")} ({catalog.length}) <span style={{ fontSize: 15 }}>→</span>
          </Link>
        </div>

        {/* Categories Grid (Multi-Bottle Clusters) */}
        <div
          className="category-grid"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {catalog.map((cat, i) => {
            const meta = CATEGORY_META[cat.slug] || {
              bottles: [cat.products[0]?.image],
              archBg: "#E4D3EE",
              taglineKey: "wineTagline",
              nameMR: cat.category,
            }

            const catTitle = lang === "MR" ? meta.nameMR : cat.category.toUpperCase()
            const taglineText = t(meta.taglineKey) || cat.tagline

            return (
              <FadeUp key={cat.slug} delay={i * 0.04}>
                <Link
                  to={`/shop/${cat.slug}`}
                  aria-label={`Shop ${cat.category}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--color-cream)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-beige)",
                    padding: "24px 20px 20px",
                    textDecoration: "none",
                    transition: "all 350ms cubic-bezier(.22,1,.36,1)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    alignItems: "center",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)"
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(90,23,23,0.12)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)"
                  }}
                >
                  {/* Category Arch Container with 3 Overlapping Bottles */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 240,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    {/* Arch Background */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "88%",
                        height: "82%",
                        borderRadius: "140px 140px 0 0",
                        background: meta.archBg,
                      }}
                    />

                    {/* Left Bottle */}
                    {meta.bottles[0] && (
                      <img
                        src={meta.bottles[0]}
                        alt={`${cat.category} bottle 1`}
                        loading="lazy"
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "14%",
                          zIndex: 3,
                          maxHeight: "82%",
                          maxWidth: "45%",
                          objectFit: "contain",
                          transform: "rotate(-8deg)",
                          filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.2))",
                        }}
                      />
                    )}

                    {/* Right Bottle */}
                    {meta.bottles[2] && (
                      <img
                        src={meta.bottles[2]}
                        alt={`${cat.category} bottle 3`}
                        loading="lazy"
                        style={{
                          position: "absolute",
                          bottom: 4,
                          right: "14%",
                          zIndex: 3,
                          maxHeight: "82%",
                          maxWidth: "45%",
                          objectFit: "contain",
                          transform: "rotate(8deg)",
                          filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.2))",
                        }}
                      />
                    )}

                    {/* Center Main Bottle */}
                    {meta.bottles[1] && (
                      <img
                        src={meta.bottles[1]}
                        alt={`${cat.category} bottle 2`}
                        loading="lazy"
                        style={{
                          position: "relative",
                          zIndex: 5,
                          maxHeight: "96%",
                          maxWidth: "52%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.3))",
                        }}
                      />
                    )}

                    {/* Bottle count Pill Badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 10,
                        background: "#943823",
                        color: "#FFF9F3",
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: 999,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {cat.products.length} {lang === "MR" ? "उत्पादने" : "PRODUCTS"}
                    </span>
                  </div>

                  {/* Category Details */}
                  <div style={{ marginTop: 20, textAlign: "center", width: "100%" }}>
                    <h3
                      className="display"
                      style={{
                        fontSize: 26,
                        color: "var(--color-burgundy)",
                        margin: 0,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {catTitle}
                    </h3>
                    <p style={{ margin: "4px 0 16px", fontSize: 13, color: "var(--color-muted)", fontWeight: 500 }}>
                      {taglineText}
                    </p>

                    <div
                      style={{
                        width: "100%",
                        height: 38,
                        background: "var(--color-burgundy)",
                        color: "var(--color-cream)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      {t("exploreCategoryBtn")}
                    </div>
                  </div>
                </Link>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
