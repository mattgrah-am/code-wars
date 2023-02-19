export const findSmallestInt = (args: number[]): number =>
  args.sort((a, b) => a - b)[0];
