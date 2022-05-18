"use strict";

function startProgramm() {
  let firstNum = prompt("Введите первое число");
  while (!isValidNumber(firstNum)){
    firstNum = prompt("Введите первое число");
  }
  let secondNum = prompt("Введите второе число");
  while (!isValidNumber(secondNum)){
    secondNum = prompt("Введите второе число");
  }
  let sign = prompt("Введите знак");
  while(!isValidSign(sign)){
    sign = prompt("Введите именно знак");
  }
  const result = doMath(+firstNum, +secondNum, sign)
  alert(`${firstNum} ${sign} ${secondNum} будет ${result}`)
}

function doMath(num1, num2, chosenSign){
  if(chosenSign === "+"){
    return num1 + num2;
  } else if (chosenSign === "-"){
    return num1 - num2;
  } else if (chosenSign === "/"){
    return num1 / num2;
  }else if (chosenSign === "*"){
    return num1 * num2;
  }
}
function isValidNumber(value) {
  if (value === "" || value === null || Number.isNaN(+value)) {
    return false;
  }
  return true;
}
function isValidSign(chosenSign) {
  if(chosenSign == "+" || chosenSign == "-" || chosenSign == "*" || chosenSign == "/"){
return true;
} 
 return false;
}
startProgramm();