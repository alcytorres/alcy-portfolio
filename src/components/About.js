// src/components/About.js

import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
      <p className="text-white text-center max-w-xl px-4">
        {/* Placeholder text */}
        I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness....
      </p>
    </section>
  );
}

export default About;
