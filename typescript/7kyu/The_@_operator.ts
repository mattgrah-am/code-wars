export const evaluate = (equation: string) => {
  const r = equation
    .split("@")
    .map(Number)
    .reduce((a, b) => a + b + (a - b) + a * b + (b === 0 ? NaN : (a / b) | 0));
  return isNaN(r) ? null : r;
};
