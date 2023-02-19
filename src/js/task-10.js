function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textBox = document.querySelector("#controls input");
const buttonCreate = document.querySelector(`#controls button[data-create]`);
const buttonDestroy = document.querySelector(`#controls button[data-destroy]`);

const boxes = document.querySelector("#boxes");

function createBoxes() {
  for (let i = 1; i <= textBox.value; i++) {
    const box = document.createElement("div");
    let j = 30 + 10 * i;
    box.textContent = i;
    box.classList.add("box_css");
    box.style.width = `${j}px`;
    box.style.height = `${j}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function removeBoxes() {
  boxes.remove(box);
}
console.log(textBox);
console.log(buttonCreate);
console.log(buttonDestroy);

buttonCreate.addEventListener("click", () => {
  createBoxes(textBox.value);
});

buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
