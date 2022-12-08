import React from "react";
import { makeStyles } from "@mui/styles";
import Navigation from "../FormsUI/Navigation/Navigation";

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    top: "15vh",
    width: "100%",
    height: "85vh",
    zIndex: 10,
    color: "white",
    background: "#50c85a",
    borderTop: "1px solid white",
  },
  modalHolder: {
    marginTop: "15vh",
  },
});

const Modal = () => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <div className={classes.modalHolder}>
        <Navigation
          customCssDiv={{
            flexDirection: "column",
            justifyContent: "space-apart",
          }}
          customCssLink={{ margin: "2rem auto", fontSize: "2.5rem" }}
        />
      </div>
    </div>
  );
};
export default Modal;
