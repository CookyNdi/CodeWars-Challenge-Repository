export function sumMix(arr: any[]): number {
  return arr.reduce((result, num)=> result +  Number(num), 0)
}