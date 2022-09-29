import React, { useEffect, useState } from "react";
import AddButton from "../../components/FormsUI/Button/AddButton";
import styled from "styled-components";
import AdminAction from "../../components/Action/AdminActionCard";
import AddAction from "../../components/Action/AddAction";
import EditAction from "../../components/Action/EditAction";
import DeleteAction from "../../components/Action/DeleteAction";
import { axiosAuth as axios } from "../../util/axios-instance";

const MainDiv = styled.div`
  text-align: left;
  padding: 15px;
`;

const ActionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AdminActions = () => {
  // const [load, setLoad] = useState(false);
  const [actions, setActions] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [refreshState, setRefreshState] = useState(false);
  const [actionData, setActionData] = useState(null);

  const getActions = async () => {
    try {
      // setLoad(true);
      const { data } = await axios.get("/api/action");
      setActions(data);
      // setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editActionHandler = (data) => {
    setActionData(data);
    setEditOpen(true);
  };

  const deleteActionHandler = (data) => {
    setActionData(data);
    setDeleteOpen(true);
  };

  useEffect(() => {
    if (!refreshState) getActions();
  }, [refreshState]);

  return (
    <MainDiv>
      {addOpen && (
        <AddAction
          modalOpen={addOpen}
          setModal={setAddOpen}
          setRefresh={setRefreshState}
        />
      )}
      {editOpen && actionData && (
        <EditAction
          data={actionData}
          modalOpen={editOpen}
          setModal={setEditOpen}
          setRefresh={setRefreshState}
        />
      )}
      {deleteOpen && actionData && (
        <DeleteAction
          data={actionData}
          modalOpen={deleteOpen}
          setModal={setDeleteOpen}
          setRefresh={setRefreshState}
        />
      )}
      <AddButton label="Nova akcija" onClick={() => setAddOpen(true)} />

      <ActionsDiv>
        {actions.map((action) => (
          <AdminAction
            key={action._id}
            action={action}
            editAction={editActionHandler}
            deleteAction={deleteActionHandler}
          />
        ))}
      </ActionsDiv>
    </MainDiv>
  );
};

export default AdminActions;
