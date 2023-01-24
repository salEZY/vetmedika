import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    transition: "all 0.2s ease",
    margin: "0 5px",
  },
}));

const CustomLink = ({ link, type, color }) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const types = {
    email: "mailto:",
    phone: "tel:",
    web: "http://",
  };

  const hoverHandler = () => setHover(!hover);

  const linkStyle = hover ? { color: "#50c878" } : { color: color };
  return (
    <>
      {type === "web" ? (
        <a
          href={`${types[type]}${link}`}
          className={classes.link}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      ) : (
        <a
          href={`${types[type]}${link}`}
          className={classes.link}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          style={linkStyle}
        >
          {link}
        </a>
      )}
    </>
  );
};

export default CustomLink;
