function Hero() 
{
  return (
    <section className="pt-28 pb-24 bg-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">

          {/* Tag */}
          <div className="w-fit px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 text-red-500 text-sm font-semibold">
            ✨ NEXT-GEN DINING PLATFORM
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight text-white">
            Smart Food <br />
            Ordering <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl">
            Experience personalized dining tailored to your taste,
            health goals, and busy schedule. DineSmart learns
            what you love.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-600/30 transition flex items-center gap-2">
              Order Now →
            </button>

            <button className="border border-red-600/40 text-white px-8 py-4 rounded-xl hover:bg-red-600/10 transition">
              Explore AI
            </button>

          </div>

          {/* Trusted */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">

            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border border-black"
                src="https://randomuser.me/api/portraits/men/32.jpg"/>
              <img className="w-10 h-10 rounded-full border border-black"
                src="https://randomuser.me/api/portraits/women/44.jpg"/>
              <img className="w-10 h-10 rounded-full border border-black"
                src="https://randomuser.me/api/portraits/men/76.jpg"/>
            </div>

            <p className="text-gray-400 text-sm">
              Trusted by <span className="text-red-500 font-bold">500+</span> Restaurants worldwide
            </p>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-xl">

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-semibold">
              📊 Recommended for You
            </h3>

            <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
              AI ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">

            {/* Card 1 */}
            <div className="bg-black rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                className="h-32 w-full object-cover"
              />

              <div className="p-3">
                <p className="text-white text-sm font-semibold">
                  Quinoa Salmon Bowl
                </p>

                <p className="text-gray-500 text-xs">
                  Based on your keto preference
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
                className="h-32 w-full object-cover"
              />

              <div className="p-3">
                <p className="text-white text-sm font-semibold">
                  Wild Mushroom Pizza
                </p>

                <p className="text-gray-500 text-xs">
                  Matches your Friday pattern
                </p>
              </div>
            </div>

          </div>

          {/* Health Insight */}
          <div className="mt-6 bg-white/5 rounded-xl p-4 flex items-center gap-4">

            <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center text-white text-sm">
              75%
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Health Insight
              </p>

              <p className="text-sm text-gray-300">
                Nutrient density improved by 12% this week.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;