import React, { useState } from 'react';
import './Navbar.css'; // NEW: Import the CSS file
import logo from '../assets/alcy-logo.png'; // NEW: Import the logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* NEW: Logo */}
      <div className="logo-container"> {/* NEW */}
        <img src={logo} alt="Alcy Logo" className="logo" /> {/* NEW */}
      </div>

      {/* Menu Button */}
      {!isOpen && (
        <div
          className="menu-button"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </div>
      )}

      {/* Navigation Menu */}
      {isOpen && (
        <div className="menu-overlay">
          {/* Close Button */}
          <div
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#home" className="menu-link" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <span className="menu-description">Back to the home page.</span>
            </li>
            <li className="menu-item">
              <a href="#about" className="menu-link" onClick={() => setIsOpen(false)}>
                About
              </a>
              <span className="menu-description">A little about me and my background.</span>
            </li>
            <li className="menu-item">
              <a href="#projects" className="menu-link" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <span className="menu-description">A showcase of my work.</span>
            </li>
            <li className="menu-item">
              <a href="#contact" className="menu-link" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <span className="menu-description">Get in touch.</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
