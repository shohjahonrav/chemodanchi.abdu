import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { CreditCard, ChevronDown } from "lucide-react";
import { useStore } from "../context/StoreContext";

const inputCls = "w-full px-4 py-3 rounded-xl text-sm outline-none text-white placeholder:text-[#3A3A3A] transition-all duration-200";
const inputStyle = {
  background: "#1A1A1A",
  border: "1px solid rgba(212,166,74,0.15)",
};

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", country: "", postal: "",
    cardNumber: "", cardExpiry: "", cardCvc: "",
  });

  const shipping = cartTotal > 200 ? 0 : 19.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/order-success");
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <h1 className="text-white font-bold text-3xl mb-10" style={{ letterSpacing: "-0.02em" }}>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              {/* Billing Info */}
              <div
                className="rounded-3xl p-8"
                style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
              >
                <h2 className="text-white font-bold text-lg mb-6">Billing Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Full Name</label>
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
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Phone</label>
                    <input className={inputCls} style={inputStyle} placeholder="+1 (555) 000-0000" value={form.phone} onChange={update("phone")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Address</label>
                    <input className={inputCls} style={inputStyle} placeholder="123 Luxury Lane" value={form.address} onChange={update("address")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>City</label>
                    <input className={inputCls} style={inputStyle} placeholder="New York" value={form.city} onChange={update("city")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Country</label>
                    <div className="relative">
                      <select className={`${inputCls} appearance-none pr-10 cursor-pointer`} style={inputStyle} value={form.country} onChange={update("country")} required
                        onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}>
                        <option value="">Select country</option>
                        {["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "UAE"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6B6B6B" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Postal Code</label>
                    <input className={inputCls} style={inputStyle} placeholder="10001" value={form.postal} onChange={update("postal")} required
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div
                className="rounded-3xl p-8"
                style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
              >
                <h2 className="text-white font-bold text-lg mb-6">Payment Method</h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { id: "card", label: "Credit Card" },
                    { id: "paypal", label: "PayPal" },
                    { id: "apple", label: "Apple Pay" },
                    { id: "google", label: "Google Pay" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className="py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200"
                      style={{
                        background: paymentMethod === m.id ? "rgba(212,166,74,0.1)" : "#1A1A1A",
                        border: `1px solid ${paymentMethod === m.id ? "#D4A64A" : "rgba(212,166,74,0.15)"}`,
                        color: paymentMethod === m.id ? "#D4A64A" : "#B8B8B8",
                      }}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Card Number</label>
                      <input className={inputCls} style={inputStyle} placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={update("cardNumber")}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>Expiry</label>
                        <input className={inputCls} style={inputStyle} placeholder="MM / YY" value={form.cardExpiry} onChange={update("cardExpiry")}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B6B6B" }}>CVC</label>
                        <input className={inputCls} style={inputStyle} placeholder="123" value={form.cardCvc} onChange={update("cardCvc")}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")} />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod !== "card" && (
                  <div
                    className="py-10 rounded-2xl text-center"
                    style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.1)" }}
                  >
                    <p style={{ color: "#6B6B6B" }} className="text-sm">
                      You will be redirected to {paymentMethod === "paypal" ? "PayPal" : paymentMethod === "apple" ? "Apple Pay" : "Google Pay"} to complete payment.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div
                className="rounded-3xl p-6 sticky top-28"
                style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
              >
                <h2 className="text-white font-bold text-lg mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(212,166,74,0.1)" }}>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">{item.name}</p>
                        <p className="text-xs" style={{ color: "#4A4A4A" }}>Qty: {item.quantity}</p>
                      </div>
                      <p className="text-white text-sm font-semibold flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(212,166,74,0.1)" }}>
                  {[
                    { label: "Subtotal", value: `$${cartTotal.toFixed(2)}` },
                    { label: "Shipping", value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` },
                    { label: "Tax (8%)", value: `$${tax.toFixed(2)}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span style={{ color: "#B8B8B8" }}>{label}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-baseline mb-8">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-white font-bold text-2xl">${total.toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "#D4A64A", color: "#0B0B0B" }}
                >
                  <CreditCard size={16} /> Place Order
                </button>

                <p className="text-center text-xs mt-4" style={{ color: "#4A4A4A" }}>
                  🔒 Your payment is secured with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
