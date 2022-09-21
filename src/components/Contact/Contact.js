import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    width: "80%",
    background: "green",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>CONTACT</h1>
    </Container>
  );
};

export default Contact;
