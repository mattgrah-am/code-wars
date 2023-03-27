export const persistence = (num: number): number => {
  if (num.toString().length === 1) return 0;
  let calc = num;
  let result = 0;
  let numArr = String(num)
    .split("")
    .map((num) => Number(num));
  while (calc.toString().length > 1) {
    calc = numArr.reduce((a, b) => a * b);
    numArr = String(calc)
      .split("")
      .map((num) => Number(num));
    result++;
  }
  return result;
};
