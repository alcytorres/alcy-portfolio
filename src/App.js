import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container"> {/* UPDATED: Ensure full height coverage */}
      <Background /> {/* Background spans the entire content */}
      <Navbar />
      <div className="content-container"> {/* Content wrapper */}
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
