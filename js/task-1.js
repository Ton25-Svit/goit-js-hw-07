const categoriesList = document.querySelectorAll(".categories-item");
const elementsOfCategory = document.querySelectorAll(
  ".elements-list > .elem-list-items"
);

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const nameOfCategory = category.querySelector(".item-title").textContent;

  const elementsOfCategory = category.querySelectorAll(
    ".elements-list > .elem-list-items"
  ).length;

  console.log(`Category: ${nameOfCategory}`);
  console.log(`Elements: ${elementsOfCategory}`);
});