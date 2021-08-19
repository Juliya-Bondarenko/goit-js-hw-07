const refs = {
  inputNumber: document.querySelector(".js-input"),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  refs.inputNumber.value = 0;

  const createdBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    createdBoxes[i] = document.createElement("div");
    createdBoxes[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    createdBoxes[i].style.width = `${30 + 10 * i}px`;
    createdBoxes[i].style.height = `${30 + 10 * i}px`;
  }
  refs.boxes.append(...createdBoxes);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};

refs.renderBtn.addEventListener("click", () => {
  createBoxes(refs.inputNumber.value);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
