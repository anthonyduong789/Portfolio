import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import styles from './port.module.scss';
import HeadingAnimation from '../Compnents/headingAnimation';


import anthony from '../images/anthony.png';
import mystery from '../images/mariobox.jpg';
import gaptech from '../images/gap-tech.png';



const images = [gaptech];
const titles = ['Gap-Tech', '2', '3', 'sdffsfd', 'Anthony', 'sdffsfd'];
const description = ['Whether mastering an instrument or a new language, scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. Gap-Tech is a simple, easy-to-use tool that allows users to customize their practice sessions with random pauses.']

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
                image={images}
                onSelect={handleCardSelect}
                />
            ))}
        </div>
      </div>
      {modalOpen && ( <Modal title={titles[selectedCard]} image={images[selectedCard]} onClose={handleModalClose} description={description[selectedCard]}/>) }


     
    
    </div>
   
  
  );
};


// function Port() {
//   return (
  
//   );
// }

export default Port;
