const a =[1,2];
const b =[4,5,6,7];
const arr1= [a,b];
console.log(arr1);

const arr2 = [[1,2,3],[4,5,6,7]];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);

console.log(arr2[0][0]);
console.log(arr2[0][1]);
console.log(arr2[1][0]);
console.log(arr2[1][1]);
console.log(arr2[1][2]);
console.log(arr2[1][3]);

// Array 클래스를 통한 2차 배열

const c = new Array(10,20,30);
const d = new Array(50,60,70);
const arr3 = new Array(c,d);
console.log(arr3);

const arr4 = new Array(new Array(10,20,30),new Array(50,60,70));
console.log(arr4);