export class Kata {
  static highAndLow(numbers: string): string {
    let sortedNumbers = numbers
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    return `${sortedNumbers[0]}  ${sortedNumbers[sortedNumbers.length - 1]}`;
  }
}
