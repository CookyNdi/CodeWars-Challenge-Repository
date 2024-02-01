const squareSum = (arr) => {
  let result = 0
  arr.forEach((num) => result += Math.pow(num, 2))
  return result
}
// refactor : const squareSum = (arr) => arr.reduce((result, num) => result + Math.pow(num, 2), 0);