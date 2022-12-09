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
    borderRadius: "10px",
    [theme.breakpoints.down(700)]: {
      width: "90%",
    },
  },
}));

const ServiceModal = ({ open, handleClose, type, title }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.servicesHolder}>
        <h3 style={{ margin: "2rem auto", fontSize: "2rem" }}>{title}</h3>
        {data[type].map((d) => {
          return (
            <p key={d} style={{ margin: "10px auto", fontSize: "1.2rem" }}>
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
