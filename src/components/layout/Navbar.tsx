import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useStore } from "../../context/StoreContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Track Order", path: "/track-order" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { cartCount, wishlistCount } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11,11,11,0.92)"
          : "rgba(11,11,11,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212,166,74,0.12)",
        height: "88px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#D4A64A,#E0C27A)" }}
          >
            <span className="text-black font-bold text-sm tracking-tight">CA</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-semibold text-[15px] tracking-wide">
              Chemadonchi Abdu
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
                style={{ color: active ? "#D4A64A" : "#B8B8B8" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300"
                  style={{
                    background: "#D4A64A",
                    width: active ? "100%" : "0%",
                  }}
                />
                <span
                  className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#D4A64A", opacity: active ? 0 : 1 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-1">
          <Link
            to="/search"
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5"
            style={{ color: "#B8B8B8" }}
          >
            <Search size={18} />
          </Link>
          <Link
            to="/login"
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5"
            style={{ color: "#B8B8B8" }}
          >
            <User size={18} />
          </Link>
          <Link
            to="/wishlist"
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5 relative"
            style={{ color: "#B8B8B8" }}
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-black"
                style={{ background: "#D4A64A" }}
              >
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5 relative"
            style={{ color: "#B8B8B8" }}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-black"
                style={{ background: "#D4A64A" }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5 ml-1"
            style={{ color: "#B8B8B8" }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 py-4"
          style={{
            background: "rgba(11,11,11,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(212,166,74,0.12)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-6 py-3 text-sm font-medium transition-colors duration-200"
              style={{
                color: location.pathname === link.path ? "#D4A64A" : "#B8B8B8",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
