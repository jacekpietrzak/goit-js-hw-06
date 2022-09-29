const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput.innerText);
console.log(nameInput.value);

nameInput.addEventListener("input", (event) => {
  nameOutput.innerText = event.currentTarget.value;
});
