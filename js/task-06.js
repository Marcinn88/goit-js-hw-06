const textBox = document.querySelector("#validation-input");
const validNumber = Number(textBox.dataset.length);

textBox.addEventListener("blur", () => {
  if (textBox.value.length === validNumber) {
    textBox.classList.add("valid");
    textBox.classList.remove("invalid");
  } else {
    textBox.classList.add("invalid");
    textBox.classList.remove("valid");
  }
});
