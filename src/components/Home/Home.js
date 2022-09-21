import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "85vh",
    width: "80%",
    background: "green",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1>HOME</h1>
    </Container>
  );
};

export default Home;
