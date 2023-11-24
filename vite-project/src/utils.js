
function d6(){
    return Math.floor(Math.random()*6) + 1;
}

function rollDice(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(d6());
    }
    return arr;
}

function sum(arr){
    return arr.reduce((prev,curr) => prev + curr,0);
}

export {d6,rollDice,sum};