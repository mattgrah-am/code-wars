export const longest = (s1: string, s2: string): string =>
  [...new Set((s1 + s2).split(""))].sort().join("");
