import React, { useContext } from "react";
import { AppContext } from "../../util/app-context";
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
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <>
      {appContext.action.active && (
        <div className={classes.container} id="action">
          <div className={classes.content}>
            <Title title="Akcija" cssStyle={{ margin: "1rem auto" }} />
            <ActionDisplay action={appContext.action} />
          </div>
        </div>
      )}
    </>
  );
};

export default Action;
