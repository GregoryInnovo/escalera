let currentPosition = 0;
let board = [
  0, 0, 11, 0, 0, 17, 0, 0, 18, 12, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 20, 0, 16,
  0,
];

// TODO: Add restrictions
function game() {
  while (currentPosition < 25) {
    let diceNum = getRandomNumber();
    console.log("Dado arroja:", diceNum);
    move(diceNum);
  }
}

// TODO: Improve function
const getRandomNumber = () => {
  return parseInt(Math.random() * (7 - 1) + 1);
};

// TODO: improve steps value depends the position
function move(steps) {
  let definePosition = currentPosition + steps;
  let boardValue = board[definePosition - 1];

  boardValue === 0
    ? (currentPosition += steps)
    : (currentPosition = board[definePosition - 1]);

  currentPosition != null
    ? console.log("La posicion de jugador es:", currentPosition)
    : console.log("El jugador supera el cuadro 25");
}

game();
