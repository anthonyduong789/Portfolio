import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import styles from './port.module.scss';
import HeadingAnimation from '../Compnents/headingAnimation';


import anthony from '../images/anthony.png';
import mystery from '../images/mariobox.jpg';
import gaptech from '../images/gap-tech.png';
import LearningSite from '../images/Learning-Site.png';
import LearningSite1 from '../images/LearningSite1.png';
import LearningSite2 from '../images/LearningSite2.png';



const images = [[LearningSite, LearningSite1, LearningSite2]];
const titles = ['Gap-Tech', '2', '3', 'sdffsfd', 'Anthony', 'sdffsfd'];
const description = ['Whether mastering an instrument or a new language, scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. Gap-Tech is a simple, easy-to-use tool that allows users to customize their practice sessions with random pauses. In addtion has other useful Learning tools to enhance your learning.'];
const links = ["https://anthonyduong789.github.io/Learning-Site/"]

function Port () {
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
      <HeadingAnimation header={"Portfolio"}/>
      </div>
    
      <div className={styles.portfolio_container}>
     
   
      <div className={styles.grid}>
    
            {images.map((images, index) => (
                <Card
                key={index}
                id={index}
                image={images[index]}
                onSelect={handleCardSelect}
                />
            ))}
        </div>
      </div>
      {modalOpen && ( <Modal title={titles[selectedCard]} images={images[selectedCard]} onClose={handleModalClose} description={description[selectedCard]} Link={links[selectedCard]}/>) }


     
    
    </div>
   
  
  );
};


// function Port() {
//   return (
  
//   );
// }

export default Port;
