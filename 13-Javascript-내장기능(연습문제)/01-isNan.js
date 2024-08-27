// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({a:10,b:20}));
console.log(isNaN([10,20,30]));
console.log(isNaN('blabla'));
console.log(isNaN(`123ABC`));


// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(37));
console.log(isNaN('37'));
console.log(isNaN('37.37'));
console.log(isNaN(''));
console.log(isNaN(' '));