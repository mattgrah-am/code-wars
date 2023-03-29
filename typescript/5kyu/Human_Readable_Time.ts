export const humanReadable = (seconds: number): string => {
  const totMins = Math.floor(seconds / 60);
  const checkDigitLength = (num: number) =>
    String(num).length === 1 ? `0${num}` : num;

  const secs = checkDigitLength(seconds % 60);
  const hrs = checkDigitLength(Math.floor(totMins / 60));
  const mins = checkDigitLength(totMins % 60);

  return `${hrs}:${mins}:${secs}`;
};
