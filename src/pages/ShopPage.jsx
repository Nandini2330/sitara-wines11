import { Link, useParams, useSearchParams } from "react-router-dom"
import { useMemo, useState } from "react"
import { SlidersHorizontal, LayoutList, LayoutGrid, MapPin, X, Check, ArrowUpDown, ChevronDown, Phone } from "lucide-react"
import { catalog, getCategory, SORTS } from "../data/catalog"
import CatalogCard from "../components/CatalogCard/CatalogCard"
import BottleImage from "../components/BottleImage/BottleImage"

const LOCATIONS = ["Mumbai", "Bengaluru", "Goa", "Delhi NCR", "Pune", "Hyderabad", "Kolkata"]

export default function ShopPage() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const activeCat = slug ? getCategory(slug) : null

  const [sort, setSort] = useState("featured")
  const [viewMode, setViewMode] = useState("grid") // 'grid' | 'list'
  const [filterOpen, setFilterOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("Mumbai")

  // Filter states
  const [selectedCountry, setSelectedCountry] = useState("ALL")
  const [selectedStyle, setSelectedStyle] = useState("ALL")
  const [minRating, setMinRating] = useState(0)
  const [priceMax, setPriceMax] = useState(30000)

  // Toast state
  const [toast, setToast] = useState(null)

  const showToast = (message, undoAction = null) => {
    setToast({ message, undoAction })
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev))
    }, 3800)
  }

  // Filter options derived from catalog
  const allCountries = useMemo(() => {
    const set = new Set()
    catalog.forEach((c) =>
      c.products.forEach((p) => {
        if (p.originTags?.[0]) set.add(p.originTags[0])
      })
    )
    return ["ALL", ...Array.from(set)]
  }, [])

  // Processed filtered and sorted products
  const categorySections = useMemo(() => {
    const list = activeCat ? [activeCat] : catalog
    return list
      .map((cat) => {
        let prods = cat.products.filter((p) => {
          if (selectedCountry !== "ALL" && p.originTags?.[0] !== selectedCountry) return false
          if (selectedStyle !== "ALL" && !p.primaryTags?.includes(selectedStyle)) return false
          if (p.price > priceMax) return false
          if (p.rating < minRating) return false
          return true
        })

        if (SORTS[sort]?.fn) {
          prods.sort(SORTS[sort].fn)
        }

        return {
          ...cat,
          products: prods,
        }
      })
      .filter((cat) => cat.products.length > 0)
  }, [activeCat, sort, selectedCountry, selectedStyle, priceMax, minRating])

  const totalCount = categorySections.reduce((n, c) => n + c.products.length, 0)

  const pageTitle = activeCat
    ? activeCat.category.toUpperCase()
    : "ALL WINES & SPIRITS"

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-ivory)" }}>
      {/* Terracotta Header Banner (matching reference screenshot) */}
      <section style={{ background: "#943823", color: "#FFF9F3" }}>
        {/* Top Location Bar */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.16)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.04em",
            padding: "9px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              onClick={() => setLocationOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                color: "#FFF9F3",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <MapPin size={14} style={{ color: "#FAD02C" }} />
              <span>
                Delivering to: <strong style={{ textDecoration: "underline" }}>{selectedLocation}</strong> (Select location to see availability)
              </span>
            </button>
            <span style={{ fontSize: 11, opacity: 0.85 }}>Same-day delivery available for orders before 6 PM</span>
          </div>
        </div>

        {/* Big Bold Category Title & Count */}
        <div className="container" style={{ padding: "48px 0 54px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
            <h1
              className="display"
              style={{
                fontSize: "clamp(52px, 8.5vw, 110px)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                margin: 0,
                color: "#FFF9F3",
              }}
            >
              {pageTitle}
            </h1>
            <span
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                color: "rgba(255, 249, 243, 0.85)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              {totalCount} products
            </span>
          </div>
        </div>
      </section>

      {/* Category Navigation & Toolbar */}
      <div
        style={{
          position: "sticky",
          top: 80,
          zIndex: 40,
          background: "var(--color-ivory)",
          borderBottom: "1px solid var(--color-beige)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          className="container toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "12px 0",
            flexWrap: "wrap",
          }}
        >
          {/* Category Tabs */}
          <nav
            aria-label="Drink Categories"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              overflowX: "auto",
              maxWidth: "100%",
              paddingBottom: 4,
            }}
          >
            <Link to="/shop" style={tabStyle(!slug)}>
              ALL
            </Link>
            {catalog.map((c) => (
              <Link key={c.slug} to={`/shop/${c.slug}`} style={tabStyle(slug === c.slug)}>
                {c.category}
              </Link>
            ))}
          </nav>

          {/* Right Toolbar Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
            {/* Sort Select */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-charcoal)",
                }}
              >
                SORT BY
              </span>
              <div style={{ position: "relative" }}>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{
                    appearance: "none",
                    height: 38,
                    padding: "0 34px 0 14px",
                    background: "var(--color-cream)",
                    border: "1px solid var(--color-beige)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-charcoal)",
                    cursor: "pointer",
                  }}
                >
                  {Object.entries(SORTS).map(([key, s]) => (
                    <option key={key} value={key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "var(--color-charcoal)",
                  }}
                />
              </div>
            </div>

            {/* Filter Drawer Toggle */}
            <button
              onClick={() => setFilterOpen(true)}
              style={toolBtnStyle}
            >
              <SlidersHorizontal size={15} />
              <span>FILTER</span>
              {(selectedCountry !== "ALL" || selectedStyle !== "ALL" || minRating > 0 || priceMax < 30000) && (
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--color-wine)",
                  }}
                />
              )}
            </button>

            {/* Grid / List View Toggle */}
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="desktop-only"
              style={toolBtnStyle}
            >
              {viewMode === "grid" ? (
                <>
                  <LayoutList size={15} /> LIST VIEW
                </>
              ) : (
                <>
                  <LayoutGrid size={15} /> GRID VIEW
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Chips Bar */}
      {(selectedCountry !== "ALL" || selectedStyle !== "ALL" || minRating > 0 || priceMax < 30000) && (
        <div style={{ background: "var(--color-cream)", borderBottom: "1px solid var(--color-beige)", padding: "10px 0" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: "var(--color-muted)" }}>
              Active Filters:
            </span>
            {selectedCountry !== "ALL" && (
              <span style={activeChipStyle}>
                Origin: {selectedCountry} <X size={12} onClick={() => setSelectedCountry("ALL")} style={{ cursor: "pointer" }} />
              </span>
            )}
            {selectedStyle !== "ALL" && (
              <span style={activeChipStyle}>
                Style: {selectedStyle} <X size={12} onClick={() => setSelectedStyle("ALL")} style={{ cursor: "pointer" }} />
              </span>
            )}
            {minRating > 0 && (
              <span style={activeChipStyle}>
                Vivino Rating: {minRating}+ ★ <X size={12} onClick={() => setMinRating(0)} style={{ cursor: "pointer" }} />
              </span>
            )}
            <button
              onClick={() => {
                setSelectedCountry("ALL")
                setSelectedStyle("ALL")
                setMinRating(0)
                setPriceMax(30000)
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-wine)",
                fontSize: 11,
                fontWeight: 800,
                textTransform: "uppercase",
                textDecoration: "underline",
                cursor: "pointer",
                marginLeft: 8,
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {/* Main Catalog Listing */}
      <div className="container" style={{ padding: "64px 0 120px" }}>
        {categorySections.length === 0 ? (
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <h2 className="display" style={{ fontSize: 36, color: "var(--color-burgundy)" }}>
              No bottles found matching your filters
            </h2>
            <p style={{ marginTop: 12, color: "var(--color-muted)" }}>
              Try adjusting your price range, origin, or rating filters.
            </p>
            <button
              onClick={() => {
                setSelectedCountry("ALL")
                setSelectedStyle("ALL")
                setMinRating(0)
                setPriceMax(30000)
              }}
              className="btn-primary"
              style={{ marginTop: 24 }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          categorySections.map((cat) => (
            <section key={cat.slug} id={cat.slug} style={{ marginBottom: 96 }}>
              {/* Category Subheading if viewing All */}
              {!slug && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 24,
                    borderBottom: "1px solid var(--color-beige)",
                    paddingBottom: 14,
                    marginBottom: 44,
                  }}
                >
                  <h2
                    className="display"
                    style={{
                      fontSize: "clamp(32px, 4.5vw, 52px)",
                      color: "var(--color-burgundy)",
                      lineHeight: 0.95,
                      margin: 0,
                    }}
                  >
                    {cat.category}
                  </h2>
                  <Link
                    to={`/shop/${cat.slug}`}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--color-wine)",
                      textDecoration: "underline",
                    }}
                  >
                    View All {cat.products.length} →
                  </Link>
                </div>
              )}

              {/* 4-Column Grid View matching the Reference Screenshot */}
              {viewMode === "grid" ? (
                <div
                  className="catalog-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "56px 28px",
                  }}
                >
                  {cat.products.map((p) => (
                    <CatalogCard
                      key={p.id}
                      product={p}
                      onAddToCart={(item) =>
                        showToast(`Added "${item.name}" to cart!`)
                      }
                      onWishlistToggle={(item, isWished) =>
                        showToast(
                          isWished
                            ? `Added "${item.name}" to wishlist`
                            : `Removed "${item.name}" from wishlist`
                        )
                      }
                    />
                  ))}
                </div>
              ) : (
                /* List View Alternative */
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {cat.products.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "var(--color-cream)",
                        border: "1px solid var(--color-beige)",
                        borderRadius: "var(--radius-md)",
                        padding: "16px 24px",
                        gap: 24,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <div
                          style={{
                            width: 60,
                            height: 70,
                            borderRadius: "20px 20px 0 0",
                            background: p.archBg || "#E4D3EE",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ width: 44, height: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={p.name}
                                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}
                                onError={(e) => { e.currentTarget.style.display = 'none' }}
                              />
                            ) : (
                              <BottleImage type={p.bottleType} name={p.name} />
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                            {p.name}
                          </h4>
                          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                            {p.primaryTags?.map((t) => (
                              <span
                                key={t}
                                style={{
                                  fontSize: 9,
                                  fontWeight: 800,
                                  padding: "2px 8px",
                                  borderRadius: 999,
                                  background: "#E8DED2",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                            {p.originTags?.map((t) => (
                              <span
                                key={t}
                                style={{
                                  fontSize: 9,
                                  fontWeight: 800,
                                  padding: "2px 8px",
                                  borderRadius: 999,
                                  background: "#DFD8EE",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                        <a
                          href="tel:+919876543210"
                          style={{
                            height: 38,
                            padding: "0 20px",
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            background: "var(--color-burgundy)",
                            color: "var(--color-cream)",
                            borderRadius: "var(--radius-sm)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <Phone size={14} fill="currentColor" /> Call Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))
        )}
      </div>

      {/* Filter Drawer Modal */}
      {filterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setFilterOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(420px, 92vw)",
              height: "100%",
              background: "var(--color-cream)",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-8px 0 30px rgba(0,0,0,0.2)",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--color-beige)", paddingBottom: 16 }}>
              <h3 className="display" style={{ fontSize: 26, margin: 0, color: "var(--color-burgundy)" }}>
                Filter Catalog
              </h3>
              <button
                onClick={() => setFilterOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Origin Country */}
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                  Country / Origin
                </label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {allCountries.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCountry(c)}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 999,
                        fontSize: 11,
                        fontWeight: 700,
                        border: "1px solid var(--color-beige)",
                        background: selectedCountry === c ? "var(--color-burgundy)" : "transparent",
                        color: selectedCountry === c ? "var(--color-cream)" : "var(--color-charcoal)",
                        cursor: "pointer",
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Min Vivino Rating */}
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                  Minimum Vivino Rating: {minRating > 0 ? `${minRating} ★` : "All Ratings"}
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  {[0, 3.5, 4.0, 4.3, 4.5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      style={{
                        flex: 1,
                        padding: "8px 0",
                        borderRadius: "var(--radius-sm)",
                        fontSize: 12,
                        fontWeight: 700,
                        border: "1px solid var(--color-beige)",
                        background: minRating === r ? "var(--color-burgundy)" : "transparent",
                        color: minRating === r ? "var(--color-cream)" : "var(--color-charcoal)",
                        cursor: "pointer",
                      }}
                    >
                      {r === 0 ? "All" : `${r}★+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <label style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Max Price
                  </label>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>₹{priceMax.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="30000"
                  step="200"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--color-wine)" }}
                />
              </div>
            </div>

            <div style={{ marginTop: "auto", paddingTop: 32, display: "flex", gap: 12 }}>
              <button
                onClick={() => {
                  setSelectedCountry("ALL")
                  setSelectedStyle("ALL")
                  setMinRating(0)
                  setPriceMax(30000)
                }}
                className="btn-secondary"
                style={{ flex: 1, height: 44, fontSize: 11 }}
              >
                Reset
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="btn-primary"
                style={{ flex: 2, height: 44, fontSize: 11 }}
              >
                Apply Filters ({totalCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {locationOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "grid",
            placeItems: "center",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            padding: 16,
          }}
          onClick={() => setLocationOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(440px, 100%)",
              background: "var(--color-cream)",
              borderRadius: "var(--radius-md)",
              padding: 28,
              boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 className="display" style={{ fontSize: 24, margin: 0, color: "var(--color-burgundy)" }}>
                Select Delivery Location
              </h3>
              <button
                onClick={() => setLocationOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-muted)", marginTop: 8 }}>
              Product catalog, vintage availability, and express delivery slots change by city.
            </p>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc)
                    setLocationOpen(false)
                    showToast(`Delivery location set to ${loc}`)
                  }}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: `1px solid ${selectedLocation === loc ? "var(--color-wine)" : "var(--color-beige)"}`,
                    background: selectedLocation === loc ? "var(--color-wine)" : "var(--color-ivory)",
                    color: selectedLocation === loc ? "var(--color-cream)" : "var(--color-charcoal)",
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <span>{loc}</span>
                  {selectedLocation === loc && <Check size={15} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Toast (matching design.png undo toast) */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1E1B1B",
            color: "#FFF9F3",
            padding: "12px 20px",
            borderRadius: "var(--radius-sm)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: 16,
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
            fontSize: 13,
            fontWeight: 600,
            animation: "fadeIn 250ms ease",
          }}
        >
          <span>{toast.message}</span>
          <button
            onClick={() => setToast(null)}
            style={{
              background: "none",
              border: "none",
              color: "#E28498",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            DISMISS
          </button>
        </div>
      )}
    </main>
  )
}

// Navigation Pill Tabs
const tabStyle = (isActive) => ({
  height: 38,
  display: "inline-flex",
  alignItems: "center",
  padding: "0 18px",
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: isActive ? "#943823" : "var(--color-charcoal)",
  borderBottom: isActive ? "3px solid #943823" : "3px solid transparent",
  background: "transparent",
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "all 200ms ease",
})

const toolBtnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  height: 38,
  padding: "0 14px",
  background: "transparent",
  border: "none",
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--color-charcoal)",
  cursor: "pointer",
}

const activeChipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 10px",
  borderRadius: 999,
  background: "var(--color-beige)",
  fontSize: 11,
  fontWeight: 700,
  color: "var(--color-charcoal)",
}
