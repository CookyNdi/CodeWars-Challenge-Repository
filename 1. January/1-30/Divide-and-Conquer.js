const divCon = (arr) => {
  const str = arr
    .filter((str) => typeof str === "string")
    .reduce((result, str) => result + parseInt(str), 0);
  const num = arr
    .filter((num) => typeof num === "number")
    .reduce((result, num) => result + num, 0);
  return num - str;
};

const divCon = (arr) => {
  return arr.reduce((result, value) => {
    if (typeof value === "string") {
      result -= parseInt(value) || 0;
    } else if (typeof value === "number") {
      result += value;
    }
    return result;
  }, 0);
};