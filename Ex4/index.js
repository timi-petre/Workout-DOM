"use strict";

const buttonEL = document.querySelector("#check");
const imagine = document.querySelector(".imagine");

imagine.classList.add("hidden");

const displayMessage = function (message) {
  document.querySelector(".test-dupa").textContent = message;
};

buttonEL.addEventListener("click", function () {
  const nume = document.querySelector("#name").value;
  const oras = document.querySelector("#dropdown").value;
  const desigurEl = document.getElementById("desigur").checked;
  const delocEl = document.getElementById("deloc").checked;

  if (nume !== "" && oras !== "") {
    displayMessage(`Salut ${nume}, se pare că e aglomerat pe la ${oras}.`);

    if (desigurEl) {
      imagine.classList.remove("hidden");
    } else if (delocEl) {
      imagine.classList.add("hidden");
    }
  }
});
