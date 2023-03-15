export const findOutlier = (integers: number[]): number => {
  const even = integers.filter((a) => a % 2 === 0);
  const odd = integers.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
};
