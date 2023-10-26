import "./HoverLarge.css";
import "./TypewriterAnimation.css";
import React from "react";

import sound from "./images/onclick.wav";

function HoverLarge() {
  // cosnt [getValue, setValue] = useState(0);

  const handelClick = () => {
    new Audio(sound).play();
  };
  return (
    <button className="animated-div" onClick={handelClick}>
      <div>
        helloafhkjahfkjasdhfkjahskjdfh askdjhfkljashdfkjashkjdfhkasjdhk
      </div>
    </button>
  );
}

export default HoverLarge;
