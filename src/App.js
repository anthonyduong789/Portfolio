import "./App.css";
import React from "react";
import StartPage from "./start_page";
import { useRef, useState, useEffect } from "react";
import AboutMePage from "./About_me_page";
import Portfolio_page from "./Portfolio_page";
import ThreeDbutton from "./Compnents/ThreeDButton";
import Interpersonal_page from "./Other_pages";
import Contact from "./contact";
import SmoothScrollPage from "./SmoothScrollPage";
import Navbar from "./navbar";
import NavButton  from "./navButton/navButton";
// import ContactFormBoostrap from "./get_in_touch";

function customScrollBy(amount, duration) {
  const perTick = amount / (duration / 10);
  let scrolledAmount = 0;

  const interval = setInterval(() => {
    window.scrollBy(0, perTick);
    scrolledAmount += perTick;

    if (scrolledAmount >= amount) {
      clearInterval(interval);
    }
  }, 10);
}

const animate_on_scroll = document.querySelectorAll(".animate-on-scroll");

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Right = (
    <div>
      <div
        className="right"
        style={{ background: "green", height: "100px", width: "100px" }}
      >
        <h1>Right</h1>
      </div>
    </div>
  );

  return (
    <div>
      {/* <SmoothScrollPage /> */}
   
      <Navbar />
      {/* <NavButton name="fsdf" /> */}
      <StartPage />
     
      <AboutMePage />
      <Portfolio_page /> 
      <Contact />
      

      

    </div>
  );
}

export default App;
