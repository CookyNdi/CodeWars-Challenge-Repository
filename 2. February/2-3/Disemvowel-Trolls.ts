export class Kata {
  static disemvowel(str: string): string {
    return str
      .split('')
      .filter((char) => !'aAiIuUeEOo'.includes(char))
      .join('');
  }
}
