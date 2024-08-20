// for(let i=0;i<7;i++){
//     let str="";
//     for(let j=0;j<i+1;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// for(let i=0;i<7;i++){
//     let str="";
//     for(let j=0;j<7-i;j++){
//         str+="*";
//     }
//     console.log(str);
// }


for(let i=0;i<7;i++){
    let str="";
    let a="";
    for(let j=0;j<i+1;j++){
        str+="*";
        
    }
    for(let b=0;b<7-i;b++){
        a+=" "
    }
    console.log(a,str);
}