let arr=[[1,5,7,'J','Q','A'],[2,3,4,5,'Q','K','A']];
let count =0;

let arr2= new Array();
let arr3= new Array();

for(let i=0;i<arr[1].length;i++){
    for(let j =0;j<arr[0].length;j++){
        if(arr[1][i]===arr[0][j]){
            arr2[count]=j;
            arr3[count]=arr[0][j];
            count++;
        }
    }

}

console.log("가져올 수 있는 카드의 수: %d 장",count);
console.log(arr2)
console.log(arr3)
