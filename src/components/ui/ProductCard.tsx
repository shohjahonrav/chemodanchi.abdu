import { useState } from "react";
import { Link } from "react-router";
import { Heart, Star, Eye, ShoppingBag } from "lucide-react";
import { Product } from "../../data/products";
import { useStore } from "../../context/StoreContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const [hovered, setHovered] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.colors[0], product.sizes[0]);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "#141414",
        border: hovered ? "1px solid rgba(212,166,74,0.45)" : "1px solid rgba(212,166,74,0.12)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{
            background: product.badge === "Sale" ? "#e53e3e" : "#D4A64A",
            color: product.badge === "Sale" ? "#fff" : "#0B0B0B",
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Wishlist */}
      <button
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: "rgba(11,11,11,0.8)",
          border: "1px solid rgba(212,166,74,0.2)",
          color: inWishlist ? "#D4A64A" : "#B8B8B8",
        }}
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
      >
        <Heart size={14} fill={inWishlist ? "#D4A64A" : "none"} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-[#1A1A1A]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick actions overlay */}
          <div
            className="absolute inset-0 flex items-end justify-center gap-2 p-4 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <Link
              to={`/product/${product.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
              style={{
                background: "rgba(11,11,11,0.85)",
                border: "1px solid rgba(212,166,74,0.3)",
                color: "#D4A64A",
                backdropFilter: "blur(8px)",
              }}
            >
              <Eye size={13} /> Quick View
            </Link>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "#D4A64A", color: "#0B0B0B" }}
            >
              <ShoppingBag size={13} /> Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: "#D4A64A" }}>
            {product.category}
          </p>
          <h3 className="text-white font-semibold text-[15px] mb-2 leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < Math.floor(product.rating) ? "#D4A64A" : "none"}
                color={i < Math.floor(product.rating) ? "#D4A64A" : "#3A3A3A"}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: "#6B6B6B" }}>
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm line-through" style={{ color: "#4A4A4A" }}>
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
