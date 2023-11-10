import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = (front, back) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const card1 = () => {
    return (
      <div>
        {"adfjalkfjklsafjlksadjflk"}
      </div>
    );
  }
    const card2 = () => {
      return (
        <div>
          {back}
        </div>
      );
  }

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front">{card1}</div>
      <div className="back">{card2}</div>
    </div>
  );
};

export default FlipCard;
