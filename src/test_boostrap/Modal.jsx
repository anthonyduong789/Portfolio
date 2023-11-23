import React from 'react';
import styles from './Modal.module.scss';
import PortfolioCard from '../Compnents/portfolio_card';
import linkImg from "../images/visitLink.png"
import { useEffect } from 'react';

const Modal = ({ id,title, image, description, onClose }) => {

  const visitClick = () => {
    window.open("https://anthonyduong789.github.io/gap-tech/")
  }



  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div onClick={onClose}  className={styles.exit}>
          
          <div className={styles.Xicon}>x</div>
          </div>
        <div className={styles.title}>
            {title}
        </div>
        {/* <PortfolioCard image={image} description={"fhakjldfhjkasdhf"}/> */}
        <div className={styles.imgContainer}>
          <img src={image} alt={`Enlarged card ${id}`} className={styles.modalImage} />
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.visitDiv}>
          <button onClick={visitClick} className={styles.visit}>
            {"Visit"}
            <img src={linkImg} className={styles.visitIcon}/></button>
          
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
