import React from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
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
      <Title title="Usluge" cssStyle={{ margin: "2rem auto" }} />
    </Container>
  );
};

export default Services;
