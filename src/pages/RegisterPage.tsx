import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const inputCls = "w-full px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-[#3A3A3A] transition-all duration-200";
const inputStyle = { background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" };

export default function RegisterPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="min-h-[calc(100vh-88px)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg,#D4A64A,#E0C27A)" }}>
              <span className="text-black font-bold">CA</span>
            </div>
            <h1 className="text-white font-bold text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>Create Account</h1>
            <p className="text-sm" style={{ color: "#6B6B6B" }}>Join the Chemadonchi Abdu family</p>
          </div>

          <div className="rounded-3xl p-8" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { field: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
                { field: "email", label: "Email", placeholder: "john@example.com", type: "email" },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>{label}</label>
                  <input
                    className={inputCls} style={inputStyle} type={type} placeholder={placeholder}
                    value={form[field as keyof typeof form]} onChange={update(field)} required
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                  />
                </div>
              ))}

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Password</label>
                <div className="relative">
                  <input
                    className={`${inputCls} pr-12`} style={inputStyle} type={showPwd ? "text" : "password"}
                    placeholder="Min. 8 characters" value={form.password} onChange={update("password")} required
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#6B6B6B" }} onClick={() => setShowPwd((v) => !v)}>
                    {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Confirm Password</label>
                <input
                  className={inputCls} style={inputStyle} type="password" placeholder="Re-enter password"
                  value={form.confirm} onChange={update("confirm")} required
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 mt-2"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm mt-6" style={{ color: "#6B6B6B" }}>
              Already have an account?{" "}
              <Link to="/login" className="font-semibold transition-colors hover:text-white" style={{ color: "#D4A64A" }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
