const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput.innerText);
console.log(nameInput.value);

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    nameOutput.innerText = event.currentTarget.value;
  } else {
    nameOutput.innerText = "Anonymous";
  }
});
