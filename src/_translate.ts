export const translate = (textInputString: string) => {
  // takes string input defined in main ts
  let morseCodeArray: string[] = [];
  const textInputArray = textInputString.split("");
  // splits the string into an array

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

  morseCodeArray = textInputArray.map((character: string) => {
    if (morseCodeMap.hasOwnProperty(character)) {
      return morseCodeMap[character];
    } else {
      return "?";
    }
  });
  // if the letter in the array matches the key we just made it is replaced by the value
  return morseCodeArray.join(" ");
};
