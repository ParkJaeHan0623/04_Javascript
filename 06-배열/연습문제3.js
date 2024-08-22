let arr = [7,5,5,5,5,10,7];
let sum = 0;
for(let i=0; i<arr.length ;i++){
    // 풀이방법(1)
    // if(i>3){
    //     sum+=arr[i]*5200;
    // }
    // else{
    //     sum+=arr[i]*4500;
    // }
    
    // 풀이방법(2)
    // let x = 0;
    // if(i<4){
    //     x=4500;
    // }
    // else{
    //     x=5200;
    // }
    // money += time[i] * x;

    // 풀이방법(3)
    sum += arr[i] * ((i<4) ? 4500 : 5200);

}

console.log("일주일간의 총 급여 : %d원",sum);