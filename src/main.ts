import "./style.css";

import { translate } from "./_translate";

const textInput = document.querySelector<HTMLInputElement>("#input-text");
const submitButton =
  document.querySelector<HTMLButtonElement>("#submit-button");
const answerBox = document.querySelector<HTMLElement>(".answer");

if (!textInput || !submitButton || !answerBox) {
  throw new Error("query selector issue");
}

// };

submitButton.addEventListener("click", () => {
  const textInputString = textInput.value;
  answerBox.innerHTML = translate(textInputString);
});
