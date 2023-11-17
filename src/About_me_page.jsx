import React, { Component } from "react";
import me from "./images/anthony.png";


import { useEffect, useRef } from "react";

import "./About_me_page.scss";
import ProgressBar from "./ProgressBar";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const oberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("slide-in-left");
    } else {
      entry.target.classList.remove("slide-in-left");
    }
  });
});

function AboutMePage() {
  const title = "Fast";
  const description = "I like to get things done quickly and efficiently.";

  const team_title = "Great Team";
  const communicate = "Excellent<br/>communicator";

  // must render on mount

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
    <div  id="about" class="view" >
      <div  class="about-container">
        <h1  class="about" ref={aboutMeRef}>
          About Me
        </h1>
        <div class="underline" ref={aboutMeUnderlineRef}></div>

        <div>
          <div class="card_2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="Who_is_this_guy_container">
                <img src={me} alt="logo" class="me-image" />
                <h1 class="title1">Who is this guy?</h1>
                <div class="me_subtitle">
                  I'm a Computer Science undergraduate from UC Santa Cruz. Eager
                  to dive into web development and software engineering, I'm on
                  the lookout for dynamic opportunities to learn and contribute
                  in these fields.
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 class="Tech_label">🛠️Tech Stack🛠️</h1>
                {/* <div class="a2">  */}
                <ProgressBar name={"HTML"} percentage={90} />
                <ProgressBar name={"CSS"} percentage={90} />
                <ProgressBar name={"Javascript"} percentage={90} />
                <ProgressBar name={"React"} percentage={80} />
                <ProgressBar name={"Python"} percentage={70} />
                <ProgressBar name={"C/C++"} percentage={60} />
                <ProgressBar name={"Node.js"} percentage={90} />
                <ProgressBar name={"MySQL"} percentage={90} />
                <ProgressBar name={"React-Native"} percentage={90} />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </AwesomeSlider> */}

    </div>
  );
}

export default AboutMePage;

// export default AboutMePage;
