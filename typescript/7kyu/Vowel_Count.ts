export class Kata {
  static getCount(str: string): number {
    let total = 0;
    for (let letter of str.split("")) {
      if (["a", "e", "i", "o", "u"].some((el) => el === letter)) total++;
    }
    return total;
  }
}
