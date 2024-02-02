function findUniq(arr) {
  let result = 0;
  let x = arr[arr.length - 1];
  arr.forEach((value) => {
    if (x !== value && result !== value) {
      result = value;
    } else {
      x = value;
    }
  });
  return result;
}

console.log(findUniq([1, 0, 0]));
