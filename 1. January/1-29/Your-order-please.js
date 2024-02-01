function order(words) {
  if (!words) return ''
  return words
    .split(" ")
    .map((arr) => arr.match(/\d+/))
    .sort()
    .reduce((result, arr) => (result += ` ${arr?.input}`), "")
    .slice(1);
}

function order(words) {
  if (!words) return '';

  return words
    .split(" ")
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
    .join(" ");
}