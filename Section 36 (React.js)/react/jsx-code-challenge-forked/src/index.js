import React from "react";
import ReactDOM from "react-dom";

const name = "Devesh";
const luckyNumber = 1;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
