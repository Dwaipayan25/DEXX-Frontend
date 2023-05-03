import React, { useState, useEffect } from "react";
import "./Card.css";

function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}

function BuyPopup({ onClose, onSubmit }) {
  const [rets, setRets] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(rets);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <h2>Connected Account</h2>
          <p>Address: 0x4277D52b86DD03aB394754868d8c7B414AcFfc88</p>
          <p>Balance: 1000 HBAR</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="rets">Number of RETs:</label>
            <input
              type="number"
              id="rets"
              value={rets}
              onChange={(event) => setRets(event.target.value)}
              required
            />
            <button type="submit">Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, graphColor, buyColor, tradeColor }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showBuyPopup, setShowBuyPopup] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showPopup]);

  function handleBuyClick() {
    setShowBuyPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
    setShowBuyPopup(false);
  }

  function handleBuySubmit(rets) {
    setShowBuyPopup(false);
    setShowPopup(true);
  }

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img
        className="graph-image"
        style={{ backgroundColor: graphColor }}
        src="https://datavizproject.com/wp-content/uploads/types/Line-Graph.png"
        alt="My Image"
      />
      <div className="hero-buttons">
        <div>
          <button className="hero-section1-button" onClick={handleBuyClick}>
            Buy
          </button>
        </div>
        <button className="hero-section1-button">Trade</button>
      </div>
      {showPopup && (
        <div className="popup-background">
          <Popup
            message="Your order has been purchased."
            onClose={handleClosePopup}
          />
        </div>
      )}
      {showBuyPopup && (
        <div className="popup-background">
          <BuyPopup onClose={handleClosePopup} onSubmit={handleBuySubmit} />
        </div>
      )}
    </div>
  );
};

export default Card;

