// 1. var 중복선언
if(false){
    var num1 = 100;
    console.log("블록 안: "+ num1);
}
console.log("블록 밖:" +num1);
// if문의 실행 여부에 따라 num1이 선언되므로 if 문의 실행여부에 num1의 식별가능 여부가 결정됨.
// num1을 식별하지 못할 경우 정의되지 않은 값 undefined가 된다


// 2. 조건문이 실행되는 경우
if(true){
    
    var num2 = 100;
    console.log("블록 안: "+num2);
}
console.log("블록 밖: "+ num2);


// 3. let 중복 선언
let num3 = 100;
if(true){
    // 블록 밖에서 생성된 변수를 블록 안에서 사용가능
    let num4= num3+ 100;
    console.log("블록 안 : "+num4);
}

console.log("블록 밖 : "+num4);
// let으로 선언된 변수는 if문의 실행 여부와 관계없이 블록을 빠져나올 수 없다.--> 프로그램 에러

// 4. for문의 초기식을 let으로 선언한 경우
for(let j=0; j<10; j++){
    console.log("반복문 안::: "+j);
}
console.log("반복문 밖::: "+j);
// for문의 초기식도 {}에 속한것으로 보기 떄문에 j값은 for블록을 빠져나올 수 없다.

// 5. 선언되지 않은 변수의 경우
// let 키워드는 반드시 선언->할당의 순서로만 사용가능함
x=100;
let x;
console.log(x);
