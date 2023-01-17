import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={{
        fontFamily: "Lato",
        background: "linear-gradient(to right, #50c878 , #50c85a)",
        transition: "none",
        padding: "5px 25px",
        boxShadow: "none",
        border: "2px solid #50c878",
        "&:hover": {
          background: "white",
          color: "#50c878",
          boxShadow: "none",
        },
        borderRadius: "20px",
      }}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      <AddIcon />
      <span>{label}</span>
    </Button>
  );
};

export default AddButton;
