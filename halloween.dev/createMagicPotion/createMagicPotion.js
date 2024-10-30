// function createMagicPotion(potions, target) {
//   // Code here
//   let lastPosition = undefined;

//   for (let i = potions.length - 1; i >= 0; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (potions[i] + potions[j] === target) {
//         lastPosition = [i, j];
//       }
//     }
//   }
//   return lastPosition;
// }
// console.log(createMagicPotion([1, 2, 3, 5], 5));

function createMagicPotion(potions, target) {
  const seen = {}; // Hash map to store previously seen elements

  for (let i = 0; i < potions.length; i++) {
    const needed = target - potions[i];

    if (seen[needed] !== undefined) {
      return [seen[needed], i]; // Return indices of the pair
    }

    seen[potions[i]] = i; // Store the current element with its index
  }

  return undefined; // Return undefined if no pair is found
}

console.log(createMagicPotion([1, 4, 1, 4], 5)); // Expected output: [0, 2]
