let arr1 = new Array(5);
console.log(arr1);

const len = arr1.length;
console.log(len);

for (let i =0; i<len; i++){
    arr1[i] = i*10;
}
console.log(arr1);

// For Of 반복문 (배열의 값을 하나씩 차례대로 대입);
console.group("1차 배열의 탐색");

const arr2 = [4, 5, 2, 1, 3];
for(const item of arr2){
    console.log(item);
}
console.groupEnd();