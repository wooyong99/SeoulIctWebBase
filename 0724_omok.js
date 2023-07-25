const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

var flag = true;

var base = new Array(15).fill("*");

function createBase(){
    for(var i = 0; i<base.length; i++){
        base[i] = new Array(15).fill("*");
    }
}
function showBase(){
    for(var i = 0; i<base.length; i++){
        for(var j = 0; j<base[i].length; j++){
            process.stdout.write(base[i][j]+" ");
        }
        console.log(" ");
    }
}
const equals = (a,b) => JSON.stringify(a) === JSON.stringify(b);

function check(){
    var cnt = 0;
    for(var i = 0; i<15; i++){
        for(var j = 0; j<10; j++){
            let sliceArr = base[i].slice(j,j+5)
            if(equals(sliceArr, [1,1,1,1,1])){
                return 1;
            }else if(equals(sliceArr, [0,0,0,0,0])){
                return 0;
            }
        }
    }
    for(var i = 0; i<15; i++){
        let sliceArr = new Array(5).fill("*");
        for(var j = 0; j<11; j++){
            sliceArr = [base[j][i],base[j+1][i],base[j+2][i],base[j+3][i],base[j+4][i]]
            if(equals(sliceArr, [1,1,1,1,1])){
                return 1;
            }else if(equals(sliceArr, [0,0,0,0,0])){
                return 0;
            }
        }
    }

    for(var i = 2; i<13; i++) {
        let sliceArr = new Array(5).fill("*")
        for( var j = 2; j<13; j++){
            sliceArr = [base[i-2][j-2],base[i-1][j-1],base[i][j],base[i+1][j+1],base[i+2][j+2]]
            if(equals(sliceArr, [1,1,1,1,1])){
                return 1;
            }else if(equals(sliceArr, [0,0,0,0,0])){
                return 0;
            }
        }
        
    }
    return -1;
}

function play(){
    let rs = check();
    if(rs == -1){
        if(flag === true){
            rl.question("흑돌 차례입니다. 좌표를 입력해주세요 (x,y): ", (line) => {
                input = line.split(",").map(el => parseInt(el))
                
                if(base[input[0]-1][input[1]-1] != "*"){
                    console.log("-- 흑돌 재입력 --") 
                    play()
                    return
                }
                base[input[0]-1][input[1]-1] = 1
                
                flag = false;
                showBase();
                play();
                return;
            })
        }else{
            rl.question("백돌 차례입니다. 좌표를 입력해주세요 (x,y): ", (line) => {
                input = line.split(",").map(el => parseInt(el))

                if(base[input[0]-1][input[1]-1] != "*"){
                    console.log("-- 백돌 재입력 --") 
                    play()
                    return
                }
                
                base[input[0]-1][input[1]-1] = 0
                flag = true;
                showBase();
                play();
                return;
            })
        }
    }else if( rs == 1){
        console.log("Game Over - 흑 Win")
        process.exit()
    }else{
        console.log("Game Over - 백 Win")
        process.exit()
    }
}  

createBase();
console.log("----- Start Game -----");
setTimeout(() => {
    console.log("5분이 지났습니다. 게임을 종료합니다.")
    process.exit()
}, 1000*60*5)
showBase();
play();