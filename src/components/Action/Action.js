import React, { useContext } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { AppContext } from "../../util/app-context";
import { makeStyles } from "@mui/styles";
import Title from "../FormsUI/Title/Title";
import ActionDisplay from "./ActionDisplay";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "30vh",
    width: "100%",
    margin: "0 auto",
    background: "linear-gradient(to right, #50c85a, #50c878)",
    clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  content: {
    margin: "2rem",
    padding: "1rem",
  },
  phoneButton: {
    textDecoration: "none",
    display: "block",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "bolder",
    margin: "1rem auto",
    padding: "10px",
    borderRadius: "5px",
    transition: ".2s all ease",
    background: "linear-gradient(to right, #50c878 , #50c85a)",
    color: "white",
    cursor: "pointer",
    outline: "0",
    border: "4px solid white",
    "&:hover": {
      background: "white",
      color: "#50c878",
    },
    [theme.breakpoints.down(700)]: {
      fontSize: "1.2rem",
    },
  },
}));

const Action = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <>
      <div className={classes.container} id="action">
        {appContext.loading ? (
          <LinearProgress
            style={{ background: "white", height: "5px", width: "80%" }}
          />
        ) : (
          <>
            {appContext.action.active ? (
              <div className={classes.content}>
                <Title title="Akcija" cssStyle={{ margin: "2rem auto" }} />
                <ActionDisplay action={appContext.action} />
              </div>
            ) : (
              <div>
                <p style={{ fontSize: "1.5rem" }}>Uskoro nove akcije!</p>
                <a href="tel:011 3822 802" className={classes.phoneButton}>
                  Pozovite nas
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Action;
