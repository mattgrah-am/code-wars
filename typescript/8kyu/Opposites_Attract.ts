export const lovefunc = (flower1: number, flower2: number): boolean => {
  const flowerCheck = (flower: number) => (flower % 2 === 0 ? "even" : "odd");
  return flowerCheck(flower1) !== flowerCheck(flower2);
};
