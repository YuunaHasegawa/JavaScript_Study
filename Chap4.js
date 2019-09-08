//4-2-2
//作成した関数を呼び出す 

let createMaile = () =>{
    console.log( 'PT企画の斉藤です');
    console.log( '請求書を送ります。');
}
createMaile();

//4-2-3
//引数を受けとる関数を作る
let createMaile = (recv) =>{
    console.log( recv + '様');
    console.log( 'PT企画の斉藤です');
    console.log( '請求書を送ります。');
}
createMaile('佐藤');
createMaile('田中');