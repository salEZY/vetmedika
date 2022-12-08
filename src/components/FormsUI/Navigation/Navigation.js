import React, { useContext } from "react";
import { Link } from "react-scroll";
import { AppContext } from "../../../util/app-context";

import "./Navigation.css";

const Navigation = ({ customCssDiv, customCssLink }) => {
  const appContext = useContext(AppContext);
  return (
    <div className="nav" style={customCssDiv}>
      {appContext.action.active && (
        <p style={customCssLink}>
          <Link
            to="action"
            spy={true}
            smooth={true}
            duration={300}
            onClick={appContext.linkHandler}
          >
            Akcije
          </Link>
        </p>
      )}

      <p style={customCssLink}>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={300}
          onClick={appContext.linkHandler}
        >
          Usluge
        </Link>
      </p>
      <p style={customCssLink}>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={300}
          onClick={appContext.linkHandler}
        >
          Kontakt
        </Link>
      </p>
    </div>
  );
};

export default Navigation;
