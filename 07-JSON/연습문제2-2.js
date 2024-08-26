const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],    
    "혜진": [82, 76, 81, 83]
};


let sum =0;
let avg = 0;
for(let i in exam){
    
    
    
    sum+=exam[i][2];
    
    avg=sum/exam[i].length;
    
}
console.log(`모든 학생의 수학 총점은 ${sum}점 이고 평균은 ${avg}점 입니다.`);