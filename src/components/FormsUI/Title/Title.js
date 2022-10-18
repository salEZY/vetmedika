import React from "react";
import "./Title.css";
/* import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  title: {
    textAlign: "center",
    fontSize: "3rem",
    fontFamily: "Signika",
    margin: "3rem auto",
    textTransform: "uppercase",
    fontStyle: "oblique",
    position: "relative !important",
    "&,&:after": {
      content: "",
      display: "block",
      width: "60px",
      height: "5px",
      margin: "0 auto",
      marginTop: "5px",
      background: "#50c878",
    },
  },
}); */

const Title = ({ title, cssStyle }) => {
  //const classes = useStyles();
  return (
    <div className="title-div" style={cssStyle}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
