import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react";

const inputCls = "w-full px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-[#3A3A3A] transition-all duration-200";
const inputStyle = { background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Get in Touch</p>
          <h1 className="text-white font-bold" style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.02em" }}>
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#B8B8B8" }}>
              Our dedicated team is ready to assist you with anything — from product questions to bespoke orders. Reach out and we will respond within 24 hours.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Mail, label: "Email", value: "hello@chemadonchiabdu.com" },
                { icon: Phone, label: "Phone", value: "+1 (800) 555-ABDU" },
                { icon: MapPin, label: "Address", value: "123 Luxury Lane, New York, NY 10001" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,166,74,0.1)", border: "1px solid rgba(212,166,74,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#D4A64A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#6B6B6B" }}>{label}</p>
                    <p className="text-sm text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#6B6B6B" }}>Follow Us</p>
              <div className="flex gap-3">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(212,166,74,0.15)",
                      color: "#B8B8B8",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#D4A64A";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,166,74,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,166,74,0.15)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-3xl p-8" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}>
            {sent ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,166,74,0.1)", border: "1px solid rgba(212,166,74,0.3)" }}
                >
                  <Send size={24} style={{ color: "#D4A64A" }} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "#6B6B6B" }}>
                  Thank you for reaching out. We will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: "#D4A64A" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-white font-bold text-lg mb-6">Send a Message</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Name</label>
                    <input className={inputCls} style={inputStyle} placeholder="John Doe" value={form.name} onChange={update("name")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Email</label>
                    <input className={inputCls} style={inputStyle} type="email" placeholder="john@example.com" value={form.email} onChange={update("email")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Subject</label>
                  <input className={inputCls} style={inputStyle} placeholder="How can we help?" value={form.subject} onChange={update("subject")} required
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Message</label>
                  <textarea
                    className={`${inputCls} resize-none`}
                    style={{ ...inputStyle, minHeight: "140px" }}
                    placeholder="Tell us more…"
                    value={form.message}
                    onChange={update("message")}
                    required
                    rows={5}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 mt-2"
                  style={{ background: "#D4A64A", color: "#0B0B0B" }}
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
