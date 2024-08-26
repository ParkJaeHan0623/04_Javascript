function myGame(n){
    let totalClaps=0;
    
    for(i=1; i<n+1;i++){
    let numStr = i+"";
    let clapCount = 0;
    let clapStr = "";
    
    for(let a of numStr){
        if(a==3 || a==6 || a==9){
            clapCount++;
            clapStr +="짝"
            totalClaps++;
        }

    }
    if(clapCount>0){
        console.log(`${clapStr}(${i}) --> ${clapCount}번`);
    }
    else{
        console.log(i);
    }
    }

    console.log(`박수를 총 ${totalClaps}번 쳤습니다`);
}

myGame(35);