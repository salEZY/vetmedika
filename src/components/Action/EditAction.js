import React from "react";
import { Button, CircularProgress, Modal } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextfieldWrapper from "../FormsUI/TextfieldWrapper";
import ButtonWrapper from "../FormsUI/Button/ButtonWrapper";
import "./styles.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const FORM_VALIDATION = Yup.object().shape({
  naziv: Yup.string().required("Obavezno polje"),
});

export default function EditAction({
  data,
  modalOpen,
  setModal,
  setRefresh,
  setSeverityHandler,
  setSnackbarHandler,
}) {
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <>
      <div style={modalStyle} className="paper">
        <h2 className="title">Izmena akcije</h2>
        <Formik
          initialValues={{
            naziv: data.naziv,
            opis: data.opis,
            datumOd: data.datumOd,
            datumDo: data.datumDo,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="formDiv">
                <div className="tableRow">
                  <span className="tableRowLabel">Naziv</span>
                  <TextfieldWrapper name="naziv" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Opis</span>
                  <TextfieldWrapper name="opis" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Datum trajanja OD</span>
                  <TextfieldWrapper name="datumOd" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Datum trajanja DO</span>
                  <TextfieldWrapper name="datumDo" />
                </div>

                <ButtonWrapper
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size="0.9rem" />
                    ) : (
                      undefined
                    )
                  }
                  variant="contained"
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Izmeni akciju
                </ButtonWrapper>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={() => setModal(false)}
                >
                  Odustani
                </Button>
              </div>
            </Form>
          )}
        </Formik>
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
}
