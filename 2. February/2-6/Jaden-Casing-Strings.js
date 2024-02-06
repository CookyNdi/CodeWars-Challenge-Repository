const toJadenCase = (str) => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
