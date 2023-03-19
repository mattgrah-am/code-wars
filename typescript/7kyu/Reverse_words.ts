export const reverseWords = (str: string): string =>
  str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
