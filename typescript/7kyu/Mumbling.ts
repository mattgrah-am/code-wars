export const accum = (s: string): string => {
  const stringArr = s.toLowerCase().split("");
  const result: string[] = [];
  for (let i = 0; i < stringArr.length; i++) {
    i === 0
      ? result.push(`${stringArr[i].toUpperCase()}`)
      : result.push(`${stringArr[i].toUpperCase()}${stringArr[i].repeat(i)}`);
  }
  return result.join("-");
};
