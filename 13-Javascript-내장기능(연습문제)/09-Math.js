const max = Math.max(100,123,456,789,1000);
console.log("최대값 : " + max);

const min = Math.min(100,123);
console.log("최소값 : " + min);

const num1 = 3.7146;
console.log("소수점 반올림 : " + Math.round(num1));
console.log("소수점 올림 : " + Math.ceil(num1));
console.log("소수점 내림 : " + Math.floor(num1));

const num2 = -123;
console.log("절대값 : " + Math.abs(num2));
console.log("난수 : " + Math.random());

function random(n1,n2){
    return parseInt(Math.random() * (n2 + 1) +n1);
}
const rnd = random(0,9);
console.log("0 ~ 9 사이의 난수 : " +rnd);

let auth = "";
for(let i =0; i<5; i++){
    auth += random(0,9);
}

console.log("인증 번호 : " + auth);