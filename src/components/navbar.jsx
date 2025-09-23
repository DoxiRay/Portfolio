import React from 'react'
import "../styles/navbar.css"

function navbar() {
  return (
    <nav className="p-4 shadow-md fixed w-full top-0 backdrop-blur-md z-50">
      <ul className="flex justify-end space-x-10 w-full pr-20 ">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#experiences" className="nav-link">
            Experiences
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar