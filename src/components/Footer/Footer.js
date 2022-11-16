import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    minHeight: "10vh",
    background: "black",
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
