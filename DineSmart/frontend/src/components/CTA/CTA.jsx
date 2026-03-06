function CTA() {
  return (
    <section className="py-28 bg-black">

      <div className="max-w-7xl mx-auto px-8">

        <div className="relative overflow-hidden rounded-3xl border border-red-600/30 p-16 text-center
        bg-gradient-to-r from-red-900/60 via-red-800/40 to-orange-900/60">

          {/* Background Icon */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10 text-[180px]">
            🍴
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">

            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ready to experience the <br />
              future of food?
            </h2>

            <p className="text-gray-300 text-lg mb-10">
              Join thousands of users who are already saving time and eating
              better with DineSmart's intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-600/40 transition">
                Get Started Free
              </button>

              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur">
                Contact Sales
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;