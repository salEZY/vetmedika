import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ServiceModal from "./ServiceModal";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  holder: {
    width: "20%",
    height: "340px",
    margin: "2rem",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    color: "#353935",
    cursor: "pointer",
    transition: ".2 all ease",
    "&:hover": {
      color: "#50c878",
      borderColor: "#50c878",
    },
    border: "3px solid #353935",
    borderRadius: "5px",
    [theme.breakpoints.down(1000)]: {
      width: "30%",
    },
    [theme.breakpoints.down(700)]: {
      margin: "1rem auto",
      width: "80%",
      height: "300px",
    },
  },
  iconP: {
    fontSize: "5rem",
    margin: "1rem 0 3rem 0",
  },
  link: {
    fontSize: "1.5rem",
    margin: "1rem auto",
  },
}));

const Service = ({ icon, title, type }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.holder} title={title} onClick={handleModal}>
      <p className={classes.iconP}>
        <i className={icon} />
      </p>

      <p className={classes.link}>Saznajte više...</p>
      <ServiceModal
        open={open}
        handleClose={handleModal}
        type={type}
        title={title}
      />
    </div>
  );
};

export default Service;
