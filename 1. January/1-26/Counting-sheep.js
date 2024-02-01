const countSheeps = (sheep) => sheep.reduce((result, count) => count ? result + 1 : result, 0)

// refactor : const countSheeps = (sheep) => sheep.filter(Boolean).length;