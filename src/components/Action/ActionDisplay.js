import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1rem auto",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontStyle: "italic",
    animation: "actionHighlight 1.5s infinite ease",
    [theme.breakpoints.down(700)]: {
      fontSize: "1.75rem",
    },
  },
  paragraph: {
    textAlign: "left",
    margin: "1rem auto",
    fontSize: "1.4rem",
    animation: "actionHighlight 1.5s infinite ease",
    [theme.breakpoints.down(700)]: {
      fontSize: "1.25rem",
    },
  },

  dateParagraph: {
    textAlign: "left",
    fontSize: "1.15rem",
    animation: "actionHighlight 1.5s infinite ease",
    [theme.breakpoints.down(700)]: {
      fontSize: "1.1rem",
    },
  },
  date: {
    fontStyle: "italic",
    fontWeight: "600",
  },
}));

const ActionDisplay = ({ action }) => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className={classes.title}>{action.title}</h2>
      <p className={classes.dateParagraph}>
        Traje od <span className={classes.date}>{action.from}</span> do{" "}
        <span className={classes.date}>{action.to}</span>
      </p>
      <p className={classes.paragraph}>{action.description}</p>
    </div>
  );
};

export default ActionDisplay;
