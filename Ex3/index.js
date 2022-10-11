"using strict";

const calcAge = function () {
  let year = document.getElementById("myDate").value.slice(0, 4);
  const age = 2022 - year;
  document.getElementById("showEl").textContent = age;
  return age;
};
calcAge();
