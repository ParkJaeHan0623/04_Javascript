const str1 = "Hello World";
console.log(str1);

const str2 = new String("Hello JavaScript");
console.log(str2);

const msg = "Life is too short, You need JavaScript";
console.log("문자열 : " + msg);

const len = msg.length;
console.log("문자열의 길이 : " +len);

const str2nd = msg.charAt(2);
console.log("두 번째 글자 : "+str2nd);

const p1 = msg.indexOf("f");
console.log("'f' 가 처음 나타나는 위치 : "+p1);

console.log("'z' 가 처음 나타나는 위치 : " +msg.indexOf("z")); //찾지 못할 경우 -1 반환

console.log("'short' 가 처음 나타나는 위치 : "+msg.indexOf("short")); //일치하는 내용이 시작되는 첫 글자의 위치를 반환

const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i",p2 + 1);

console.log("'i' 가 첫 번째로 나타나는 위치 : " + p2);
console.log("'i' 가 두 번째로 나타나는 위치 : " + p3);

const p4 = msg.lastIndexOf("a");
console.log("'a' 의 마지막 위치 : " + p4);

// 응용
if(msg.indexOf("Hello") > -1){
    console.log("Hello 가 포함됨");
}
else{
    console.log("Hello 가 포함 되지 않음");
}

const substring1 = msg.substring(0, 17);
console.log("문자열 자르기 : " + substring1);

const substring2 = msg.substring(19);
console.log("문자열 자르기 : " + substring2);

const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환" + up);

const low = msg.toLowerCase();
console.log("모든 글자의 소문자 변환 : " + low);

const src1 = "  Hello World  ";
const src2 = src1.trim();

console.log(src1);
console.log(src2);

const txt = "HTML,CSS,JavaScript";
const arr = txt.split (",");

console.log(txt);
console.log(arr);

const txt2 = txt.replace("," , "$");
console.log(txt2);

const test = "Hello JavaScript , World JavaScript";
console.log(test);
console.log(test.replaceAll("JavaScript", "자바스크립트"));