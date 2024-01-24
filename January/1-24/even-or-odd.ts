// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }

const evenOrOdd = (num: number): string => (num % 2 === 0 ? 'even' : 'odd');

console.log(evenOrOdd(2));
