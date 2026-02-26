export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary/20 to-accent-orange/10 border border-primary/20 rounded-xl overflow-hidden p-12 text-center flex flex-col items-center gap-8">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[12rem]">restaurant_menu</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Ready to experience the<br />future of food?
          </h2>
          <p className="text-slate-300 max-w-xl text-lg">
            Join thousands of users who are already saving time and eating better with DineSmart's intelligent platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => alert('Get Started Free clicked!')}
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all"
            >
              Get Started Free
            </button>
            <button
              onClick={() => alert('Contact Sales clicked!')}
              className="bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}