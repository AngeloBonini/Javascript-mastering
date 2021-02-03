const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = PAPER;

let gameISRunning = false;
const getPlayerAction = function () {
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

const strat = function gameStart() {};

const person = {
  greet: function ola() {
    console.log("Olá Amigo");
  },
};
console.log(person.name);

console.log(typeof gameStart);
startGameBtn.addEventListener("click", function () {
    if(gameISRunning){
        return;
    }
    gameISRunning = true;
  console.log("game is starting...");
  const player = getPlayerAction();
  console.log(player);
});
