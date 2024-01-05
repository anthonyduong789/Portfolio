import React, { useState } from "react";
import "./responsiveNavBar.css"; // Import the CSS file


const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
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
  );
};

export default ResponsiveNavbar;
