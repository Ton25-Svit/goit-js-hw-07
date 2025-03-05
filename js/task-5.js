function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  console.log("randomColor :>> ", randomColor);
  color.textContent = randomColor;
  console.log("color value :>> ", color.textContent);
});