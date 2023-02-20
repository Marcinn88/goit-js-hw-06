function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector(".widget button");
const body = document.querySelector("body");
const bgColorText = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  let backColor = getRandomHexColor();
  body.style.backgroundColor = backColor;
  bgColorText.textContent = backColor;
});
