let student = ["둘리","도우너","또치","희동"];
let grade = [[78,89,96],[62,77,67],[54,90,80],[100,99,98]]
let avg=0;
let sumarr = new Array();
let avgarr = new Array();
let avgsum =0;

for(let k =0;k<student.length;k++){
    for(let i=0;i<grade.length;i++){
        let sum=0;
        let avg=0;
        for(let j=0;j<grade[i].length;j++){
            sum+=grade[i][j];    
        }
        avg=sum/grade[i].length;
        sumarr[i]=sum;
        avgarr[i]=avg;
    }
    avgsum += avgarr[k];
}

console.log("반 평균: %d점",avgsum/student.length);