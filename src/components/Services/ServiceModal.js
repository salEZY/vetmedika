import React from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  servicesHolder: {
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80%",
    minHeight: "500px",
    padding: "1rem",
    background: "white",
    textAlign: "center",
  },
}));

const ServiceModal = ({ open, handleClose, type }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.servicesHolder}>BLA</div>
    </Modal>
  );
};

export default ServiceModal;
