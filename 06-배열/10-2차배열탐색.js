const arr = [
    [1,2,3],
    [4,5,6]
];

for(let i = 0; i<arr.length; i++){
    console.group(i + "번째 행-------");
    console.log(arr[i]);

    for(let j = 0; j<arr[i].length; j++){
        console.log("%d행 %d열: %d",i,j,arr[i][j]);

    }
    console.groupEnd();
}