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
import "../styles/navbar.css";

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
                className="flex items-center gap-2 px-5 py-2 rounded-full 
                   bg-pink-500/20 shadow-md 
                   text-pink-600 font-medium hover:bg-pink-500/40 hover:scale-105 hover:shadow-lg
                   transition-all duration-300"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col pt-4 px-4 z-50`}
        >
          {/* Close button à l'intérieur */}
          <button
            className="self-end text-2xl text-purple-600 mb-6 hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-full 
                 bg-pink-500/20 shadow-md 
                 text-pink-600 font-medium mb-3 hover:bg-pink-500/40 hover:scale-105 hover:shadow-lg
                 transition-all duration-300 text-lg"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
