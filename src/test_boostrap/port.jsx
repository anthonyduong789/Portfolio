import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import styles from "./port.module.scss";
import HeadingAnimation from "../Compnents/headingAnimation";

import anthony from "../images/anthony.png";
import mystery from "../images/mariobox.jpg";
import gaptech from "../images/gap-tech.png";
import LearningSite from "../images/Learning-Site.png";
import LearningSite1 from "../images/LearningSite1.png";
import LearningSite2 from "../images/LearningSite2.png";

function importAll(r) {
  return r.keys().map(r);
}

const Hitch = importAll(
  require.context("../images/Hitch", false, /\.(png|jpe?g|svg)$/)
);
const HitchImages = [...Hitch].reverse();

const images = [[LearningSite, LearningSite1, LearningSite2], HitchImages];
const titles = ["Gap-Tech", "Hitch", "3", "sdffsfd", "Anthony", "sdffsfd"];
const description = [
  "Whether mastering an instrument or a new language, scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. Gap-Tech is a simple, easy-to-use tool that allows users to customize their practice sessions with random pauses. In addtion has other useful Learning tools to enhance your learning.",
  "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route. This system offers drivers the opportunity to earn extra income by accommodating passengers on journeys they are already undertaking. My application used React-Native for the frontend and a Node.js as the backend with a SQL Database.",
];
const Demos = [
  "https://anthonyduong789.github.io/Learning-Site/",
  "https://youtu.be/AOayRrtdtJw?si=9C4g9FlLsr_lKY-_",
];
const SourceCode = [
  "https://github.com/anthonyduong789/Learning-Site",
  "https://github.com/orgs/HitchApp115/repositories",
];

function Port() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardSelect = (id) => {
    setSelectedCard(id);
    setModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleModalClose = () => {
    setSelectedCard(null);
    setModalOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const PortMeRef = React.useRef(null);
  const PortMeUnderlineRef = React.useRef(null);

  return (
    <div id="portfolio" className={styles.container}>
      <div className={styles.header_container}>
        <HeadingAnimation
          header={"Portfolio"}
          headerColor={"white"}
          underlineColor={"white"}
        />
      </div>

      <div className={styles.grid}>
        {images.map((ImageGroup, index) => (
          <Card
            key={index}
            id={index}
            image={ImageGroup[0]}
            onSelect={handleCardSelect}
          />

          // <div />
        ))}
      </div>
      {modalOpen && (
        <Modal
          title={titles[selectedCard]}
          images={images[selectedCard]}
          onClose={handleModalClose}
          description={description[selectedCard]}
          DemoLink={Demos[selectedCard]}
          SourceCode={SourceCode[selectedCard]}
        />
      )}
    </div>
  );
}

// function Port() {
//   return (

//   );
// }

export default Port;
