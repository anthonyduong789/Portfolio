import React from "react";
import "./navbar.scss";

function Navbar() {
  // const handleAnchorClick = (event) => {
  //     event.preventDefault();
  //     const anchorHref = event.currentTarget.getAttribute('href');
  //     const targetElement = document.querySelector(anchorHref);

  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop,
  //         behavior: 'smooth',
  //       });
  //     }
  //   };
  return (
    <nav className="applyNav">
      <ul className="applyUl" style={{ listStyleType: "none" }}>
        <li className="applyLi">
          <a className="applyA" href="#home">
            home
          </a>
        </li>
        <li className="applyLi">
          <a className="applyA" href="#about">
            About me
          </a>
        </li>
        <li className="applyLi">
          <a className="applyA" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="applyLi">
          <a className="applyA" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
