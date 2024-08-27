// 정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));


// NaN을 반환하는 경우
console.log(parseFloat('FF2'));
console.log(parseFloat(true));
console.log(parseFloat(false));