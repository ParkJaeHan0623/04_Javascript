// 값 복사 -> 일반 변수끼리의 복사
let a = 100;
let b = a;
console.log("a = " + a + ", " + "b = " + b);

a++;
// 일반 변수끼리 복사한 경우 원본이 변경되어도 복사본에는 영향이 없음
console.log("a = " + a + ", " + "b = " + b);

// 참조복사(얕은 복사)
// 배열,JSON, 객체 끼리의 복사는 참조처리가 된다
// 원본을 수정하면 복사본도 함께 수정된다(반대의 경우도 마찬가지)

const user = {
    name : "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "Kim"
console.log(user);
console.log(member);



// 값 복사(깊은 복사)

const a1 = [1,2,3];
const a2 = new Array(a1.length);

// 배열을 온전히 값 복사하기 위해서는 원소끼리 개별복사 해야함
for(let i =0; i<a1.length;i++){
    a2[i] = a1[i];
}

// 배열 객체가 갖는 메서드를 활용한 깊은 복사 방법 --> const 새로운 변수 = 원본배열.slice();
const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);

// JSON의 깊은 복사

const addr = {
    city : '서울',
    gu : '서초'
};

// 깊은 복사를 수행할 빈 JSON 객체를 생성

const copy = {};

for(let key in addr){
    copy [key] = addr [key];
}

console.log(addr);
console.log(copy);

addr.gu = '강남';

console.log(addr);
console.log(copy);

// JS 가 제공하는 기능 활용하기
const copy2 = {};

Object.assign(copy2,addr);
console.log(copy2);