function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector(".widget button");
const body = document.querySelector("body");
const bgColorText = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  bgColorText.textContent = getRandomHexColor();
  // console.log(getRandomHexColor());
  // console.log(body);
});
