import React, { useState } from 'react';
import './Navbar.css'; // NEW: Import the CSS file
import logo from '../assets/alcy-logo.png'; // NEW: Import the logo

// NEW: Import the email icon
import { FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <a href="#home">
          <img src={logo} alt="Alcy Logo" className="logo" />
        </a>
      </div>

      {/* Vertical Line */}
      <div className="vertical-line"></div>

      {/* Menu Button */}
      <div
        className={`menu-button ${isOpen ? 'menu-open' : ''}`} // NEW: Added conditional class
        onClick={() => setIsOpen(!isOpen)} // Toggle the menu
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>

       {/* NEW: Get in Touch Button */}
       <div className="get-in-touch">
        <a href="mailto:alcy.atorres@gmail.com" className="get-in-touch-link">
          <FaEnvelope className="get-in-touch-icon" /> {/* NEW: Email icon */}
          Get in Touch
        </a>
      </div>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="menu-overlay">
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
