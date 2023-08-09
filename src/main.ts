import "./style.css";

const textInput = document.querySelector<HTMLInputElement>("#input-text");
const submitButton =
  document.querySelector<HTMLButtonElement>("#submit-button");

if (!textInput || !submitButton) {
  throw new Error("query selector issue");
}

const translate = () => {
  const textInputString = textInput.value;
  const textInputArray = textInputString.split("");

  const morseCodeMap: { [key: string]: string } = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
  };

  const morseCodeArray: any = textInputArray.map((character: string) => {
    if (morseCodeMap.hasOwnProperty(character)) {
      return morseCodeMap[character];
    } else {
      return "?";
    }
  });
  console.log(morseCodeArray);
  return morseCodeArray;
};

submitButton.addEventListener("click", translate);
