import React from "react";
import "./navbar.scss";
import { useState, useEffect } from "react";
import NavButton from "./navButton/navButton";


function Navbar() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return( isVisible ? (
    <nav className="applyNav">
      <ul className="applyUl" style={{ listStyleType: "none" }}>
        <li className="applyLi">
          {/* <a className="applyA" href="#home">
            home
          </a> */}
          <NavButton name="home" link="home" />
        </li>
        <li className="applyLi">

          {/* <a className="applyA" href="#about">
            About me
          </a> */}
          <NavButton name="about" link="about" />
        </li>
        <li className="applyLi">
          {/* <a className="applyA" href="#portfolio">
            Portfolio
          </a> */}
          <NavButton name="portfolio" link="portfolio" />
        </li>
        <li className="applyLi">
          {/* <a className="applyA" href="#contact">
            Contact
          </a> */}
          <NavButton name="contact" link="contact" />
        </li>
      </ul>
      
    </nav>
  ) :null
  )
}

export default Navbar;
