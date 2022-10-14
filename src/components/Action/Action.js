import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Title from "../FormsUI/Title/Title";

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
    <Container className={classes.container} id="action">
      <Title title="Action" />
    </Container>
  );
};

export default Action;
