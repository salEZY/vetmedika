import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  holder: {
    width: "20%",
    height: "300px",
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
  },
  iconP: {
    fontSize: "5rem",
    margin: "1rem 0 3rem 0",
  },
  link: {
    fontSize: "1.2rem",
    margin: "1rem auto",
  },
}));

const Service = ({ icon }) => {
  const classes = useStyles();

  return (
    <div className={classes.holder}>
      <p className={classes.iconP}>
        <i className={icon} />
      </p>

      <p className={classes.link}>Saznajte više...</p>
    </div>
  );
};

export default Service;
