import React from "react";
import "./Pink_3d_button.scss";
import image from "../images/arrow_icon.png";

const Pink_3d_button = ({ text, onClick }) => {
  return (
    <div class="body-class">
      <button onClick={onClick} class="button3d learn-more">
        {text}
        <img
          src={image}
          class="rotate-right"
          style={{ height: "30px", width: "30px" }}
          alt=""
        />
      </button>
    </div>
  );
};

export default Pink_3d_button;
