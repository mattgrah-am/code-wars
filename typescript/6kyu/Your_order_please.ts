export function order(words: string): string {
  const wordsObj: { [key: string]: number } = {};

  words.split(" ").forEach((word) =>
    word.split("").forEach((el) => {
      if (!isNaN(parseInt(el))) wordsObj[word] = parseInt(el);
    })
  );
  const sortedWords = Object.fromEntries(
    Object.entries(wordsObj).sort(([, a], [, b]) => a - b)
  );

  return Object.keys(sortedWords).join(" ");
}
