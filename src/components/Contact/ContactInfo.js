import React from "react";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";
import EmailLink from "../FormsUI/EmailLink";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    order: "2",
    [theme.breakpoints.down(700)]: {
      width: "100%",
      order: "1",
    },
  },
  info: {
    margin: "2rem auto",
  },
  infoP: {
    margin: "1rem auto",
    fontSize: "1.25rem",
    color: "black !important",
    [theme.breakpoints.down(700)]: {
      fontSize: "1.1rem",
    },
  },
  workingHours: {
    marginTop: "5rem",
    [theme.breakpoints.down(700)]: {
      margin: "2rem auto",
    },
  },
  question: {
    marginTop: "2rem",
    [theme.breakpoints.down(700)]: {
      marginTop: 0,
      marginBottom: "2rem",
    },
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  const faIcon = {
    color: "#50c878",
    marginRight: "10px",
    fontSize: "1.5rem",
    fontWeight: 500,
  };

  return (
    <div className={classes.container}>
      <Title title="Kontakt" cssStyle={{ margin: "1rem auto" }} />
      <div className={classes.info}>
        <p className={classes.infoP}>
          <i className="fa-thin fa-city" style={faIcon}></i> 11000 Beograd,
          Srbija
        </p>
        <p className={classes.infoP}>
          <i className="fa-thin fa-location-pin" style={faIcon}></i>Vojvode
          Šupljikca 43, Vračar
        </p>
        <p className={classes.infoP}>
          <i className="fa-thin fa-phone-rotary faIcon" style={faIcon}></i>{" "}
          011/3822-802, 011/3822-837
        </p>
        <p className={classes.infoP}>
          <i className="fa-thin fa-mobile-screen" style={faIcon}></i>{" "}
          063/1178-443, 064/9931-076
        </p>
        <p className={classes.infoP}>
          <i className="fa-thin fa-envelope" style={faIcon}></i>{" "}
          <EmailLink email="info@vetmedika.rs" color="black" />
        </p>
        <p className={classes.infoP}>
          <i className="fa-thin fa-browser" style={faIcon}></i>www.vetmedika.rs
        </p>
      </div>
      <div className={classes.workingHours}>
        <h3>Radno vreme:</h3>
        <p className={classes.infoP}>Ponedeljak-Petak 09:00 - 19:00</p>
        <p className={classes.infoP}>Subota 10:00 - 14:00</p>
        <p className={classes.infoP}>Nedelja 10:00 - 12:00</p>
      </div>
      <p className={classes.question}>
        Ukoliko imate bilo koje pitanje, ne ustručavajte se da nas pozovete.
      </p>
    </div>
  );
};

export default ContactInfo;
