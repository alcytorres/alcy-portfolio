// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <br></br>
        <br></br>
        <p>Alcy Torres | All Rights Reserved</p>
        <br></br>
      </div>
    </footer>
  );
}

export default Footer;
