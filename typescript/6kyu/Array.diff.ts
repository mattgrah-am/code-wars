export const arrayDiff = (a: number[], b: number[]): number[] =>
  a.filter((x) => b.indexOf(x) === -1);
