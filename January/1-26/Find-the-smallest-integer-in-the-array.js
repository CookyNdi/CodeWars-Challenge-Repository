const findSmallestInt = (arr) => arr.reduce((result, num) => result < num, num)

// class version :
// class SmallestIntegerFinder {
//   findSmallestInt(arr) {
//     return arr.reduce((result, num) => (result < num ? result : num), Infinity);
//   }
// }