const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const moreNumbers = new Array(5);
// console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
// console.log(listItems);

const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

const hobbies = ["cooking", "beatbox"];
const personalData = [20, "Angelo", { moreDetails: [] }];

const analyticsData = [
  [1.4, 2.2],
  [3.1, -5.7],
  [2.4, 5.6],
];

for (const data of analyticsData) {
  for (const datPoint of data) {
    //   console.log(datPoint);
  }
}


const otherHobbies =  ["cooking", "beatbox", "sports"];
otherHobbies.unshift("coding");
const popedItem = otherHobbies.pop();
const shifted = otherHobbies.shift();
console.log(otherHobbies);
console.log(popedItem);
console.log(shifted);

otherHobbies[1]="BEATBOX";
otherHobbies[5]="Reading";
// console.log(otherHobbies, otherHobbies[3]);

otherHobbies[1] = "coding";
// console.log(otherHobbies, otherHobbies[4]);

otherHobbies.splice(1, 0, "Good" );

// console.log(otherHobbies);


const testsResults = [1, 2, 3, 7, 5.9, -10,8.5 ];
// const storedResults = testsResults.slice(-6, -1);
const storedResults = testsResults.concat([2.99, 4])
testsResults.push(6.53); 
console.log(testsResults, storedResults)