const person = {
    name: 'Gelo',
    age: 20,
    hobbies: ['batbox', 'cooking', 'reading'],
    greet:
    function(){
        alert("Hello There!!");
    }
};

person.isAdmin = true;
delete person.age;
console.log(person);
person.greet();