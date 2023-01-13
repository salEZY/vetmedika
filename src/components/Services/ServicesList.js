import React from "react";
import { makeStyles } from "@mui/styles";
import Service from "./Service";
import { serviceInfo } from "../../util/data";

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
      {serviceInfo &&
        serviceInfo?.map((item) => {
          return (
            <Service
              icon={item.icon}
              title={item.title}
              type={item.type}
              key={item.title}
            />
          );
        })}
    </div>
  );
};

export default ServicesList;
