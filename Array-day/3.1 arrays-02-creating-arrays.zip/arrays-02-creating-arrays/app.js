const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const moreNumbers = new Array(5);
console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["cooking", "beatbox"];
const personalData = [20, "Angelo", { moreDetails: [] }];

const analyticsData = [
  [1.4, 2.2],
  [3.1, -5.7],
  [2.4, 5.6],
];

for (const data of analyticsData) {
  for (const datPoint of data) {
      console.log(datPoint);
  }
}
