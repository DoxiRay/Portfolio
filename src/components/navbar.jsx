import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function navbar() {
  return (
    <nav className="p-4 shadow-md">
      <ul className="flex justify-end space-x-10 w-full pr-20">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-link">
            Project
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar