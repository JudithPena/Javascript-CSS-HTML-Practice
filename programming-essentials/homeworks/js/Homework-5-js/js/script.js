'use strict'

const firstName  = prompt("Как вас зовут?");
const secondName = prompt("Какая ваша фамилия?");
function createNewUser(name, lastName) {
    const questionAboutBirthday = prompt("Введите день вашего рождения");
    const questionAboutBirthmonth = prompt("Введите месяц вашего рождения");
    const questionAboutBirthyear = prompt("Введите год вашего рождения");
    let birthday = new Date(questionAboutBirthyear, questionAboutBirthmonth, questionAboutBirthday);
    let currentYear = new Date();
const newUser = {
    name,
    lastName,
    getLogin: function() {
        return this.name.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    },
    getAge: function(){
        return currentYear.getFullYear() - birthday.getFullYear();
    },
    getPassword: function(){
        return this.name.charAt(0).toUpperCase() + lastName.toLowerCase() + birthday.getFullYear();
    }
};
return console.log(newUser) + console.log(`Ваш логин ${newUser.getLogin()}. Вам ${newUser.getAge()}. Ваш пароль ${newUser.getPassword()}`);
}
createNewUser(firstName, secondName);
