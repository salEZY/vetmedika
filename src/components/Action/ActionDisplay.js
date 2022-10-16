import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1rem auto",
  },
  paragraph: {
    textAlign: "left",
    margin: "1rem auto",
    fontSize: "1.25rem",
  },
}));

const ActionDisplay = ({ action }) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.title}>{action.title}</h3>
      <p className={classes.paragraph}>
        Traje od {action.from} do {action.to}
      </p>
      <p className={classes.paragraph}>{action.description}</p>
    </div>
  );
};

export default ActionDisplay;
