import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#0B0B0B", borderTop: "1px solid rgba(212,166,74,0.12)" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#D4A64A,#E0C27A)" }}
              >
                <span className="text-black font-bold text-sm">CA</span>
              </div>
              <span className="text-white font-semibold text-[14px] tracking-wide">Chemadonchi Abdu</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
              Premium luggage crafted for the discerning traveler. Quality without compromise.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(212,166,74,0.15)",
                    color: "#B8B8B8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#D4A64A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,166,74,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,166,74,0.15)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "New Arrivals", to: "/shop" },
                { label: "Best Sellers", to: "/shop" },
                { label: "Sale", to: "/shop" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4A64A")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B6B")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { label: "Track Order", to: "/track-order" },
                { label: "Returns & Exchanges", to: "/faq" },
                { label: "Shipping Info", to: "/faq" },
                { label: "Size Guide", to: "/faq" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4A64A")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B6B")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4A64A")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B6B")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Newsletter</h4>
            <p className="text-sm mb-4" style={{ color: "#6B6B6B" }}>
              Get exclusive offers, travel inspiration, and new arrivals.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#4A4A4A] text-white"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(212,166,74,0.15)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(212,166,74,0.08)" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#4A4A4A" }}>
            © 2026 Chemadonchi Abdu. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
              <span
                key={method}
                className="text-[10px] font-medium px-2 py-1 rounded"
                style={{ background: "#1A1A1A", color: "#6B6B6B", border: "1px solid rgba(212,166,74,0.1)" }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
