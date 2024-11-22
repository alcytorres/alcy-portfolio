import React, { useState } from 'react';
import './About.css'; // NEW: Import CSS file

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      {/* About Me Text */}
      <div className="about-text-container">
        <h1 className="about-heading">About Me</h1>
        <p className="about-text">
          I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
          {expanded && (
            <span>
              I specialize in full-stack development and have a keen interest in cloud computing and user experience design. My projects often focus on building intuitive applications that solve real-world problems.
            </span>
          )}
        </p>
        {/* Read More Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="read-more-button"
        >
          <span className="read-more-symbol">{expanded ? '-' : '+'}</span>
        </button>
      </div>
    </section>
  );
}

export default About;
