function duplicateCount(text) {
  const charSet = new Set();
  const duplicates = new Set();

  text.toLowerCase().split('').forEach((char) => {
    if (charSet.has(char)) {
      duplicates.add(char);
    }
    charSet.add(char);
  });

  return duplicates.size;
}

console.log(duplicateCount('Indivisibilities'));