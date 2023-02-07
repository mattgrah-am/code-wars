export const squareSum = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return numbers.map((num) => num * num).reduce((acc, curr) => acc + curr);
};
