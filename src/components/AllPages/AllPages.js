import React from "react";
import Action from "../Action/Action";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import ToTop from "../ToTop/ToTop";

const AllPages = () => {
  return (
    <>
      <Home />
      <Action />
      <Services />
      <Contact />
      <Footer />
      <ToTop />
    </>
  );
};

export default AllPages;
