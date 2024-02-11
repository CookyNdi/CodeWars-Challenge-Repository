// export function twoSort(str: string[]): string {
//   return str
//     .sort()[0]
//     .split('')
//     .map((word) => word + '***')
//     .join('')
//     .slice(0,-3);
// }

function twoSort(str) {
  return str
    .sort()[0]
    .split('')
    .join('***')
}

console.log(twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']));
