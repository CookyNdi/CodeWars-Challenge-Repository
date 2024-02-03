export const digitalRoot = (num: number): number => {
  let result = sumNumber(num);
  if (result.toString().length > 1) {
    for (let i = 0; i < result.toString().length; i++) {
      if (result.toString().length > 1) {
        result = sumNumber(result);
      }
    }
  }
  return result;
};

function sumNumber(num: number): number {
  return num
    .toString()
    .split("")
    .reduce((result, num) => result + Number(num), 0);
}

console.log(digitalRoot(16));
