import "./b";
console.log("This is a |");

import webpackLogo from "./images/webpack-logo.jpeg";

document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img");
  img.src = webpackLogo;

  document.body.append(img);
});
