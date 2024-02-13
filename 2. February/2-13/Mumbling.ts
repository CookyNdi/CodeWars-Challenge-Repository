export function accum(s: string): string {
  return s
    .split("")
    .map((value, index) => {
      return value.toUpperCase() + value.toLowerCase().repeat(index);
    })
    .join("-");
}

console.log(accum("abcd"));
