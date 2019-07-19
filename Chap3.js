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

for (let cnt = 10; cnt > 0; cnt--) {
  console.log(cnt + "回目のメッセージです");
}

// chap3-5-1
// 99算の表示

for (let x = 1; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    console.log(x * y);
  }
}

for (let x = 1; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    console.log(x + "×" + y + "=" + x * y);
  }
}

// chap3-6-1
// 配列を作って利用する

// 「火」と表示
let wdays = ['月','火','水','木','金','土','日'];
    console.log(wdays[1]);

// 「土」と表示
let wdays = ['月','火','水','木','金','土','日'];
console.log(wdays[5]);

// chap3-6-2
// 配列の要素を書き換える
let wdays = ['月','火','水','木','金','土','日'];
wdays[1] = '炎';
console.log(wdays);

// chap3-7-1
// for ~ of分で配列を利用する
// 配列から１要素ずつ取り出して繰り返す

let wdays = ["月","火","水","木","金","土","日"];
for (let day of wdays){
  console.log(day + "曜日");
}

// chap3-3-2
// for分を使ってインデックスを指定する
// インデックスとは？=> 検索を楽にするための情報
// 今回の場合は、配列の添字のこと

let wdays = ["月","火","水","木","金","土","日"];
for( let cnt = 0; cnt < 5; cnt++){
  console.log(wdays[cnt] + "曜日");
}


// chap3-8-1
// 総当たり戦の表を作成

let team = ["A","B","C","D","E" ];
for(let t1 of team){
  for( let t2 of team){
      console.log(t1 + "vs" + t2);
  }
}

// chap3-8-2
// チーム名が等しくないときだけ表示する

let team = ["A","B","C","D","E" ];
  for(let t1 of team){
    for(let t2 of team){
      if(t1 != t2){
        console.log(t1 + "vs" + t2);
      }
    }
  }

