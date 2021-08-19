const inputRef = document.querySelector("#validation-input");

const onInputBlur = () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
  } else inputRef.classList.add("invalid");
};

const onInputFocus = () => {
  inputRef.classList.remove("valid");
  inputRef.classList.remove("invalid");
};

inputRef.addEventListener("blur", onInputBlur);
inputRef.addEventListener("focus", onInputFocus);
