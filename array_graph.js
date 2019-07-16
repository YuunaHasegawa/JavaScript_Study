// NG
let graph = ["*","**","***","****","*****"];
console.log(graph);

// 数を表示させる
let array = [1,2,3];
for(let num of array){
    console.log(num);
}

// ＊を表示させてグラフにする
let sign = "★";
let array = [1,2,3,5,8,4,2];
for(let num of array){
    let out  = "";
    for(let i = 0; i<num; i++){
        out = out + sign;
    } 
    console.log(out);
}

    