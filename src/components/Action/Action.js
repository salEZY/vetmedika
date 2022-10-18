import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Title from "../FormsUI/Title/Title";
import ActionDisplay from "./ActionDisplay";

const useStyles = makeStyles({
  container: {
    minHeight: "30vh",
    width: "100%",
    margin: "0 auto",
    background: "#50c878",
    clipPath:
      "polygon(1% 2%, 16% 1%, 39% 0%, 83% 4%, 100% 0%, 100% 24%, 99% 48%, 100% 75%, 100% 100%, 75% 97%, 45% 100%, 1% 100%, 1% 81%, 0% 56%)",
    padding: "10px",
  },
  content: {
    background: "white",
    margin: "25px",
    borderRadius: "5px",
    padding: "10px",
  },
});

const Action = () => {
  const [action, setAction] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("http://localhost:6060/api/action/get/active");
      setAction(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {action.active && (
        <div className={classes.container} id="action">
          <div className={classes.content}>
            <Title title="Akcija" cssStyle={{ margin: "1rem auto" }} />
            <ActionDisplay action={action} />
          </div>
        </div>
      )}
    </>
  );
};

export default Action;
