function duplicateCount(text) {
  let count = 0
  text.toLocaleLowerCase().split('').sort().reduce((acc, curr) => {
    if (acc === curr) {
      count++
    }
    console.log(curr);
    return curr
  }, 0)

  return count
}

console.log(duplicateCount('Indivisibility'));