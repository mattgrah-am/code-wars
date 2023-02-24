export const xo = (str: string): boolean => {
  const strArr = str.split("");
  let x = 0;
  let o = 0;

  for (let letter in strArr) {
    if (letter.toLocaleLowerCase() === "x") x++;
    if (letter.toLocaleLowerCase() === "o") o++;
  }
  return x === o;
};
