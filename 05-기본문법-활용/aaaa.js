function printStar(a){
    for(let i=0;i<a;i++){
        let str="";
        for(let j=0;j<a-i;j++){
            str+="*";
        }
        console.log(str);
    }
}

printStar(7);

