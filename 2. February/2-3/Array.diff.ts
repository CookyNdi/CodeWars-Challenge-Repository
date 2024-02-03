export function arrayDiff(arrA: number[], arrB: number[]): number[] {
  if (arrA.length <= 0) return [];
  if (arrB.length <= 0) return arrA;
  return arrA.filter((num) => !arrB.includes(num));
}
