// NEW FILE: src/components/Intro.js

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Intro() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Profile Picture */}
        <div className="w-64 h-64 rounded-full overflow-hidden"> {/* NEW: Increased size */}
          <img
            src={require('../assets/profile-picture.jpg')}
            alt="Profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      {/* Introductory Text */}
      <div className="max-w-xl px-4 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-white">Hi, my name is Alcy.</h1> {/* NEW: Intro text */}
        <p className="text-white text-2xl mb-6">
          I'm a creative developer from the Greater Boston area.
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/in/alcytorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-5xl hover:text-blue-400 transition duration-300" // NEW: Increased icon size
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alcytorres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-5xl hover:text-blue-400 transition duration-300" // NEW: Increased icon size
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
