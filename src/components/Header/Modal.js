import React from "react";
import Navigation from "../FormsUI/Navigation/Navigation";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-holder">
        <Navigation
          customCssDiv={{
            flexDirection: "column",
            justifyContent: "space-apart",
          }}
          customCssLink={{ margin: "2rem auto", fontSize: "2.5rem" }}
        />
      </div>
    </div>
  );
};
export default Modal;
