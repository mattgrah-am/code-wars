export const getAverage = (marks: number[]): number =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);
