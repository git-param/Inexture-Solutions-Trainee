import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍴</span>
          <span className="text-2xl font-bold tracking-tight text-white">DineSmart</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <a href="#" className="hover:text-rose-300 transition-colors">Home</a>
          <a href="#" className="hover:text-rose-300 transition-colors">Features</a>
          <a href="#" className="hover:text-rose-300 transition-colors">AI</a>
          <a href="#" className="hover:text-rose-300 transition-colors">Contact</a>
          <a href="#" className="hover:text-rose-300 transition-colors">Login</a>
        </div>

        <button
          onClick={() => alert('Get Started clicked!')}
          className="hidden md:block bg-white text-slate-900 px-6 py-2.5 rounded-2xl font-semibold text-sm hover:bg-slate-100 transition-all"
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-3xl">
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 py-6 text-white border-t border-white/10">
          <div className="flex flex-col items-center gap-6 text-lg">
            <a href="#" className="hover:text-rose-300">Home</a>
            <a href="#" className="hover:text-rose-300">Features</a>
            <a href="#" className="hover:text-rose-300">AI</a>
            <a href="#" className="hover:text-rose-300">Contact</a>
            <a href="#" className="hover:text-rose-300">Login</a>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-semibold">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}