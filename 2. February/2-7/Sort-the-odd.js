function sortArray(array) {
  const odd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let result = [];
  let oddIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(odd[oddIndex]);
      oddIndex++;
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
