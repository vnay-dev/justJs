//  attempt 1 (ideal solution)

let people = [
  {
    name: "Emily",
    age: 10,
  },
  {
    name: "Emma",
    age: 11,
  },
  {
    name: "Gwen",
    age: 18,
  },
  {
    name: "Emily",
    age: 10,
  },
  {
    name: "Gwen",
    age: 18,
  },
  {
    name: "Stacy",
    age: 17,
  },
];

let result = people.reduce((init, curr) => {
  if (obj[curr.age]) {
    console.log(obj[curr.age]);
    obj[curr.age] += 1;
  } else {
    console.log("else", obj[curr.age]);
    obj[curr.age] = 1;
  }
  return obj;
}, (obj = {}));

console.log(result);
