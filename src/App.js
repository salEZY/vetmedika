import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Action from "./components/Action/Action";
// import Services from "./components/Services/Services";
// import Contact from "./components/Contact/Contact";
import AllPages from "./components/AllPages/AllPages";
import Login from "./pages/Login/Login";
import AdminActions from "./pages/Admin/AdminActions";
import { HomeLayout } from "./routing/HomeLayout";
import { ProtectedLayout } from "./routing/ProtectedLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<AllPages />} />
          <Route path="/prijava" element={<Login />} />
        </Route>

        <Route path="/admin-panel" element={<ProtectedLayout />}>
          <Route path="akcije" element={<AdminActions />} />
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <Home />
      <Action />
      <Services />
      <Contact /> */}
    </div>
  );
}

export default App;
