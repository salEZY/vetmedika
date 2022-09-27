import React, { useState } from "react";
import AddButton from "../../components/FormsUI/Button/AddButton";
import styled from "styled-components";
import AdminAction from "../../components/Action/AdminActionCard";
import AddAction from "../../components/Action/AddAction";
import EditAction from "../../components/Action/EditAction";
import DeleteAction from "../../components/Action/DeleteAction";

const MainDiv = styled.div`
  text-align: left;
  padding: 15px;
`;

const AdminActions = () => {
  const [actions, setActions] = useState([
    {
      naziv: "Akcija 1",
      opis:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam ipsum. In cursus volutpat neque eget sollicitudin. Aliquam sed vehicula nibh, ut dapibus velit. Mauris laoreet a sapien vitae elementum. Phasellus ultricies dolor est, sit amet tincidunt nulla pulvinar et. Morbi et sem sed lacus feugiat rutrum aliquam non nisl. Nunc tempor sed mi a gravida. ",
      datumOd: "01.10.2022.",
      datumDo: "11.10.2022.",
    },
  ]);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <MainDiv>
      {addOpen && <AddAction modalOpen={addOpen} setModal={setAddOpen} />}
      {editOpen && actions[0] && (
        <EditAction
          data={actions[0]}
          modalOpen={editOpen}
          setModal={setEditOpen}
        />
      )}
      {deleteOpen && actions[0] && (
        <DeleteAction
          data={actions[0]}
          modalOpen={deleteOpen}
          setModal={setDeleteOpen}
        />
      )}
      <AddButton
        disabled={actions.length > 0}
        label="Nova akcija"
        onClick={() => setAddOpen(true)}
      />
      {actions.length > 0 && (
        <AdminAction
          action={actions[0]}
          editAction={setEditOpen}
          deleteAction={setDeleteOpen}
        />
      )}
    </MainDiv>
  );
};

export default AdminActions;
