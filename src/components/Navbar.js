import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      {/* Hamburger Menu Icon */}
      <div
        className="w-8 h-8 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 rounded shadow-lg">
          <ul className="text-white">
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
