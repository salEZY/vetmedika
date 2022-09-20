import React from "react";
import logo from "../../assets/logo.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Vetmedika logo" />
      </div>
      <div className="nav">
        <p>Naslovna</p>
        <p>Usluge</p>
        <p>Kontakt</p>
      </div>
    </header>
  );
};

export default Header;
