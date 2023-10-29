import React from "react";
import "./start_page.scss";
// import HoverLarge from './Hoverlarge';
// import CoolButton from "./cool_button1";
import Pink3dButton from "./Pink_3d_button";
import sound from "./images/onclick.wav";



  
function StartPage() {

  const handleClick = () => {
    new Audio(sound).play();
    // get the height of the box div
    // customScrollBy(boxHeight, 1000); // scroll down by the height of the box div in 1 second
  };

  return (
    <div >
      <div className="box">
        {/* <div > */}
          <h1 className="main_text">Hello, my name is Anthony.</h1>
          <p className="subtitle">Welcome to my website!</p>

          <Pink3dButton
            onClick={() => {
              handleClick();
            }}
            className="subtitle"
            text={"View my site"}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default StartPage;
