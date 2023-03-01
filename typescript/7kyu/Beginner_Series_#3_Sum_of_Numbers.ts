export const getSum = (a: number, b: number): number => {
  if (a === b) return a;
  const numArr = a > b ? [b, a] : [a, b];
  let result = 0;
  for (let i = numArr[0]; i <= numArr[1]; i++) {
    result += i;
  }
  return result;
};
