import { useState } from "react";
import { useParams, Link } from "react-router";
import { Heart, Star, ShoppingBag, Truck, Shield, RefreshCw, ChevronLeft, Minus, Plus } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import { useStore } from "../context/StoreContext";

const tabs = ["Description", "Specifications", "Reviews", "Shipping"];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id) ?? products[0];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, qty);
  };

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10" style={{ color: "#4A4A4A" }}>
          <Link to="/" className="hover:text-[#D4A64A] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#D4A64A] transition-colors">Shop</Link>
          <span>/</span>
          <span style={{ color: "#B8B8B8" }}>{product.name}</span>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200"
                  style={{
                    border: `2px solid ${i === activeImg ? "#D4A64A" : "rgba(212,166,74,0.1)"}`,
                  }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div
              className="flex-1 rounded-3xl overflow-hidden relative"
              style={{
                border: "1px solid rgba(212,166,74,0.15)",
                background: "#141414",
              }}
            >
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
              {product.badge && (
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                  style={{ background: "#D4A64A", color: "#0B0B0B" }}
                >
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4A64A" }}>
              {product.category}
            </p>
            <h1
              className="text-white font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(24px,3.5vw,36px)", letterSpacing: "-0.02em" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#D4A64A" : "none"} color={i < Math.floor(product.rating) ? "#D4A64A" : "#3A3A3A"} />
                ))}
              </div>
              <span className="text-sm" style={{ color: "#D4A64A" }}>{product.rating}</span>
              <span className="text-sm" style={{ color: "#4A4A4A" }}>({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(212,166,74,0.1)" }}>
              <span className="text-white font-bold text-3xl">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg line-through" style={{ color: "#4A4A4A" }}>${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="text-sm font-semibold px-2 py-0.5 rounded-lg" style={{ background: "rgba(229,62,62,0.1)", color: "#e53e3e" }}>
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#B8B8B8" }}>
              {product.description}
            </p>

            {/* Color */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-white mb-3">Color</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="w-8 h-8 rounded-full transition-all duration-200"
                    style={{
                      background: color,
                      border: `2px solid ${selectedColor === color ? "#D4A64A" : "rgba(255,255,255,0.1)"}`,
                      outline: selectedColor === color ? "2px solid rgba(212,166,74,0.3)" : "none",
                      outlineOffset: "2px",
                      transform: selectedColor === color ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-white mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: selectedSize === size ? "rgba(212,166,74,0.15)" : "#1A1A1A",
                      border: `1px solid ${selectedSize === size ? "#D4A64A" : "rgba(212,166,74,0.15)"}`,
                      color: selectedSize === size ? "#D4A64A" : "#B8B8B8",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm font-semibold text-white">Quantity</p>
              <div
                className="flex items-center gap-3 rounded-2xl px-4 py-2"
                style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" }}
              >
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ color: "#B8B8B8" }}>
                  <Minus size={14} />
                </button>
                <span className="text-white font-semibold w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ color: "#B8B8B8" }}>
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                <ShoppingBag size={16} /> Add to Cart
              </button>
              <Link
                to="/checkout"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                onClick={handleAddToCart}
              >
                Buy Now
              </Link>
              <button
                onClick={() => toggleWishlist(product)}
                className="w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-200"
                style={{
                  background: inWishlist ? "rgba(212,166,74,0.1)" : "#1A1A1A",
                  border: `1px solid ${inWishlist ? "#D4A64A" : "rgba(212,166,74,0.15)"}`,
                  color: inWishlist ? "#D4A64A" : "#B8B8B8",
                }}
              >
                <Heart size={18} fill={inWishlist ? "#D4A64A" : "none"} />
              </button>
            </div>

            {/* Benefits */}
            <div
              className="grid grid-cols-3 gap-4 p-5 rounded-2xl"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
            >
              {[
                { icon: Truck, label: "Free Delivery", sub: "On orders $200+" },
                { icon: Shield, label: "2-Year Warranty", sub: "Full coverage" },
                { icon: RefreshCw, label: "30-Day Returns", sub: "Hassle-free" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ background: "rgba(212,166,74,0.1)" }}
                  >
                    <Icon size={15} style={{ color: "#D4A64A" }} />
                  </div>
                  <p className="text-white text-xs font-semibold">{label}</p>
                  <p className="text-[11px]" style={{ color: "#6B6B6B" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <div
            className="flex gap-1 p-1 rounded-2xl mb-8 overflow-x-auto"
            style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 min-w-fit py-3 px-5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: activeTab === tab ? "rgba(212,166,74,0.1)" : "transparent",
                  color: activeTab === tab ? "#D4A64A" : "#6B6B6B",
                  border: activeTab === tab ? "1px solid rgba(212,166,74,0.2)" : "1px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className="rounded-3xl p-8"
            style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
          >
            {activeTab === "Description" && (
              <div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#B8B8B8" }}>{product.description}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Each piece in the Chemadonchi Abdu collection is individually inspected by our master craftspeople before leaving our atelier. We believe that premium travel begins with premium equipment — bags that don't just carry your belongings, but carry your story.
                </p>
              </div>
            )}
            {activeTab === "Specifications" && product.specs && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 px-4 rounded-xl"
                    style={{ background: "#1A1A1A" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "#B8B8B8" }}>{key}</span>
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Reviews" && (
              <div className="space-y-6">
                {[
                  { name: "Sarah K.", date: "June 2026", rating: 5, text: "Absolutely stunning luggage. The quality exceeded my expectations — every detail is perfect." },
                  { name: "James M.", date: "May 2026", rating: 5, text: "Survived a rough international route without a scratch. Highly recommend to any serious traveler." },
                  { name: "Lena P.", date: "April 2026", rating: 4, text: "Beautiful design and solid build. Slightly heavy but worth it for the quality." },
                ].map((review, i) => (
                  <div key={i} className="pb-6" style={{ borderBottom: i < 2 ? "1px solid rgba(212,166,74,0.08)" : "none" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "rgba(212,166,74,0.15)", color: "#D4A64A" }}>
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{review.name}</p>
                        <p className="text-xs" style={{ color: "#4A4A4A" }}>{review.date}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} size={11} fill={j < review.rating ? "#D4A64A" : "none"} color={j < review.rating ? "#D4A64A" : "#3A3A3A"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#B8B8B8" }}>{review.text}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Shipping" && (
              <div className="space-y-4">
                {[
                  { title: "Standard Shipping", info: "5–7 business days · Free on orders over $200" },
                  { title: "Express Shipping", info: "2–3 business days · $19.99" },
                  { title: "Overnight Shipping", info: "Next business day · $39.99" },
                  { title: "International Shipping", info: "7–14 business days · Rates vary by destination" },
                ].map((item) => (
                  <div key={item.title} className="flex justify-between items-center p-4 rounded-xl" style={{ background: "#1A1A1A" }}>
                    <span className="text-sm font-medium text-white">{item.title}</span>
                    <span className="text-sm" style={{ color: "#6B6B6B" }}>{item.info}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-white font-bold text-2xl mb-8" style={{ letterSpacing: "-0.02em" }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
