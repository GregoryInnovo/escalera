let currentPosition = 0;
let board = [
  0, 0, 11, 0, 0, 17, 0, 0, 18, 12, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 20, 0, 16,
  0,
];

// TODO: doc game function
function game() {
  while (currentPosition < 25) {
    let diceNum = getRandomNumber();
    console.log("Dado arroja:", diceNum);
    move(diceNum);
  }
  console.log("Fin");
}

// TODO: Doc getRandomNumber function
const getRandomNumber = () => {
  return parseInt(Math.random() * (7 - 1) + 1);
};

// TODO: Doc move function
function move(steps) {
  let definePosition = currentPosition + steps;
  let boardValue = board[definePosition - 1];
  let oldPos = currentPosition;

  if (boardValue === 0) {
    currentPosition += steps;
    currentPosition != null;
    console.log("Jugador avanza a cuadro:", currentPosition);
  } else {
    currentPosition = boardValue;
    currentPosition > oldPos
      ? console.log("Jugador sube por escalera al cuadro", currentPosition)
      : boardValue !== 0 && currentPosition !== undefined
      ? console.log("Jugador desciende al cuadro", currentPosition)
      : console.log("Jugador supera el cuadro 25");
  }
}

game();
