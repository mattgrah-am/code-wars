export const flattenAndSort = (inputArray: number[][]): number[] =>
  inputArray.flat().sort((a, b) => a - b);
