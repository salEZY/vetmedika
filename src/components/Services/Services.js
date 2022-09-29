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

const Services = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} id="services">
      <h1>SERVICES</h1>
    </Container>
  );
};

export default Services;
