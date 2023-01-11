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

        {/* {pages.map((page, id) => (
            <li key={id}>
              <Link to={page.path}>{page.label}</Link>
            </li>
          ))} */}
        {/* <ul>
          
          {value && value !== "null" && (
            <li>
              <a onClick={logout} style={{ cursor: "pointer" }}>
                Odjava
              </a>
            </li>
          )}
        </ul> */}
      </nav>
    </header>
  );
};

export default AdminHeader;
