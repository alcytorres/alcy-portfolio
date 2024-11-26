import React, { useState, useEffect } from 'react'; // Add useEffect
import './Navbar.css';
import logo from '../assets/alcy-logo.png';
import { FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle body scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [isOpen]);

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
        className={`menu-button ${isOpen ? 'menu-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>

      {/* Get in Touch Button */}
      <div className="get-in-touch">
        <a href="mailto:alcy.atorres@gmail.com" className="get-in-touch-link">
          <FaEnvelope className="get-in-touch-icon" />
          Get in Touch
        </a>
      </div>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="menu-overlay">
          <ul className="menu-list">
            <li className="menu-item home-item">
              <a href="#home" className="menu-link" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <span className="menu-description home-description">Back to the home page.</span>
            </li>
            <li className="menu-item about-item">
              <a href="#about" className="menu-link" onClick={() => setIsOpen(false)}>
                About
              </a>
              <span className="menu-description about-description">A little about me and my background.</span>
            </li>
            <li className="menu-item projects-item">
              <a href="#projects" className="menu-link" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <span className="menu-description projects-description">A showcase of my work.</span>
            </li>
            <li className="menu-item contact-item">
              <a href="#contact" className="menu-link" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <span className="menu-description contact-description">Get in touch.</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
