const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((ing) => {
  const ingridient = document.createElement("li");
  ingridient.classList.add("item");
  ingridient.textContent = ing;
  list.append(ingridient);
});
