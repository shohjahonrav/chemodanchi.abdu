import { Link } from "react-router";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = `CA-${Math.floor(Math.random() * 90000 + 10000)}`;

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[600px] mx-auto px-6 py-24 text-center">
        {/* Icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "rgba(212,166,74,0.1)", border: "2px solid rgba(212,166,74,0.3)" }}
        >
          <CheckCircle size={42} style={{ color: "#D4A64A" }} />
        </div>

        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Order Confirmed</p>
        <h1 className="text-white font-bold text-4xl mb-4" style={{ letterSpacing: "-0.03em" }}>Thank You!</h1>
        <p className="mb-8 text-base" style={{ color: "#B8B8B8" }}>
          Your order has been placed successfully. You will receive a confirmation email shortly.
        </p>

        {/* Order Number */}
        <div
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-10"
          style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.2)" }}
        >
          <Package size={18} style={{ color: "#D4A64A" }} />
          <div className="text-left">
            <p className="text-xs" style={{ color: "#6B6B6B" }}>Order Number</p>
            <p className="text-white font-bold text-lg tracking-wider">{orderNumber}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-10 p-6 rounded-3xl" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}>
          <h3 className="text-white font-semibold mb-6">What Happens Next</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "Order Processing", desc: "We're preparing your order", done: true },
              { step: "2", title: "Quality Check", desc: "Every item carefully inspected", done: false },
              { step: "3", title: "Dispatched", desc: "Shipped within 24–48 hours", done: false },
              { step: "4", title: "Delivered", desc: "Estimated 5–7 business days", done: false },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center gap-4 text-left">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: s.done ? "#D4A64A" : "rgba(212,166,74,0.1)",
                    color: s.done ? "#0B0B0B" : "#D4A64A",
                    border: s.done ? "none" : "1px solid rgba(212,166,74,0.2)",
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{s.title}</p>
                  <p className="text-xs" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/track-order"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "#D4A64A", color: "#0B0B0B" }}
          >
            Track Order <ArrowRight size={15} />
          </Link>
          <Link
            to="/shop"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
