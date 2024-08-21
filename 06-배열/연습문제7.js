let money = [209000,109000,119000,109000,94000];

for(let i=0;i<money.length;i++){
    for(let j=0;j<money.length-1-i;j++){
        if(money[i]<money[j]){
            const tmp = money[i];
            money[i]=money[j];
            money[j]=tmp;
        }
    }
}
console.log(money);