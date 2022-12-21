import React, { useState } from "react";
import { css } from "@emotion/css";

import "./ToTop.css";

const ToTop = () => {
  const [bottom, setBottom] = useState("5%");
  const [right, setRight] = useState("-120px");

  const style = css`
    bottom: ${bottom};
    right: ${right};
  `;

  window.onscroll = () => {
    let footer = document.querySelector("#footer");
    let contact = document.querySelector("#contact");

    if (window.scrollY > 400) {
      if (footer) {
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
      <i className="fa-sharp fa-circle-chevron-up" id="arrow"></i>
    </span>
  );
};

export default ToTop;
