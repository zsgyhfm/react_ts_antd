'use strict';
let demo1=()=>{
    //随机生成200个激活码
    let arr = new Set();
    let str = "qwertyuioplkjhgfdsazxcvbnm1234567890";
    let stra = str.split("");
    for (let i = 0; i <2001 ; i++) {
        let a = "";
        for (let i = 0; i <20 ; i++) {
            let b= Math.round(Math.random()*35);
            a+=stra[b];
        }
        arr.add(a)
    }
    return arr
};
let start = new Date().getTime();
let a = demo1();
console.log(a)
let end = new Date().getTime();
console.log("耗时",end-start);
// console.log(a);
// console.log(a.size);

//



