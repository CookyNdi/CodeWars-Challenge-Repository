function XO(str) {
  const xCount = (str.match(/x/gi) || []).length;
  const oCount = (str.match(/o/gi) || []).length;
  return xCount === oCount;
}

console.log(XO('xooxx'));
