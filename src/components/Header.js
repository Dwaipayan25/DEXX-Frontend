import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Welcome to DEXX</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><a href="#">Market</a></li>
          <li className="header__item"><a href="#">Exchange</a></li>
          <li className="header__item"><a href="#">Wallet</a></li>
          <li className="header__item"><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
