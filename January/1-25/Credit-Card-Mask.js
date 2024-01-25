function maskify(cc) {
  if (cc.length > 4) {
    return `${'#'.repeat(cc.length - 4)}${cc.slice(-4)}`
  } else {
    return cc
  }
}

console.log(maskify('4556364607935616'));