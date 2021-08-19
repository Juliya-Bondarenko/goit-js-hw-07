const listRef = document.querySelectorAll(".js-item");
console.log(`В списке ${listRef.length} категории`);

listRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
});
