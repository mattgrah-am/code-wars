export const findEvenIndex = (arr: number[]): number => {
  let left = 0,
    right = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; left <= right; ++i) {
    right -= arr[i];
    if (left === right) {
      return i;
    }
    left += arr[i];
  }
  return -1;
};
