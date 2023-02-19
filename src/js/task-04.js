let counterValue = 0;
const counter = document.querySelector("#value");

const minuser = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const adder = document.querySelector(
  '#counter button[data-action="increment"]'
);

minuser.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  counter.textContent = counterValue;
});

adder.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  counter.textContent = counterValue;
});
