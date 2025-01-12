//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
};

const currTime = new Date(2019, 1, 2, 13).getHours();

let text = "Good Morning!";

if (currTime >= 0 && currTime < 12) {
  customStyle.color = "red";
} else if (currTime < 18) {
  customStyle.color = "green";
  text = "Good Afternoon!";
} else {
  customStyle.color = "blue";
  text = "Good evening!";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {text}
    </h1>
  </div>,
  document.getElementById("root")
);
