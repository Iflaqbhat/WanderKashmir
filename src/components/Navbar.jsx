import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: "Home", to: "/" },
  { name: "Destinations", to: "/destinations" },
  { name: "Activities", to: "/activities" },
  { name: "Gallery", to: "/gallery" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center">
      <div className="w-full max-w-6xl mt-4 mx-2 flex items-center justify-between px-6 py-2 rounded-full bg-gradient-to-r from-teal-900/80 to-blue-900/80 backdrop-blur-xl shadow-2xl border border-cyan-400 border-b-4 border-b-gradient-to-r from-cyan-400 to-blue-400">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="WanderKashmir Logo" className="h-10 w-10 drop-shadow-lg transition-transform duration-300 hover:scale-110" />
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white tracking-tight drop-shadow">WanderKashmir</span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 md:gap-8 text-base md:text-lg font-semibold text-white">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`relative px-2 py-1 transition font-semibold after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${location.pathname === item.to ? 'text-cyan-300 after:scale-x-100' : 'text-white hover:text-cyan-300'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex flex-col items-end md:hidden">
            <div className="w-64 h-full bg-gradient-to-br from-teal-900 to-blue-900 shadow-2xl p-8 flex flex-col gap-6 animate-slideInRight">
              <button className="self-end text-white text-2xl mb-4" onClick={() => setMenuOpen(false)}><FaTimes /></button>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-lg font-bold py-2 px-4 rounded transition ${location.pathname === item.to ? 'bg-cyan-700 text-white' : 'text-white hover:bg-cyan-800 hover:text-cyan-200'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
