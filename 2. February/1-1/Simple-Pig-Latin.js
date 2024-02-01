function pigIt(str) {
  const arr = str.split(' ');

  const result = arr.map((word) => {
    if (/^[A-Za-z]+$/.test(word)) {
      return word.slice(1) + word[0] + 'ay';
    } else {
      return word;
    }
  });

  return result.join(' ');
}

console.log(pigIt('Pig latin is cool'));
