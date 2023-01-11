import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  titleDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(700)]: {
      marginTop: "1rem",
    },
  },
  span: {
    display: "inline",
    fontSize: "3rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    fontStyle: "oblique",
    position: "relative !important",
    [theme.breakpoints.down(700)]: {
      fontSize: "2rem",
    },
  },
  line: {
    width: "100px",
    height: "7.5px",
    margin: "0 auto",
    marginTop: "5px",
    borderRadius: "5px",
    backgroundColor: "#50c878",
    [theme.breakpoints.down(700)]: {
      width: "50px",
    },
  },
}));

const Title = ({ title, cssStyle }) => {
  const classes = useStyles();

  return (
    <div className={classes.titleDiv} style={cssStyle}>
      <span className={classes.span}>{title}</span>
      <span
        className={classes.line}
        style={{
          backgroundColor: title === "Akcija" ? "#fff" : "#50c878",
        }}
      ></span>
    </div>
  );
};

export default Title;
