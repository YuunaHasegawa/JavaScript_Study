// chap3-2-1
// 残高が０になるまで繰り返す

let shikin = 50000;
while (shikin >= 0) {
  console.log(shikin);
  shikin = shikin - 5080;
}

let shikin = 50000;
while (shikin >= 0) {
  console.log(shikin);
  shikin -= 5080;
}

// chap3-3-1
// 同じ内容のメッセージを10回繰り返す
for (let cnt = 0; cnt < 10; cnt++) {
  console.log("hello world");
}

// 2ずつ増やす場合
for (let cnt = 0; cnt < 10; cnt += 2) {
  console.log("hello world");
}

// chap3-3-2
// メッセージを追加する
for (let cnt = 0; cnt <= 10; cnt++) {
  console.log(cnt + "回目のメッセージです");
}

// chap3-4-1
// 逆順で繰り返す（1ずつ減らす）

for (let cnt = 10; cnt > 0; cnt--){
    console.log(cnt + "回目のメッセージです");
}

// chap3-5-1
// 99算の表示

for (let x = 1; x < 10; x++){
    for(let y = 1; y < 10; y++){
        console.log(x * y);
    }
}

for (let x = 1; x < 10; x++){
    for(let y = 1; y < 10; y++){
        console.log(x + "×" + y + "=" + x * y);
    }
}