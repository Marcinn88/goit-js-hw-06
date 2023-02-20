const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingriedientElement = document.createElement("li");
    ingriedientElement.classList = "item";
    ingriedientElement.textContent = ingredient;

    return ingriedientElement;
  });
};

const elements = createList(ingredients);
list.append(...elements);
