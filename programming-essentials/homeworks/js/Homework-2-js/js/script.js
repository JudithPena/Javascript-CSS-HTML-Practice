"use strict"
let number = +prompt('Введите число');
if (number > 4){
for (let i = 0; i <= number; i += 5) {
        console.log(i);
    }
} else console.log('Sorry, no numbers');

