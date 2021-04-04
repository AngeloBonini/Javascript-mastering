const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style.display= 'block';
const person = {
    'first-name': 'Gelo',
    age: 20,
    hobbies: ['batbox', 'cooking', 'reading'],
    greet:
    function(){
        alert("Hello There!!");
    }
};

person.isAdmin = true;
delete person.age;
person.isAdmin = null;
console.log(person['first-name']);
person.greet();