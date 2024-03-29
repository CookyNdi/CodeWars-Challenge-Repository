export const getSum = (a: number, b: number): number => {
  if (a === b) return a;

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(getSum(-1, 2));
