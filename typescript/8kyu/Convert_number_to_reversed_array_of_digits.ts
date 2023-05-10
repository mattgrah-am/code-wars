export const digitize = (n: number): number[] =>
  String(n)
    .split("")
    .map((num) => Number(num))
    .reverse();
