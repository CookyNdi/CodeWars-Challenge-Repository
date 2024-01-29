// function searchArray(arrayToSearch, query) {
//   if (!arrayToSearch[0][0]) return "a";
//   const isNotValid = arrayToSearch.filter((arrNum) => arrNum.length > 2);
//   if (isNotValid.length > 0) return "Invalid Input";
//   let result = -1;
//   for (let i = 0; i < arrayToSearch.length; i++) {
//     if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// }

function searchArray(arrayToSearch, query) {
  if (!query.length) {
    throw new Error("Invalid Query: query not an array");
  }
  if (query.length > 2) {
    throw new Error("Invalid Query: query must < 2");
  }
  if (!arrayToSearch[0]?.length) {
    throw new Error("Invalid input: Empty or undefined array");
  }
  const isNotValid = arrayToSearch.some((arrNum) => arrNum.length > 2);
  if (isNotValid) {
    throw new Error(
      "Invalid input: Array contains subarrays with more than 2 elements",
    );
  }
  const result = arrayToSearch.findIndex(
    (arr) => arr[0] === query[0] && arr[1] === query[1],
  );
  return result;
}

function searchArray(arrayToSearch, query) {
  validateQuery(query);
  validateArray(arrayToSearch);

  const isNotValid = arrayToSearch.some(arr => arr.length > 2);
  if (isNotValid) {
    throw new Error("Invalid input: Array contains subarrays with more than 2 elements");
  }

  return arrayToSearch.findIndex(arr => arr[0] === query[0] && arr[1] === query[1]);
}

function validateQuery(query) {
  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("Invalid Query: Query must be an array with exactly 2 elements");
  }
}

function validateArray(arrayToSearch) {
  if (!arrayToSearch.length || !arrayToSearch[0]?.length) {
    throw new Error("Invalid input: Empty or undefined array");
  }
}