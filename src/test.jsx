import React from 'react';
import './test.scss';
// import HoverLarge from './Hoverlarge';
import CoolButton from './cool_button1';
import sound from "./images/onclick.wav";


function Test() {
    const handelClick = () => {
        new Audio(sound).play();
      };
    return (
        <div>
            <h1>Hello, my name is Anthony.</h1>
            <p class="subtitle">Welcome to my website!</p>
            {/* <HoverLarge /> */}
            <CoolButton 
            onClick={handelClick}
            class ="subtitle" cool_button={"View my site"}/>
        </div>
    )
}


export default Test;