export function order(words: string): string {
  if (!words) return '';

  return words
    .split(' ')
    .sort((a, b) => {
      const aMatch = a.match(/\d+/);
      const bMatch = b.match(/\d+/);
      if (aMatch && bMatch) {
        return Number(aMatch[0]) - Number(bMatch[0]);
      }
      return 0;
    })
    .join(' ');
}
