export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && b + c > a && c + a > b;
