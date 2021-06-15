function watchTV() {
    console.log("Now I can watch a tv program");
}
function travel() {
    console.log("letś go to China");
}
function shopping() {
    console.log("I'm gonna shop now");
}
function review() {
    console.log("the code review is mydeepest fear");
}
/**
 * This is the common if/else statement tree, wich can be much expensive in terms of computability
 * @param {ranking is a string} ranking
 */
function action(ranking) {
    if (ranking == 'prime') {
        travel();
    }
    else if (ranking == 'second') {
        shopping();
    }
    else if (ranking == 'third') {
        watchTV();
    }
    else if (ranking == 'fourth') {
        review();
    }
}
action("prime");
