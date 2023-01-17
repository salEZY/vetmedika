import React from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../../routing/useAuth";

import "./Header.css";

const AdminHeader = () => {
  const { logout } = useAuth();
  //   const value = window.localStorage.getItem("user");

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Vetmedika logo" />
      </div>

      <nav className="nav">
        <p onClick={logout} style={{ cursor: "pointer", marginRight: "1rem" }}>
          Odjava
        </p>
      </nav>
    </header>
  );
};

export default AdminHeader;
