export const countSheep = (num: number): string => {
  if (num === 0) return "";
  const sheepArr: string[] = [];
  for (let i = 0; i < num; i++) {
    sheepArr.push(`${i + 1} sheep...`);
  }
  return sheepArr.join("");
};
