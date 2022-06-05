let currentPosition = 0; // start the current position of the player
let board = [
  0, 0, 11, 0, 0, 17, 0, 0, 18, 12, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 20, 0, 16,
  0, 0, 0, 0, 0, 0, 0,
]; // create an array that contains the new positions, but depends of current position of the player

/**
 * Run the game
 */
function game() {
  while (currentPosition < 25) {
    let diceNum = getRandomNumber();
    console.log("Dado arroja:", diceNum);
    move(diceNum);
  }
  console.log("Fin");
}

/**
 * Get a random number
 * @returns {number} a random number
 */
const getRandomNumber = () => {
  return parseInt(Math.random() * (7 - 1) + 1);
};

/**
 * Move the player in the board depends of the board values and dice number
 * @param {number} steps that the player can move
 */
function move(steps) {
  let definePosition = currentPosition + steps;
  let boardValue = board[definePosition - 1];

  // In this conditional the game examines if the board value is different than 0
  if (boardValue === 0) {
    // If the conditional is true the current position advances according to the value of the dice
    currentPosition += steps;
    if (currentPosition > 25) {
      console.log("Jugador supera el cuadro 25");
    } else {
      console.log("Jugador avanza al cuadro:", currentPosition);
    }
  } else {
    // Update the current position
    currentPosition = boardValue;
    // In this conditional the program examines if the player goes forward or backwards
    if (definePosition < currentPosition) {
      console.log("Jugador sube por escalera al cuadro", currentPosition);
    } else {
      boardValue !== 0 &&
        currentPosition !== undefined &&
        console.log("Jugador desciende al cuadro", currentPosition);
    }
  }
}

game(); // execute the game
