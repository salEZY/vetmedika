import React, { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const ref = useRef(null);
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const burgerHandler = () => {
    setBurger(!burger);
    setModal(!modal);

    !modal
      ? document.body.setAttribute("class", "remove-scroll")
      : document.body.removeAttribute("class");
  };

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
        {burger ? (
          <i
            className="fa-sharp fa-solid fa-xmark-large"
            id="burger-btn"
            onClick={burgerHandler}
          ></i>
        ) : (
          <i
            className="fa-sharp fa-solid fa-bars-staggered"
            id="burger-btn"
            onClick={burgerHandler}
          ></i>
        )}
      </div>
      {modal && <div className="modal">MODAL</div>}
    </header>
  );
};

export default Header;
