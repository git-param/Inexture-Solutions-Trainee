export default function Features() {
  const features = [
    { icon: "auto_fix_high", title: "AI Recommendation", desc: "Personalizing menus based on user history, health preferences, and daily taste profiles." },
    { icon: "electric_moped", title: "Smart Delivery", desc: "Predictive logistics and route optimization for faster arrival and fresher food quality." },
    { icon: "monitoring", title: "Analytics Dashboard", desc: "Real-time insights and growth data for our restaurant partners to scale efficiently." },
    { icon: "security", title: "Secure Login", desc: "Enterprise-grade security and encryption for your data, payments, and dining preferences." },
  ]

  return (
    <section className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-rose-200 transition-all group flex flex-col gap-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white">Premium Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Our AI-powered platform provides everything you need for a seamless dining experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-card-dark border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all group flex flex-col gap-4">
              <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}