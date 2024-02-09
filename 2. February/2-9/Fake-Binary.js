const fakeBin = (x) =>
  x
    .split('')
    .map((num) => (Number(num) >= 5 ? 1 : 0))
    .join('');

console.log(fakeBin('45385593107843568'));
