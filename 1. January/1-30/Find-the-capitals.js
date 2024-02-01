const capitals = (word) => {
  const result = [];
  word.split("").forEach((char, index) => {
    if (char.match(/[A-Z]/)?.[0]) {
      result.push(index);
    }
  });
  return result;
};

const capitals = (word) => {
  return word
    .split("")
    .map((char, index) => (char.match(/[A-Z]/) ? index : undefined))
    .filter((index) => index !== undefined);
};


const capitals = (word) => {
  return word.split("").reduce((result, char, index) => {
    if (char.match(/[A-Z]/)) {
      result.push(index);
    }
    return result;
  }, []);
};
