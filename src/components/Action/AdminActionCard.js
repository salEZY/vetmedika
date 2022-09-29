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

const Title = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px; /* some width */
`;
const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px; /* some width */
`;

const AdminActionCard = ({ action, editAction, deleteAction }) => {
  console.log(action);
  return (
    <ActionDiv>
      <div>
        <Title>{action.title}</Title>
        <Description>{action.description}</Description>
        <p>
          Traje od {action.from} do {action.to}
        </p>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ marginRight: 10 }}
          onClick={() => editAction(action)}
        >
          Izmeni
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => deleteAction(action)}
        >
          Obriši
        </Button>
      </div>
    </ActionDiv>
  );
};

export default AdminActionCard;
