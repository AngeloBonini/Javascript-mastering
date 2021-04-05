const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style.display= 'block';

userChosenKeyName = 'level';

const person = {
    'first-name': 'Gelo',
    age: 20,
    hobbies: ['batbox', 'cooking', 'reading'],
    [userChosenKeyName]: '...',
    greet:
    function(){
        alert("Hello There!!");
    },
    2.4: "hi"
};

person.isAdmin = true;
delete person.age;
person.isAdmin = null;

const keyName = 'first-name';
console.log(person[keyName]);
// person.greet();
console.log(person);
console.log("Hi");
if(property in func){
  console.log("Say Hello!!");
}