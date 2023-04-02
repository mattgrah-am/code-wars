export const maskify = (cc: string): string =>
  cc.length < 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
