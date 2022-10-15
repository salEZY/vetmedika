import React, { useRef, useState, useLayoutEffect } from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
import ContactInfo from "./ContactInfo";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "90vh",
    width: "80%",
  },
  contactDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  map: {
    width: "50%",
    height: "100% !important",
  },
  iFrame: {
    border: "0",
  },
});

const Contact = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <Container className={classes.container} id="contact" ref={ref}>
      <Title title="Contact" />
      <div className={classes.contactDiv}>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11324.550955533508!2d20.4865414!3d44.7983815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6fa8b00afcfac19!2sVetmedika!5e0!3m2!1sen!2srs!4v1665820137064!5m2!1sen!2srs"
            className={classes.iFrame}
            width="100%"
            height={height}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VETMEDIKA"
          ></iframe>
        </div>
        <ContactInfo />
      </div>
    </Container>
  );
};

export default Contact;
