import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "30vh",
    width: "80%",
    background: "green",
  },
});

const Action = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1>ACTION</h1>
    </Container>
  );
};

export default Action;
