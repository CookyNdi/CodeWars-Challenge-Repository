export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) return false;

  let result = { x: 0, y: 0 };

  for (const str of walk) {
    switch (str) {
      case 'n':
        result.y++;
        break;
      case 's':
        result.y--;
        break;
      case 'w':
        result.x--;
        break;
      case 'e':
        result.x++;
        break;
    }
  }

  return result.x === 0 && result.y === 0;
}
