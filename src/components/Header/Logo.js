import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { AppContext } from "../../util/app-context";

const useStyles = makeStyles({
  logo: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "2rem",
    cursor: "pointer",
  },
});

const Logo = () => {
  const classes = useStyles();
  const appCtx = useContext(AppContext);

  let imgSrc =
    appCtx.width > 700
      ? require("../../assets/logo.png")
      : require("../../assets/logoSmall.png");

  return (
    <div className={classes.logo}>
      <a href="/vetmedika">
        <img src={imgSrc} alt="Vetmedika logo" />
      </a>
    </div>
  );
};

export default Logo;
