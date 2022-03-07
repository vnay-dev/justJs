// attempt 2 (my solution)

let people = [
  { name: "Emily", age: 15 },
  { name: "Emma", age: 16 },
  { name: "Stacy", age: 17 },
  { name: "Stacy", age: 15 },
  { name: "Jenifer", age: 15 },
];

let obj = {};

for (let j = 0; j < people.length; j++) {
  if (Object.keys(obj).includes(people[j].age.toString())) {
    obj[people[j].age] += 1;
  } else {
    obj[people[j].age] = 1;
  }
}

console.log(obj);
