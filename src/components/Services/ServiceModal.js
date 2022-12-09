import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import data from "../../util/data";

const useStyles = makeStyles((theme) => ({
  servicesHolder: {
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80%",
    padding: "1rem",
    background: "white",
    textAlign: "center",
  },
}));

const ServiceModal = ({ open, handleClose, type, title }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.servicesHolder}>
        <h3 style={{ margin: "2rem auto" }}>{title}</h3>
        {data[type].map((d) => {
          return (
            <p key={d} style={{ margin: "10px auto" }}>
              {" "}
              <i
                className="fa-sharp fa-solid fa-period"
                style={{
                  marginRight: "10px",
                  color: "#50c878",
                  fontWeight: "900",
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
