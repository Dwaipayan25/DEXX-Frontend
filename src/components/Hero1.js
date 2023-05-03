import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import Card from './Card';
import './Hero1.css';



const HeroSection1 = () => {

  return (
    <section className="hero-section1">
      <div className="hero-section1-content">
        <h1>Buy and Sell Renewable Energy Tokens (RETs)</h1>
        <h2>World's first Energy trading Exchange.</h2>
        <button className="hero-section1-button">Get Started</button>
        <p className="hero-section1-learn" onClick={() => alert("Learn about RETs")}>Learn About RETs</p>
        <div className="price-container">
          <p><FontAwesomeIcon icon={faBitcoinSign} style={{marginRight: '0.5rem'}}/> BTC price: $50,000</p>
          <p><FontAwesomeIcon icon={faEthereum} style={{marginRight: '0.5rem'}}/> ETH price: $3,000</p>
          <p><FontAwesomeIcon icon={faBolt} style={{marginRight: '0.5rem'}}/> RET price: $1.00</p>
        </div>
      </div>
      <Card
        title="RET"
        graphColor="rgba(255, 255, 255, 0.1)"
        buyColor="#f50057"
        tradeColor="#f50057"
      />
      
    </section>
  );
}

export default HeroSection1;

