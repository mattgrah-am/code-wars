export const abbrevName = (name: string): string =>
  `${name.split(" ")[0].slice(0, 1).toUpperCase()}.${name
    .split(" ")[1]
    .slice(0, 1)
    .toUpperCase()}`;
