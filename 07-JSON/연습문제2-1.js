const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],    
    "혜진": [82, 76, 81, 83]
};



for(let i in exam){
    let sum =0;
    let avg = 0;
    for(let j=0; j<exam[i].length;j++){
        sum+=exam[i][j];
    }
    avg=sum/exam[i].length;
    console.log(`${i}의 총점은 ${sum}점 이고 평균은 ${avg}점 입니다.`);
}