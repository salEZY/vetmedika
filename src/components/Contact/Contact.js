import React from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "90vh",
    width: "80%",
    background: "green",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} id="contact">
      <Title title="Contact" />
    </Container>
  );
};

export default Contact;
