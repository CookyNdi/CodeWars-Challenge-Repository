export function findOutlier(arrNum: number[]): number {
  const odd = arrNum.filter((num) => num % 2 !== 0);
  const even = arrNum.filter((num) => num % 2 === 0);
  return even.length === 1 ? even[0] : odd[0];
}