import React from 'react';
import './Card.css';

const Card = ({ title, graphColor, buyColor, tradeColor }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img className='graph-image' style={{ backgroundColor: graphColor }} src="https://datavizproject.com/wp-content/uploads/types/Line-Graph.png" alt="My Image" />
      {/* <button className="card-button" style={{ backgroundColor: buyColor }}>Buy</button>
      <button className="card-button" style={{ backgroundColor: tradeColor }}>Trade</button> */}
      <div className="hero-buttons">
          <button className="hero-section1-button">Buy</button>
          <button className="hero-section1-button">Trade</button>
    </div>
    </div>
  );
}

export default Card;
