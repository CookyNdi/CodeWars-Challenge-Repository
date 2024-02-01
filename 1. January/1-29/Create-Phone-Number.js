function createPhoneNumber(arrNum) {
  let a = "";
  let b = "";
  let c = "";
  const result = arrNum
    .map((num, index) => {
      if (index <= 2) {
        a += num;
      } else if (index > 2 && index < 6) {
        b += num;
      } else if (index >= 6) {
        c += num;
      }
      return `(${a}) ${b}-${c}`;
    })
    .slice(-1);
  return result[0];
}

function createPhoneNumber(arrNum) {
  const [a, b, c, d, e, f, g, h, i, j] = arrNum;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}