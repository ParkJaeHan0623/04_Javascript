const num = 123.45;
const str = "hello";
const bool = true;

const obj = new Date();
const arr = [1,2,3];
const json = {"a" :123, "b":234};

// 1) 숫자 표현을 위한 형식 문자
// 숫자 형식이 아닌 경우 정상적으로 표시되지 않는다

console.group("숫자값 출력하기");
console.log("숫자값 출력하기 = %d", num);
console.log("숫자값 출력하기 = %d", str);
console.log("숫자값 출력하기 = %d", true);
console.log("숫자값 출력하기 = %d", obj);
console.log("숫자값 출력하기 = %d", arr);
console.log("숫자값 출력하기 = %d", json);
console.groupEnd(); 

// 2)숫자 이외의 표현을 위한 형식 문자
// 문자열 뿐만 아니라 모든 형태의 데이터를 출력할 수 있다
console.group("문자열 출력하기");
console.log("문자열 출력하기 = %s",num);
console.log("문자열 출력하기 = %s",str);
console.log("문자열 출력하기 = %s",true);
console.log("문자열 출력하기 = %s",obj);
console.log("문자열 출력하기 = %s",arr);
console.log("문자열 출력하기 = %s",json);

// 3) 복합 사용
const student = "자바스크립트 학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세 입니다.",student, age);
console.groupEnd();



