import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{ background: "#0B0B0B" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&auto=format)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0B0B0B 30%, transparent 100%)" }} />

      <div className="relative z-10">
        <p
          className="font-bold leading-none mb-4"
          style={{ fontSize: "clamp(100px,20vw,180px)", color: "rgba(212,166,74,0.08)", letterSpacing: "-0.04em" }}
        >
          404
        </p>
        <div style={{ marginTop: "-40px" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#D4A64A" }}>Page Not Found</p>
          <h1 className="text-white font-bold text-3xl mb-4" style={{ letterSpacing: "-0.02em" }}>
            Lost on the Journey?
          </h1>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "#6B6B6B" }}>
            The page you are looking for may have been moved, deleted, or never existed. Let us take you back to familiar ground.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "#D4A64A", color: "#0B0B0B" }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
