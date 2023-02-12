export class Kata {
  static squareDigits(num: number): number {
    if (num === 0) return 0;
    let result = num
      .toString()
      .split("")
      .map((el) => {
        return parseInt(el) * parseInt(el);
      })
      .join("");
    return Number(result);
  }
}
