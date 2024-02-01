// function isPangram(s) {
//   const cleanedString = s.toUpperCase().replace(/[^A-Z]/g, '');

//   for (let charCode = 65; charCode <= 90; charCode++) {
//     const char = String.fromCharCode(charCode);
//     if (cleanedString.indexOf(char) === -1) {
//       return false;
//     }
//   }

//   return true;
// }

// function isPangram(s) {
//   const alphabetStatus = {};
//   const cleanedString = s.toUpperCase().replace(/[^A-Z]/g, '');

//   for (const char of cleanedString) {
//     if (/[A-Z]/.test(char)) {
//       alphabetStatus[char] = true;
//     }
//   }
//   return Object.keys(alphabetStatus).length === 26;
// }

// function isPangram(s) {
//   const cleanedString = s.toUpperCase().replace(/[^A-Z]/g, '');
//   const uniqueLetters = new Set(cleanedString);
//   return uniqueLetters.size === 26;
// }


const isPangram = (s) => new Set(s.toUpperCase().match(/[A-Z]/g)).size === 26;

console.log(isPangram("The quick brown fox jumps over the lazy dog."));