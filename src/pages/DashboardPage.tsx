import { useState } from "react";
import { Link } from "react-router";
import { LayoutDashboard, Package, Heart, MapPin, Settings, LogOut, ShoppingBag, DollarSign, Star, Clock } from "lucide-react";
import { useStore } from "../context/StoreContext";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Package, label: "Orders", id: "orders" },
  { icon: Heart, label: "Wishlist", id: "wishlist" },
  { icon: MapPin, label: "Addresses", id: "addresses" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const mockOrders = [
  { id: "CA-48291", date: "Jun 15, 2026", status: "Delivered", total: 489, items: 1 },
  { id: "CA-39847", date: "May 28, 2026", status: "Shipped", total: 718, items: 2 },
  { id: "CA-21045", date: "Apr 12, 2026", status: "Delivered", total: 329, items: 1 },
];

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const { wishlist, cartTotal } = useStore();

  const statusColor = (s: string) =>
    s === "Delivered" ? "#22c55e" : s === "Shipped" ? "#D4A64A" : "#B8B8B8";

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-60 flex-shrink-0">
            <div
              className="rounded-3xl p-6 sticky top-28"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "rgba(212,166,74,0.15)", color: "#D4A64A" }}
                >
                  JD
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">John Doe</p>
                  <p className="text-xs" style={{ color: "#4A4A4A" }}>Premium Member</p>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map(({ icon: Icon, label, id }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: activeSection === id ? "rgba(212,166,74,0.1)" : "transparent",
                      color: activeSection === id ? "#D4A64A" : "#B8B8B8",
                      border: activeSection === id ? "1px solid rgba(212,166,74,0.2)" : "1px solid transparent",
                    }}
                  >
                    <Icon size={16} /> {label}
                  </button>
                ))}
                <Link
                  to="/"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-red-500/10"
                  style={{ color: "#B8B8B8" }}
                >
                  <LogOut size={16} /> Logout
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {activeSection === "dashboard" && (
              <div>
                <h1 className="text-white font-bold text-2xl mb-8" style={{ letterSpacing: "-0.02em" }}>Dashboard</h1>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                  {[
                    { icon: Package, label: "Total Orders", value: "3", sub: "All time" },
                    { icon: DollarSign, label: "Total Spending", value: "$1,536", sub: "All time" },
                    { icon: Heart, label: "Saved Products", value: String(wishlist.length), sub: "In wishlist" },
                    { icon: Star, label: "Loyalty Points", value: "1,536", sub: "Available" },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-5"
                      style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: "rgba(212,166,74,0.1)" }}
                      >
                        <Icon size={18} style={{ color: "#D4A64A" }} />
                      </div>
                      <p className="text-white font-bold text-2xl mb-0.5">{value}</p>
                      <p className="text-xs font-semibold text-white mb-0.5">{label}</p>
                      <p className="text-xs" style={{ color: "#4A4A4A" }}>{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="rounded-3xl p-6" style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-bold text-lg">Recent Orders</h2>
                    <button onClick={() => setActiveSection("orders")} className="text-xs" style={{ color: "#D4A64A" }}>View All</button>
                  </div>
                  <div className="space-y-3">
                    {mockOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 rounded-xl"
                        style={{ background: "#1A1A1A" }}
                      >
                        <div className="flex items-center gap-4">
                          <ShoppingBag size={16} style={{ color: "#D4A64A" }} />
                          <div>
                            <p className="text-white font-semibold text-sm">{order.id}</p>
                            <p className="text-xs" style={{ color: "#4A4A4A" }}>{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-sm">${order.total}</p>
                          <p className="text-xs font-semibold" style={{ color: statusColor(order.status) }}>{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "orders" && (
              <div>
                <h1 className="text-white font-bold text-2xl mb-8" style={{ letterSpacing: "-0.02em" }}>My Orders</h1>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl p-6"
                      style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-bold">{order.id}</p>
                          <p className="text-xs" style={{ color: "#4A4A4A" }}>{order.date}</p>
                        </div>
                        <span
                          className="text-xs font-semibold px-3 py-1.5 rounded-xl"
                          style={{ background: `${statusColor(order.status)}15`, color: statusColor(order.status) }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm" style={{ color: "#6B6B6B" }}>{order.items} item{order.items > 1 ? "s" : ""}</p>
                        <p className="text-white font-bold">${order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection !== "dashboard" && activeSection !== "orders" && (
              <div className="text-center py-24">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,166,74,0.08)" }}>
                  <Clock size={28} style={{ color: "#D4A64A" }} />
                </div>
                <h2 className="text-white font-semibold text-xl mb-2">Coming Soon</h2>
                <p className="text-sm" style={{ color: "#6B6B6B" }}>This section is under construction.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
