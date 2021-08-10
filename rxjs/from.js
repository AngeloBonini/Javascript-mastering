import { of, from } from "rxjs";
const fetch = requirejs("node-fetch");


function* hello(){
yield 'Hello';
yield 'world';

}

const iterator = hello();
// cosnole.log()
const observer = { 
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.log("complete!")
};

const source$ = from(fetch(
    'https://api.github.com/users/octocat'
));

source$.subscribe(observer);
