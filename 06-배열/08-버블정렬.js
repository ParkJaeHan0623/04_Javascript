const data = [3, 5, 1, 4, 2];
console.log(data);

for(let i =0; i<data.length-1;i++){
    for(j=0; j<data.length-1-i;j++){
        if(data[j]>data[j+1]){
            const tmp = data[j];
            data[j]=data[j+1];
            data[j+1]=tmp;

            console.log("%d회차",i+1,data);    
        }
    }
}
console.log("결과:",data);