
function watchTV():string {
  return "Now I can watch a tv program";
}
function travel():string {
  return "letś go to China";
}

function shopping():string {
  return "I'm gonna shop now";
}

function review():string {
  return "the code review is my deepest fear";
}
/**
 * This is the common if/else statement tree, wich can be much expensive in terms of computability
 * @param {ranking is a string} ranking 
 */
function action(ranking){
    if(ranking == 'prime'){
      travel()
    }
    else if (ranking == 'second'){
      shopping()
    }
    else if (ranking == 'third'){
      watchTV()
    }
    else if (ranking == 'fourth') {
      review()
    }
  }

  console.log(action('prime'))


/**
 * Now we will add an Switch case statement
 */