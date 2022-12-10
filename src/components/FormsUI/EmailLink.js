import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    transition: "0.2s all ease",
  },
}));

const EmailLink = ({ email, color }) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const hoverHandler = () => setHover(!hover);

  const linkStyle = hover ? { color: "#50c878" } : { color: color };
  return (
    <a
      href={`mailto:${email}`}
      className={classes.link}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      style={linkStyle}
    >
      {email}
    </a>
  );
};

export default EmailLink;
