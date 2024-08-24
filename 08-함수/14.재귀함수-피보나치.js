function fibo(n){
    if(n<2){

        return n;
        
    }
    else {
        return fibo(n-1)+fibo(n-2);
    }
    
}
let a= 10;

for(i=0;i<a+1;i++){
    console.log(fibo(i));
}
