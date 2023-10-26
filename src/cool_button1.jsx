import React from 'react';
import './cool_button.scss';
import image from './images/arrow_icon.png';


const CoolButton = ({ cool_button, onClick}) => {
    return (
        
        <button 
        onClick={onClick}
        class="learn-more">{cool_button}<img src={image} class="rotate-right" style={{height:"30px", width:"30px"}} alt=''/></button>
    );
};

export default CoolButton;

