"use strict";
const buton = document.querySelector("#buton");
let a = document.getElementById("show");
buton.addEventListener("click", function myFunction() {
  const nameEl = document.getElementById("nameEl").value;
  a.textContent = `Hello ${nameEl}`;
});
