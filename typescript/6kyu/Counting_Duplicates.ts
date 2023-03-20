export const duplicateCount = (text: string): number => {
  const textArray = text.toLowerCase().split("");
  const textObj: { [key: string]: number } = {};
  let result = 0;
  for (let el of textArray) {
    el in textObj ? (textObj[el] += 1) : (textObj[el] = 0);
  }
  for (let key in textObj) {
    if (textObj[key] > 0) result++;
  }
  return result;
};
