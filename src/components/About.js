import React, { useState } from 'react';
import './About.css'; // Updated CSS file

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <h1 className="about-header">About Me</h1>
      <div className="about-content">
        <p className={`about-text ${expanded ? 'expanded' : ''}`}>
          I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
          <span className="additional-text">
            {" "}I specialize in full-stack development and have a keen interest in cloud computing and user experience design. My projects often focus on building intuitive applications that solve real-world problems.
          </span>
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="read-more-link"
          aria-expanded={expanded}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}

export default About;
