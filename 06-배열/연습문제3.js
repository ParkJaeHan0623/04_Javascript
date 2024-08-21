let arr = [7,5,5,5,5,10,7];
let sum = 0;
for(let i=0; i<arr.length ;i++){
    if(i>3){
        sum+=arr[i]*5200;
    }
    else{
        sum+=arr[i]*4500;
    }
}

console.log("일주일간의 총 급여 : %d원",sum);