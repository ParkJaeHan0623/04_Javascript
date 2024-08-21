let grade = [75, 82, 91];
let sum=0;
let avg=0;
for(let i=0;i<grade.length;i++){
    sum+=grade[i];
}
avg=sum/grade.length;

console.log("총점: %d ",sum);
console.log("평균: %d",avg)
