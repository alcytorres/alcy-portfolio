import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Intro.css'; // Import intro.css for styling

function Intro() {
  return (
    <section id="home" className="intro-section">
      {/* Introductory Text */}
      <div className="intro-text-container">
        <h1 className="intro-heading">
          Hi, my<br />
          name is <span className="highlighted-text">Alcy</span>.
        </h1>
        <p className="intro-subheading">
          I'm a <span className="highlighted-text">web developer</span> that brings ideas to life from the Greater Boston area.
        </p>

        {/* Social Media Icons */}
        <div className="social-media-icons">
          <a
            href="https://www.linkedin.com/in/alcytorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alcytorres"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="profile-picture-container">
        <div className="profile-picture">
          <img
            src={require('../assets/profile-picture.jpg')}
            alt="Profile"
            className="profile-picture-img"
          />
        </div>
      </div>

      {/* NEW: Scroll Indicator */}
      <div className="scroll-indicator-container">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Intro;
