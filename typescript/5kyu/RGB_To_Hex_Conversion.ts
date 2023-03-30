export const rgb = (r: number, g: number, b: number): string => {
  const componentToHex = (c: number) => {
    if (c < 0) c = 0;
    if (c > 255) c = 255;
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
  };

  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};
