"use strict";
const toggler = document.getElementById("toggler-circle");
const togglerBg = document.getElementById("toggler-box");
const body = document.body;

const changeMode = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    toggler.style.left = "1.7rem";
  } else {
    body.classList.replace("light", "dark");
    toggler.style.left = "0";
  }
};

togglerBg.addEventListener("click", changeMode);
