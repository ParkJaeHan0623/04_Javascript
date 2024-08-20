// [반복 횟수를 구하기 위한 연산]
// 원소의 개수가 짝수 일 경우 길이/2 , 홀수일 경우 (길이-1)/2

// [반대쪽 위치의 원소 구하기]
// 배열의 길이-i-1

const data = [1,5,2,4,3];
console.log(data);

const p = data.length %2 ==0 ? data.length /2 : (data.length-1) /2;

for(let i =0; i<p ; i++){
    
    const k =data.length -i - 1; // 반대쪽 원소의 위치
    
    const tmp =data[i];
    data[i]=data[k];
    data[k]=data[i];
}

console.log(data);