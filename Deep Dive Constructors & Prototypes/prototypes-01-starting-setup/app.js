// class Person {
//     name = 'Gewlo';

//     constructor(){
//         this.age = 21;
//     }

//     greet(){
//         console.log('greet, I am  ' + this.name)
//     }
// }

function Person(){
    this.age = 21;
    this.name ="Gelo"
    this.greet = ()=> (console.log('greet, I am  ' + this.name, "I'm " + this.age))
    
}

const me = new Person();
me.greet();