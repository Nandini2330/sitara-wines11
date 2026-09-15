import React from "react"

// Color palettes and styles for different beverage bottle types
const BOTTLE_PRESETS = {
  redWine: {
    glass: "linear-gradient(135deg, #1f0508 0%, #3d0a10 35%, #180306 70%, #2e080e 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 20%, transparent 60%, rgba(255,255,255,0.15) 100%)",
    liquid: "#480911",
    neckColor: "#1a0406",
    foil: "linear-gradient(180deg, #6e0d16 0%, #300509 100%)",
    labelBg: "#FAF6EE",
    labelText: "#231A18",
    accentColor: "#801B24",
    shape: "bordeaux",
  },
  whiteWine: {
    glass: "linear-gradient(135deg, #2b3b1e 0%, #47612d 35%, #233116 70%, #3b5224 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 25%, transparent 65%, rgba(255,255,255,0.25) 100%)",
    liquid: "#CFDE80",
    neckColor: "#283b19",
    foil: "linear-gradient(180deg, #446026 0%, #203111 100%)",
    labelBg: "#FCF9F2",
    labelText: "#1E2618",
    accentColor: "#4E6E2E",
    shape: "bordeaux",
  },
  roseWine: {
    glass: "linear-gradient(135deg, rgba(255,240,240,0.85) 0%, rgba(255,215,220,0.92) 50%, rgba(240,180,190,0.85) 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 30%, transparent 70%, rgba(255,255,255,0.4) 100%)",
    liquid: "#F28C9C",
    neckColor: "#D66D80",
    foil: "linear-gradient(180deg, #E8A5B2 0%, #C45F74 100%)",
    labelBg: "#FFFFFF",
    labelText: "#4A1A24",
    accentColor: "#C94865",
    shape: "burgundy",
  },
  sparkling: {
    glass: "linear-gradient(135deg, #0e1e12 0%, #1a3621 40%, #0a170d 80%, #152b1b 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.02) 25%, transparent 65%, rgba(255,255,255,0.2) 100%)",
    liquid: "#D4B04C",
    neckColor: "#0b170e",
    foil: "linear-gradient(180deg, #D4AF37 0%, #AA820A 50%, #E6C86E 70%, #916E05 100%)",
    labelBg: "#FAF7EE",
    labelText: "#161614",
    accentColor: "#9C7918",
    shape: "champagne",
  },
  beer: {
    glass: "linear-gradient(135deg, #422006 0%, #78350f 35%, #451a03 70%, #92400e 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.35) 0%, transparent 30%, rgba(255,255,255,0.2) 100%)",
    liquid: "#B45309",
    neckColor: "#351504",
    foil: "linear-gradient(180deg, #CA8A04 0%, #854D0E 100%)",
    labelBg: "#FEF9C3",
    labelText: "#451A03",
    accentColor: "#B45309",
    shape: "beer",
  },
  beerGreen: {
    glass: "linear-gradient(135deg, #064e3b 0%, #047857 40%, #022c22 80%, #059669 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 35%, rgba(255,255,255,0.25) 100%)",
    liquid: "#10B981",
    neckColor: "#022c22",
    foil: "linear-gradient(180deg, #94A3B8 0%, #475569 100%)",
    labelBg: "#FFFFFF",
    labelText: "#022C22",
    accentColor: "#047857",
    shape: "beer",
  },
  beerCan: {
    glass: "linear-gradient(135deg, #334155 0%, #64748b 30%, #1e293b 60%, #475569 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, transparent 40%, rgba(255,255,255,0.3) 100%)",
    liquid: "#F59E0B",
    neckColor: "#94A3B8",
    foil: "linear-gradient(180deg, #CBD5E1 0%, #64748B 100%)",
    labelBg: "#1E293B",
    labelText: "#F8FAFC",
    accentColor: "#F59E0B",
    shape: "can",
  },
  whiskey: {
    glass: "linear-gradient(135deg, #451a03 0%, #9a3412 35%, #381203 70%, #7c2d12 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 25%, transparent 65%, rgba(255,255,255,0.3) 100%)",
    liquid: "#D97706",
    neckColor: "#290d02",
    foil: "linear-gradient(180deg, #1C1917 0%, #44403C 50%, #1C1917 100%)",
    labelBg: "#F5EBE1",
    labelText: "#1C1917",
    accentColor: "#B45309",
    shape: "whiskey",
  },
  whiskeyLuxury: {
    glass: "linear-gradient(135deg, #2e1005 0%, #852e0d 35%, #240a02 70%, #692107 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, transparent 35%, rgba(255,255,255,0.35) 100%)",
    liquid: "#B45309",
    neckColor: "#1c0701",
    foil: "linear-gradient(180deg, #D4AF37 0%, #785805 100%)",
    labelBg: "#181411",
    labelText: "#D4AF37",
    accentColor: "#F59E0B",
    shape: "whiskeySquare",
  },
  vodka: {
    glass: "linear-gradient(135deg, rgba(226,232,240,0.9) 0%, rgba(248,250,252,0.95) 40%, rgba(203,213,225,0.9) 80%, rgba(241,245,249,0.95) 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, transparent 40%, rgba(255,255,255,0.6) 100%)",
    liquid: "#FFFFFF",
    neckColor: "#94A3B8",
    foil: "linear-gradient(180deg, #0284C7 0%, #0369A1 100%)",
    labelBg: "#FFFFFF",
    labelText: "#0F172A",
    accentColor: "#0284C7",
    shape: "tallFlint",
  },
  rum: {
    glass: "linear-gradient(135deg, #271106 0%, #54220b 35%, #1f0b03 70%, #431705 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 30%, rgba(255,255,255,0.25) 100%)",
    liquid: "#78350F",
    neckColor: "#170601",
    foil: "linear-gradient(180deg, #991B1B 0%, #450A0A 100%)",
    labelBg: "#FEF3C7",
    labelText: "#451A03",
    accentColor: "#991B1B",
    shape: "rum",
  },
  port: {
    glass: "linear-gradient(135deg, #180308 0%, #360714 40%, #120206 80%, #29050f 100%)",
    glassShine: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 35%, rgba(255,255,255,0.2) 100%)",
    liquid: "#5B0B1D",
    neckColor: "#120206",
    foil: "linear-gradient(180deg, #701A28 0%, #3B0912 100%)",
    labelBg: "#FDF8F0",
    labelText: "#2E050D",
    accentColor: "#701A28",
    shape: "port",
  },
}

export default function BottleImage({
  type = "redWine",
  name = "SITARA RESERVE",
  year = "2024",
  brand = "SITARA",
  className = "",
  style = {},
}) {
  const preset = BOTTLE_PRESETS[type] || BOTTLE_PRESETS.redWine

  // Extract clean label names
  const cleanName = name.replace(/^(Di Majo Norante,?\s*|Famille Fabre,?\s*|Fratelli\s*|Sula\s*)/i, "").trim()
  const displayBrand = brand || (name.split(",")[0] || "SITARA").toUpperCase().slice(0, 14)

  if (preset.shape === "can") {
    return (
      <div
        className={`bottle-graphic-container ${className}`}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.18))",
          ...style,
        }}
      >
        <svg viewBox="0 0 160 380" style={{ width: "68%", height: "92%", overflow: "visible" }}>
          <defs>
            <linearGradient id={`can-grad-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="25%" stopColor="#475569" />
              <stop offset="60%" stopColor="#0F172A" />
              <stop offset="85%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id={`can-shine-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF" stopOpacity="0.45" />
              <stop offset="20%" stopColor="#FFF" stopOpacity="0.05" />
              <stop offset="75%" stopColor="#FFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Can Rim Top */}
          <path d="M 42 35 C 42 22, 118 22, 118 35 C 118 40, 42 40, 42 35 Z" fill="#94A3B8" />
          <path d="M 46 32 C 46 25, 114 25, 114 32 C 114 36, 46 36, 46 32 Z" fill="#CBD5E1" />
          <ellipse cx="80" cy="31" rx="14" ry="4" fill="#64748B" />

          {/* Can Body */}
          <rect x="36" y="38" width="88" height="300" rx="14" fill={`url(#can-grad-${name})`} />
          <rect x="36" y="38" width="88" height="300" rx="14" fill={`url(#can-shine-${name})`} />

          {/* Label Graphic */}
          <rect x="39" y="80" width="82" height="210" rx="4" fill="#0F172A" opacity="0.9" />
          <circle cx="80" cy="140" r="28" fill="#F59E0B" opacity="0.9" />
          <text x="80" y="145" textAnchor="middle" fill="#0F172A" fontFamily="Bebas Neue, sans-serif" fontSize="22" fontWeight="bold">
            ✦
          </text>
          <text x="80" y="195" textAnchor="middle" fill="#F8FAFC" fontFamily="Bebas Neue, sans-serif" fontSize="16" letterSpacing="2">
            {displayBrand.slice(0, 10)}
          </text>
          <text x="80" y="215" textAnchor="middle" fill="#F59E0B" fontFamily="Manrope, sans-serif" fontSize="9" fontWeight="800">
            {cleanName.slice(0, 16)}
          </text>
          <text x="80" y="235" textAnchor="middle" fill="#94A3B8" fontFamily="Manrope, sans-serif" fontSize="8" letterSpacing="1.5">
            CRAFT EDITION • 330ML
          </text>

          {/* Bottom Rim */}
          <path d="M 40 330 C 40 348, 120 348, 120 330 Z" fill="#64748B" />
        </svg>
      </div>
    )
  }

  // Standard elegant Bottle SVG
  return (
    <div
      className={`bottle-graphic-container ${className}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(0 18px 24px rgba(30,10,10,0.22))",
        ...style,
      }}
    >
      <svg viewBox="0 0 160 480" style={{ width: "66%", height: "96%", overflow: "visible" }}>
        <defs>
          {/* Glass body gradient */}
          <linearGradient id={`glass-body-${name}-${type}`} x1="0%" y1="0%" x2="100%" y2="0%">
            {type.includes("white") ? (
              <>
                <stop offset="0%" stopColor="#253518" />
                <stop offset="25%" stopColor="#4F6D30" />
                <stop offset="55%" stopColor="#2A3C1B" />
                <stop offset="85%" stopColor="#5B7E38" />
                <stop offset="100%" stopColor="#1E2B13" />
              </>
            ) : type.includes("rose") ? (
              <>
                <stop offset="0%" stopColor="#D8788C" />
                <stop offset="25%" stopColor="#FFA6B7" />
                <stop offset="55%" stopColor="#E28498" />
                <stop offset="85%" stopColor="#FFB3C2" />
                <stop offset="100%" stopColor="#C9657A" />
              </>
            ) : type.includes("beerGreen") ? (
              <>
                <stop offset="0%" stopColor="#044332" />
                <stop offset="25%" stopColor="#059669" />
                <stop offset="55%" stopColor="#022C22" />
                <stop offset="85%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#033829" />
              </>
            ) : type.includes("beer") ? (
              <>
                <stop offset="0%" stopColor="#451A03" />
                <stop offset="25%" stopColor="#92400E" />
                <stop offset="55%" stopColor="#351504" />
                <stop offset="85%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#2D1102" />
              </>
            ) : type.includes("whiskey") ? (
              <>
                <stop offset="0%" stopColor="#3B1402" />
                <stop offset="25%" stopColor="#9A3412" />
                <stop offset="55%" stopColor="#2F0F01" />
                <stop offset="85%" stopColor="#C2410C" />
                <stop offset="100%" stopColor="#240B01" />
              </>
            ) : type.includes("vodka") ? (
              <>
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="25%" stopColor="#F8FAFC" />
                <stop offset="55%" stopColor="#94A3B8" />
                <stop offset="85%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#64748B" />
              </>
            ) : (
              // Deep Red Wine default
              <>
                <stop offset="0%" stopColor="#1A0307" />
                <stop offset="25%" stopColor="#4A0C16" />
                <stop offset="55%" stopColor="#120104" />
                <stop offset="85%" stopColor="#5E101D" />
                <stop offset="100%" stopColor="#150205" />
              </>
            )}
          </linearGradient>

          {/* Foil gradient */}
          <linearGradient id={`foil-grad-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
            {type.includes("sparkling") ? (
              <>
                <stop offset="0%" stopColor="#9A7B1C" />
                <stop offset="30%" stopColor="#FDE047" />
                <stop offset="70%" stopColor="#CA8A04" />
                <stop offset="100%" stopColor="#715206" />
              </>
            ) : type.includes("white") ? (
              <>
                <stop offset="0%" stopColor="#253518" />
                <stop offset="40%" stopColor="#48652E" />
                <stop offset="100%" stopColor="#1B2811" />
              </>
            ) : type.includes("whiskey") ? (
              <>
                <stop offset="0%" stopColor="#1C1917" />
                <stop offset="50%" stopColor="#44403C" />
                <stop offset="100%" stopColor="#0C0A09" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#650C15" />
                <stop offset="40%" stopColor="#9B1B29" />
                <stop offset="100%" stopColor="#48070E" />
              </>
            )}
          </linearGradient>

          {/* Gloss overlay */}
          <linearGradient id={`glass-shine-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
            <stop offset="18%" stopColor="#FFFFFF" stopOpacity="0.04" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="92%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          {/* Label Shadow */}
          <filter id={`label-shadow-${name}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Bottle Neck & Foil */}
        {preset.shape === "champagne" ? (
          // Champagne neck shape
          <path
            d="M 68 18 L 92 18 L 92 80 C 92 105, 122 135, 124 165 L 36 165 C 38 135, 68 105, 68 80 Z"
            fill={`url(#glass-body-${name}-${type})`}
          />
        ) : (
          // Standard / Bordeaux neck
          <path
            d="M 70 18 L 90 18 L 90 95 C 90 120, 120 142, 122 170 L 38 170 C 40 142, 70 120, 70 95 Z"
            fill={`url(#glass-body-${name}-${type})`}
          />
        )}

        {/* 2. Bottle Main Body */}
        {preset.shape === "whiskeySquare" ? (
          // Square heavy whiskey body
          <path
            d="M 34 160 L 126 160 L 128 435 C 128 446, 122 452, 110 452 L 50 452 C 38 452, 32 446, 32 435 L 34 160 Z"
            fill={`url(#glass-body-${name}-${type})`}
          />
        ) : preset.shape === "beer" ? (
          // Beer bottle body
          <path
            d="M 40 160 L 120 160 C 124 185, 122 420, 120 445 C 119 452, 114 454, 105 454 L 55 454 C 46 454, 41 452, 40 445 C 38 420, 36 185, 40 160 Z"
            fill={`url(#glass-body-${name}-${type})`}
          />
        ) : (
          // Standard wine cylinder body
          <path
            d="M 38 165 L 122 165 L 122 435 C 122 448, 116 454, 105 454 L 55 454 C 44 454, 38 448, 38 435 Z"
            fill={`url(#glass-body-${name}-${type})`}
          />
        )}

        {/* 3. Foil / Capsule Cap */}
        {preset.shape === "champagne" ? (
          <>
            <path d="M 66 14 L 94 14 L 94 85 C 94 95, 90 105, 80 110 C 70 105, 66 95, 66 85 Z" fill={`url(#foil-grad-${name})`} />
            <ellipse cx="80" cy="14" rx="14" ry="4" fill="#CA8A04" />
            <circle cx="80" cy="55" r="4" fill="#D4AF37" />
          </>
        ) : (
          <>
            <path d="M 68 15 L 92 15 L 92 72 L 68 72 Z" fill={`url(#foil-grad-${name})`} />
            <ellipse cx="80" cy="15" rx="12" ry="3.5" fill="#1C1917" />
            <rect x="68" y="66" width="24" height="6" fill="rgba(0,0,0,0.25)" />
            {/* Small emblem on foil */}
            <circle cx="80" cy="42" r="3.5" fill="rgba(255,255,255,0.4)" />
          </>
        )}

        {/* 4. Elegant Front Label */}
        <g filter={`url(#label-shadow-${name})`}>
          <rect
            x="44"
            y="215"
            width="72"
            height="150"
            rx="3"
            fill={preset.labelBg}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />

          {/* Label inner border */}
          <rect
            x="48"
            y="220"
            width="64"
            height="140"
            rx="1.5"
            fill="none"
            stroke={preset.accentColor}
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />

          {/* Producer / Brand */}
          <text
            x="80"
            y="238"
            textAnchor="middle"
            fill={preset.labelText}
            fontFamily="Bebas Neue, sans-serif"
            fontSize="10"
            letterSpacing="2.5"
            fontWeight="bold"
          >
            {displayBrand.slice(0, 12)}
          </text>

          {/* Line separator */}
          <line x1="58" y1="244" x2="102" y2="244" stroke={preset.accentColor} strokeWidth="0.6" opacity="0.6" />

          {/* Main Title Emblem or Big Name */}
          <text
            x="80"
            y="272"
            textAnchor="middle"
            fill={preset.labelText}
            fontFamily="Bebas Neue, sans-serif"
            fontSize="18"
            letterSpacing="0.8"
            fontWeight="bold"
          >
            {cleanName.split(" ")[0]?.slice(0, 8).toUpperCase() || "RESERVE"}
          </text>

          {cleanName.split(" ").length > 1 && (
            <text
              x="80"
              y="288"
              textAnchor="middle"
              fill={preset.accentColor}
              fontFamily="Manrope, sans-serif"
              fontSize="8"
              fontWeight="800"
              letterSpacing="1"
            >
              {cleanName.split(" ").slice(1, 3).join(" ").toUpperCase()}
            </text>
          )}

          {/* Vignette Illustration / Star */}
          <text
            x="80"
            y="312"
            textAnchor="middle"
            fill={preset.accentColor}
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="12"
          >
            ✦ Estate Bottled ✦
          </text>

          {/* Vintage / Spec */}
          <text
            x="80"
            y="336"
            textAnchor="middle"
            fill={preset.labelText}
            fontFamily="Bebas Neue, sans-serif"
            fontSize="13"
            letterSpacing="1.8"
          >
            {year || "2024"}
          </text>

          <text
            x="80"
            y="349"
            textAnchor="middle"
            fill="rgba(0,0,0,0.5)"
            fontFamily="Manrope, sans-serif"
            fontSize="5.5"
            letterSpacing="0.8"
            fontWeight="600"
          >
            750 ML • PRODUCT OF FINE ORIGIN
          </text>
        </g>

        {/* 5. Glass Gloss & Specular Reflections (Overlays on top) */}
        <path
          d="M 38 165 L 122 165 L 122 435 C 122 448, 116 454, 105 454 L 55 454 C 44 454, 38 448, 38 435 Z"
          fill={`url(#glass-shine-${name})`}
          pointerEvents="none"
        />

        {/* Bottom base glass refraction */}
        <path
          d="M 42 438 C 42 450, 118 450, 118 438 C 118 444, 42 444, 42 438 Z"
          fill="rgba(255,255,255,0.25)"
          pointerEvents="none"
        />
      </svg>
    </div>
  )
}
