//-------------------------------number----------------
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("0")
let add = document.getElementById("add")
let sub = document.getElementById("subtract")
let mul = document.getElementById("multi")
let div = document.getElementById("divide")
let clear = document.getElementById("clear")
let equal = document.getElementById("equal")
let pad = document.querySelector(".pad")

pad.addEventListener("click",display)
equal.addEventListener("click",result)
clear.addEventListener("click",clearHistory)


let input=document.querySelector(".pad")
let finalResult=document.querySelector("#result")
result.finalResult=""

document.body.addEventListener("keypress",keypress)


function display(i){
    let first=document.querySelector("#first")
    if(i.target.value===undefined){
    first.innerHTML=first.innerHTML+""
    }else{ 
    first.innerHTML=first.innerHTML+i.target.value
    }
}

function clearHistory(){
    let first=document.querySelector("#first")
    let finalResult=document.querySelector("#result")
    first.innerHTML=""
    finalResult.value="0"
}


function result(){
    let first = document.querySelector("#first")
    let finalResult = document.querySelector("#result")
    finalResult.value = eval(first.innerText);
}


function keypress(i){
    let first =document.querySelector("#first")
    if((i.key<10 && i.key>0) || i.key === "*" || i.key ==="-" || i.key==="+" ||
    i.key==="/"){
        first.innerText +=i.key
    }
    else if(i.key==="Enter"){
        result()
    }
}







