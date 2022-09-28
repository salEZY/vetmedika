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

const AdminActions = () => {
  // const [load, setLoad] = useState(false);
  const [action, setAction] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [refreshState, setRefreshState] = useState(false);

  const getAction = async () => {
    try {
      // setLoad(true);
      const { data } = await axios.get("/api/action");
      setAction(data);
      // setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!refreshState) getAction();
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
      {editOpen && action && (
        <EditAction
          data={action}
          modalOpen={editOpen}
          setModal={setEditOpen}
          setRefresh={setRefreshState}
        />
      )}
      {deleteOpen && action && (
        <DeleteAction
          data={action}
          modalOpen={deleteOpen}
          setModal={setDeleteOpen}
          setRefresh={setRefreshState}
        />
      )}
      <AddButton
        disabled={!!action}
        label="Nova akcija"
        onClick={() => setAddOpen(true)}
      />
      {action && (
        <AdminAction
          action={action}
          editAction={setEditOpen}
          deleteAction={setDeleteOpen}
        />
      )}
    </MainDiv>
  );
};

export default AdminActions;
