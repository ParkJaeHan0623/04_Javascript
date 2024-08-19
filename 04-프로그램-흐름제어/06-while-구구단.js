let x=2;

while(x<10){
    let y=1;
    while(y<10){
        const z = x*y;
        console.log("%d X %d = %d",x,y,z);
        y++;
    }
    x++;
    console.log("");
}