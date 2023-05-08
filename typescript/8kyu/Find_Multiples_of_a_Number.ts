export const findMultiples = (integer: number, limit: number): number[] => {
  let totalInteger = integer;
  const result: number[] = [integer];
  while (totalInteger < limit) {
    totalInteger += integer;
    if (totalInteger <= limit) result.push(totalInteger);
  }
  return result;
};
