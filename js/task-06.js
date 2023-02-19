const textBox = document.querySelector("#validation-input");

textBox.addEventListener("blur", () => {
  if (textBox.value.length === 6) {
    textBox.classList.add("valid");
    textBox.classList.remove("invalid");
  } else {
    textBox.classList.add("invalid");
    textBox.classList.remove("valid");
  }
});
