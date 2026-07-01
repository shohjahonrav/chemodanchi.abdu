import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, Truck, Award, CreditCard, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { products, testimonials, blogPosts } from "../data/products";
import ProductCard from "../components/ui/ProductCard";

const heroSlides = [
  {
    label: "PREMIUM QUALITY",
    title: ["Travel", "With Style"],
    sub: "Discover premium luggage that combines durability,\nelegance and functionality.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&h=800&fit=crop&auto=format",
    bg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&auto=format",
  },
  {
    label: "NEW COLLECTION",
    title: ["Crafted for", "Perfection"],
    sub: "Premium materials, meticulous craftsmanship,\nand timeless design.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&h=800&fit=crop&auto=format",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format",
  },
  {
    label: "AWARD WINNING",
    title: ["Journey in", "Luxury"],
    sub: "Award-winning design trusted by thousands\nof discerning travelers worldwide.",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=700&h=800&fit=crop&auto=format",
    bg: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1920&h=1080&fit=crop&auto=format",
  },
];

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Aerospace-grade materials built to last a lifetime of journeys.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    desc: "256-bit SSL encryption protects every transaction.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Express shipping available worldwide. Free on orders over $200.",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    desc: "Every bag backed by our comprehensive warranty program.",
  },
];

const featuredCategories = [
  {
    label: "Luggage",
    count: "12 products",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop&auto=format",
    path: "/shop",
  },
  {
    label: "Backpacks",
    count: "8 products",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=700&fit=crop&auto=format",
    path: "/shop",
  },
  {
    label: "Duffel Bags",
    count: "6 products",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=700&fit=crop&auto=format",
    path: "/shop",
  },
  {
    label: "Accessories",
    count: "15 products",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=700&fit=crop&auto=format",
    path: "/shop",
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [email, setEmail] = useState("");
  const bestSellers = products.filter((p) => p.badge === "Best Seller" || p.rating >= 4.7).slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "New" || !p.badge).slice(0, 4);
  const current = heroSlides[slide];

  return (
    <div style={{ background: "#0B0B0B" }}>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "88px" }}
      >
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${current.bg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,11,11,0.92) 50%, rgba(11,11,11,0.55) 100%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest"
                style={{ background: "rgba(212,166,74,0.1)", border: "1px solid rgba(212,166,74,0.3)", color: "#D4A64A" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] animate-pulse" />
                {current.label}
              </div>
              <h1
                className="font-bold leading-none mb-6"
                style={{ fontSize: "clamp(52px,7vw,88px)", letterSpacing: "-0.03em" }}
              >
                {current.title.map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span style={{ color: "#D4A64A" }}>{line}</span> : <span className="text-white">{line}</span>}
                  </span>
                ))}
              </h1>
              <p className="text-lg mb-10 leading-relaxed whitespace-pre-line" style={{ color: "#B8B8B8", maxWidth: "420px" }}>
                {current.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:translate-y-[-1px]"
                  style={{ background: "#D4A64A", color: "#0B0B0B" }}
                >
                  Shop Now <ArrowRight size={15} />
                </Link>
                <Link
                  to="/shop"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                >
                  Explore Collection
                </Link>
              </div>
            </div>

            {/* Right – product image */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(280px,40vw,480px)",
                  aspectRatio: "3/4",
                  border: "1px solid rgba(212,166,74,0.2)",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={current.image}
                  alt="Premium Luggage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,11,0.3) 0%, transparent 60%)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
              style={{ color: i === slide ? "#D4A64A" : "#4A4A4A" }}
            >
              <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
              <span
                className="block h-px transition-all duration-300"
                style={{ width: i === slide ? "32px" : "16px", background: i === slide ? "#D4A64A" : "#4A4A4A" }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24" style={{ background: "#0F0F0F" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(212,166,74,0.12)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-110"
                  style={{ background: "rgba(212,166,74,0.1)", border: "1px solid rgba(212,166,74,0.2)" }}
                >
                  <Icon size={22} style={{ color: "#D4A64A" }} />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Our Collection</p>
              <h2 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.02em" }}>
                Best Sellers
              </h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: "#D4A64A" }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Categories ── */}
      <section className="py-24" style={{ background: "#0F0F0F" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Browse By</p>
            <h2 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.02em" }}>
              Featured Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.path}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] block"
                style={{ border: "1px solid rgba(212,166,74,0.15)" }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.2) 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: "#D4A64A", letterSpacing: "-0.01em" }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-xs" style={{ color: "#B8B8B8" }}>{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Arrivals ── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Just Arrived</p>
              <h2 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.02em" }}>
                New Arrivals
              </h2>
            </div>
            <Link to="/shop" className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-colors" style={{ color: "#D4A64A" }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24" style={{ background: "#0F0F0F" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>What Customers Say</p>
            <h2 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.02em" }}>
              Trusted by Travelers
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="relative p-10 rounded-3xl text-center"
              style={{
                background: "#141414",
                border: "1px solid rgba(212,166,74,0.15)",
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#D4A64A" color="#D4A64A" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl leading-relaxed mb-8 italic" style={{ color: "#FFFFFF", fontWeight: 300 }}>
                &ldquo;{testimonials[testimonialIdx].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[testimonialIdx].avatar}
                  alt={testimonials[testimonialIdx].name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid rgba(212,166,74,0.3)" }}
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{testimonials[testimonialIdx].name}</p>
                  <p className="text-xs" style={{ color: "#6B6B6B" }}>{testimonials[testimonialIdx].role}</p>
                </div>
              </div>

              {/* Nav buttons */}
              <button
                onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.2)", color: "#D4A64A" }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.2)", color: "#D4A64A" }}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === testimonialIdx ? "24px" : "8px",
                    height: "8px",
                    background: i === testimonialIdx ? "#D4A64A" : "#2C2C2C",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Travel Insights</p>
              <h2 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.02em" }}>
                From the Journal
              </h2>
            </div>
            <Link to="/blog" className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-colors" style={{ color: "#D4A64A" }}>
              All Articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A" }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#4A4A4A" }}>{post.date}</span>
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-2 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-sm line-clamp-2 mb-4" style={{ color: "#6B6B6B" }}>{post.excerpt}</p>
                  <span className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: "#D4A64A" }}>
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-24" style={{ background: "#0F0F0F" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #141414 0%, #1A1A1A 100%)",
              border: "1px solid rgba(212,166,74,0.2)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,166,74,0.5), transparent)" }}
            />
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#D4A64A" }}>Stay Connected</p>
            <h2 className="text-white font-bold mb-4" style={{ fontSize: "clamp(24px,3.5vw,36px)", letterSpacing: "-0.02em" }}>
              Subscribe to our Newsletter
            </h2>
            <p className="mb-8 text-sm" style={{ color: "#6B6B6B" }}>
              Get exclusive deals, travel inspiration, and new arrivals delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-2xl text-sm outline-none text-white placeholder:text-[#4A4A4A]"
                style={{
                  background: "#0B0B0B",
                  border: "1px solid rgba(212,166,74,0.2)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.2)")}
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90 whitespace-nowrap"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
