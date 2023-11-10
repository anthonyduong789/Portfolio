import { useState, useEffect, useRef } from "react";
import FlipCardComponent from "./Compnents/FlipCard";
import FlipCard from "./Compnents/FlipCard";
import ThreeDbutton from "./Compnents/ThreeDButton";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import PortfolioCard from "./Compnents/portfolio_card";
import fiveGuys from "./images/five-guys.gif";
import gapTech from "./images/gap-tech.png";

import "./Portfolio_page.scss";
// background-color: #F5F5F5;
// background color

function Portfolio_page() {
  const front = () => {
    return (
      <div>
        <h1>Front</h1>
        <p>aljfkjasfjkdlsaflkj</p>
      </div>
    );
  };

  const back = () => {
    return (
      <div style={{ backgroundColor: "pink" }}>
        <h1>Bdfssafack</h1>
      </div>
    );
  };



  const aboutMeRef = useRef(null);
  const aboutMeUnderlineRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, classToAdd, classToRemove) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToRemove);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => handleIntersection(entries, "slide-in-left", "slide-in-left"));
    const observer2 = new IntersectionObserver((entries) => handleIntersection(entries, "slide-in-left-2", "slide-in-left-2"));

    observer.observe(aboutMeRef.current);
    observer2.observe(aboutMeUnderlineRef.current);

    return () => {
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);




  return (
    /* write a dive that take up minium the entire vewing screen */
    //write a dive that take up minium the entire vewing screen
    <div style={{ minHeight: "100vh", width: "100%", display:"flex", justifyContent: "center", alignItems: 'center', flexDirection:'column', }}>
       
       <h1 class="portfolio" ref={aboutMeRef}>
       Portfolio
        </h1>
        <div class="underline_1" ref={aboutMeUnderlineRef}></div>

       
      <div style={{  margin:"0", padding:"0"}} className="AwesomeSliderContainer">
        <AwesomeSlider
          animation="cubeAnimation"
          style={{ height: "100%", width: "100%", margin:"0", padding:"0"}}
          bullets={false}
        >
          <div style={{background:"transparent", margin:"0", padding:"0" }}>
            <PortfolioCard
              title={"Gap-tech"}
              description={"Whether mastering an instrument or a new language, scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. Gap-Tech is a simple, easy-to-use tool that allows users to customize their practice sessions with random pauses."}
              image={gapTech}
            />
          </div>
          <div style={{ background: "transparent" }}>
            <PortfolioCard
              title={"hi"}
              description={"flkalkfdjaslkfjlksadjf"}
              image={fiveGuys}
            />
          </div>
        </AwesomeSlider>
      
      </div>
    </div>
  );
}

export default Portfolio_page;
