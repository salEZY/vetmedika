import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1rem auto",
    fontSize: "2rem",
    fontStyle: "italic",
    animation: "actionHighlight 2s infinite ease",
  },
  paragraph: {
    margin: "1rem auto",
    fontSize: "1.3rem",
    animation: "actionHighlight 2s infinite ease",
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
      <p className={classes.paragraph}>
        Traje od <span className={classes.date}>{action.from}</span> do{" "}
        <span className={classes.date}>{action.to}</span>
      </p>
      <p className={classes.paragraph}>{action.description}</p>
    </div>
  );
};

export default ActionDisplay;
