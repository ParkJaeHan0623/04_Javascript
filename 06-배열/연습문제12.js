let names = ["재석","민영","종민","광수","승기","세정"];
let points = [82,91,54,62,88,90];

let arr = [names,points];

for(let i =0; i<arr[1].length-1;i++){
    for(j=0; j<arr[1].length-1-i;j++){
        if(arr[1][j]<arr[1][j+1]){
            const tmp = arr[1][j];
            arr[1][j]=arr[1][j+1];
            arr[1][j+1]=tmp;

            const tmp2 = arr[0][j];
            arr[0][j]=arr[0][j+1];
            arr[0][j+1]=tmp2;
        }
    }
}
console.log(arr[0]);