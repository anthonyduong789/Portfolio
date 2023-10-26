import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard({div1, div2}){
  const [isFlipped, setIsFlipped] = useState(false);
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{div1}</div>
        <div className="flip-card-back">{div2}</div>
      </div>
    </div>
  );
};

export default FlipCard;
