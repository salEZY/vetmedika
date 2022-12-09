import React from "react";
import { makeStyles } from "@mui/styles";
import Service from "./Service";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "1rem auto",
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
}));

const ServicesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Service
        icon="fa-thin fa-stethoscope"
        title="INTERNISTIČKI KABINET"
        type="intern"
      />
      <Service icon="fa-thin fa-tooth" title="STOMATOLOGIJA" type="teeth" />
      <Service
        icon="fa-thin fa-eye"
        title="OFTALMOLOŠKI KABINET"
        type="oftal"
      />
      <Service
        icon="fa-thin fa-scalpel-line-dashed"
        title="HIRURGIJA"
        type="surgery"
      />
      <Service
        icon="fa-thin fa-x-ray"
        title="ULTRAZVUČNA I RENDGEN DIJAGNOSTIKA"
        type="xray"
      />
      <Service icon="fa-thin fa-heart" title="KARDIOLOGIJA" type="heart" />
      <Service icon="fa-thin fa-paw" title="DERMATOLOGIJA" type="derma" />
      <Service
        icon="fa-thin fa-toothbrush"
        title="ULEPŠAVANJE I ODRŽAVANJE HIGIJENE KUĆNIH LJUBIMACA"
        type="grooming"
      />
    </div>
  );
};

export default ServicesList;
