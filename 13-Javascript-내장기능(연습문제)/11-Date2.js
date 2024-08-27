const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

const prevDate = new Date(date.getFullYear(), 0 ,1);
const ts2 = prevDate.getTime();
const tmp1 = ts1 - ts2;
console.log(tmp1);

const day1 = Math.floor(tmp1 / (24*60*60*1000));
console.log('올해는 '+ day1 + '일 지났습니다.');

const nextDay = new Date(date.getFullYear(),11,31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;

const day2 = Math.ceil(tmp2 / (24*60*60*1000));
console.log("올해는 " + day2 + "일 남았습니다.");

const b = date.getDate() -100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));


// 응용

const today = new Date();

today.setDate(1);
const startDay = today.getDay();
console.log(startDay);

const m = today.getMonth();
today.setMonth(m+1);
today.setDate(0);
const lastDate = today.getDate();
console.log(lastDate);

let data = new Array(6);
for(let i =0 ; i<data.length; i++){
    data[i] = new Array(7);
}

let counter = 1;

for (let i =0; i<data.length; i++){
    for( let j =0; j< data[i].length;j++){
        if (i==0&& j<startDay || counter > lastDate){
            data[i][j] = 0;
        }
        else {
            data[i][j] = counter ++;
        }
    }
}

for (let i =0; i<data.length; i++){
    let str = '';
    for( let j =0; j< data[i].length;j++){
        str += data[i][j] == 0 ? " \t" : (data[i][j] + "\t");
    }
    console.log(str);
}

