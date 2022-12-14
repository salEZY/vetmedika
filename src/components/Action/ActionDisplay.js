import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1rem auto",
  },
  paragraph: {
    margin: "1rem auto",
    fontSize: "1.25rem",
  },
  date: {
    fontStyle: "italic",
  },
}));

const ActionDisplay = ({ action }) => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "left" }}>
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
