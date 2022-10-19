// const controls = document.querySelector("#controls");
// console.log(controls);

const input = document.querySelector('input[type="number"]');
console.log(input);

const boxes = document.querySelector("#boxes");
console.log(boxes);

const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = input.addEventListener("input", (event) => {
  console.log(event.target.valueAsNumber);
  return event.target.valueAsNumber;
});

function createBoxes(amount) {
  // let height = 30;
  // let width = 30;
  // const randomColor = getRandomHexColor();
  // boxes.insertAdjacentHTML(
  //   "afterbegin",
  //   `<div style="width:${width}px; height:${height}px; background-color:${randomColor}"></div>`
  // );
}

btnCreate.addEventListener("click", createBoxes(getAmount));
