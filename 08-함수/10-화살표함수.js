// 화살표함수 기본값


const foo = (x) => {        // const foo = function(x) => {
    for(let i=0; i<x;i++){
        console.log("Hello World");
    }
};

foo(7);


// 파라미터가 하나만 존재할 경우 소괄호 생략

const bar = x =>{
    for(let i=0; i<x;i++){
        console.log("Hello Javascript");
    }
}

bar(3);

// 처리 로직이 한 줄만 존재하는 경우

const hello = (x,y) => x*y;
console.log(hello(100,400));