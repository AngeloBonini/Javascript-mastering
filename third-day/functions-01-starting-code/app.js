const startGameBtn = document.getElementById('start-game-btn');




const strat = function gameStart(){
    console.log("game is starting...")
};


const person = {
  greet:  function ola(){
        console.log("Olá Amigo");
    }
};
console.log(person.name);

console.log(typeof gameStart);
startGameBtn.addEventListener('click', gameStart);