// 콜백함수를 파라미터로 요구하는 함수 정의하기
function something(x,y,cb){
    const result= cb(x,y);
    console.group(cb);
    console.log(x + "와"+ y + "의 연산결과는" + result);
    console.groupEnd();
}


// 콜백함수 유형 1 - 직접 함수를 정의함
function plus(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}

something(100,50,plus);
something(100,50,minus);

// 콜백함수 유형 2 - 콜백함수를 익명함수 형태로 전달하기
something(100,50,function(a,b){
    return a*b;
});
something(100,50,function(a,b){
    return a/b;
});

// 콜백함수 유형 3 - 익명함수를 화살표 함수로 사용

something(5,7,(a,b)=>{
    for(let i=a;i<b;i++){
        console.log("7 X "+ i + " = "+ (i*7));
    }
    return a*b; 
});

// 함수로직이 한 줄인 경우 축약된 형태로 사용가능
something(5,7,(a,b)=>{
    console.log(a+b);} );

something(5,7,(a,b)=>console.log(a+b) ); //return 값을 주지 않으면 undefined를 출력함