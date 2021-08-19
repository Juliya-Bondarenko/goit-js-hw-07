const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const onInputChange = () => {
  if (inputRef.value !== "") {
    nameRef.textContent = inputRef.value;
  } else nameRef.textContent = "незнакомец";
};

inputRef.addEventListener("input", onInputChange);
