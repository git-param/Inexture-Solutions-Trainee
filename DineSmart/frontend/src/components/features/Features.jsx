function Features() {
  const features = [
    {
      icon: "✨",
      title: "AI Recommendation",
      desc: "Personalizing menus based on user history, health preferences, and daily taste profiles.",
    },
    {
      icon: "🛵",
      title: "Smart Delivery",
      desc: "Predictive logistics and route optimization for faster arrival and fresher food quality.",
    },
    {
      icon: "📈",
      title: "Analytics Dashboard",
      desc: "Real-time insights and growth data for our restaurant partners to scale efficiently.",
    },
    {
      icon: "🛡️",
      title: "Secure Login",
      desc: "Enterprise-grade security and encryption for your data, payments, and dining preferences.",
    },
  ];

  return (
    <section className="py-28 bg-black">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-white mb-6">
            Premium Features
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Our AI-powered platform provides everything you need for a seamless dining experience.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition"
            >

              {/* Icon */}
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center text-red-500 text-xl mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;