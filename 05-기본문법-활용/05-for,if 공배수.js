const x = 3;
const y = 5;

let sum = 0; //공배수의 총 합을 저장할 변수

for(let i=1;i<=100;i++){
    if(i%(x*y)==0){
        console.log(i);
        sum+=i;
    }
}

console.log("%d과 %d의 공배수의 총 합: %d",x,y,sum);