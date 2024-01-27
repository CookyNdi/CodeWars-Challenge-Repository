// function findNeedle(haystack) {
//   let count = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] !== "needle") {
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count > 0
//     ? `found the needle at position ${count}`
//     : "Your function didn't return anything";
// }


const findNeedle = (haystack) =>
  haystack.indexOf("needle")
    ? `found the needle at position ${haystack.indexOf("needle")}`
    : "Your function didn't return anything";


const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf("needle")}`