export const descendingOrder = (n: number): number => {
  let result = n
    .toString()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");

  return Number(result);
};
