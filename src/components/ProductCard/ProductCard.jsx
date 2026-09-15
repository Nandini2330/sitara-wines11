import CatalogCard from "../CatalogCard/CatalogCard"

export default function ProductCard({ product, rank, onAddToCart, onWishlistToggle }) {
  // Convert standard product object to CatalogCard format if needed
  const cardProduct = {
    ...product,
    primaryTags: product.primaryTags || [
      product.category?.toUpperCase() || "WINE",
      product.tag?.toUpperCase() || "RESERVE",
    ],
    originTags: product.originTags || [
      product.region?.split(",")[1]?.trim()?.toUpperCase() || "INDIA",
      product.region?.split(",")[0]?.trim()?.toUpperCase() || "NASHIK",
    ],
    bottleType: product.bottleType || (product.category?.toLowerCase().includes("beer") ? "beer" : product.category?.toLowerCase().includes("white") ? "whiteWine" : product.category?.toLowerCase().includes("sparkling") ? "sparkling" : "redWine"),
    vivinoScore: product.vivinoScore || (product.rating ? (product.rating >= 4 ? "4.2" : "3.8") : "4.0"),
  }

  return (
    <div style={{ position: "relative" }}>
      {rank && (
        <span
          style={{
            position: "absolute",
            top: 6,
            left: 10,
            zIndex: 10,
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 800,
            color: "var(--color-burgundy)",
            letterSpacing: "0.05em",
          }}
        >
          #{String(rank).padStart(2, "0")}
        </span>
      )}
      <CatalogCard product={cardProduct} onAddToCart={onAddToCart} onWishlistToggle={onWishlistToggle} />
    </div>
  )
}
