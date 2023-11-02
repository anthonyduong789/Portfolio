import React, { Component } from "react";
import fast_logo from "./images/fast.png";
import Card_logo from "./Card_Logo";
import me from "./images/anthony.png";
import t1 from "./images/t1.png";
import team from "./images/c1.png";
import five_guys from "./images/five-guys.gif";

import { useEffect, useRef } from "react";

import "./About_me_page.scss";
import ProgressBar from "./ProgressBar";

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
    const targetElement = aboutMeRef.current;
    const targetElement2 = aboutMeUnderlineRef.current;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible!", entry.target);
          entry.target.classList.add("slide-in-left");
        } else {
          entry.target.classList.remove("slide-in-left");
        }
      });
    };

    const handleIntersection2 = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible!", entry.target);
          entry.target.classList.add("slide-in-left-2");
        } else {
          entry.target.classList.remove("slide-in-left-2");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(targetElement);
    const observer2 = new IntersectionObserver(handleIntersection2);
    observer2.observe(targetElement2);
    // cleans up component on
    return () => {
      observer.unobserve(targetElement);
      observer2.unobserve(targetElement2);
    };
    // oberver.observe(target);
  }, []);

  return (
    <div class="view">
      <div class="about-container">
        <h1 class="about" ref={aboutMeRef}>
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
                <ProgressBar name={"CSS"} percentage={90} />
                <ProgressBar name={"HTML"} percentage={90} />
                <ProgressBar name={"Node.js"} percentage={70} />
                <ProgressBar name={"React"} percentage={70} />
                <ProgressBar name={"Javascript"} percentage={90} />
                <ProgressBar name={"Node.js"} percentage={90} />
                <ProgressBar name={"Python"} percentage={90} />
                <ProgressBar name={"C/C++"} percentage={90} />
                <ProgressBar name={""} percentage={90} />
                {/* </div> */}
              </div>
            </div>
          </div>
          <div>
          <h1>
              Interpersonal Abilities and Diverse Professional Backgrounds
            </h1>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}
          >
            
            <div
              class="card"
              style={{
                backgroundColor: "lightblue",
                border: "4px solid black",
              }}
            >
              <img src={five_guys} alt="Image" class="card-image" />
              <div class="card-description">
                <h2 class="card-title">Five Guys Training Manager</h2>
                <p class="card-text">
                  In additon to my technical skills, I have a diverse set of
                  soft skills that I have developed through my experiences in
                  the workforce. I have worked in the food industry for over 5
                  years, and have been a training manager for over 2 years.
                </p>
              </div>
            </div>

            <div class="card">
              <h2 style={{ width: "30%", marginRight:"10px"}}>Excellent Communicator </h2>

              <div >
                <p class="card-text">
                  "Working at Five Guys during college sharpened my
                  communication skills. I learned to lead diverse age groups,
                  consistently conveying ideas with respect and clarity."
                </p>
              </div>
            </div>
            <div class="card">
              <h2 style={{ width: "30%", marginRight:"10px"}}>Scrum</h2>

              <div >
                <p class="card-text">
                  "Working at Five Guys during college sharpened my
                  communication skills. I learned to lead diverse age groups,
                  consistently conveying ideas with respect and clarity."
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;

// export default AboutMePage;
