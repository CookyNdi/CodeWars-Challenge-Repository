// function dotCalculator(equation) {
//   const str = equation.split(' ');
//   let result = 0;
//   let dot = '';
//   switch (str[1]) {
//     case '+':
//       result = str[0].length + str[2].length;
//       break;
//     case '-':
//       result = str[0].length - str[2].length;
//       break;
//     case '*':
//       result = str[0].length * str[2].length;
//       break;
//     case '//':
//       result = Math.trunc(str[0].length / str[2].length);
//       break;
//   }

//   for (let i = 0; i < result; i++) {
//     dot += '.';
//   }
//   return dot;
// }

function dotCalculator(equation) {
  const [operand1, operator, operand2] = equation.split(' ');

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '//': (a, b) => Math.trunc(a / b),
  };

  const resultLength = operations[operator](operand1.length, operand2.length);
  const dot = '.'.repeat(resultLength);

  return dot;
}

console.log(dotCalculator('..... // ..'));
