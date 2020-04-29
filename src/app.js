const generate = document.getElementById("generateNum");
console.log(generate);
const iR = document.getElementById("inputRange");
const iN = document.getElementById("guessNum");
const sM = document.getElementById("submitButton");
const result = document.getElementById("result");
const result_1 = document.getElementById("result_1");
var num1 = 0;
function makeRand(a,b){
    var Num = Math.floor(Math.random()*(a-b)+b);

    return Num;
}

function handleClick(event){
   
    console.log(iN.value);
    var iVal = iR.value;
    var randNum = makeRand(iVal,0);
    num1 = randNum;
    
    result.innerHTML = `You: ${iN.value} <br> Computer: ${num1}`;
    if(iN.value == num1){
        result_1.innerText = "You Win!";
    }
    else(
        result_1.innerText = "You Lose!"
    )
}
function handleOnchange(){
    var iVal = iR.value;
    generate.innerHTML = `Generate number between 0 and ${iVal}`;
    
    
}

function init(){
    iR.addEventListener("input", handleOnchange);
    sM.addEventListener("click",handleClick);
}

init();