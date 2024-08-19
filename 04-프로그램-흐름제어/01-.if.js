// 1. 논리값을 사용한 경우
console.group("1.논리값을 사용한 경우");

console.log("배고픈데");

const have_money = true;

if (have_money){
    console.log("식당에서");
}
console.log("밥을 먹자");

console.groupEnd();

//2. 숫자형 값을 사용한 경우
console.group("2.숫자형 값을 사용한 경우");

const money1 = 10000;

if(money1){
    console.log("택시를 타고");
}

console.log("집에 가자");

console.groupEnd();

//3. 비교식을 사용한 조건문
console.group("3.비교식을 사용한 조건문");

const money2 = 12000;

if(money2 >= 5000){
    const k = money2 - 5000;
    console.log("선물을 사고 %d원 남는다",k);
}

console.groupEnd();

//4. 논리식을 사용한 조건문 (AND)
console.group("4.논리식을 사용한 조건문 (AND")
const x1 = true;
const y1 = true;

if (x1 && y1){
    console.log("x1 && y1 조건은 참입니다");
}

const x2 = true;
const y2 = false;

if (x2 && y2){
    // AND 연산은 하나라도 거짓이 포함되어 있다면 결과가 거짓이므로 아래의 조건문은 실행되지 않는다
    console.log("x2 && y2 조건은 참입니다"); 
}
console.groupEnd();

// 5.논리식을 사용한 조건문 (OR)
console.group("5.논리식을 사용한 조건문 (OR)")
const x3 = true;
const y3 = true;

if (x3 || y3){
    console.log("x3 || y3 조건은 참입니다");
}

const x4 = true;
const y4 = false;

if (x4 || y4){
    console.log("x4 || y4 조건은 참입니다");
}
console.groupEnd();


