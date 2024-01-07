import React from 'react';
import styles from './Modal.module.scss';
import PortfolioCard from '../Compnents/portfolio_card';
import linkImg from "../images/visitLink.png"
import { useEffect } from 'react';

const Modal = ({ id,title, images, description, onClose, DemoLink, SourceCode }) => {



  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.exit}>
          <div onClick={onClose} className={styles.Xicon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <circle cx="128" cy="128" r="96" opacity="0.2" />
              <line
                x1="160"
                y1="96"
                x2="96"
                y2="160"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <line
                x1="96"
                y1="96"
                x2="160"
                y2="160"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
          </div>
        </div>
        <div className={styles.title}>{title}</div>

        <div className={styles.visitDiv}>
          <a className={styles.links} href={DemoLink}>
            {"Demo   "}
          </a>
          <a className={styles.links} href={SourceCode}>
            {"Source Code"}
          </a>
        </div>

        <div className={styles.description}>{description}</div>
        {/* <div className={styles.visitDiv}> */}

        {/* </div> */}
        {/* <PortfolioCard image={image} description={"fhakjldfhjkasdhf"}/> */}
        {images.map((image, index) => (
          <div className={styles.imgContainer}>
            <img
              key={index}
              src={image}
              alt={`Enlarged card ${id}`}
              className={styles.modalImage}
            />
          </div>
        ))}
        {/* <div className={styles.imgContainer}>
          <img src={image} alt={`Enlarged card ${id}`} className={styles.modalImage} />
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
