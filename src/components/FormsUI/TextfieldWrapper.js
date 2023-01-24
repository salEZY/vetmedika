import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

const TextfieldWrapper = ({ name, value, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  useEffect(() => {
    if ((name && value !== undefined) || value !== undefined)
      setFieldValue(name, value);
  }, [name, value, setFieldValue]);

  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
