function getCount(str) {
  return str
    .split("")
    .filter((char) => ["a", "i", "u", "e", "o"].includes(char)).length;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}