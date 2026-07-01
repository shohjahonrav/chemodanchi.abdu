import { Link } from "react-router";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-24 text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(212,166,74,0.08)", border: "1px solid rgba(212,166,74,0.2)" }}
          >
            <Heart size={36} style={{ color: "#D4A64A" }} />
          </div>
          <h2 className="text-white font-bold text-2xl mb-3">Your wishlist is empty</h2>
          <p className="mb-8 text-sm" style={{ color: "#6B6B6B" }}>Save your favorite pieces and come back to them anytime.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm"
            style={{ background: "#D4A64A", color: "#0B0B0B" }}
          >
            Explore Collection <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-white font-bold text-3xl" style={{ letterSpacing: "-0.02em" }}>
            Wishlist <span style={{ color: "#D4A64A" }}>({wishlist.length})</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#D4A64A" }}>{product.category}</p>
                  <h3 className="text-white font-semibold text-[15px] mb-2 line-clamp-2">{product.name}</h3>
                </Link>
                <p className="text-white font-bold text-lg mb-4">${product.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product, product.colors[0], product.sizes[0])}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{ background: "#D4A64A", color: "#0B0B0B" }}
                  >
                    <ShoppingBag size={13} /> Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 hover:bg-red-500/10"
                    style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)", color: "#B8B8B8" }}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
