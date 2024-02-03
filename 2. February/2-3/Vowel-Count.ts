export class Kata {
  static getCount(str: string): number {
    return str.split('').filter((char) => ['a', 'i', 'u', 'e', 'o'].includes(char)).length;
  }
}
