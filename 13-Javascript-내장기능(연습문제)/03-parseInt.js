// 15로 변환
console.log(parseInt('0xF',16));
console.log(parseInt('F',16));
console.log(parseInt('17',8));
console.log(parseInt('015',10));
console.log(parseInt(15.99,10));
console.log(parseInt('15,123',10));
console.log(parseInt('FXX123',16));
console.log(parseInt('1111',2));
console.log(parseInt('15*3',10));
console.log(parseInt('15e2',10));
console.log(parseInt('15px',10));

//-15로 변환
console.log(parseInt('-F',16));
console.log(parseInt('-0F',16));
console.log(parseInt("-0XF",16));
console.log(parseInt(-15.1,10));
console.log(parseInt('-17',8));
console.log(parseInt('-15',10));
console.log(parseInt('-1111',2));

//NaN로 변환
console.log(parseInt("Hello",8));