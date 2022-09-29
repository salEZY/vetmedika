import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className="logo" onClick={reloadPage} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Vetmedika logo" className="logoImg" />
      </div>
      <div className="nav">
        <p>
          <Link to="action" spy={true} smooth={true} duration={300}>
            Akcije
          </Link>
        </p>
        <p>
          <Link to="services" spy={true} smooth={true} duration={300}>
            Usluge
          </Link>
        </p>
        <p>
          <Link to="contact" spy={true} smooth={true} duration={300}>
            Kontakt
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
