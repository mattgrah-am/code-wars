export const countBits = (n: number): number =>
  n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;
