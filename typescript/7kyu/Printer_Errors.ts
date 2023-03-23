export const printerError = (str: string): string =>
  str.replace(/[a-m]/g, "").length + "/" + str.length;
