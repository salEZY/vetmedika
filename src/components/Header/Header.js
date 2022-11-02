import React, { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const ref = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  let imgSrc =
    windowSize > 700
      ? require("../../assets/logo.png")
      : require("../../assets/logoSmall.png");

  return (
    <header ref={ref}>
      <div className="logo" onClick={reloadPage} style={{ cursor: "pointer" }}>
        <img src={imgSrc} alt="Vetmedika logo" className="logoImg" />
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
      <div className="burger">
        <i className="fa-sharp fa-solid fa-bars-staggered"></i>
      </div>
    </header>
  );
};

export default Header;
