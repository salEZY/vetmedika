import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  info: {
    margin: "2rem auto",
  },
  workingHours: { marginTop: "5rem" },
});

const ContactInfo = () => {
  const classes = useStyles();

  const infoP = {
    margin: "1rem auto",
    fontSize: "1.25rem",
  };

  const faIcon = {
    color: "#50c878",
    marginRight: "10px",
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <p style={infoP}>
          <i className="fa-solid fa-location-pin" style={faIcon}></i>Vojvode
          Šupljikca 43, Vračar
        </p>
        <p style={infoP}>
          <i className="fa-solid fa-phone-rotary faIcon" style={faIcon}></i>{" "}
          011/3822-802, 011/3822-837
        </p>
        <p style={infoP}>
          <i className="fa-solid fa-envelope" style={faIcon}></i>{" "}
          info@vetmedika.rs
        </p>
        <p style={infoP}>
          <i className="fa-solid fa-browser" style={faIcon}></i>www.vetmedika.rs
        </p>
        <p style={infoP}>
          <i className="fa-solid fa-mobile-screen" style={faIcon}></i>{" "}
          063/1178-443, 064/9931-076
        </p>
      </div>
      <div className={classes.workingHours}>
        <h3>Radno vreme:</h3>
        <p style={infoP}>Ponedeljak-Petak 09:00 - 19:00</p>
        <p style={infoP}>Subota 10:00 - 14:00</p>
        <p style={infoP}>Nedelja 10:00 - 12:00</p>
      </div>
    </div>
  );
};

export default ContactInfo;
