let price = [38000,20000,17900,17900];
let qty = [6,4,3,5];
let arr = new Array(4);
let count=0;

for(let i = 0; i<price.length;i++){
    let money=price[i]*qty[i];
    arr[i]=money; 
}
for(let j =0; j<arr.length;j++){
    if(arr[j]>=80000){
        count++;
    }
}
console.log("무료로 배송되는 상품: %d",count);