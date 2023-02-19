const Slide = document.querySelector("#font-size-control");
const textBox = document.querySelector("#text");

Slide.addEventListener("input", () => {
  textBox.style.fontSize = `${Slide.value}px`;
});
