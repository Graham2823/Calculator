const number0 = document.querySelector(".button-0");
const number1= document.querySelector(".button-1");
const number2 = document.querySelector(".button-2");
const number3 = document.querySelector(".button-3");
const number4 = document.querySelector(".button-4");
const number5 = document.querySelector(".button-5");
const number6 = document.querySelector(".button-6");
const number7 = document.querySelector(".button-7");
const number8 = document.querySelector(".button-8");
const number9 = document.querySelector(".button-9");
const addition = document.querySelector(".button-addition");
const multiplication = document.querySelector(".button-multiplication");
const subtraction = document.querySelector(".button-subtraction");
const division = document.querySelector(".button-division");
const equals = document.querySelector(".button-equals");
const clear = document.querySelector(".button-clear");
const on = document.querySelector(".button-on");
const decimal = document.querySelector(".button-decimal");
const calculatorScreen = document.querySelector(".calculator-screen");
const Green = document.querySelector(".Green");
let equation = " ";
on.addEventListener("click", function() {
    if (calculatorScreen.style.backgroundColor === "gray") {
        calculatorScreen.style.backgroundColor = "green";
    } else {
        calculatorScreen.style.backgroundColor = "gray";
        calculatorScreen.innerText = " ";
        equation = " ";
    }
})
number0.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 0;
    equation += "0";
    console.log(equation)
    }
})
number1.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green"){
    calculatorScreen.innerText += 1;
    equation += "1";
    }
})
number2.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 2;
    equation += "2";
    }
})
number3.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 3;
    equation += "3";
    }
})
number4.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 4;
    equation += "4"
    }
})
number5.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 5;
    equation += "5";
    }
})
number6.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 6;
    equation += "6";
    }
})
number7.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 7;
    equation += "7";
    }
})
number8.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 8;
    equation += "8";
    }
})
number9.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += 9;
    equation += "9";
    }
})
decimal.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += ".";
    equation += ".";
    }
})
addition.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += "+";
    equation += "+";
    }
})
subtraction.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += "-";
    equation += "-";
    }
})
multiplication.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += "*";
    equation += "*";
    }
})
division.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText += "/";
    equation += "/";
    }
})
clear.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green") {
    calculatorScreen.innerText = " ";
    equation = " ";
    }
})
equals.addEventListener("click", function(){
    if (calculatorScreen.style.backgroundColor === "green"){
    calculatorScreen.innerText = eval(equation);
    equation = calculatorScreen.innerText;
    console.log(equation);
    console.log(calculatorScreen.innerText);
    }
})

console.log(equation);
console.log(calculatorScreen.innerHTML);