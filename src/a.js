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
        filter: "blue(5px)"
      }}
      width="400px"
      src={webpackLogo}
    />,
    root
  );
});
