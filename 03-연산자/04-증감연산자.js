let selfPlus = 1;
console.log(selfPlus); //1

selfPlus++;
console.log(selfPlus); //2

++selfPlus;
console.log(selfPlus); //3

let prevValue = 1;

let prevResult = 100 + ++prevValue;

console.log(prevResult); //102
console.log(prevValue); //2

let nextValue = 1;

let nextResult = 100 + nextValue++;

console.log(nextResult); //101
console.log(nextValue); //2


