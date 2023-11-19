import React from "react";
import styles from "./navButton.module.scss";


function NavButton({ name, link, sound }) {
   const handleClick = () => {
      if (sound) {
         // new Audio(sound).play();
      }
   };

   const href = "#" + link;

   return (
      <a className={styles.a1} onClick={handleClick} href={href}>
         <span className={styles.span1}>{name}</span>
      </a>
   );
}

export default NavButton;