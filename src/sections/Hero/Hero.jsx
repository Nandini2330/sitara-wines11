import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      style={{
        minHeight: "calc(100vh - 122px)",
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        padding: "72px 0 96px",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-ivory)",
      }}
      className="hero-section"
    >
      <div className="container hero-grid" style={{ display: "grid", gridTemplateColumns: "48% 52%", alignItems: "center", gap: 48 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
          className="hero-content-col"
        >
          <span className="eyebrow" style={{ color: "#943823" }}>{t("heroSub")}</span>
          <h1
            className="display hero-title"
            style={{
              fontSize: "clamp(64px, 8.5vw, 124px)",
              lineHeight: 0.84,
              letterSpacing: "-0.015em",
              color: "var(--color-burgundy)",
              margin: 0,
            }}
          >
            {t("heroTitleLine1")}<br />{t("heroTitleLine2")}<br />
            <span className="editorial-accent" style={{ textTransform: "none", fontSize: "0.62em", color: "var(--color-gold)" }}>{t("heroTitleAccent")}</span>
          </h1>
          <p className="hero-subtext" style={{ fontSize: 18, color: "var(--color-muted)", maxWidth: 460, margin: 0, lineHeight: 1.5 }}>
            {t("heroDesc")}
          </p>
          <div className="hero-btn-group" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/shop/wine" className="btn-primary hero-btn" style={{ background: "#943823", borderColor: "#943823" }}>
              {t("exploreWines")}
            </Link>
            <Link to="/shop" className="btn-secondary hero-btn">
              {t("viewCategories")}
            </Link>
          </div>
        </motion.div>

        {/* Dual Hero Cinema Video Backgrounds */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-video-grid"
          style={{
            position: "relative",
            height: "min(640px, 72vh)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {/* 1. Vineyard & Grapes Video */}
          <div
            style={{
              position: "relative",
              height: "100%",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(90,23,23,0.12)",
              background: "#2A1818",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(20,5,5,0.32) 0%, rgba(20,5,5,0.04) 40%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            <div className="hero-video-badge" style={{ position: "absolute", bottom: 20, left: 18, right: 18, color: "#FFF9F3" }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-soft-gold)", display: "block" }}>
                {t("estateGrown")}
              </span>
              <span className="badge-title" style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "0.04em" }}>
                {t("pristineHarvest")}
              </span>
            </div>
            <span aria-hidden="true" style={{ position: "absolute", top: 20, left: 20, color: "var(--color-soft-gold)", fontFamily: "var(--font-display)", fontSize: 24 }}>✦</span>
          </div>

          {/* 2. Wine Pour & Chilled Beer Video */}
          <div
            style={{
              position: "relative",
              height: "100%",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(90,23,23,0.12)",
              background: "#2A1818",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/video2.mp4" type="video/mp4" />
            </video>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(20,5,5,0.32) 0%, rgba(20,5,5,0.04) 40%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            <div className="hero-video-badge" style={{ position: "absolute", bottom: 20, left: 18, right: 18, color: "#FFF9F3" }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-soft-gold)", display: "block" }}>
                {t("curatedSelectionsTag")}
              </span>
              <span className="badge-title" style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "0.04em" }}>
                {t("perfectPour")}
              </span>
            </div>
            <span aria-hidden="true" style={{ position: "absolute", top: 20, right: 20, color: "var(--color-soft-gold)", fontFamily: "var(--font-display)", fontSize: 28 }}>✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
