let gold = [[500,291],[320,586],[100,460],[120,558],[92,18],[30,72]];

let sum = 0;

for(let i=0;i<gold.length;i++){
    sum+=(gold[i][0]/100*90)*(gold[i][1]);
}

console.log("골드(G)의 총액 : %d G",sum);