import { useState, useMemo } from "react";
import { Grid3X3, List, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ui/ProductCard";

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Best Rated", "Newest"];
const priceRanges = [
  { label: "Under $200", min: 0, max: 200 },
  { label: "$200 – $350", min: 200, max: 350 },
  { label: "$350 – $500", min: 350, max: 500 },
  { label: "Over $500", min: 500, max: Infinity },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All") result = result.filter((p) => p.category === selectedCategory);
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price <= range.max);
    }
    switch (sortBy) {
      case "Price: Low to High": result.sort((a, b) => a.price - b.price); break;
      case "Price: High to Low": result.sort((a, b) => b.price - a.price); break;
      case "Best Rated": result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const Sidebar = () => (
    <aside className="space-y-8">
      <div>
        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className="w-full text-left flex items-center justify-between py-2 px-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: selectedCategory === cat ? "rgba(212,166,74,0.1)" : "transparent",
                  color: selectedCategory === cat ? "#D4A64A" : "#B8B8B8",
                  border: selectedCategory === cat ? "1px solid rgba(212,166,74,0.2)" : "1px solid transparent",
                }}
              >
                <span>{cat}</span>
                <span className="text-xs" style={{ color: "#4A4A4A" }}>
                  {cat === "All" ? products.length : products.filter((p) => p.category === cat).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ borderTop: "1px solid rgba(212,166,74,0.1)", paddingTop: "1.5rem" }}>
        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Price Range</h3>
        <ul className="space-y-2">
          {priceRanges.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                className="w-full text-left py-2 px-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: selectedPriceRange === i ? "rgba(212,166,74,0.1)" : "transparent",
                  color: selectedPriceRange === i ? "#D4A64A" : "#B8B8B8",
                  border: selectedPriceRange === i ? "1px solid rgba(212,166,74,0.2)" : "1px solid transparent",
                }}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {(selectedCategory !== "All" || selectedPriceRange !== null) && (
        <button
          onClick={() => { setSelectedCategory("All"); setSelectedPriceRange(null); }}
          className="flex items-center gap-2 text-xs transition-colors duration-200 hover:opacity-70"
          style={{ color: "#D4A64A" }}
        >
          <X size={12} /> Clear Filters
        </button>
      )}
    </aside>
  );

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      {/* Header */}
      <div style={{ background: "#0F0F0F", borderBottom: "1px solid rgba(212,166,74,0.1)" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4A64A" }}>All Products</p>
          <h1 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.02em" }}>
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-60 flex-shrink-0">
            <Sidebar />
          </div>

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div
              className="flex items-center justify-between gap-4 mb-8 p-4 rounded-2xl"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
            >
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl transition-all duration-200"
                  style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.2)", color: "#D4A64A" }}
                  onClick={() => setSidebarOpen(true)}
                >
                  <SlidersHorizontal size={14} /> Filters
                </button>
                <p className="text-sm" style={{ color: "#6B6B6B" }}>
                  <span className="text-white font-semibold">{filtered.length}</span> products
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 rounded-xl text-sm cursor-pointer outline-none"
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(212,166,74,0.15)",
                      color: "#B8B8B8",
                    }}
                  >
                    {sortOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6B6B6B" }} />
                </div>
                <div className="flex gap-1">
                  {(["grid", "list"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
                      style={{
                        background: viewMode === mode ? "rgba(212,166,74,0.1)" : "transparent",
                        border: `1px solid ${viewMode === mode ? "rgba(212,166,74,0.3)" : "transparent"}`,
                        color: viewMode === mode ? "#D4A64A" : "#4A4A4A",
                      }}
                    >
                      {mode === "grid" ? <Grid3X3 size={15} /> : <List size={15} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-5xl mb-4">🧳</p>
                <h3 className="text-white font-semibold text-xl mb-2">No products found</h3>
                <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>Try adjusting your filters.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedPriceRange(null); }}
                  className="px-6 py-3 rounded-2xl font-semibold text-sm"
                  style={{ background: "#D4A64A", color: "#0B0B0B" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
                {filtered.map((p) => (
                  viewMode === "grid" ? (
                    <ProductCard key={p.id} product={p} />
                  ) : (
                    <div
                      key={p.id}
                      className="flex gap-5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
                    >
                      <img src={p.image} alt={p.name} className="w-32 h-32 object-cover flex-shrink-0" />
                      <div className="flex items-center justify-between flex-1 pr-5 py-4">
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#D4A64A" }}>{p.category}</p>
                          <h3 className="text-white font-semibold text-base mb-1">{p.name}</h3>
                          <p className="text-sm line-clamp-2" style={{ color: "#6B6B6B" }}>{p.description.slice(0, 80)}…</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-white font-bold text-lg">${p.price}</p>
                          {p.originalPrice && <p className="text-xs line-through" style={{ color: "#4A4A4A" }}>${p.originalPrice}</p>}
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div
            className="absolute left-0 top-0 bottom-0 w-72 p-6 overflow-y-auto"
            style={{ background: "#0F0F0F", borderRight: "1px solid rgba(212,166,74,0.15)" }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-semibold">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} style={{ color: "#B8B8B8" }}><X size={18} /></button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
