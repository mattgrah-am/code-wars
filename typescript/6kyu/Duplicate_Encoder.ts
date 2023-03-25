export const duplicateEncode = (word: string) => {
  const wordArr = word.toLowerCase().split("");
  return wordArr
    .map((el) =>
      wordArr.filter((letter) => letter === el).length > 1 ? ")" : "("
    )
    .join("");
};
