import { Search, Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { searchProducts } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

const NAV = [
  { key: "home", to: "/" },
  { key: "shop", to: "/shop" },
  { key: "wines", to: "/shop/wine" },
  { key: "beer", to: "/shop/beer" },
  { key: "whiskey", to: "/shop/whiskey" },
  { key: "scotch", to: "/shop/scotch" },
  { key: "vodka", to: "/shop/vodka" },
  { key: "rum", to: "/shop/rum" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { lang, toggleLanguage, t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const isNavActive = (to) => {
    if (to === "/") return location.pathname === "/"
    if (to === "/shop") return location.pathname === "/shop"
    return location.pathname.startsWith(to)
  }

  const searchResults = searchQuery.trim() ? searchProducts(searchQuery) : []

  return (
    <>
      <style>{`
        @keyframes topTickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        style={{
          background: "#2A0D0D",
          color: "var(--color-cream)",
          height: 34,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          position: "relative",
          whiteSpace: "nowrap",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 36,
            animation: "topTickerScroll 28s linear infinite",
            willChange: "transform",
          }}
        >
          <span>📞 Direct Call Booking: +91 98765 43210</span>
          <span>✦</span>
          <span>🍷 Authentic Wines &amp; Chilled Beers at Sitara Store</span>
          <span>✦</span>
          <span>🚫 No Online Payment Needed — Pay on Store Visit or Delivery</span>
          <span>✦</span>
          <span>🍺 100% Original Sealed Bottlings</span>
          <span>✦</span>
          <span>📍 Sitara Beer &amp; Wines, Maharashtra</span>
          <span>✦</span>

          <span>📞 Direct Call Booking: +91 98765 43210</span>
          <span>✦</span>
          <span>🍷 Authentic Wines &amp; Chilled Beers at Sitara Store</span>
          <span>✦</span>
          <span>🚫 No Online Payment Needed — Pay on Store Visit or Delivery</span>
          <span>✦</span>
          <span>🍺 100% Original Sealed Bottlings</span>
          <span>✦</span>
          <span>📍 Sitara Beer &amp; Wines, Maharashtra</span>
          <span>✦</span>
        </div>
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(245,233,221,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-beige)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          className="container"
          style={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {/* Original Left: Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}
          >
            <Menu size={22} color="var(--color-burgundy)" />
          </button>

          {/* Original Center: Brand Logo */}
          <Link to="/" aria-label="SITARA home" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/logo.png"
              alt="SITARA BEER & WINES"
              style={{ height: 48, width: "auto", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary" className="desktop-nav" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {NAV.map((item) => {
              const active = isNavActive(item.to)
              return (
                <Link
                  key={item.key}
                  to={item.to}
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: active ? "#943823" : "#2C2222",
                    background: active ? "rgba(148, 56, 35, 0.1)" : "transparent",
                    padding: "8px 14px",
                    borderRadius: 999,
                    textDecoration: "none",
                    border: active ? "1.5px solid #943823" : "1.5px solid transparent",
                    transition: "all 200ms ease",
                  }}
                >
                  {t(item.key)}
                </Link>
              )
            })}
          </nav>

          {/* Original Right: Language Toggle + Search Icon + Call Button */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* English <-> Marathi Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1.5px solid #943823",
                background: lang === "MR" ? "#943823" : "transparent",
                color: lang === "MR" ? "#FFF9F3" : "#943823",
                fontSize: 11,
                fontWeight: 800,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                transition: "all 200ms ease",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {lang === "EN" ? "EN | मराठी" : "मराठी | EN"}
            </button>

            <button
              aria-label="Search"
              onClick={() => setShowSearch(true)}
              style={iconBtn}
            >
              <Search size={20} strokeWidth={2} />
            </button>

            <a
              href="tel:+919876543210"
              aria-label="Call Now"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                background: "var(--color-burgundy)",
                color: "var(--color-cream)",
                borderRadius: "var(--radius-sm)",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 3px 10px rgba(148,56,35,0.25)",
              }}
            >
              <Phone size={14} fill="currentColor" /> <span className="desktop-only">{t("call")}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {showSearch && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 15, 15, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px 20px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              background: "var(--color-cream)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#943823" }}>
                {t("searchHeading")}
              </span>
              <button
                onClick={() => {
                  setShowSearch(false)
                  setSearchQuery("")
                }}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
              >
                <X size={22} color="var(--color-charcoal)" />
              </button>
            </div>

            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Search size={20} color="#943823" style={{ position: "absolute", left: 16 }} />
              <input
                type="text"
                autoFocus
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  height: 52,
                  paddingLeft: 48,
                  paddingRight: 16,
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: 12,
                  border: "2px solid var(--color-burgundy)",
                  outline: "none",
                  background: "#FFF",
                  color: "var(--color-charcoal)",
                }}
              />
            </div>

            {/* Results Dropdown */}
            {searchQuery.trim() !== "" && (
              <div style={{ marginTop: 16, maxHeight: 380, overflowY: "auto" }}>
                {searchResults.length === 0 ? (
                  <p style={{ textAlign: "center", padding: 24, color: "var(--color-muted)", fontSize: 14 }}>
                    No products found matching "{searchQuery}"
                  </p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setShowSearch(false)
                          setSearchQuery("")
                          navigate(`/shop/${item.categorySlug}`)
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          borderRadius: 8,
                          background: "#F5E9DD",
                          cursor: "pointer",
                          transition: "background 150ms ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          {item.image && (
                            <img src={item.image} alt={item.name} style={{ width: 28, height: 42, objectFit: "contain" }} />
                          )}
                          <div>
                            <strong style={{ fontSize: 14, color: "var(--color-charcoal)", display: "block" }}>{item.name}</strong>
                            <span style={{ fontSize: 11, color: "#943823", fontWeight: 700 }}>{item.category}</span>
                          </div>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: "#943823", textTransform: "uppercase" }}>
                          {t("viewCategory")}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--color-burgundy)",
            color: "var(--color-cream)",
            zIndex: 100,
            padding: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "0.14em" }}>SITARA</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}>
              <X size={24} color="var(--color-cream)" />
            </button>
          </div>
          <nav style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 18 }}>
            {NAV.map((item) => {
              const active = isNavActive(item.to)
              return (
                <Link
                  key={item.key}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    textDecoration: "none",
                    color: active ? "#D2AA62" : "#FFF9F3",
                    fontWeight: 800,
                  }}
                >
                  {t(item.key)}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}

const iconBtn = {
  background: "none",
  border: "none",
  padding: 8,
  display: "grid",
  placeItems: "center",
  color: "var(--color-charcoal)",
  cursor: "pointer",
}
