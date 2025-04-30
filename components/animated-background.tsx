import React from "react";
import "./animated-background.css"; // Import the CSS file for styling

const AnimatedBackground: React.FC = () => {
  const particles = Array.from({ length: 100 }); // Create an array for 100 particles

  return (
    <div className="animated-background">
      {particles.map((_, index) => (
        <div key={index} className="particle"></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;