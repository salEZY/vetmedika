import React from "react";
import Action from "../Action/Action";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";

const AllPages = () => {
  return (
    <>
      <Home />
      <Action />
      <Services />
      <Contact />
    </>
  );
};

export default AllPages;
