export function getMiddle(str: string) {
  if (str.length <= 1) return str;
  const length = Number(Math.trunc(str.length % 2 === 0 ? str.length / 2 - 1 : str.length / 2));
  const result = str.slice(length, -length);
  return result;
}

console.log(getMiddle('cbknjkdsnqiqzicgfqdqbjrfukvoxfflyzgluwjmtbusqpczayujulorqtqjsqvidhucztmmybijelawqkpqmwo '));
