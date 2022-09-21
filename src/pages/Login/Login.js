import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Typography, Button } from "@mui/material";

import { useAuth } from "../../routing/useAuth";
import TextfieldWrapper from "../../components/FormsUI/TextfieldWrapper";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    #8fb0d5 -27.76%,
    rgba(0, 17, 37, 0.05) 117.4%
  );
  height: 100vh;
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justifycontent: center;
  alignitems: center;
  height: max-content;
  padding: 20px;
`;

const LeftSide = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.61) 0%,
    rgba(196, 196, 196, 0) 100%
  );
  border-radius: 10px 0px 0px 10px;
  background-color: white;
  flex: 1;
  padding: 60px 60px;
  max-width: 600px;
`;

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Neispravna lozinka")
    .required("Unesite email adresu"),
  password: Yup.string()
    .required("Unesite lozinku")
    .min(5, "Lozinka mora imati minimum 5 karaktera"),
});

const Login = () => {
  //   const navigate = useNavigate();
  const { login } = useAuth();
  //   const login = async (values, { setErrors, resetForm }) => {
  //     try {
  //       const response = await axios.post("/api/user/login", values);
  //       localStorage.setItem("token", response.data.token);
  //       navigate("/mz/kartoni");
  //       resetForm(INITIAL_FORM_STATE);
  //     } catch (error) {
  //       console.log(error);
  //       const err = error.response.data.message.includes("Pogrešan email/lozinka")
  //         ? "password"
  //         : error.response.data.message.includes("Korisnik ne postoji")
  //         ? "email"
  //         : "";

  //       setErrors({
  //         [err]: error.response.data.message,
  //       });
  //     }
  //   };

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
                      PRIJAVA
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="email"
                      variant="standard"
                      label="Email"
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
                        background:
                          "linear-gradient(180deg, #114077 0%, #114077 0.76%)",
                        boxShadow: "0px 4px 10px #2A2F43",
                        borderRadius: "15px",
                      }}
                    >
                      ULOGUJTE SE
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
