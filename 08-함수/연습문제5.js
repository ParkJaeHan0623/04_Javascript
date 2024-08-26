function printRevStar(max,current = 1){
    
    if(current>max) return;

    function generateStars(n,str=""){
        if (n===0) return str;

        return generateStars(n-1,str+="*");
    }

    console.log(generateStars(max-current + 1));

    printRevStar(max, current+1);
        
}


printRevStar(5);