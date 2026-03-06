import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() 
{
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-md text-white font-bold">
            🍽
          </div>
          <span className="text-xl font-bold text-white">
            Dine<span className="text-red-500">Smart</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <a className="hover:text-red-500 transition">Features</a>
          <Link to="/dashboard" className="hover:text-red-500 transition">AI</Link>
          <a className="hover:text-red-500 transition">Contact</a>
          <Link to="/login" className="hover:text-red-500 transition">Login</Link>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-300">
            <Link to="/">Home</Link>
            <a href="#" className="hover:text-red-500">Features</a>
            <a href="#" className="hover:text-red-500">AI</a>
            <a href="#" className="hover:text-red-500">Contact</a>
            <Link to="/login">Login</Link>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;