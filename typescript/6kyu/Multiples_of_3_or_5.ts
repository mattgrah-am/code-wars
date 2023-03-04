export class Challenge {
  static solution(number: number) {
    if (number <= 3) return 0;
    const numberArr: number[] = [];
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        numberArr.push(i);
      } else if (i % 3 === 0) {
        numberArr.push(i);
      } else if (i % 5 === 0) {
        numberArr.push(i);
      }
    }
    return numberArr.reduce((a, b) => a + b);
  }
}
