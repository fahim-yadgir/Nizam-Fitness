import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-400">Nizam</span>{" "}
            <span className="text-white">Fitness</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
            <li><a href="#online-training" className="hover:text-yellow-400">Online Training</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>

          {/* Register Button */}
          <a
            href="#contact"
            className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Register
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

        </div>
      </nav>

      {/* Background Blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-zinc-900/90 backdrop-blur-xl border-l border-yellow-400/20 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-yellow-400/20">
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-400">Nizam</span>{" "}
            <span className="text-white">Fitness</span>
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col p-8 gap-6 text-lg">
          <li>
  <a
    href="#home"
    onClick={() => setMenuOpen(false)}
    className="text-white hover:text-yellow-400 transition duration-300"
  >
    Home
  </a>
</li>

<li>
  <a
    href="#about"
    onClick={() => setMenuOpen(false)}
    className="text-white hover:text-yellow-400 transition duration-300"
  >
    About
  </a>
</li>

<li>
  <a
    href="#programs"
    onClick={() => setMenuOpen(false)}
    className="text-white hover:text-yellow-400 transition duration-300"
  >
    Programs
  </a>
</li>

<li>
  <a
    href="#online-training"
    onClick={() => setMenuOpen(false)}
    className="text-white hover:text-yellow-400 transition duration-300"
  >
    Online Training
  </a>
</li>

<li>
  <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="text-white hover:text-yellow-400 transition duration-300"
  >
    Contact
  </a>
</li>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-yellow-400 text-black py-3 rounded-lg text-center font-bold hover:bg-yellow-300 transition"
          >
            Register
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;