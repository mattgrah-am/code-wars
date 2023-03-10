export const digitalRoot = (n: number): number => {
  if ([...(n + "")].length === 1) return n;
  let result = n;
  while ([...(result + "")].length > 1) {
    result = [...(result + "")].map((n) => +n).reduce((a, b) => a + b);
  }
  return result;
};
