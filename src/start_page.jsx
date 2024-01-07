import React from "react";
import styles from "./start_page.module.scss";
// import HoverLarge from './Hoverlarge';
// import CoolButton from "./cool_button1";
import Pink3dButton from "./Compnents/Pink_3d_button";
import sound from "./images/onclick.wav";
import Portfolio from "./images/MeLogo.png";



  
function StartPage() {

  const handleClick = (sectionId) => {
    new Audio(sound).play();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // get the height of the box div
    // customScrollBy(boxHeight, 1000); // scroll down by the height of the box div in 1 second
  };

  return (
    <div id="home">
      <div className={styles.box}>
        {/* <div > */}
        <div className={styles.avatar}>
          <img className={styles.portfolioImage} src={Portfolio} />
        </div>

        <h1 className={styles.main_text}>Hello, my name is Anthony.</h1>
        <p className={styles.subtitle}>Welcome to my website!</p>

        <Pink3dButton
          onClick={() => {
            handleClick("about");
          }}
          className={styles.subtitle}
          text={"View my site"}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default StartPage;
