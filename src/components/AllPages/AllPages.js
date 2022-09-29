import React, { useEffect } from "react";
import Action from "../Action/Action";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";
import { axiosAuth as axios } from "../../util/axios-instance";

const AllPages = () => {
  const getActive = async () => {
    try {
      const active = await axios.get("/api/action/get/active");
      console.log("active", active);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActive();
  }, []);

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
