import "./style.css";

import { translate } from "./_translate";

import { reverse } from "./_reverse";

const textInput = document.querySelector<HTMLInputElement>("#input-text");
const morseInput = document.querySelector<HTMLInputElement>("#input-text2");
const submitButton =
  document.querySelector<HTMLButtonElement>("#submit-button");
const answerBox = document.querySelector<HTMLElement>(".answer");
const submitMorse =
  document.querySelector<HTMLButtonElement>("#submit-button2");

if (!textInput || !submitButton || !answerBox || !morseInput || !submitMorse) {
  throw new Error("query selector issue");
}

// };

submitButton.addEventListener("click", () => {
  const textInputString = textInput.value;
  answerBox.innerHTML = translate(textInputString);
});

submitMorse.addEventListener("click", () => {
  const textInputString = morseInput.value;
  answerBox.innerHTML = reverse(textInputString);
});
