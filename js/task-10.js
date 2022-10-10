const controls = document.querySelector("#controls");
console.log(controls);

controls.addEventListener("input", (event) => {
  console.log("input");
});

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
  const inputValue = event.target.valueAsNumber;
  console.log(inputValue);
  return inputValue;
});

// const amount = 6;

function createBoxes(amount) {
  console.log(`amount${amount}`);
  // let height = 30;
  // let width = 30;
  // const randomColor = getRandomHexColor();
  // boxes.insertAdjacentHTML(
  //   "afterbegin",
  //   `<div style="width:${width}px; height:${height}px; background-color:${randomColor}"></div>`
  // );
}

btnCreate.addEventListener("click", createBoxes);
