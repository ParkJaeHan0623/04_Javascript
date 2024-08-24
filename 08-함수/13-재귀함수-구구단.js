function gugu(level,depth =1){
    if(depth>9){
        return;
    }
    else{
        console.log(level + " X " + depth + " = " + (level*depth));
        gugu(level,depth+1);
    }
}
let a= 9;

for(i=1;i<a+1;i++){
    console.log(gugu(i));
}