import React from "react";
import { Button } from "@mui/material";

const AddButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={{
        fontSize: "1.25rem",
        fontFamily: "Lato",
        background: "linear-gradient(to right, #50c878 , #50c85a)",
        transition: "none",
        padding: "10px 25px",
        boxShadow: "none",
        border: "2px solid #50c878",
        "&:hover": {
          background: "white",
          color: "#50c878",
          boxShadow: "none",
        },
        borderRadius: "2px",
        margin: "10px auto",
      }}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      <span>
        {label} <i className="fa-sharp fa-plus"></i>
      </span>
    </Button>
  );
};

export default AddButton;
