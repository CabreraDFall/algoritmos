// string to array -> zombies/humans() = "242" === [2,4,2]

function battleHorde(zombies, humans) {
  // Code here
  const spliter = (split) => {
    return split.split("");
  };
  let lastZombies = 0;

  zombies = spliter(zombies);
  humans = spliter(humans);

  // Fights
  // Battle logic
  for (let i = 0; i < zombies.length; i++) {
    lastZombies += zombies[i] - humans[i];
  }

  //results
  if (lastZombies > 0) {
    return `${lastZombies}z`;
  } else if (lastZombies < 0) {
    return `${-lastZombies}h`;
  } else {
    return "x";
  }
}

// 4-2 = 2
// 4-8+2 = -2
// 4-2-((-2))= 0

const zombies = "242";
const humans = "334";
console.log(battleHorde(zombies, humans));
