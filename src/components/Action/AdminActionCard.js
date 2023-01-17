import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ActionDiv = styled.div`
  width: 200px;
  min-height: 200px;
  border: 4px solid #50c878;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px; /* some width */
  margin: 10px auto;
`;

const AdminActionCard = ({ action, editAction, deleteAction }) => {
  return (
    <ActionDiv>
      <div>
        <Title>{action.title}</Title>

        <p>
          Traje od {action.from} do {action.to}
        </p>
        <p style={{ marginTop: 10 }}>
          Aktivna:{" "}
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {action.active ? "Da" : "Ne"}
          </span>
        </p>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          variant="contained"
          style={{ margin: "10px auto" }}
          onClick={() => editAction(action)}
        >
          Izmeni
        </Button>
        <Button
          color="error"
          variant="contained"
          style={{ margin: "10px auto" }}
          onClick={() => deleteAction(action)}
        >
          Obriši
        </Button>
      </div>
    </ActionDiv>
  );
};

export default AdminActionCard;
