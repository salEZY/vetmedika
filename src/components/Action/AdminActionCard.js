import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ActionDiv = styled.div`
  width: 80%;
  min-height: 200px;
  border: 2px solid black;
  padding: 15px;
`;

const AdminActionCard = ({ action, editAction, deleteAction }) => {
  return (
    <ActionDiv>
      <h1>{action.naziv}</h1>
      <p>{action.opis}</p>
      <p>
        Traje od {action.datumOd} do {action.datumDo}
      </p>
      <div>
        <Button
          variant="contained"
          style={{ marginRight: 10 }}
          onClick={() => editAction(true)}
        >
          Izmeni
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => deleteAction(true)}
        >
          Obriši
        </Button>
      </div>
    </ActionDiv>
  );
};

export default AdminActionCard;
