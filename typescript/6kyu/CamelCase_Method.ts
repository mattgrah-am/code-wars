export const camelCase = (str: string): string =>
  str
    .split(" ")
    .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
    .join("");
