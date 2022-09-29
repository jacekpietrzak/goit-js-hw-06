const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
// console.log(buttonDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
// console.log(buttonIncrement);

let counterValue = 0;

const value = document.querySelector("#value");
// console.log(value.innerText);

const buttonDecrementClick = () => {
  //   console.log("Decrement button clicked");
  counterValue -= 1;
  value.innerText = counterValue;
  //   console.log(value.innerText);
};

const buttonIncrementClick = () => {
  // console.log("Increment button clicked");
  counterValue += 1;
  value.innerText = counterValue;
  //   console.log(value.innerText);
};

buttonDecrement.addEventListener("click", buttonDecrementClick);
buttonIncrement.addEventListener("click", buttonIncrementClick);
