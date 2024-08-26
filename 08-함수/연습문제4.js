function printStar(max,current = 1){
    
    if(current>max) return;

    function generateStars(n,str=""){
        if (n===0) return str;

        return generateStars(n-1,str+="*");
    }

    console.log(generateStars(current));

    printStar(max, current +1);
        
}




printStar(5);