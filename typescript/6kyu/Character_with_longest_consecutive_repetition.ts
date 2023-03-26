export const longestRepetition = (text: string): [string, number] => {
  if (text.length === 0) return [text, 0];
  const textArr = text.toLowerCase().split("");
  let char = "";
  let charNum = 1;
  let repeatedChar = "";
  let repeatedNum = 1;

  textArr.forEach((el, idx) => {
    if (repeatedChar.length === 0) repeatedChar = el;

    if (el === textArr[idx + 1]) {
      char = el;
      charNum++;
      if (charNum > repeatedNum) {
        repeatedChar = el;
        repeatedNum = charNum;
      }
    } else {
      charNum = 1;
    }
  });
  return [repeatedChar, repeatedNum];
};
