let counterValue = 0;

const decrementBtnRef = document.querySelector(".js-decrement");
const incrementBtnRef = document.querySelector(".js-increment");
const valueRef = document.querySelector(".js-value");

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
