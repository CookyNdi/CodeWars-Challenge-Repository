// export function dirReduc(arr: string[]): string[] {
//   let position = [0, 0];
//   let result: string[] = [];
//   arr.forEach((value) => {
//     switch (value) {
//       case "NORTH":
//         return position[1]++;
//       case "SOUTH":
//         return position[1]--;
//       case "EAST":
//         return position[0]++;
//       case "WEST":
//         return position[0]--;
//     }
//   });

//   if (position[0] === 1 && position[1] === 0) {
//     result.push("EAST");
//   } else if (position[0] === -1 && position[1] === 0) {
//     result.push("WEST");
//   } else if (position[1] === -1 && position[0] === 0) {
//     result.push("SOUTH");
//   } else if (position[1] === 1 && position[0] === 0) {
//     result.push("NORTH");
//   } else if (position[1] > 0 && position[0] > 0) {
//     result.push("NORTH", "EAST");
//   } else if (position[1] < 0 && position[0] < 0) {
//     result.push("WEST", "SOUTH");
//   }
//   console.log(position);
//   return result;
// }

export function dirReduc(arr: string[]): string[] {
  const position = [0, 0];

  arr.forEach((value) => {
    switch (value) {
      case "NORTH":
        position[1]++;
        break;
      case "SOUTH":
        position[1]--;
        break;
      case "EAST":
        position[0]++;
        break;
      case "WEST":
        position[0]--;
        break;
    }
  });

  return determineDirection(position);
}

function determineDirection(position: number[]): string[] {
  const result: string[] = [];

  if (position[0] > 0) {
    for (let i = 0; i < position[0]; i++) {
      result.push("EAST");
    }
  } else if (position[0] < 0) {
    for (let i = 0; i > position[0]; i--) {
      result.push("WEST");
    }
  }

  if (position[1] > 0) {
    for (let i = 0; i < position[1]; i++) {
      result.push("NORTH");
    }
  } else if (position[1] < 0) {
    for (let i = 0; i > position[1]; i--) {
      result.push("SOUTH");
    }
  }

  return result;
}

console.log(
  dirReduc([
    "SOUTH",
    "NORTH",
    "WEST",
    "NORTH",
    "EAST",
    "EAST",
    "WEST",
    "WEST",
    "WEST",
    "EAST",
    "SOUTH",
    "SOUTH",
    "WEST",
    "WEST",
    "EAST",
    "WEST",
  ]),
);
