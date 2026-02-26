export default function Footer() {
  return (
    <footer className="bg-card-dark/50 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Logo + Desc */}
          <div className="col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">restaurant</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">Dine<span className="text-primary">Smart</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Transforming the dining experience with artificial intelligence. Better food, faster delivery, smarter choices.
            </p>
            {/* Social Icons (kept original images) */}
            <div className="flex items-center gap-4">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCvtoJb-5b6LhZKIuKqXZmOWLh6KzEJx_eQEY8sySiYDxDo5rJib8aYcmzZhkvawFjhomIBNc4b8YLQW7hqE96WspoLvMvS6cGHP4E6IkvrW1iMG5eFV5W-K8xz61QNTbLx5Fpq5MRJhsUakvXbbQO7J8kYR_M7wZhVIGFtWB04eQgBQOTdXIrj_dSepgHd90ggMqc4ERgxoDrpQqWaJZiYCtHToCc969V5CmIUnZx2NofgkX4MuSV5A-yfqC53HwxQBrGiialJGB7t",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtTSr7w9sZBjUrUPYCZ8ESpQS0qnqsoihYksmI5NxzZTtfyP7ktiA6S4ApqIQvXMDqMjWazmOrrTDQLdUOO20xKVnw8Ig97QQfvk49yrj0lcxTM3IeEF5KC0J0xiU5UOjzqvPHD-TagllSss5zLsx0md5Mf46oX7Z_xf4FucOOurD6VuJeTrexXzu9j4zGhqbvIcpIsKDecLre-KvALA4b-BpdNBCnR1PgKt4GaOD74uw3YDvGhpiQ6A8_5bvVWsQUSr8Bp3goaH3y",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_o0Qhk8GC87P4Uy2IuaE8CTWriukIQl8_9cpzxbjjok3yVrfmxuL7YEiABvy2ROysmJ10iNCRm7ieV7eJF6zVXwZgVR77ydFzOAfW50TEwOWlXcePsLHC7ZB9RCRqGaayjk8C3h_8ej9dN65Ll0NNVrNm1iK_8Vyphxz9KPNekN24omiVYKMzhVNBHI918GlNibdvgbBiy3DX6_W2hS9HdpRUrYdSon06CvnYx96ovQC6AfbzemIKGsfh71sXIFiQc8xqjXRFrat"
              ].map((src, i) => (
                <a key={i} href="#" className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <img src={src} alt="Social" className="w-4 h-4 grayscale" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">AI Engine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Restaurant Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2024 DineSmart AI Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">location_on</span>
              San Francisco, CA
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">mail</span>
              hello@dinesmart.ai
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}