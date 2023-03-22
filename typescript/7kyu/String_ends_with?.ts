export const solution = (str: string, ending: string): boolean => {
  if (ending.length === 0) return true;
  return str.slice(str.length - ending.length) === ending;
};
