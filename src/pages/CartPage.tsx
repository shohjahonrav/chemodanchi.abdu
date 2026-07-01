import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQty, cartTotal } = useStore();
  const shipping = cartTotal > 200 ? 0 : 19.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-24 text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(212,166,74,0.08)", border: "1px solid rgba(212,166,74,0.2)" }}
          >
            <ShoppingBag size={36} style={{ color: "#D4A64A" }} />
          </div>
          <h2 className="text-white font-bold text-2xl mb-3">Your cart is empty</h2>
          <p className="mb-8 text-sm" style={{ color: "#6B6B6B" }}>Discover our premium collection and find your perfect travel companion.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm"
            style={{ background: "#D4A64A", color: "#0B0B0B" }}
          >
            Explore Collection <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <h1 className="text-white font-bold text-3xl mb-10" style={{ letterSpacing: "-0.02em" }}>Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Table header */}
            <div
              className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase"
              style={{ background: "#141414", color: "#6B6B6B" }}
            >
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="rounded-2xl p-5"
                style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.1)" }}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Product */}
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 rounded-xl object-cover flex-shrink-0"
                        style={{ border: "1px solid rgba(212,166,74,0.15)" }}
                      />
                    </Link>
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-white font-semibold text-sm hover:text-[#D4A64A] transition-colors">{item.name}</h3>
                      </Link>
                      <p className="text-xs mt-0.5" style={{ color: "#6B6B6B" }}>
                        Size: {item.selectedSize}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-xs mt-2 transition-colors hover:text-red-400"
                        style={{ color: "#4A4A4A" }}
                      >
                        <Trash2 size={11} /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-4 md:col-span-2 text-center">
                    <p className="text-white font-semibold">${item.price}</p>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-4 md:col-span-2 flex justify-center">
                    <div
                      className="flex items-center gap-2 rounded-xl px-3 py-1.5"
                      style={{ background: "#1A1A1A", border: "1px solid rgba(212,166,74,0.15)" }}
                    >
                      <button onClick={() => updateCartQty(item.id, item.quantity - 1)} style={{ color: "#B8B8B8" }}>
                        <Minus size={12} />
                      </button>
                      <span className="text-white font-semibold text-sm w-5 text-center">{item.quantity}</span>
                      <button onClick={() => updateCartQty(item.id, item.quantity + 1)} style={{ color: "#B8B8B8" }}>
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="col-span-4 md:col-span-2 text-right">
                    <p className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between pt-2">
              <Link
                to="/shop"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "#D4A64A" }}
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div
              className="rounded-3xl p-6 sticky top-28"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
            >
              <h2 className="text-white font-bold text-lg mb-6">Order Summary</h2>

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

              {shipping > 0 && (
                <p className="text-xs mb-6 p-3 rounded-xl text-center" style={{ background: "rgba(212,166,74,0.05)", border: "1px solid rgba(212,166,74,0.1)", color: "#D4A64A" }}>
                  Add ${(200 - cartTotal).toFixed(0)} more for free shipping
                </p>
              )}

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "#D4A64A", color: "#0B0B0B" }}
              >
                Proceed to Checkout <ArrowRight size={15} />
              </Link>

              {/* Payment icons */}
              <div className="flex justify-center gap-2 mt-5">
                {["Visa", "MC", "PayPal", "Apple Pay"].map((m) => (
                  <span
                    key={m}
                    className="text-[10px] font-medium px-2 py-1 rounded"
                    style={{ background: "#1A1A1A", color: "#4A4A4A", border: "1px solid rgba(212,166,74,0.08)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
