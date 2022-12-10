import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import data from "../../util/data";

const useStyles = makeStyles((theme) => ({
  servicesHolder: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "50%",
    padding: "2rem",
    background: "white",
    textAlign: "center",
    border: "none",
    borderRadius: "10px",
    [theme.breakpoints.down(700)]: {
      padding: "10px",
      margin: "1rem auto",
      width: "95%",
    },
  },
  title: {
    margin: "2rem auto",
    fontSize: "2rem",
    [theme.breakpoints.down(700)]: {
      margin: "10px auto",
      fontSize: "1.5rem",
    },
  },
  item: {
    margin: "10px auto",
    fontSize: "1.2rem",
    [theme.breakpoints.down(700)]: {
      margin: "5px auto",
      fontSize: "1rem",
    },
  },
}));

const ServiceModal = ({ open, handleClose, type, title }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose} style={{ overflow: "scroll" }}>
      <div className={classes.servicesHolder}>
        <h3 className={classes.title}>{title}</h3>
        {data[type].map((d) => {
          return (
            <p key={d} className={classes.item}>
              {" "}
              <i
                className="fa-sharp fa-solid fa-period"
                style={{
                  marginRight: "10px",
                  color: "#50c878",
                  fontWeight: "900",
                  fontSize: "1.5rem",
                }}
              ></i>{" "}
              {d}
            </p>
          );
        })}
      </div>
    </Modal>
  );
};

export default ServiceModal;
