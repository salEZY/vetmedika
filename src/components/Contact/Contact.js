import React, { useRef, useState, useLayoutEffect } from "react";
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    width: "100%",
    [theme.breakpoints.down(700)]: {
      width: "100%",
    },
  },
  contactDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <div className={classes.container} id="contact" ref={ref}>
      <div className={classes.contactDiv}>
        <Map height={height} />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
