import React from 'react';
import './Background.css';

function Background() {
  return (
    <div className="background-container"> {/* UPDATED: The container now handles full-page height */}
      {/* NEW: Stars and Clouds are absolute for scrollable background */}
      <img
        src={require('../assets/stars.png')}
        alt="Stars Background"
        className="stars"
      />
      <div className="clouds-container">
        <img
          src={require('../assets/clouds.png')}
          alt="Clouds"
          className="clouds"
        />
      </div>
    </div>
  );
}

export default Background;
