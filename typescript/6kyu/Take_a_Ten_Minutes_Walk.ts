export const isValidWalk = (walk: string[]): boolean => {
  if (walk.length > 10 || walk.length < 10) return false;
  let ns = 0;
  let we = 0;
  for (let dir of walk) {
    if (dir === "n") ns += 1;
    if (dir === "s") ns -= 1;
    if (dir === "w") we += 1;
    if (dir === "e") we -= 1;
  }

  return walk.length == 10 && ns === 0 && we === 0;
};
