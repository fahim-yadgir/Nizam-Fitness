import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          Nizam <span className="text-white">Fitness</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
          <li><a href="#webinar" className="hover:text-yellow-400">Webinar</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Register
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1b1b1b]">
          <ul className="flex flex-col text-center py-6 space-y-6">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
            <li><a href="#webinar" onClick={() => setMenuOpen(false)}>Webinar</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;