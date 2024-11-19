// src/App.js

import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
