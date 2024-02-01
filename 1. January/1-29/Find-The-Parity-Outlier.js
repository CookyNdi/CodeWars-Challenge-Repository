function findOutlier(arrNum) {
  const odd = arrNum.filter((num) => num % 2 === 1 || num % 2 === -1);
  const even = arrNum.filter((num) => num % 2 === 0);
  return even.length < odd.length ? even[0] : odd[0];
}

function findOutlier(arrNum) {
  const isEven = num => num % 2 === 0;

  const odd = arrNum.find(num => !isEven(num));
  const even = arrNum.find(isEven);

  return even || odd;
}