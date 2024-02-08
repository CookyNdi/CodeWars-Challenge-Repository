function longest(s1, s2) {
  const result =  s1.split('').concat(s2.split('')).sort()
  return [... new Set(result)].join('');
}

const a = 'xyaabbbccccdefww';
const b = 'xxxxyyyyabklmopq';
console.log(longest(a, b));
