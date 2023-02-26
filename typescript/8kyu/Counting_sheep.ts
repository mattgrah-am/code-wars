export const countSheeps = (
  arrayOfSheep: (boolean | undefined | null)[]
): number => arrayOfSheep.filter((sheep) => sheep === true).length;
