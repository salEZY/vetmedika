import React from "react";

import "./Title.css";

const Title = ({ title, cssStyle }) => {
  return (
    <div className="title-div" style={cssStyle}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
