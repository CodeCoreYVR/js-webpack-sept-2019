// import "./b";
// console.log("This is a |");
import React from "react";
import ReactDOM from "react-dom";

import webpackLogo from "./images/webpack-logo.jpeg";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");

  document.body.append(root);

  ReactDOM.render(
    <img
      style={{
        borderRadius: "20px",
        border: "3px solid gray"
      }}
      width="400px"
      src={webpackLogo}
    />,
    root
  );
});
