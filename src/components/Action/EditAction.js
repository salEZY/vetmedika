import React from "react";
import { Button, CircularProgress, Modal } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextfieldWrapper from "../FormsUI/TextfieldWrapper";
import ButtonWrapper from "../FormsUI/Button/ButtonWrapper";
import "./styles.css";
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

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("Obavezno polje"),
});

export default function EditAction({ data, modalOpen, setModal, setRefresh }) {
  const [modalStyle] = React.useState(getModalStyle);

  const editAction = async (values) => {
    try {
      setRefresh(true);
      await axios.patch(`/api/action/${data._id}`, values);
      setModal(false);
      setRefresh(false);
    } catch (error) {
      console.log(error);
    }
  };

  const body = (
    <>
      <div style={modalStyle} className="paper">
        <h2 className="title">Izmena akcije</h2>
        <Formik
          initialValues={{
            title: data.title,
            description: data.description,
            from: data.from,
            to: data.to,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => editAction(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="formDiv">
                <div className="tableRow">
                  <span className="tableRowLabel">Naslov</span>
                  <TextfieldWrapper name="title" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Opis</span>
                  <TextfieldWrapper name="description" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Datum trajanja OD</span>
                  <TextfieldWrapper name="from" />
                </div>
                <div className="tableRow">
                  <span className="tableRowLabel">Datum trajanja DO</span>
                  <TextfieldWrapper name="to" />
                </div>

                <ButtonWrapper
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size="0.9rem" />
                    ) : undefined
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
