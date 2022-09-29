const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
// console.log(ingredientsList);

ingredients.forEach((item) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.classList.add("item");
  ingredientsListItem.textContent = item;
  ingredientsList.prepend(ingredientsListItem);
  // console.log(ingredientsListItem);
});
