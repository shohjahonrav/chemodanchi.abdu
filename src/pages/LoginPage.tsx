import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const inputCls = "w-full px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-[#3A3A3A] transition-all duration-200";
const inputStyle = { background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" };

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="min-h-[calc(100vh-88px)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg,#D4A64A,#E0C27A)" }}>
              <span className="text-black font-bold">CA</span>
            </div>
            <h1 className="text-white font-bold text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>Welcome Back</h1>
            <p className="text-sm" style={{ color: "#6B6B6B" }}>Sign in to your account</p>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Email</label>
                <input
                  className={inputCls} style={inputStyle} type="email" placeholder="john@example.com"
                  value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Password</label>
                <div className="relative">
                  <input
                    className={`${inputCls} pr-12`} style={inputStyle} type={showPwd ? "text" : "password"}
                    placeholder="••••••••" value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} required
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "#6B6B6B" }}
                    onClick={() => setShowPwd((v) => !v)}
                  >
                    {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) => setForm((f) => ({ ...f, remember: e.target.checked }))}
                    className="rounded"
                    style={{ accentColor: "#D4A64A" }}
                  />
                  <span className="text-sm" style={{ color: "#B8B8B8" }}>Remember me</span>
                </label>
                <Link to="#" className="text-sm transition-colors hover:text-white" style={{ color: "#D4A64A" }}>
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 mt-2"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-sm mt-6" style={{ color: "#6B6B6B" }}>
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-semibold transition-colors hover:text-white" style={{ color: "#D4A64A" }}>
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
