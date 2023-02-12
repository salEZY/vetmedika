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
    clipPath: "polygon(0 10%, 100% 0, 100% 85%, 0% 100%)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  content: {
    width: "100%",
    padding: "1rem",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
  contactDiv: {
    [theme.breakpoints.down(700)]: {
      marginTop: "3rem",
    },
  },
  phoneButton: {
    fontFamily: "Lato",
    textDecoration: "none",
    display: "block",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "normal",
    margin: "1rem auto",
    padding: "10px",
    borderRadius: "2px",
    transition: "all .1s ease-in",
    background: "linear-gradient(to right, #50c878 , #50c85a)",
    color: "white",
    cursor: "pointer",
    outline: "0",
    border: "2px solid white",
    "&:hover": {
      background: "white",
      color: "#50c878",
    },
    [theme.breakpoints.down(700)]: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
    },
  },
  contactPara: {
    fontSize: "1.25rem",
    [theme.breakpoints.down(700)]: {
      fontSize: "1.1rem",
    },
  },
}));

const Action = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <>
      <div className={classes.container} id="action">
        <Title title="Akcija" cssStyle={{ margin: "1.5rem auto" }} />
        {appContext.loading ? (
          <LinearProgress
            style={{
              background: "white",
              height: "5px",
              width: "80%",
            }}
          />
        ) : (
          <>
            <div className={classes.content}>
              {appContext.action.active ? (
                <ActionDisplay action={appContext.action} />
              ) : (
                <p style={{ fontSize: "1.5rem" }}>
                  Trenutno nema aktivne akcije.
                </p>
              )}

              <div className={classes.contactDiv}>
                <p className={classes.contactPara}>
                  Pozovite nas za više informacija!
                </p>
                <a href="tel:011 3822802" className={classes.phoneButton}>
                  Pozovi <i className="fa-sharp fa-regular fa-phone"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Action;
