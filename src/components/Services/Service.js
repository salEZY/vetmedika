import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ServiceModal from "./ServiceModal";

const useStyles = makeStyles((theme) => ({
  holder: {
    width: "20%",
    minHeight: "350px",
    margin: "2rem",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    color: "#353935",
    cursor: "pointer",
    boxShadow: "2px 2px 4px gray",
    transition: "all .1s ease-in",
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
      width: "90%",
      justifyContent: "center",
      minHeight: "250px",
    },
  },
  title: {
    margin: "10px auto",
    fontFamily: "Lato",
    fontSize: "1.55rem",
    [theme.breakpoints.down(700)]: {
      margin: "5px auto",
      fontSize: "1.3rem",
    },
  },
  iconP: {
    fontSize: "5rem",
    margin: "1rem 0 1rem 0",
  },
  link: {
    fontSize: "1.2rem",
    margin: "1rem auto",
    fontStyle: "italic",
    [theme.breakpoints.down(700)]: {
      fontSize: "1rem",
      margin: "5px auto",
    },
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
      <p className={classes.title}>{title}</p>
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
