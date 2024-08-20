const data =[5, 2, 7, 9, 2];

let max = data[0]; // 비교를 위해 배열의 첫번째 원소를 복사(max값에 대입)

for(let i = 1; i<data.length; i++){
    console.log("Max=%d, data[%d]=%d",max,i,data[i]);

    if(max<data[i]){
        console.log(">> max에"+data[i]+"를(을) 대입")
        max=data[i];
    }
}

console.log("---------------");
console.log("최대값 = "+max);