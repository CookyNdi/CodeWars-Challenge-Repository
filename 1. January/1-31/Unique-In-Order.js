const uniqueInOrder = (input) => {
  return cleanArr(typeof input === "string" ? input.split("") : input);
};

const cleanArr = (arr) => {
  return arr.reduce((result, char) => {
    if (result.at(result.length - 1) !== char) {
      result.push(char);
    }
    return result;
  }, []);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
