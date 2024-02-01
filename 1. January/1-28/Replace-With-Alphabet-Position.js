const abc = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
  const alphabet = abc.split("");
  const arr = text
    .toLowerCase()
    .split("")
    .filter((char) => abc.includes(char))
    .reduce((result, char) => (result += ` ${alphabet.indexOf(char) + 1}`), "")
    .slice(1);
  return arr;
}

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z]/.test(char))
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}