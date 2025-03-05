const yourName = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
yourName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  const trimmedValue = inputValue.trim();

  nameOut.textContent = trimmedValue
    ? (nameOut.textContent = trimmedValue)
    : (nameOut.textContent = `Anonymus`);
});