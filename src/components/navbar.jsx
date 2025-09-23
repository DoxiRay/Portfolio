import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../styles/navbar.css"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Experiences", href: "#experiences", icon: <FaBriefcase /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md bg-white md:bg-white/70 md:backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-pink-600">MyPortfolio</div>

        {/* Hamburger pour mobile */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-2 text-gray-800 hover:text-pink-600 transition"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col pt-20 px-4`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-3 text-gray-800 hover:text-pink-600 transition text-lg font-medium"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
