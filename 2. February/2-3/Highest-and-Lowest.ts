export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(' ').map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
  }
}
