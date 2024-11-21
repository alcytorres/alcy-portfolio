import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center">

      {/* About Me Text */}
      <div className="max-w-xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
        <p className="text-white">
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
          className="mt-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition duration-300"
        >
          <span className="text-xl">{expanded ? '-' : '+'}</span>
        </button>

      
      </div>
    </section>
  );
}

export default About;
