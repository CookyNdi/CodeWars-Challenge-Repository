function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  return bagOfFruits
    .filter((fruit) => fruit)
    .map((fruit) => fruit.replace(/rotten/i, "").toLowerCase());
}