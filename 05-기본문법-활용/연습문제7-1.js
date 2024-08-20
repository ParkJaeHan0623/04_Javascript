let number=1;
if(number==1){
    for(let i=2;i<10;i+=2){
        console.group("%d단",i);
        for(let j=1;j<10;j++){
            console.log("%d X %d = %d",i,j,i*j);
        }
        console.groupEnd();
    }

}
else if(number==2){
    for(let i=3;i<10;i+=2){
        console.group("%d단",i);
        for(let j=1;j<10;j++){
            console.log("%d X %d = %d",i,j,i*j);
        }
        console.groupEnd();
    }
}
else{
    console.log("1이나 2를 입력하세요");
}
