import React, { useState } from 'react';


const Card = ({ image, name, price, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the click state
  };

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={image}
          alt={name}
          className={`card-img ${isClicked ? 'clicked' : ''}`} // Add the 'clicked' class when clicked
          onClick={handleClick} // Handle image click
        />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default Card;
