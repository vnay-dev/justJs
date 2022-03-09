let arr = [
  { firstName: "Elon", lastName: "Musk", age: 26 },
  { firstName: "George", lastName: "Michael", age: 36 },
  { firstName: "Bill", lastName: "Gates", age: 16 },
  { firstName: "Steve", lastName: "Jobs", age: 86 },
  { firstName: "Martin", lastName: "Paul", age: 6 },
];

let output = arr.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output)
