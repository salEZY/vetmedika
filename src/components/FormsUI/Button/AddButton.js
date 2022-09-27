import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#F6AE2D",
        "&:hover": {
          backgroundColor: "#F6AE2D",
        },
        borderRadius: "20px",
        margin: "10px 0",
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
