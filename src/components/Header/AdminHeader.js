import React from "react";
import { useAuth } from "../../routing/useAuth";

import "./Header.css";
import Logo from "./Logo";

const AdminHeader = () => {
  const { logout } = useAuth();

  return (
    <header>
      <Logo />
      <nav className="nav">
        <p
          onClick={logout}
          style={{ cursor: "pointer", marginRight: "1rem", animation: "none" }}
        >
          Odjava{" "}
          <i
            className="fa-sharp fa-solid fa-right-from-bracket"
            style={{ marginLeft: "5px" }}
          ></i>
        </p>
      </nav>
    </header>
  );
};

export default AdminHeader;
