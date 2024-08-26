class Student{
    name;       //이름
    korean;     //국어
    english;    //영어
    math;       //수학

    constructor(name,korean,english,math){
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }

    sum(){
        return this.korean + this.english + this.math;
    }
    avg(){
        return this.sum() / 3;
    }
}

const students = {
    "철수" : new Student("철수",92, 81, 77),
    "영희" : new Student("영희",72, 95, 98),
    "민혁" : new Student("민혁",80, 86, 84)
}

for(let name in students){
    const student = students[name];

    console.log(`${[name]}의 총점은 ${student.sum()}점 이고 평균은 ${student.avg()}점 입니다`);
}