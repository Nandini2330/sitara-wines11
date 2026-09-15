import FadeUp from "../FadeUp/FadeUp"

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <FadeUp
      className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 640,
        ...(align === "center" ? { alignItems: "center", textAlign: "center", marginInline: "auto" } : {}),
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={light ? { color: "var(--color-soft-gold)" } : undefined}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="section-heading-title"
        style={light ? { color: "var(--color-cream)" } : undefined}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p
          style={{
            fontSize: 16,
            color: light ? "rgba(255,249,243,0.8)" : "var(--color-muted)",
            maxWidth: 520,
          }}
        >
          {description}
        </p>
      )}
    </FadeUp>
  )
}
