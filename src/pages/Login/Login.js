import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Typography, Button } from "@mui/material";

import { useAuth } from "../../routing/useAuth";
import TextfieldWrapper from "../../components/FormsUI/TextfieldWrapper";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  border-radius: 10px 0px 0px 10px;
  border: 3px solid #50c878;
  @media (max-width: 700px) {
    border: 0;
  }
`;

const LeftSide = styled.div`
  border-radius: 10px 0px 0px 10px;
  background-color: white;
  flex: 1;
  padding: 60px 60px;
  max-width: 600px;
`;

const INITIAL_FORM_STATE = {
  username: "",
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required("Unesite korisničko ime."),
  password: Yup.string()
    .required("Unesite lozinku")
    .min(5, "Lozinka mora imati minimum 5 karaktera"),
});

const Login = () => {
  const { login } = useAuth();

  return (
    <Root>
      <CenterContainer>
        <LeftSide>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={login}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={4} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#6B6A6A",
                      }}
                    >
                      Prijava
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="username"
                      variant="standard"
                      label="Korisničko ime"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="password"
                      type="password"
                      variant="standard"
                      label="Lozinka"
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <Button
                      fullWidth
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      // className={classes.buttonSub}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "1.2rem",
                        background:
                          "linear-gradient(to right, #50c878 , #50c85a)",
                        borderRadius: "5px",
                        border: "3px solid #50c878",
                        boxShadow: "none",
                        transition: "none",
                        ":hover": {
                          background: "white",
                          color: "#50c878",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Prijavite se
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </LeftSide>
      </CenterContainer>
    </Root>
  );
};

export default Login;
