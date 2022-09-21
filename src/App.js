import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Action from "./components/Action/Action";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Action />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
