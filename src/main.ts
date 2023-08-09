import "./style.css";

import { translate } from "./_translate";

import { reverse } from "./_reverse";

const textInput = document.querySelector<HTMLInputElement>("#input-text");
const morseInput = document.querySelector<HTMLInputElement>("#input-text2");
const answerBox = document.querySelector<HTMLElement>(".answer");

if (!textInput || !answerBox || !morseInput) {
  throw new Error("query selector issue");
}

// };

textInput.addEventListener("input", () => {
  morseInput.value = "";
  const textInputString = textInput.value;
  answerBox.innerText = translate(textInputString);
});

morseInput.addEventListener("input", () => {
  textInput.value = "";
  const textInputString = morseInput.value;
  answerBox.innerText = reverse(textInputString);
});
