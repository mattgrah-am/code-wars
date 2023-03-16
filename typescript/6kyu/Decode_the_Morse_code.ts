// import { MORSE_CODE } from "./preloaded";
const decodeMorse = (morseCode: string): string => {
  return morseCode
    .split(" ")
    .map((v, i) => (MORSE_CODE[v] != undefined ? MORSE_CODE[v] : 1))
    .join("")
    .replace(/11/g, " ")
    .replace(/1/g, " ")
    .trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
