export const spinWords = (words: string): string => {
  const wordArr = words.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length >= 5) {
      const revWord = wordArr[i].split("").reverse().join("");
      wordArr.splice(i, 1, revWord);
    }
  }
  return wordArr.join(" ");
};
