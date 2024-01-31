// function digitalRoot(num) {
//   let result = sumNumber(num);
//   if (result.toString().length > 1) {
//     for (let i = 0; i < result.toString().length; i++) {
//       if (result.toString().length > 1) {
//         result = sumNumber(result);
//       }
//     }
//   }
//   return result;
// }

// function sumNumber(num) {
//   return num
//     .toString()
//     .split("")
//     .reduce((result, num) => result + Number(num), 0);
// }

function digitalRoot(num) {
  if (num < 10) return num;
  return digitalRoot(
    num
      .toString()
      .split("")
      .reduce(function (result, num) {
        return result + Number(num);
      }, 0),
  );
}

console.log(digitalRoot(493193));
