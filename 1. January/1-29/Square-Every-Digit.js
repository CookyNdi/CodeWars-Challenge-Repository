function squareDigits(num) {
  const result = num
    .toString()
    .split("")
    .reduce((result, num) => (result += Math.pow(Number(num), 2)), "");

  return Number(result);
}

function squareDigits(num) {
  const result = Array.from(String(num), digit => Math.pow(Number(digit), 2)).join('');
  return Number(result);
}
