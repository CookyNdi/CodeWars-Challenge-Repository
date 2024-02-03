export class Kata {
  static squareDigits(num: number): number {
    const result = Array.from(String(num), (digit) => Math.pow(Number(digit), 2)).join('');
    return Number(result);
  }
}
