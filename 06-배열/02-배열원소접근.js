let arr1=[1, 3.14, true, "hello"];
console.log("[0] = %d ,[1] = %d , [2] = %s , [3] = %s",arr1[0],arr1[1],arr1[2],arr1[3]);


// 배열의 각 원소를 새로운 변수 a,b,c에 나눠서 저장하기(구조분해)
let arr2 = [100,200,300];
const[a,b,c] = arr2;
console.log("a = %d, b = %d, c = %d",a,b,c);


// 구조분해를 수행한 나머지를 별도로 분리하기
let [b1,b2,...rest] = [1,2,3,4,5,6,7,8,9];
console.log(b1);
console.log(b2);
console.log(rest);

let arr3 = [100];
console.log(arr3);

let item1 = arr3[0];
console.log(item1);

let item2 = arr3[1];
console.log(item2);// 1번째 원소를 변수에 할당하고 출력 -> undefined  (arr3 은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함.)
if(item2 !== undefined){
    console.log("1번째 원소 존재함");
}
else{
    console.log("1번째 원소 존재하지 않음");
}

// 비구조 문법으로 값 복사하기
let [x, y]=arr3;
console.log(x);
console.log(y);