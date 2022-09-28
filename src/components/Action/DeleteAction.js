import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, CircularProgress } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import "../Action/styles.css";
import { axiosAuth as axios } from "../../util/axios-instance";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const DeleteAction = ({
  data,
  modalOpen,
  setModal,
  setRefresh,
  setSeverityHandler,
  setSnackbarHandler,
}) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteAction = async (id) => {
    try {
      setIsSubmitting(true);
      setRefresh(true);
      await axios.delete(`/api/action/${id}`);
      setIsSubmitting(false);
      setModal(false);
      // setSeverityHandler("success");
      // setSnackbarHandler({
      //   open: true,
      //   message: res.data.message,
      // });
      setRefresh(false);
    } catch (error) {
      console.log(error);
      // setIsSubmitting(false);
      // setSeverity("warning");
      // setSnackbar({
      //   open: true,
      //   message: error?.response?.data?.message
      //     ? error.response.data.message
      //     : "Filter delete failed.",
      // });
    }
  };

  const body = (
    <>
      <div style={modalStyle} className="paper">
        <div className="formDiv" style={{ textAlign: "center" }}>
          <WarningIcon className="warning" style={{ fontSize: 50 }} />

          <h3>Da li ste sigurni?</h3>
          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={
              isSubmitting ? <CircularProgress size="0.9rem" /> : undefined
            }
            onClick={() => deleteAction(data._id)}
            style={{ margin: "10px 0" }}
          >
            Obriši
          </Button>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => setModal(false)}
          >
            Odustani
          </Button>
        </div>{" "}
      </div>
    </>
  );

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default DeleteAction;
