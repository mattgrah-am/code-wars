export const positiveSum = (arr: number[]): number =>
  arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);
