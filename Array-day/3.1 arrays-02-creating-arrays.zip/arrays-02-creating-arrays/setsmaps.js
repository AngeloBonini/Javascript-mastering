const ids = new Set(["Hi", "from", "Campinas"]);
ids.add(2);
console.log(ids.has(2));
if (ids.has("Hi")) {
  ids.delete("Hi");
}
for (entry of ids.entries()) {
  console.log(entry);
}

const person1 = { name: "Gelo" };
const person2 = { name: "Mile" };

const personData = new Map([[person1, [{ date: "yesterday", proce: 20 }]]]);
personData.set(person2, [{date:'today', price:200 }])
console.log(personData);  
console.log(personData.get(person1));  

for(const [key, value] of personData.entries()){
console.log(key, value);
}

for(const key of personData.keys()){
    console.log(key);
}

for(const value of personData.values()){
    console.log(value);
}

console.log(personData.size);


let person9 = {name:'Max'};
const persons = new WeakSet();
persons.add(person9);

console.log(persons);