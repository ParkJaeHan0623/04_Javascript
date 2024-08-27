const set1 = ';,/?:@&=+$#';
const set2 = "-_.!~*'()";
const set3 = 'ABC abc 123'
const set4 = '자바스크립트'

const enc1 = encodeURIComponent(set1);
const enc2 = encodeURIComponent(set2);
const enc3 = encodeURIComponent(set3);
const enc4 = encodeURIComponent(set4);

console.group("encodeURIComponent");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

console.group("decodeURIComponent")
console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
console.groupEnd();