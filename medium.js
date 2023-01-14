const header = document.querySelector("header");
const changeColor = function () {
  let point = window.pageYOffset;
  if (point > 400) {
    header.classList.add("newColor");
  } else {
    header.classList.remove("newColor");
  }
};
window.addEventListener("scroll", changeColor);

const button = document.querySelector("header div ul li.start");
const greenButton = function () {
  let point = window.pageYOffset;
  if (point > 400) {
    button.classList.add("newColor2");
  } else {
    button.classList.remove("newColor2");
  }
};
window.addEventListener("scroll", greenButton);

const letteraM = document.querySelectorAll(`svg g[stroke-linecap="butt" ]`);

let numero = 0;

const time = setInterval(() => {
  const random = Math.floor(Math.random() * letteraM.length);
  const randomM = letteraM[random];
  const letterM = randomM.getAttribute("opacity");
  numero++;

  if (letterM == 0) {
    randomM.setAttribute("opacity", "1");
  } else {
    randomM.setAttribute("opacity", "0");
  }
}, 100);
