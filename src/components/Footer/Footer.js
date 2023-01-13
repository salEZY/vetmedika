import React from "react";
import { makeStyles } from "@mui/styles";
import Navigation from "../FormsUI/Navigation/Navigation";
import CustomLink from "../FormsUI/CustomLink";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    minHeight: "10vh",
    background: "linear-gradient(to right, #353935, #0f100f)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
  info: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    [theme.breakpoints.down(700)]: {
      marginTop: "1rem",
    },
  },
  infoParagraph: {
    textShadow: "0",
    [theme.breakpoints.down(700)]: {
      marginTop: "1rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} id="footer">
      <Navigation
        customCssDiv={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        customCssLink={{
          margin: "5px auto",
          fontSize: "1.25rem",
          color: "white",
        }}
      />
      <div className={classes.info}>
        <p className={classes.infoParagraph}>
          Copyright <i className="fa-light fa-copyright"></i> 2023
        </p>
        <p className={classes.infoParagraph}> Razvoj aplikacije:</p>
        <p className={classes.infoParagraph}>
          <CustomLink link="bobicaleks@yahoo.com" type="email" color="white" />{" "}
          <CustomLink link="igor.lakic2@gmail.com" type="email" color="white" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
