export function findShort(str: string):number {
  const result = str.split(" ").sort((a, b) => a.length - b.length);
  return result[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
