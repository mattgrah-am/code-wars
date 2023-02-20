export const basicOp = (
  operation: string,
  value1: number,
  value2: number
): number =>
  operation === "+"
    ? value1 + value2
    : operation === "-"
    ? value1 - value2
    : operation === "*"
    ? value1 * value2
    : operation === "/"
    ? value1 / value2
    : 0;
