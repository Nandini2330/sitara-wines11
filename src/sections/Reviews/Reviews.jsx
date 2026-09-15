import { Star, Quote } from "lucide-react"
import FadeUp from "../../components/FadeUp/FadeUp"
import { useLanguage } from "../../context/LanguageContext"

const REVIEWS = [
  {
    id: 1,
    name: "Omkar Mote",
    city: "Pune",
    stars: 5,
    date: "2 days ago",
    title: "Instant delivery & 100% original stock",
    titleMR: "झटपट डिलिव्हरी आणि १००% ओरिजनल साठा",
    text: "Tuborg and Kingfisher Strong ordered for weekend party. Cold delivery within 30 minutes in Kothrud, Pune. Outstanding service!",
    textMR: "विकेंड पार्टीसाठी टुबर्ग आणि किंगफिशर मागवली. कोथरूड पुण्यात ३० मिनिटांत थंडगार बीअर डिलिव्हरी झाली. उत्तम सर्व्हिस!",
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    city: "Mumbai",
    stars: 5,
    date: "1 week ago",
    title: "Best estate wine collection",
    titleMR: "सर्वोत्तम वाईन्स कलेक्शन",
    text: "Sula Cabernet Shiraz and Fratelli wine delivered with perfect care. Fresh stock, authentic bottles, and genuine prices!",
    textMR: "सुला आणि फ्रॅटेली वाईन एकदम परफेक्ट पॅकिंगसह मिळाली. ताजी बॉटल आणि योग्य दर!",
  },
  {
    id: 3,
    name: "Sachin Patil",
    city: "Nashik",
    stars: 5,
    date: "2 weeks ago",
    title: "Authentic single malt experience",
    titleMR: "अस्सल सिंगल माल्टचा अनुभव",
    text: "Got Indri Trini single malt and Signature scotch. Original seals, pristine condition. Highly recommended service!",
    textMR: "इंद्री सिंगल माल्ट आणि सिग्नेचर स्कॉच मागवली. ओरिजनल सील आणि उत्तम क्वालिटी!",
  },
  {
    id: 4,
    name: "Pooja Deshmukh",
    city: "Kolhapur",
    stars: 5,
    date: "3 days ago",
    title: "Super fast phone booking",
    titleMR: "सुपर फास्ट फोन बुकिंग",
    text: "Directly called their concierge number. Phone response was very polite and quick doorstep delivery was done!",
    textMR: "फोनवर थेट संपर्क केला. खूप नम्र संभाषण आणि लगेच डोअरस्टेप डिलिव्हरी झाली!",
  },
  {
    id: 5,
    name: "Rohan Joshi",
    city: "Thane",
    stars: 5,
    date: "5 days ago",
    title: "Top craft beer & vodka selection",
    titleMR: "उत्कृष्ट क्राफ्ट बीअर आणि व्होडका",
    text: "Bro Code and Absolut vodka always in stock. Great customer support and hassle-free phone ordering experience.",
    textMR: "ब्रो कोड आणि अ‍ॅब्सोल्युट व्होडका नेहमी उपलब्ध असते. फोनवरून ऑर्डर करणे खूप सोपे आहे.",
  },
  {
    id: 6,
    name: "Amit Shinde",
    city: "Chhatrapati Sambhajinagar",
    stars: 5,
    date: "1 week ago",
    title: "Best wine & liquor shop online",
    titleMR: "उत्तम वाईन्स व बीअर स्टोअर",
    text: "York All Rounder and Port 10000 wine arrived in safe bubble packaging. Truly reliable service!",
    textMR: "यॉर्क आणि पोर्ट १०००० वाईन एकदम सुरक्षित बबल पॅकिंगमध्ये मिळाली. खूप विश्वासू सर्व्हिस!",
  },
  {
    id: 7,
    name: "Priya Sawant",
    city: "Ratnagiri",
    stars: 5,
    date: "3 weeks ago",
    title: "Premium collection & prompt updates",
    titleMR: "प्रीमियम कलेक्शन आणि फास्ट अपडेट्स",
    text: "Smirnoff vodka and Old Monk XXX rum ordered over call. Prompt updates and excellent customer service.",
    textMR: "स्मिरनॉफ व्होडका आणि ओल्ड मंक रम फोनवरून बुक केली. फास्ट सर्व्हिस आणि उत्तम सहकार्य.",
  },
  {
    id: 8,
    name: "Vikas More",
    city: "Nagpur",
    stars: 5,
    date: "4 days ago",
    title: "Superb service & wide range",
    titleMR: "सर्वोत्तम सर्व्हिस आणि मोठा साठा",
    text: "Everything under one roof - Beer, Wine, Whiskey, Scotch, Vodka & Rum. Very happy with Sitara Beer & Wines!",
    textMR: "एकाच ठिकाणी सर्व काही - बीअर, वाईन, व्हिस्की, स्कॉच, व्होडका आणि रम. सितारा स्टोअर खूप भारी आहे!",
  },
]

function Stars({ n = 5 }) {
  return (
    <span aria-label={`${n} out of 5 stars`} style={{ display: "inline-flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} fill="var(--color-gold)" color="var(--color-gold)" strokeWidth={1.5} />
      ))}
    </span>
  )
}

export default function Reviews() {
  const { lang, t } = useLanguage()
  const marqueeReviews = [...REVIEWS, ...REVIEWS]

  return (
    <section aria-label="Customer reviews" style={{ padding: "96px 0", background: "var(--color-ivory)", overflow: "hidden" }}>
      <div className="container">
        {/* Section Header Text */}
        <FadeUp style={{ textAlign: "center", marginBottom: 48, maxWidth: 680, margin: "0 auto 48px" }}>
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", color: "#943823" }}>
            {t("patronTestimonials")}
          </span>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "var(--color-burgundy)", marginTop: 6, marginBottom: 0 }}>
            {t("whatPatronsSay")}
          </h2>
        </FadeUp>
      </div>

      {/* Auto-sliding Infinite Marquee Carousel */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ width: "100%", overflow: "hidden", padding: "10px 0 30px" }}>
        <div className="marquee-track">
          {marqueeReviews.map((r, idx) => {
            const title = lang === "MR" ? r.titleMR : r.title
            const text = lang === "MR" ? r.textMR : r.text
            return (
              <article
                key={`${r.id}-${idx}`}
                style={{
                  width: 340,
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-beige)",
                  borderRadius: "var(--radius-md)",
                  padding: "26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.03)",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Stars n={r.stars} />
                  <Quote size={20} color="var(--color-beige)" fill="var(--color-beige)" />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3, color: "var(--color-charcoal)" }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--color-muted)", lineHeight: 1.55, flex: 1 }}>
                  "{text}"
                </p>
                <footer style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      background: "#943823",
                      color: "#FFF9F3",
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <strong style={{ fontSize: 13, display: "block", color: "var(--color-charcoal)" }}>{r.name}</strong>
                    <span style={{ fontSize: 11, color: "var(--color-muted)" }}>
                      {r.city} • <span style={{ color: "var(--color-gold)", fontWeight: 700 }}>{t("verified")}</span>
                    </span>
                  </div>
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
