// import React from "react";
import { useState } from "react";
import "./section_1.scss";
import "./HoverLarge.css";
import "./TypewriterAnimation.css";
import "./GradientButton.css";
import { Helmet } from "react-helmet";
import FlipCard from "./FlipCard Component";

const aboutme =
  "I'm a dedicated Computer Science major with a deep-seated passion for web development. My academ";

function Section1() {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handelClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="main_container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&amp;family=Sacramento&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <button
        className="IAmAnthony animated-div"
        style={{ width: "50%" }}
        onClick={handelClick}
      >
        <h1
          // className="typewriter-text"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Hi I'm Anthony
        </h1>
      </button>
      <div
        className="hover-button"
        style={{ width: "30%", marginTop: "40px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && <h1>About me</h1>},
        {isHovered && <p>{aboutme}</p>}
        {/* <div className=""><h1>About me</h1><br/><h2>{aboutme}</h2></div> */}
      </div>

      <div>
        <FlipCard
          div1={
            <div>
              <h1>Projects</h1>
            </div>
          }
          div2={
            <div>
              <h1>Projects</h1>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Section1;
