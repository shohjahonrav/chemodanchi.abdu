import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "../data/products";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id) ?? blogPosts[0];

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.4) 100%)" }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article */}
          <article className="lg:col-span-3">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-70"
              style={{ color: "#D4A64A" }}
            >
              <ArrowLeft size={14} /> Back to Journal
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A" }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#4A4A4A" }}>
                <User size={11} /> {post.author}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#4A4A4A" }}>
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-xs" style={{ color: "#4A4A4A" }}>{post.date}</span>
            </div>

            <h1 className="text-white font-bold mb-8 leading-tight" style={{ fontSize: "clamp(24px,3.5vw,40px)", letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>

            <div className="prose prose-invert max-w-none space-y-5">
              {[
                post.excerpt,
                "When you invest in premium luggage, you're not just buying a bag — you're investing in peace of mind. The world's most seasoned travelers understand that the quality of your luggage can fundamentally change how you experience travel. A bag that opens smoothly, wheels that glide silently, locks that hold firm: these details matter enormously.",
                "The choice of materials speaks volumes about a brand's commitment to quality. Aerospace-grade polycarbonate, for instance, offers the ideal combination of rigidity and flex — it can withstand the rigors of baggage handling without cracking or crumbling. Full-grain leather, sourced from the finest tanneries in Italy, develops a rich patina over time that tells the story of every journey.",
                "Craftsmanship is the invisible thread that runs through every premium piece. Master craftspeople inspect each bag individually, ensuring that every seam is straight, every wheel rolls true, every zipper glides without resistance. This level of attention is what separates true luxury luggage from mere imitation.",
                "The journey begins before you reach the airport. From the moment you pack your bag, a well-designed piece should inspire confidence and calm. Everything in its place, nothing forgotten, and the quiet assurance that whatever the journey brings, your luggage is ready for it.",
              ].map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: i === 0 ? "#FFFFFF" : "#B8B8B8" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid rgba(212,166,74,0.1)" }}>
              {["Travel", "Luxury", "Luggage", "Style", "Tips"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium"
                  style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.12)", color: "#B8B8B8" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="rounded-2xl p-6" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}>
              <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
              <div className="space-y-2">
                {["Travel Tips", "Accessories", "Lifestyle", "Destinations", "Craftsmanship"].map((cat) => (
                  <Link
                    key={cat}
                    to="/blog"
                    className="flex items-center justify-between text-sm py-2 transition-colors hover:text-[#D4A64A]"
                    style={{ color: "#6B6B6B", borderBottom: "1px solid rgba(212,166,74,0.06)" }}
                  >
                    <span>{cat}</span>
                    <span className="text-xs" style={{ color: "#3A3A3A" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl p-6" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}>
              <h3 className="text-white font-semibold text-sm mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.id}`}
                    className="flex items-start gap-3 group"
                  >
                    <img src={p.image} alt={p.title} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-[#D4A64A] transition-colors" style={{ color: "#B8B8B8" }}>{p.title}</p>
                      <p className="text-xs mt-1" style={{ color: "#4A4A4A" }}>{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl p-6" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}>
              <h3 className="text-white font-semibold text-sm mb-2">Newsletter</h3>
              <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>Get new articles delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2.5 rounded-xl text-xs outline-none text-white placeholder:text-[#3A3A3A] mb-3"
                style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
              />
              <button
                className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
