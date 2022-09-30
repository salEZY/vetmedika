import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    height: "10vh",
    background: "green",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} id="footer">
      BLA
    </footer>
  );
};

export default Footer;
