"use strict";

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// do {
//   while (i <= 5) {
//     console.log(i);
//     i++;
//   }
//   console.log(i);
//   i += 3;
// } while (i < 0);
// console.log(i);

// for (let i = 0; i <= 300; i++) {
//   if (i % 2 !== 0) {
//     if (i % 5 !== 0) {
//       console.log(i);
//     }
//   }
// }

// let firstNumber = prompt("Enter the first number");

// while (
//   !firstNumber ||
//   typeof +firstNumber !== "number" ||
//   isNaN(+firstNumber) ||
//   firstNumber.trim() === ""
// );
// {
//   firstNumber = prompt("Enter the first number");
// }
// let secondNumber = prompt("Enter the second number");
// while (
//   !secondNumber ||
//   typeof +secondNumber !== "number" ||
//   isNaN(+secondNumber) ||
//   secondNumber.trim() === ""
// );
// {
//   secondNumber = prompt("Enter the first number");
// }
// console.log(
//   `Поздравляем. Введённые вами числа: «${firstNumber}» и «${secondNumber}»`
// );
// console.log(typeof " ");
// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     console.log(i);
//     break;
//     // continue;
//   } else {
//     console.log(`step end`);
//     continue;
//   }
// }

let userName;
let userLastName;
let userYearOfBirth;

do {
  userName = prompt("Укажи своё имя");
} while (!userName || userName.trim() === "");
do {
  userLastName = prompt("Укажи свою фамили");
} while (!userLastName || userLastName.trim() === "");
do {
  userYearOfBirth = prompt("Укажи свой год рождения");
} while (!userYearOfBirth || userYearOfBirth.trim() === "");
