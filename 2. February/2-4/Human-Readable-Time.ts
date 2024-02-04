export function humanReadable(seconds: number): string {
  const hrs = Math.trunc(seconds / 3600);
  const mins = Math.trunc((seconds % 3600) / 60);
  const secs = Math.trunc(seconds % 60);

  return `${hrs < 10 ? "0" : ""}${hrs}:${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

console.log(humanReadable(0));
