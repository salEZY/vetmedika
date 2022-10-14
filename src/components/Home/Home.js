import React from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "85vh",
    width: "80%",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="Dobrodosli" />
    </Container>
  );
};

export default Home;
