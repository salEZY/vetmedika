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
      <Service icon="fa-thin fa-stethoscope" />
      <Service icon="fa-thin fa-tooth" />
      <Service icon="fa-thin fa-eye" />
      <Service icon="fa-thin fa-scalpel" />
      <Service icon="fa-thin fa-x-ray" />
      <Service icon="fa-thin fa-heart" />
      <Service icon="fa-thin fa-hand-dots" />
      <Service icon="fa-thin fa-brush" />
    </div>
  );
};

export default ServicesList;
