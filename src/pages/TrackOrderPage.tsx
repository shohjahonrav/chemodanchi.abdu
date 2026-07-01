import { useState } from "react";
import { Package, CheckCircle, Truck, Home } from "lucide-react";

export default function TrackOrderPage() {
  const [trackingNo, setTrackingNo] = useState("");
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNo) setTracked(true);
  };

  const steps = [
    { icon: CheckCircle, label: "Order Placed", sub: "June 15, 2026 at 10:23 AM", done: true },
    { icon: Package, label: "Packed", sub: "June 16, 2026 at 2:05 PM", done: true },
    { icon: Truck, label: "Shipped", sub: "June 17, 2026 — In transit", done: true },
    { icon: Home, label: "Delivered", sub: "Estimated June 22, 2026", done: false },
  ];

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[600px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Real-Time Tracking</p>
          <h1 className="text-white font-bold text-3xl mb-3" style={{ letterSpacing: "-0.02em" }}>Track Your Order</h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>Enter your order number to see the live status of your shipment.</p>
        </div>

        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
        >
          <form onSubmit={handleTrack} className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. CA-48291"
              value={trackingNo}
              onChange={(e) => { setTrackingNo(e.target.value); setTracked(false); }}
              className="flex-1 px-4 py-4 rounded-2xl text-sm outline-none text-white placeholder:text-[#3A3A3A]"
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(212,166,74,0.15)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(212,166,74,0.15)")}
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 whitespace-nowrap"
              style={{ background: "#D4A64A", color: "#0B0B0B" }}
            >
              Track Order
            </button>
          </form>
        </div>

        {tracked && (
          <div
            className="rounded-3xl p-8"
            style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs" style={{ color: "#6B6B6B" }}>Order Number</p>
                <p className="text-white font-bold text-lg tracking-wider">{trackingNo}</p>
              </div>
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-xl"
                style={{ background: "rgba(212,166,74,0.1)", color: "#D4A64A", border: "1px solid rgba(212,166,74,0.2)" }}
              >
                In Transit
              </span>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div
                className="absolute left-[19px] top-5 bottom-5 w-px"
                style={{ background: "rgba(212,166,74,0.15)" }}
              />
              <div className="space-y-8">
                {steps.map(({ icon: Icon, label, sub, done }, i) => (
                  <div key={i} className="flex items-start gap-5 relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{
                        background: done ? "#D4A64A" : "#1A1A1A",
                        border: done ? "none" : "1px solid rgba(212,166,74,0.2)",
                      }}
                    >
                      <Icon size={16} style={{ color: done ? "#0B0B0B" : "#4A4A4A" }} />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-sm" style={{ color: done ? "#FFFFFF" : "#4A4A4A" }}>{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: done ? "#6B6B6B" : "#3A3A3A" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
