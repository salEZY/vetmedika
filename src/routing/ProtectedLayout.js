import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./useAuth";
import AdminHeader from "../components/Header/AdminHeader";
// ...

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* <Header
        pages={[
          { label: "Moduli", path: "moduli" },
          { label: "Kategorije", path: "kategorije" },
          { label: "Tipovi", path: "tipovi" },
          { label: "Proizvođači", path: "proizvodjaci" },
          { label: "Roba", path: "roba" },
          { label: "Baneri", path: "baneri" },
        ]}
      /> */}
      <AdminHeader />
      {outlet}
    </div>
  );
};
