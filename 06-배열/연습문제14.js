let arr=[[1,5,7,'J','Q','A'],[2,3,4,5,'Q','K','A']];
let count =0;

let arr2= new Array();
let arr3= new Array();
let p=0;
for(let i=0;i<arr[1].length;i++){
    for(let j =0;j<arr[0].length;j++){
        if(arr[1][i]===arr[0][j]){
            count++;
            
            arr2[p]=j;
            arr3[p]=arr[0][j];
            p++;
        }
    }

}

console.log("가져올 수 있는 카드의 수: %d 장",count);

for(let k=0;k<arr2.length;k++){
    console.log("%s번째 >> %s",arr2[k],arr3[k]);
}