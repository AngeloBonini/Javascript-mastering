const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = PAPER;
const DRAW = "DRAW";
const PLAYER = "PLAYER WINS";
const COMPUTER = "COMPUTER WINS";

let gameISRunning = false;
const getPlayerAction = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    alert("invalid choice, we choice paper for you!");
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computer, player) => {
  if (computer === player) {
    winner = DRAW;
  } else if (
    (computer == ROCK && player == SCISSORS) ||
    (computer == SCISSORS && player == PAPER) ||
    (computer == PAPER && player == ROCK)
  ) {
    winner = COMPUTER;
  } else if (
    (player == ROCK && computer == SCISSORS) ||
    (player == SCISSORS && computer == PAPER) ||
    (palyer == PAPER && computer == ROCK)
  ) {
    winner = PLAYER;
  }
  return winner;
};
console.log(typeof gameStart);
startGameBtn.addEventListener("click", function () {
  if (gameISRunning) {
    return;
  }
  gameISRunning = true;
  console.log("game is starting...");
  const player = getPlayerAction();
  const computer = getComputerChoice();
  let winner;
  if (player) {
    winner = getWinner(computer, player);
  } else {
    getWinner(computer);
  }
  console.log(winner);
  console.log(player);
});

// res parameter

const sumUp=  (...numbers )=>{
 let sum=0;
 for (const num of numbers){
   sum +=num;
 }
 return sum;
};

console.log(sumUp(1,3,5,-9,10));