export const productArray = (nums: number[]): number[] =>
  nums.map((el) => nums.reduce((prev, curr) => prev * curr) / el);
