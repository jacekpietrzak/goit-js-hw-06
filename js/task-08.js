const form = document.querySelector(".login-form");
// console.log(form);

function handleSubmit(event) {
  let userData = {};
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    userData = { email: email.value, password: password.value };
    console.log(userData);
    alert("Email and Password saved!");
    return form.reset();
  }
}
form.addEventListener("submit", handleSubmit);
