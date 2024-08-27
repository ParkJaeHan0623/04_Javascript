function foo(){
    for(let i =1; i<10; i++){
        console.log("2 X " + i + " = " + (i*2));
    }
}

setTimeout(foo,3000);
console.log("구구단을 외자");


setTimeout(() => {
    for(let i =1; i<10; i++){
        console.log("3 X " + i + " = " + (i*3));
        }
    },1500);

    console.log("프로그램 종료~~!!")