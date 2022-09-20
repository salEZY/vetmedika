import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>VETMEDIKA</h1>
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
