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
        <p onClick={logout} style={{ cursor: "pointer", marginRight: "1rem" }}>
          Odjava
        </p>
      </nav>
    </header>
  );
};

export default AdminHeader;
