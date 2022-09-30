import React, { useState } from "react";
import { css } from "@emotion/css";
import { makeStyles } from "@mui/styles";

import "./ToTop.css";

const useStyles = makeStyles({});

const ToTop = () => {
  const classes = useStyles();
  const [bottom, setBottom] = useState("5%");
  const [right, setRight] = useState("-120px");

  const style = css`
    bottom: ${bottom};
    right: ${right};
  `;

  window.onscroll = () => {
    let footer = document.querySelector("#footer");
    let contact = document.querySelector("#contact");

    if (window.scrollY > 750) {
      if (footer) {
        console.log("usao");
        let btnBottom;
        if (
          window.scrollY >
          document.body.scrollHeight -
            (footer.offsetHeight + contact.offsetHeight + 200)
        ) {
          btnBottom = (footer.offsetHeight + 20).toString() + "px";
          setRight("35px");
          setBottom(btnBottom);
        } else {
          setBottom("5%");
          setRight("20px");
        }
      }
    } else {
      setRight("-120px");
    }
  };

  return (
    <span
      id="to-top-btn"
      className={style}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <i className="fa-thin fa-circle-chevron-up" id="arrow"></i>
    </span>
  );
};

export default ToTop;
