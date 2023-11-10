import React from 'react';
import ThreeDButton from './ThreeDButton';
import FlipCard from './FlipCard';

const PortfolioCard = ({ title, description, image, link }) => {
  const [descriptionIsVisible, setDescriptionIsVisible] = React.useState(false);

  const click = () => {
    setDescriptionIsVisible(!descriptionIsVisible);
  };
  return (
    <div style={{ height:"600px",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px'}}>
      
    
      {!descriptionIsVisible &&   <img src={image} alt={title} style={{ width: '636px', height: '420px', objectFit: 'cover', borderRadius: '10px', marginBottom: "10px" }} />}
      {descriptionIsVisible && 
      

      // height: '420px',
      // width: '636px',
      <div  style={{ width: '636px', height: '420px', backgroundColor: "#FFF6F6", borderRadius: '10px', marginBottom: "10px" }}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        {/* <p>{description}</p> */}
      </div>

      }
      {/* {descriptionIsVisible && <p>{description}</p>} */}

      <ThreeDButton text={"Learn-More"} handleClick={click}/>
    </div>
  );
};

export default PortfolioCard;
