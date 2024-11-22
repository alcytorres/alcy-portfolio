import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Intro.css'; // Import intro.css for styling

function Intro() {
  return (
    <section id="home" className="intro-section min-h-screen flex flex-col md:flex-row justify-center items-center relative">
      {/* Profile Picture */}
      <div className="profile-picture-container">
        <div className="w-64 h-64 rounded-full overflow-hidden">
          <img
            src={require('../assets/profile-picture.jpg')}
            alt="Profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* NEW: Scroll Indicator */}
      <div className="scroll-indicator-container"> {/* Ensure it's positioned in the center below */}
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>

      {/* Introductory Text */}
      <div className="max-w-xl px-4 text-center md:text-left">
        <h1 className="text-[6rem] mb-4 text-custom-text leading-tight">
          Hi, my<br />
          name is <span className="font-bold">Alcy</span>.
        </h1>
        <p className="text-custom-text text-[3rem] mb-6 leading-relaxed">
          I'm a <span className="font-bold">creative developer</span> from the Greater Boston area.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/in/alcytorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-5xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alcytorres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-5xl hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
