function persistence(num) {
  let result = 0;
  let arrNum = num.toString().split("");
  if (arrNum.length > 1) {
    for (let i = 0; i < num; i++) {
      if (arrNum.length > 1) {
        arrNum = multiplication(arrNum);
        result++;
      } else {
        break;
      }
    }
  }
  return result;
}

const multiplication = (arr) => {
  return arr
    .reduce((result, num) => result * num)
    .toString()
    .split("");
};

console.log(persistence(4));
