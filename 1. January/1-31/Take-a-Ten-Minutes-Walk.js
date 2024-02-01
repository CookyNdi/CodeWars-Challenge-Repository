function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 10) return false;
  let result = { x: 0, y: 0 };
  walk.forEach((str) => {
    if (str === "n") {
      result.y++;
    } else if (str === "s") {
      result.y--;
    } else if (str === "w") {
      result.x--;
    } else if (str === "e") {
      result.x++;
    }
  });
  return result.x === 0 && result.y === 0 ? true : false;
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
