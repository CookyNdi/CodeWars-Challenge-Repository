const summation = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// refactor : const summation = (num) => (num * (num + 1)) / 2;