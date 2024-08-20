const number =1;
let start =number == 2?2:3;

for (let i =start; i<10; i+=2){
    for(let j=1; j<10;j++){
        console.log("%d X %d = %d",i,j,i*j);
    }
}