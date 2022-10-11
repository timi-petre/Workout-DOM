"use strict";

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
  document.getElementById("time").innerHTML = dateTime;
}, 1000);
