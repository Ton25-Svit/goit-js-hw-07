function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const containerOfBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");

function createBoxes(amount) {
  containerOfBoxes.innerHTML = "";
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
    size += 10;
  }

  containerOfBoxes.append(...boxes);
}

function destroyBoxes() {
  containerOfBoxes.innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", (event) => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert("Not valid number! Choose from 1 to 100.");
    return;
  }
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);