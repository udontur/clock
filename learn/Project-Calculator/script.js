let btn0=document.querySelector(".0");
let btn1=document.querySelector(".1");
let btn2=document.querySelector(".2");
let btn3=document.querySelector(".3");
let btn4=document.querySelector(".4");
let btn5=document.querySelector(".5");
let btn6=document.querySelector(".6");
let btn7=document.querySelector(".7");
let btn8=document.querySelector(".8");
let btn9=document.querySelector(".9");
let btnAddi=document.querySelector(".addi");
let btnSubt=document.querySelector(".subt");
let btnMult=document.querySelector(".mult");
let btnDivi=document.querySelector(".divi");
let btnEqua=document.querySelector(".equa");
let btnCanc=document.querySelector(".canc");

function calculate(a, op, b){
    if(op==="+") return a+b;
    else if(op==="-") return a-b;
    else if(op==="*") return a*b;
    else return a/b;
}

let equation={
    first: "",
    operator: null,
    second: "",
    answer: null;
    state: 1
}

btn1.addEventListener("click", ()=>{
    if(equation.state===1){
        equation.first+="1";

    }else if(equation.state===2){
        equation.second+="1";

    }
});
btnAddi.addEventListener("click", ()=>{
    if(equation.state===1){
        equation.operator="+";
        equation.state=2;
    }
});
btnEqua.addEventListener("click", ()=>{
    if(equation.state===2){
        let equationAnswer=calculate(equation.first, equation.operator, equation.second);
        equation.first=equationAnswer;
        equation.operator=null;
        equation.second=null;
        equation.state=1;
    }
});