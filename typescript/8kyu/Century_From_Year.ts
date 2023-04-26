export const centuryFromYear = (year: number): number =>
  year % 100 === 0 ? Math.floor(year / 100) : Math.ceil(year / 100);
