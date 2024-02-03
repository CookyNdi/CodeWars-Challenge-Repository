export const findOdd = (arrNum: number[]): number => {
  const groupArr: number[][] = [];
  arrNum.sort().forEach((num) => {
    if (groupArr[num]) {
      groupArr[num].push(num);
    } else {
      groupArr[num] = [num];
    }
  });
  const result = Object.values(groupArr).filter((arr) => arr.length % 2 !== 0);
  return result[0][0];
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
