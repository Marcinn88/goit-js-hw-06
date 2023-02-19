const textBox = document.querySelector("#name-input");
const textHello = document.querySelector("#name-output");

textBox.addEventListener("input", (event) => {
  textHello.textContent = textBox.value ? textBox.value : "Anonymous";
});
