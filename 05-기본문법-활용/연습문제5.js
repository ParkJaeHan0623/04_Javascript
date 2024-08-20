
for(let i=0;i<4;i++){
    let str="";
    for(j=0;j<4;j++){
        str+=i+j;
        if(j+1 <4){
            str+=" ";
        }//공백 맨마지막 없애기
    }
    console.log(str);
}