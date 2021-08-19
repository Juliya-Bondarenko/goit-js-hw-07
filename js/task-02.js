const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

listRef.append(
  ...ingredients.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    return itemRef;
  })
);
