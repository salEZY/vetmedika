import React, { useRef, useLayoutEffect, useState, useContext } from "react";
import { AppContext } from "../../util/app-context";
import Navigation from "../FormsUI/Navigation/Navigation";
import Modal from "./Modal";

import "./Header.css";

const Header = () => {
  const appCtx = useContext(AppContext);
  const ref = useRef(null);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const reloadPage = () => {
  //   window.location.reload();
  // };

  let imgSrc =
    windowSize > 700
      ? require("../../assets/logo.png")
      : require("../../assets/logoSmall.png");

  return (
    <header ref={ref}>
      <div className="logo" style={{ cursor: "pointer" }}>
        <a href="/">
          <img src={imgSrc} alt="Vetmedika logo" className="logoImg" />
        </a>
      </div>
      {!window.location.href.includes("/prijava") && (
        <div className="nav-holder">
          <Navigation customCssDiv={{ paddingRight: "2rem" }} />
        </div>
      )}

      <div className="burger">
        {appCtx.burger ? (
          <i
            className="fa-sharp fa-solid fa-xmark-large"
            id="burger-btn"
            onClick={appCtx.headerHandler}
          ></i>
        ) : (
          <i
            className="fa-sharp fa-solid fa-bars-staggered"
            id="burger-btn"
            onClick={appCtx.headerHandler}
          ></i>
        )}
      </div>
      {appCtx.modal && <Modal />}
    </header>
  );
};

export default Header;
