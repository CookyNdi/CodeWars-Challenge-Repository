export function createPhoneNumber(numbers: number[]): string {
  const [a, b, c, d, e, f, g, h, i, j] = numbers;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}
