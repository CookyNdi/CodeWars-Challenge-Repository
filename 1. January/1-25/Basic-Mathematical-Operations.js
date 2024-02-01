function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": return value1 + value2
    case "-": return value1 - value2
    case "*": return value1 * value2
    case "/": return value1 / value2
    default: return 'Operation not valid'
  }
}

console.log(basicOp("+", 4, 7))