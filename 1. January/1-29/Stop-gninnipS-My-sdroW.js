function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}

function spinWords(string) {
  function reverseWord(word) {
    return word.length > 4 ? word.split("").reverse().join("") : word;
  }
  return string
    .split(" ")
    .map(reverseWord)
    .join(" ");
}