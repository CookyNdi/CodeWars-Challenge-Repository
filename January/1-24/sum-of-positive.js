// function positiveSum(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i];
//     }
//   }
//   return result;
// }

const positiveSum = (arr) => arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum([-1, -2, -3, -4, -5]));
