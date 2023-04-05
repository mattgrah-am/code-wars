export const narcissistic = (value: number): boolean => {
  let result = 0;

  value
    .toString()
    .split("")
    .forEach((num) => {
      result += Number(num) ** value.toString().length;
    });

  return result === value;
};
