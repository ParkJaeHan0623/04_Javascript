let price = [38000,20000,17900,17900];
let qty = [6,4,3,5];
let arr = new Array(4);

for(let i = 0; i<price.length;i++){
    let money=price[i]*qty[i];
    arr[i]=money; 
}
let max = arr[0];
for(let j =0; j<arr.length;j++){
    if(max<arr[j]){
        max=arr[j];
    }
}
console.log("상품금액이 가장 비싼 항목의 금액: %d",max);