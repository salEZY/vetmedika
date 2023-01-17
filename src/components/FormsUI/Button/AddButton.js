import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={{
        background: "linear-gradient(to right, #50c878 , #50c85a)",
        transition: "none",
        "&:hover": {
          border: "2px solid #50c878",
          background: "white",
          color: "#50c878",
          boxShadow: "none",
        },
        borderRadius: "20px",
        margin: "10px 0",
        border: "2px solid #50c878",
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
