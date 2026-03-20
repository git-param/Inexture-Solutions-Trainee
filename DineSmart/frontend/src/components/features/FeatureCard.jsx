function FeatureCard({ feature }) {
  return (
    <div className="bg-card-dark border border-white/5 rounded-xl p-8 hover:border-primary transition">

      <div className="text-3xl mb-4">
        {feature.icon}
      </div>

      <h3 className="text-xl font-bold text-white">
        {feature.title}
      </h3>

      <p className="text-sm text-slate-400 mt-2">
        {feature.description}
      </p>

    </div>
  );
}

export default FeatureCard;