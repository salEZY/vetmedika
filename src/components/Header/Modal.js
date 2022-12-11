import React from "react";
import { makeStyles } from "@mui/styles";
import Navigation from "../FormsUI/Navigation/Navigation";
import EmailLink from "../FormsUI/EmailLink";

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    top: "15vh",
    width: "100%",
    height: "85vh",
    zIndex: 10,
    color: "white",
    background: "linear-gradient(to right, #50c85a, #50c878)",
  },
  modalHolder: {
    marginTop: "15vh",
  },
  iconHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "3.5rem",
    marginTop: "3rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});

const Modal = () => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <div className={classes.modalHolder}>
        <Navigation
          customCssDiv={{
            flexDirection: "column",
            justifyContent: "space-apart",
          }}
          customCssLink={{ margin: "2rem auto", fontSize: "2.5rem" }}
        />
        <div className={classes.iconHolder}>
          <a
            href="https://www.google.com/maps/place/Vetmedika/@44.7983815,20.4865414,15z/data=!4m5!3m4!1s0x0:0xb6fa8b00afcfac19!8m2!3d44.7983345!4d20.4864682"
            className={classes.link}
            target="_blank"
          >
            <i
              className="fa-thin fa-map-location"
              style={{ margin: "0 1rem", cursor: "pointer" }}
              title="Lokacija ordinacije"
            ></i>
          </a>
          <a href="mailto:info@vetmedika.rs" className={classes.link}>
            <i
              className="fa-thin fa-envelope"
              style={{ margin: "0 1rem", cursor: "pointer" }}
              title="Pošaljite nam email"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Modal;
