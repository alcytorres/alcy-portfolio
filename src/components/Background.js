import React from 'react';
import './Background.css';

function Background() {
  return (
    <div className="background-container"> {/* UPDATED: The container now handles full-page height */}
      {/* Stars background */}
      <img
        src={require('../assets/stars.png')}
        alt="Stars Background"
        className="stars"
      />
      {/* REMOVE: Clouds container and related code */}
    </div>
  );
}

export default Background;
