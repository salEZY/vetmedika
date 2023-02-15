import React, { useRef, useContext } from "react";
import { AppContext } from "../../util/app-context";
import Navigation from "../FormsUI/Navigation/Navigation";
import Modal from "./Modal";
import Logo from "./Logo";

import "./Header.css";

const Header = () => {
  const appCtx = useContext(AppContext);
  const ref = useRef(null);

  return (
    <header ref={ref}>
      <Logo />
      {!window.location.href.includes("/prijava") && (
        <div className="nav-holder">
          <Navigation customCssDiv={{ paddingRight: "2rem" }} />
        </div>
      )}

      <div className="burger">
        {!window.location.href.includes("/prijava") && (
          <>
            <i
              className={
                appCtx.burger
                  ? "fa-sharp fa-solid fa-xmark-large"
                  : "fa-sharp fa-solid fa-bars-staggered"
              }
              id="burger-btn"
              onClick={appCtx.headerHandler}
            ></i>
          </>
        )}
      </div>
      {appCtx.modal && <Modal />}
    </header>
  );
};

export default Header;
