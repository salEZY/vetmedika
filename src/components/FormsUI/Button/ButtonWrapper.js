import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, buttonStyles, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    color: "primary",
    fullWidth: true,
    onSubmit: handleSubmit,
    ...otherProps,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
