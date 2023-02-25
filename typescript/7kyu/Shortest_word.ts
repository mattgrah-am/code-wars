export const findShort = (s: string): number => {
  const strArr = s.split(" ");
  let smallestWord: number = 0;
  for (let word of strArr) {
    if (smallestWord === 0 || smallestWord > word.length) {
      smallestWord = word.length;
    }
  }
  return smallestWord;
};
