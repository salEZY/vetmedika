import React from "react";
import { makeStyles } from "@mui/styles";
import Service from "./Service";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "1rem",
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
      paddingTop: "1rem",
    },
  },
}));

const ServicesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Service
        icon="fa-thin fa-stethoscope"
        title="Internistički kabinet"
        type="intern"
      />
      <Service icon="fa-thin fa-tooth" title="Stomatologija" type="teeth" />
      <Service icon="fa-thin fa-eye" title="Oftamološki kabinet" type="oftal" />
      <Service
        icon="fa-thin fa-scalpel-line-dashed"
        title="Hirurgija"
        type="surgery"
      />
      <Service
        icon="fa-thin fa-x-ray"
        title="Ultrazvuk i Rendgen"
        type="xray"
      />
      <Service icon="fa-thin fa-heart" title="Kardiologija" type="heart" />
      <Service icon="fa-thin fa-paw" title="Dermatologija" type="derma" />
      <Service
        icon="fa-thin fa-toothbrush"
        title="Ulepšavanje i održavanje higijene kućnih ljubimaca"
        type="grooming"
      />
    </div>
  );
};

export default ServicesList;
