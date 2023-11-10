import React from "react";
import "./Card_Logo.scss";

const CardLogo = ({img, title, description, new_class }) => {
    return (
        <div className={`container ${new_class}`}>
            <img src={img} alt="logo" className="logo_image"/>
            <h1 className="title" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="description">{description}</p>
        </div>
    );
};

export default CardLogo;

