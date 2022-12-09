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
      <Service icon="fa-thin fa-stethoscope" title="INTERNISTIČKI KABINET" />
      <Service icon="fa-thin fa-tooth" title="STOMATOLOGIJA" />
      <Service icon="fa-thin fa-eye" title="OFTALMOLOŠKI KABINET" />
      <Service icon="fa-thin fa-scalpel-line-dashed" title="HIRURGIJA" />
      <Service
        icon="fa-thin fa-x-ray"
        title="ULTRAZVUČNA I RENDGEN DIJAGNOSTIKA"
      />
      <Service icon="fa-thin fa-heart" title="KARDIOLOGIJA" />
      <Service icon="fa-thin fa-paw" title="DERMATOLOGIJA" />
      <Service
        icon="fa-thin fa-toothbrush"
        title="ULEPŠAVANJE I ODRŽAVANJE HIGIJENE KUĆNIH LJUBIMACA"
      />
    </div>
  );
};

export default ServicesList;
