export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 text-slate-500 px-5 py-2 rounded-full w-fit text-sm font-medium">
            <span className="material-symbols-outlined text-rose-500">auto_awesome</span>
            NEXT-GEN DINING PLATFORM
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter text-slate-800">
            Smart Food<br />Ordering
          </h1>

          <p className="text-xl text-slate-600 max-w-md">
            Experience personalized dining tailored to your taste, health goals, and busy schedule. DineSmart learns what you love.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => alert('Order Now clicked!')}
              className="bg-white border border-slate-200 hover:border-slate-300 text-slate-900 px-8 py-4 rounded-3xl font-semibold text-lg shadow-sm transition-all"
            >
              Order Now
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-3xl font-semibold text-lg transition-all">
              Explore AI
            </button>
          </div>

          {/* Trusted by */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <img src="https://i.pravatar.cc/64?u=chef1" alt="" className="w-9 h-9 rounded-2xl ring-2 ring-white object-cover" />
              <img src="https://i.pravatar.cc/64?u=chef2" alt="" className="w-9 h-9 rounded-2xl ring-2 ring-white object-cover" />
              <img src="https://i.pravatar.cc/64?u=chef3" alt="" className="w-9 h-9 rounded-2xl ring-2 ring-white object-cover" />
            </div>
            <p className="text-slate-500 font-medium">
              Trusted by <span className="font-semibold text-slate-700">500+ Restaurants</span> worldwide
            </p>
          </div>
        </div>

        {/* Right Side – Recommendation Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="material-symbols-outlined text-rose-500">restaurant_menu</span>
                <span className="font-semibold">Recommended for You</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">AI ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Bowl */}
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-3">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3E91pzdNJgFOLo_oobV2xvd44w3ByaFn0FNGoLr_tdgLNPT8AJVvjD3I9dRza-xHHjpFFU_B4JXVrBkGoOo2MXi4wU16iYk3kqQXxYbidBpqa4whFBFxtGvSzCDkzL_TGAxYLKP3tFJIlxFjK-Sodq7jt7j9Wjh7urb05bPUPcpvfVxQ0ukqlsiN3t3veXmSF1GR5hqj9LjVmfQ2oyUcu8TRLom0ZOWFTfSEwi6Eb3WL9hPcgUjCfwi19y0Cz_gNiZzgl0vnAkO" 
                    alt="Quinoa Salmon Bowl" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded">98% MATCH</div>
                </div>
                <p className="font-semibold text-sm">Quinoa Salmon Bowl</p>
                <p className="text-xs text-slate-500">Based on your keto preference</p>
              </div>

              {/* Pizza */}
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-3">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf1I5kyrDuWmk_NrNufnvT-OHp06rYPhrhtaSpE1scHj2-JeS4-SQpJtZiduqFoX66ru_7Wg3ochD-Ijr2punNPQXxTXQ49KvjlyHZ9WnTH52h99nWx1TBu14gFUgN3V_GtmLewdmaVXWoKAfLgsynt90sk3a2E6a--lJ26ICfnamkaIAKjxcj9oCa1GXQ_KCf-AArVP7ngIAfppfdEvUVegfBVyz5uZMqBtTW0jwIkYlWbW3Wa3p-7PShbEbqxkYjSx-Gk0Kl-j9O" 
                    alt="Wild Mushroom Pizza" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded">94% MATCH</div>
                </div>
                <p className="font-semibold text-sm">Wild Mushroom Pizza</p>
                <p className="text-xs text-slate-500">Matches your Friday pattern</p>
              </div>
            </div>

            {/* Health Insight */}
            <div className="mt-8 flex gap-6 items-center bg-slate-50 rounded-2xl p-5">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="78, 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-emerald-600">78%</div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-medium text-slate-500">HEALTH INSIGHT</p>
                <p className="text-slate-700">Nutrient density improved by 12% this week.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}