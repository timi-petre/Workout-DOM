"use strict";

const buttonEL = document.querySelector("#check");
const imagine = document.querySelector(".imagine");
const timp = document.querySelector("#time");

imagine.classList.add("hidden");
timp.classList.add("hidden");

const timeEl = (n) => {
  return ("0" + n).slice(-2);
};

const interval = setInterval(() => {
  const now = new Date();
  const dateTime =
    timeEl(now.getHours()) +
    ":" +
    timeEl(now.getMinutes()) +
    ":" +
    timeEl(now.getSeconds());
  const da = document.getElementById("da").checked;
  if (da) {
    document.getElementById("time").innerHTML = dateTime;
  } else {
    document.getElementById("time").innerHTML = "";
  }
}, 1000);

const calcAge = function () {
  let year = document.getElementById("myDate").value.slice(0, 4);
  const age = 2022 - year;
  if (!document.getElementById("myDate").value) {
    document.getElementById("showEl").textContent = "";
  } else {
    document.getElementById("showEl").textContent = age;
  }
  return age;
};

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
