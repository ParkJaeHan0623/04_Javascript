const numOfApples = 123;
let persent = numOfApples%10/10;
const type = persent != 0 ? +1 : +0;
let numOfBaskets = numOfApples/10 + type -persent;
console.log(numOfBaskets);