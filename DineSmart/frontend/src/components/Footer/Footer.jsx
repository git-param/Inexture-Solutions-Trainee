function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-lg text-white">
                🍴
              </div>

              <h2 className="text-xl font-bold text-white">
                Dine<span className="text-red-500">Smart</span>
              </h2>
            </div>

            <p className="text-gray-400 max-w-sm leading-relaxed">
              Transforming the dining experience with artificial intelligence.
              Better food, faster delivery, smarter choices.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">AI Engine</li>
              <li className="hover:text-white cursor-pointer">Restaurant Portal</li>
              <li className="hover:text-white cursor-pointer">Mobile App</li>
              <li className="hover:text-white cursor-pointer">API Access</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Sustainability</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">

          <p>© 2024 DineSmart AI Technologies. All rights reserved.</p>

          <div className="flex gap-6">
            <span>📍 San Francisco, CA</span>
            <span>✉ hello@dinesmart.ai</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;