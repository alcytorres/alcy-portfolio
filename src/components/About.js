import React, { useState } from 'react';
import './About.css';

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <h1 className="about-header">
        About Me
        <div className="about-header-line"></div>
      </h1>
      <div className="about-content">
        <p className="about-text">
          <span className="bold-text">
            A driven software engineer with a passion for bringing creative visions to life as impactful solutions.
          </span>{" "}
          I’ve honed my skills through my role as a developer at Medpod, a healthcare company, building personal projects, and completing a coding bootcamp at Actualize. I also hold a Bachelor's degree in Business from Boston University.
        </p>

        {/* NEW: Additional paragraphs */}
        <div
          className={`additional-content ${
            expanded ? 'expanded' : ''
          }`} /* NEW: Toggle 'expanded' class */
        >
          <p className="staggered-text">
            My expertise spans various domains of software engineering, including backend and frontend development, UI/UX design, database management, and web development. This diverse skill set enables me to approach projects holistically, ensuring both robust functionality and an intuitive user experience.
          </p>
          <p className="staggered-text">
            Currently, at Medpod, I lead the front-end overhaul of a video platform serving over 10,000 users. This role has sharpened my problem-solving abilities, strengthened my leadership in complex projects, and enhanced my collaboration with cross-functional teams.
          </p>
          <p className="staggered-text">
            Outside of work, I stay energized through various activities. I’m passionate about fútbol, enjoy the thrill of off-road dirt biking, love hiking through scenic trails, and relish hitting the slopes on my snowboard. I also cherish quality time with family and friends.
          </p>
          <p className="staggered-text">
            I’m excited to leverage my experience and skills to tackle new challenges in the ever-evolving technology landscape. If you’re interested in collaborating or simply want to connect, feel free to reach out!
          </p>
        </div>

        {/* NEW: Read More / Read Less button */}
        <div className="read-more-container">
          <button
            onClick={() => setExpanded(!expanded)}
            className="read-more-link"
            aria-expanded={expanded}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
