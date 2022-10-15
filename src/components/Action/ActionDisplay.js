import React from "react";

const ActionDisplay = ({ action }) => {
  return (
    <div>
      <h4>{action.title}</h4>
      <p>
        Traje od {action.from} do {action.to}
      </p>
      <p>{action.description}</p>
    </div>
  );
};

export default ActionDisplay;
