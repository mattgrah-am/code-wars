export const oddOrEven = (array: number[]) => {
  if (array.length === 0) "even";
  return array.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd";
};
