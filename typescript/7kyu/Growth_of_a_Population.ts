export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let year = 0;

  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100) + aug;
    year++;
  }

  return year;
};
