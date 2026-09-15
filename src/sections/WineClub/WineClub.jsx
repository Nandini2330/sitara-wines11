export default function WineClub() {
  return (
    <section aria-label="Wine Cellar Banner" style={{ position: "relative", width: "100%", height: "clamp(340px, 45vh, 520px)", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sitara Wine Cellar & Stainless Steel Tanks"
        loading="lazy"
        width={2073}
        height={1200}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </section>
  )
}
