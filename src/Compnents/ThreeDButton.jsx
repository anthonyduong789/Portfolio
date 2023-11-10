import { useState } from "react";
import "./3d.css";

function ThreeDButton({ text = "3D Button", disabled = false, handleClick }) {
  

  return (
<button class="pushable"
onClick={handleClick}
>
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">
    {text}
  </span>
  
</button>
  );
}

export default ThreeDButton;
