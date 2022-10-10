const body = document.querySelector("body");
// console.log(body);

const button = document.querySelector(".change-color");
// console.log(button);

const text = document.querySelector(".color");
// console.log(text);

function getRandomHexColor() {
  // console.log(
  //   `#${Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, 0)}`
  // );
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomBackground() {
  const randomColor = getRandomHexColor();
  console.log(randomColor);

  body.setAttribute("style", `background-color:${randomColor}`);

  text.innerHTML = randomColor;
}

button.addEventListener("click", getRandomBackground);
