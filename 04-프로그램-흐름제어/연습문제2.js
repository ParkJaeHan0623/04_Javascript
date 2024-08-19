// let x = 1;
// let y = 0;
// let z = 1;
// while(x<11){
    
//     while(y<x){
//         z=z*2;
//         y++;  
//     }
//     console.log("이진수 %d개는 %d개의 정보를 표시가능.",x,z);
//     x++;
// }

let x = 1;
let i = 0;

while (i <10){
    x = x*2;
    // let x = 2**i;  거듭제곱 연산자
    console.log("이진수 %d개는 %d개의 정보를 표시가능 ",i+1,x);
    i++;
}

