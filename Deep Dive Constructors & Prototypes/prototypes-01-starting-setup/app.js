class AgedPerson{
   printAge(){
       console.log(this.age)
   } 
}

class Person extends AgedPerson{
    name = 'Gewlo';

    constructor(){
        super();
        this.age = 21;
    }

    greet(){
        console.log('greet, I am  ' + this.name)
    }
}

function Person(){
    this.age = 21;
    this.name ="Gelo"
    this.greet = ()=> (console.log('greet, I am  ' + this.name, "I'm " + this.age))
    
}

// Person.prototype = {
//     printAge(){
//         console.log("print a age is a good pratice")
//     }
// };

Person.prototype.printAge = () => ( console.log(this.age));

console.dir(Person)

const me = new Person();
me.greet();

console.log(me.toString());
console.log(me.__proto__ === Person.prototype);