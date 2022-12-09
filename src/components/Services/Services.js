import React from "react";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";
import ServicesList from "./ServicesList";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
  },
});

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="services">
      <Title title="Usluge" cssStyle={{ margin: "2rem auto" }} />
      <ServicesList />
    </div>
  );
};

export default Services;
