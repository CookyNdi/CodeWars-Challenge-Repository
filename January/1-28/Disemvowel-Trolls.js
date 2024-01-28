function disemvowel(str) {
  return str
    .split("")
    .filter((char) => !"aAiIuUeEOo".includes(char))
    .join("");
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}