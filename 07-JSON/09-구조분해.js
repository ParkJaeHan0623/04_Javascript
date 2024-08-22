const object = {a:1,b:2,c:3};
const {a,b,c} = object;

// JSON에서 필요한 값만 추출하여 새로운 상수로 만들어줌
// -->object 에는 {}에 명시된 항목과 동일한 key를 갖는 데이터가 존재해야함
console.log(a);
console.log(b);
console.log(c);

// 구조분해를 활용하여 기존 데이터와 추가적인 값을 병합한 새로운 객체 생성
// --> '...'뒤에 오는 변수명은 반드시 원본 객체 이름이어야한다

const origin = {name: 'javascript',age: 25};
const newdata1 = {...origin,gender:'M'};
console.log(newdata1);

// 구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 원본 데이터를 수정한다.

const newdata2 = {...origin, age:30, gender:'F'};
console.log(newdata2);