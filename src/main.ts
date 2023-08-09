import "./style.css";

const textInput = document.querySelector<HTMLInputElement>("#input-text");
const submitButton =
  document.querySelector<HTMLButtonElement>("#submit-button");

if (!textInput || !submitButton) {
  throw new Error("query selector issue");
}

const showTextInput = () => {
  let textInputCurrent = textInput.value;
  console.log(textInputCurrent);
};

submitButton.addEventListener("click", showTextInput);
