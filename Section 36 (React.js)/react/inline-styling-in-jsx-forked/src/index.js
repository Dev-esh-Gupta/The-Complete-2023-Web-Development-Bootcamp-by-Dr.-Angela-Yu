import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "green",
  fontSize: "35px",
  border: "1px solid black",
};

customStyle.color = "skyblue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
