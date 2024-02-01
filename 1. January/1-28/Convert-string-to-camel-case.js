function toCamelCase(str) {
  const arr = str.split(/[-_]+/g);
  const result = arr
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
  return result;
}

function toCamelCase(str) {
  return str.replace(/[-_]+(\w)/g, (_, char) => char.toUpperCase());
}