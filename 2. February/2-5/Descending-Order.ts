export function descendingOrder(num: number): number {
  const result = num.toString().split('').sort().reverse().join('');
  return Number(result);
}

console.log(descendingOrder(42145));
