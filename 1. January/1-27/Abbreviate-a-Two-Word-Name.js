// function abbrevName(name) {
//   const arr = name
//     .split(" ")
//     .map((word) => {
//       const w = word.slice(0, 1);
//       return w;
//     })
//     .toString()
//     .replace(",", ".");
//   return arr;
// }

// const abbrevName = (name) =>
//   name
//     .split(" ")
//     .map((word) => word.slice(0, 1))
//     .toString()
//     .replace(",", ".")
//     .toUpperCase();

const abbrevName = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join(".")
    .toUpperCase();