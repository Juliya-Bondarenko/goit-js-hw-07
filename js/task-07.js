const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onInputSlide = () => {
  refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;
};

refs.fontSizeControl.addEventListener("input", onInputSlide);
