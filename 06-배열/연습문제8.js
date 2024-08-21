const arr=[5,3,2,8,9];

const p = arr.length %2 ==0 ? arr.length /2 : (arr.length-1) /2;

for(let i =0; i<p ; i++){
    
    const k =arr.length -i - 1; // 반대쪽 원소의 위치
    
    const tmp =arr[i];
    arr[i]=arr[k];
    arr[k]=tmp;
}

console.log(arr);