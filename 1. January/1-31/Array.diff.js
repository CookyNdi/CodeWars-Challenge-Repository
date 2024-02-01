function arrayDiff(arrA, arrB) {
  if (arrA.length <= 0) return [];
  if (arrB.length <= 0) return arrA;
  const result = arrA
    .map((num) => (arrB.includes(num) ? null : num))
    .filter((num) => num !== null);
  return result;
}

// function arrayDiff(arrA, arrB) {
//   if (arrA.length <= 0) return [];
//   if (arrB.length <= 0) return arrA;
//   return arrA.filter((num) => !arrB.includes(num));
// }

console.log(arrayDiff([5, 19, -13, 1, 0, 4, 17], [5, 19, -13, 1]));
