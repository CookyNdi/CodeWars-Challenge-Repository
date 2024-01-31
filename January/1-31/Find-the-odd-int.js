function findOdd(arrNum) {
  const groupArr = [];
  arrNum.sort().forEach((num) => {
    if (groupArr[num]) {
      groupArr[num].push(num);
    } else {
      groupArr[num] = [num];
    }
  });
  console.log(groupArr)
  const result = Object.values(groupArr).filter((arr) => arr.length % 2 !== 0);
  return result[0][0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
