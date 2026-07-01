import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/products";

const allPosts = [
  ...blogPosts,
  {
    id: "4",
    title: "Top Destinations for the Luxury Traveler in 2026",
    excerpt: "From the fjords of Norway to the desert camps of Wadi Rum, these destinations reward those who arrive with the finest gear.",
    date: "April 30, 2026",
    category: "Destinations",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format",
    author: "James Morrison",
  },
  {
    id: "5",
    title: "The Complete Guide to Carry-On Only Travel",
    excerpt: "Masters of carry-on packing reveal their strategies for fitting two weeks of sophisticated wardrobe into a single bag.",
    date: "April 14, 2026",
    category: "Travel Tips",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&auto=format",
    author: "Elena Kovács",
  },
  {
    id: "6",
    title: "Why Quality Hardware Makes All the Difference",
    excerpt: "The zipper that fails, the wheel that cracks — we explore why premium hardware is the mark of true luggage quality.",
    date: "March 28, 2026",
    category: "Craftsmanship",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop&auto=format",
    author: "Marco Ferretti",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = allPosts;

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Travel Journal</p>
          <h1 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.02em" }}>
            Stories & Insights
          </h1>
        </div>

        {/* Featured */}
        <Link
          to={`/blog/${featured.id}`}
          className="group relative block rounded-3xl overflow-hidden mb-10 transition-all duration-300 hover:-translate-y-1"
          style={{ border: "1px solid rgba(212,166,74,0.15)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: "340px" }}
              />
            </div>
            <div
              className="p-10 flex flex-col justify-center"
              style={{ background: "#141414" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A" }}>
                  {featured.category}
                </span>
                <span className="text-xs" style={{ color: "#4A4A4A" }}>{featured.date}</span>
                <span className="text-xs" style={{ color: "#4A4A4A" }}>{featured.readTime}</span>
              </div>
              <h2 className="text-white font-bold text-2xl mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold" style={{ color: "#B8B8B8" }}>By {featured.author}</p>
                <span className="text-sm font-semibold flex items-center gap-1.5 transition-colors" style={{ color: "#D4A64A" }}>
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A" }}>
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "#4A4A4A" }}>{post.readTime}</span>
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2 leading-snug line-clamp-2">{post.title}</h3>
                <p className="text-sm line-clamp-2 mb-4" style={{ color: "#6B6B6B" }}>{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs" style={{ color: "#4A4A4A" }}>{post.date}</p>
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#D4A64A" }}>
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
