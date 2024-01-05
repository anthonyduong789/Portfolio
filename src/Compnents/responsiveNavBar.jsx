import React, { useState } from "react";
import "./responsiveNavBar.css"; // Import the CSS file
import { useEffect } from "react";



    const ResponsiveNavbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isVisible, setIsVisible] = useState(false);

      const toggleNav = () => {
        setIsOpen(!isOpen);
      };
      useEffect(() => {
        const onScroll = () => {
          setIsVisible(window.scrollY > 400);
        };

        // Add scroll event listener
        window.addEventListener("scroll", onScroll);

        // Clean up the scroll event listener
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, []);

      return (
        <div> {/* Wrap the JSX code inside a parent element */}
          {isVisible ? (
            <nav className="nav">
              <button className="toggle-button" onClick={toggleNav}>
                ☰
              </button>

              <div className={`nav-items ${isOpen ? "open" : "closed"}`}>
                <a className="nav-link" href="#home" onClick={toggleNav}>
                  Home
                </a>
                <a className="nav-link" href="#about" onClick={toggleNav}>
                  About
                </a>
                <a className="nav-link" href="#portfolio" onClick={toggleNav}>
                  Portfolio
                </a>
                <a className="nav-link" href="#contact" onClick={toggleNav}>
                  Contact
                </a>
              </div>
            </nav>
          ) : null}
        </div>
      );
    };
  


export default ResponsiveNavbar;
