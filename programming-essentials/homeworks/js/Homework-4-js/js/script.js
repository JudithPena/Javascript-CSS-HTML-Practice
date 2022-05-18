"use strict";

function createNewUser() {
  let name = prompt("Как вас зовут?");
  let lastName = prompt("Какая ваша фамилия?");

  const newUser = {
    name,
    lastName,
    getLogin: function () {
      return this.name.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    },
  };
  return console.log(newUser) + console.log(newUser.getLogin());
}
createNewUser();
