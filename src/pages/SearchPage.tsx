import { useState } from "react";
import { Search } from "lucide-react";
import { products } from "../data/products";
import { Link } from "react-router";
import ProductCard from "../components/ui/ProductCard";

const recentSearches = ["Hardshell carry-on", "Black luggage", "Backpack", "Travel accessories"];
const trending = ["Elite Hardshell", "Explorer Backpack", "Nomad Duffel", "Business Briefcase"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = query.length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div
            className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200"
            style={{
              background: "#141414",
              border: "1px solid rgba(212,166,74,0.3)",
              boxShadow: "0 0 0 4px rgba(212,166,74,0.05)",
            }}
          >
            <Search size={20} style={{ color: "#D4A64A", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search for bags, backpacks, accessories…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="flex-1 bg-transparent text-base outline-none text-white placeholder:text-[#3A3A3A]"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-xs" style={{ color: "#4A4A4A" }}>Clear</button>
            )}
          </div>
        </div>

        {results.length > 0 ? (
          <div>
            <p className="text-sm mb-8" style={{ color: "#6B6B6B" }}>
              <span className="text-white font-semibold">{results.length}</span> results for &ldquo;{query}&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Recent Searches */}
            <div>
              <h2 className="text-white font-bold text-lg mb-5">Recent Searches</h2>
              <div className="space-y-2">
                {recentSearches.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-all duration-200 hover:-translate-x-0"
                    style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)", color: "#B8B8B8" }}
                  >
                    <Search size={13} style={{ color: "#4A4A4A" }} /> {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div>
              <h2 className="text-white font-bold text-lg mb-5">Trending</h2>
              <div className="space-y-2">
                {trending.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-all duration-200"
                    style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)", color: "#B8B8B8" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A" }}
                    >
                      {i + 1}
                    </span>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested */}
            <div>
              <h2 className="text-white font-bold text-lg mb-5">Suggested Products</h2>
              <div className="space-y-3">
                {products.slice(0, 3).map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:border-[rgba(212,166,74,0.3)]"
                    style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
                  >
                    <img src={p.image} alt={p.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium line-clamp-1">{p.name}</p>
                      <p className="text-xs" style={{ color: "#D4A64A" }}>${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="text-white font-bold text-xl mb-2">No results found</h3>
            <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>Try a different search term or browse our collection.</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm"
              style={{ background: "#D4A64A", color: "#0B0B0B" }}
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
