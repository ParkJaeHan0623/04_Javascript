const days = ['일', '월', '화', '수', '목', '금', '토'];

const date1 = new Date();

const yy = date1.getFullYear();

const mm = date1.getMonth() + 1;
const dd = date1.getDate();

const i = date1.getDay();
const day = days[i];

const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

let result = yy + "-" + mm + '-' + dd + ' ' + day + '요일 ' + hh + ":" + mi +":"+ ss;
console.log(result);

console.log(date1.toDateString());
console.log(date1.toISOString());

console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-DE'));
console.log(date1.toLocaleDateString('ko-KR'));

console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString('de-DE'));
console.log(date1.toLocaleTimeString('ko-KR'));

const date2 = new Date(2021,9,5);
console.log(date2.toLocaleString('ko-KR'));

const date3 = new Date(2021,9,5,21,19,31);
console.log(date3.toLocaleDateString('ko-KR'))

date3.setYear(2010);
date3.setMonth(1);
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));

