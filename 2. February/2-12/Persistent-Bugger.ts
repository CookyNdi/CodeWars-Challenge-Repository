export function persistence(num: number): number {
  let result = 0;
  let arrNum = num.toString().split('');
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

const multiplication = (arr: string[]) => {
  return arr
    .reduce((result, num) => result * Number(num), 1)
    .toString()
    .split('');
};

console.log(persistence(999));
