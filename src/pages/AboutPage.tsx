export default function AboutPage() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "10K+", label: "Customers" },
    { value: "50+", label: "Products" },
    { value: "30+", label: "Countries" },
  ];

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      {/* Hero */}
      <div className="relative overflow-hidden py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0B0B0B 40%, transparent 100%)" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#D4A64A" }}>Our Story</p>
          <h1 className="text-white font-bold mb-4" style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.03em", maxWidth: "500px" }}>
            Crafting Journeys Since 2020
          </h1>
        </div>
      </div>

      {/* Split Layout */}
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#D4A64A" }}>Who We Are</p>
            <h2 className="text-white font-bold mb-6" style={{ fontSize: "clamp(24px,3.5vw,36px)", letterSpacing: "-0.02em" }}>
              Born from a Passion for Perfect Travel
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#B8B8B8" }}>
              Chemadonchi Abdu was founded with a single mission: to create luggage that meets the exacting standards of the world&apos;s most discerning travelers. Every bag we make is a testament to our belief that the journey deserves to be as beautiful as the destination.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#6B6B6B" }}>
              From our atelier, we source only the finest materials — aerospace-grade polycarbonate, full-grain Italian leather, Swiss-made hardware — and combine them with expert craftsmanship that is built to last generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl"
                  style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
                >
                  <p className="font-bold text-3xl mb-1" style={{ color: "#D4A64A" }}>{value}</p>
                  <p className="text-sm" style={{ color: "#B8B8B8" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(212,166,74,0.15)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=900&fit=crop&auto=format"
              alt="Travel"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Our Mission",
              text: "To empower travelers with premium luggage that combines exceptional craftsmanship, innovative design, and lasting durability — so every journey begins with confidence.",
            },
            {
              title: "Our Vision",
              text: "To be the world's most respected luxury travel brand, redefining what it means to travel in style by setting new benchmarks for quality and design.",
            },
            {
              title: "Our Values",
              text: "Craftsmanship, integrity, sustainability, and a relentless pursuit of perfection. We believe luxury should never come at the expense of quality or conscience.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="p-8 rounded-3xl"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
            >
              <div className="w-2 h-8 rounded-full mb-5" style={{ background: "#D4A64A" }} />
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>The People Behind the Brand</p>
          <h2 className="text-white font-bold text-3xl" style={{ letterSpacing: "-0.02em" }}>Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Abdu Al-Rashid", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" },
            { name: "Elena Kovács", role: "Head of Design", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&auto=format" },
            { name: "Marco Ferretti", role: "Master Craftsman", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format" },
            { name: "Sofia Andersen", role: "Brand Director", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format" },
          ].map(({ name, role, img }) => (
            <div
              key={name}
              className="rounded-2xl overflow-hidden text-center group"
              style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.12)" }}
            >
              <div className="aspect-square overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-white font-semibold text-sm">{name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#D4A64A" }}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
