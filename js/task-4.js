const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (!email || !password) {
    return alert("All form fields must be filled in");
  }
  const user = {
    email,
    password,
  };
  console.log("User object :>>", user);
  form.reset();
});