const fontSizeControl = document.getElementById("font-size-control");
// console.log(fontSizeControl);

const text = document.getElementById("text");
const innerText = text.innerText;
// console.log(text.innerText);

fontSizeControl.addEventListener("input", (event) => {
  const rangeValue = event.target.valueAsNumber;
  //   console.log(rangeValue);
  //   console.log(text);
  text.setAttribute("style", `font-size:${rangeValue}px;`);
});
