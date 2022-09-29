import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#50c878",
        "&:hover": {
          border: "2px solid #50c878",
          backgroundColor: "white",
          color: "black",
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
