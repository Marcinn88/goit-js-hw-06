const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = form;

  if (email.value === "" || password.value === "") {
    return alert("Przed wysłaniem proszę uzupełnić wszystkie pola formularza!");
  }

  const data = { email: email.value, password: password.value };
  console.log(data);
  form.reset();
}
