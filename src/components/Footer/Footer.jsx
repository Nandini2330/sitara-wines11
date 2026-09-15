import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { catalog } from "../../data/catalog"
import { useLanguage } from "../../context/LanguageContext"

export default function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer style={{ background: "#211A1A", color: "#F5E9DD" }}>
      {/* Get In Touch Section */}
      <div
        style={{
          background: "#281F1F",
          padding: "64px 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container" style={{ maxWidth: 840, textAlign: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", color: "#D2AA62", textTransform: "uppercase" }}>
            {t("connectWithUs")}
          </span>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "8px 0 16px", color: "#FFF9F3" }}>
            {lang === "MR" ? "संपर्क" : "GET IN"} <span style={{ color: "#D2AA62" }}>{lang === "MR" ? "साधा" : "TOUCH"}</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(245,233,221,0.8)", marginBottom: 28, maxWidth: 600, margin: "0 auto 28px" }}>
            {lang === "MR" ? "वाईन्स, बीअर किंवा व्हिस्की साठ्याबद्दल चौकशीसाठी थेट फोन करा किंवा स्टोअरला भेट द्या!" : "Have questions about our wine selection, bulk orders, or store pickup? Contact our team directly!"}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="tel:+919876543210"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#943823",
                color: "#FFF9F3",
                padding: "14px 28px",
                borderRadius: "var(--radius-sm)",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(148,56,35,0.3)",
              }}
            >
              <Phone size={16} fill="currentColor" /> {lang === "MR" ? "कॉल करा: +९१ ९८७६५ ४३२१०" : "CALL NOW: +91 98765 43210"}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ padding: "64px 0 48px" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", background: "#FFF9F3", padding: "8px 16px", borderRadius: 10, width: "fit-content" }}>
              <img
                src="/logo.png"
                alt="SITARA BEER & WINES"
                style={{ height: 38, width: "auto", objectFit: "contain", display: "block" }}
              />
            </Link>
            <p style={{ fontSize: 13, color: "rgba(245,233,221,0.7)", lineHeight: 1.6, margin: 0 }}>
              {lang === "MR" ? "महाराष्ट्रातील अस्सल वाईन्स, क्राफ्ट बीअर आणि प्रीमियम व्हिस्कीचे नंबर १ दालन." : "India's premier destination for fine domestic and international wines, craft beers, and artisanal spirits."}
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a href="#" aria-label="Instagram" style={socialBtn}>
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" style={socialBtn}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h3 style={colHeader}>{lang === "MR" ? "कॅटेगिरी" : "CATEGORIES"}</h3>
            <ul style={linkList}>
              {catalog.map((c) => (
                <li key={c.slug}>
                  <Link to={`/shop/${c.slug}`} style={footerLink}>
                    {c.category} ({c.products.length})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Store Address & Hours */}
          <div>
            <h3 style={colHeader}>{t("storeAddress")}</h3>
            <ul style={linkList}>
              <li style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "rgba(245,233,221,0.75)" }}>
                <MapPin size={16} color="#D2AA62" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{t("addressLine")}</span>
              </li>
              <li style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "rgba(245,233,221,0.75)", marginTop: 8 }}>
                <Clock size={16} color="#D2AA62" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: "#FFF9F3", display: "block" }}>{t("storeHours")}</strong>
                  <span>{t("openDaily")}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Concierge */}
          <div>
            <h3 style={colHeader}>{t("conciergeCall")}</h3>
            <ul style={linkList}>
              <li><a href="tel:+919876543210" style={footerLink}>{lang === "MR" ? "थेट बुकिंग: +९१ ९८७६५ ४३२१०" : "Direct Phone Booking: +91 98765 43210"}</a></li>
              <li><span style={footerLink}>{lang === "MR" ? "स्टोअर पिकअप उपलब्ध" : "Direct Counter Visit & Pickup"}</span></li>
              <li><span style={footerLink}>{lang === "MR" ? "थंडगार बीअर साठा" : "Cold Stored Beers"}</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#181313", padding: "20px 0", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: 12, color: "rgba(245,233,221,0.6)", fontWeight: 600, letterSpacing: "0.06em" }}>
            {t("reserved")}
          </span>
        </div>
      </div>
    </footer>
  )
}

const colHeader = {
  fontSize: 11,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "var(--color-soft-gold)",
  marginBottom: 16,
}

const linkList = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 0,
  listStyle: "none",
  margin: 0,
}

const footerLink = {
  fontSize: 13,
  color: "rgba(245,233,221,0.75)",
  textDecoration: "none",
  transition: "color 180ms ease",
}

const socialBtn = {
  width: 36,
  height: 36,
  display: "grid",
  placeItems: "center",
  border: "1px solid rgba(210,170,98,0.4)",
  borderRadius: "50%",
  color: "var(--color-ivory)",
}
