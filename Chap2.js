//Chap2-2
let text = prompt('入力せよ');
console.log(isNaN(text));

//Chap2-3-1
let text = prompt('入力せよ');
    if(isNaN(text)){
        console.log('数字ではない');
    }

 //Chap2-3-2
let text = prompt('入力せよ');
    if( ! isNaN(text)){
        console.log(parseInt(text) + 80);
    }

//chap2-4
let text = prompt('入力せよ')
    if(! isNaN(text)){
        console.log(parseInt(text) + 80);
    }else{
        console.log('数値ではない');
    }

//chap2-5-1
console.log(4<5);

//chap2-5-2
console.log(6<5);

//chap2-5-3
let text = prompt('年齢は？');
let age  = parseInt(text);
if (age < 20){
    console.log('未成年')
}


//chap2-6-1
let text = prompt('年齢は？');
let age  = parseInt(text);
if(age < 20 ){
    console.log('未成年');
} else if (age < 65 ){
    console.log('成人');
} else {
    console.log('高齢者');
}

//chap2-7
let text = prompt('年齢は？');
if(! isNaN(text) ){
    let age = parseInt(text);
    if(age < 20){
        console.log('未成年');
    }
}

//chap2-8
let text = prompt('年齢は');
let age  = parseInt( text );
if(age >= 6 && age <= 15){
    console.log('義務教育の対象');
}

//chap2-8-2
let text = prompt('年齢は');
let age  = parseInt( text );
if(age >=5 || age <=65){
    console.log('幼児と高齢者');
}

//chap2-8-3
let text = prompt('年齢は');
if (! isNaN(text)){
    console.log('数値に変換可能');
}

//chap2-9
let text = prompt('年齢は？');
if(! isNaN(text)){
    let age = parseInt( text );
    if(age < 20){
        console.log('未成年');
    }else if(age < 65){
        console.log('成人');
    }else{
        console.log('高齢者');
    }
}

//2-9