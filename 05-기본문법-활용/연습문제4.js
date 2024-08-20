let count =0;
for(let i=1;i<7;i++){
    for(let j=1;j<7;j++){
        if(i+j==6){
            console.log("[ %d, %d ]",i,j);
            count++;
        }
    }
}
console.log("경우의 수는 %d개 입니다.",count);