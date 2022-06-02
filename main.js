console.log("Escalera Game");
let currentPosition = 0;
let board = [
  0, 0, 11, 0, 0, 17, 0, 0, 18, 12, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 20, 0, 16,
  0,
];

// TODO: Add restrictions
function game() {
  currentPosition = 0;
  console.log("Game start");
  while (currentPosition != 25) {
    let diceNum = getRandomNumber();

    move(diceNum);
    console.log("Current position is:", currentPosition);
    if(currentPosition  > 25) {
        break;
    }
  }

  console.log("Game finished");
}

// TODO: Improve function
const getRandomNumber = () => {
  let diceNum = parseInt(Math.random() * (7 - 1) + 1);
  console.log(diceNum);
  return diceNum;
};

// TODO: improve steps value depends the position
function move(steps) {
  currentPosition += steps;
}

game();
