// export const trim = (str: string, size: number): string => {
//   if (str.length <= size) return str;
//   if (size <= 3) return `${str.slice(0, size)}...`;
//   else return `${str.slice(0, size - 3)}...`;
// };

export const trim = (str: string, size: number): string =>
  str.length <= size
    ? str
    : size <= 3
    ? `${str.slice(0, size)}...`
    : `${str.slice(0, size - 3)}...`;
