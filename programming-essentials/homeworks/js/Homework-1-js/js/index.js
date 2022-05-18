"use strict"
let userName = prompt("Enter your name, please!")
let userAge = +prompt("Enter your age, please!");
if (
    userAge === null ||
    typeof userAge !== "number" || isNaN(userAge)
  )
  {
      userAge = prompt("Enter your age again, please!");
  }
  if (
    userName === null ||
    !isNaN(userName) ||
    userName.trim() === ""
  )
  {
    userName = prompt("Enter your name again, please!");
  }
if (userAge < 18) {
    alert("You are not allowed to visit this website.")
}

else if (userAge > 22){
    alert("Welcome, " + userName)}

else {
    if (confirm("Are you sure you want to continue?")) {alert("Welcom " + userName)}
    else {alert("You are not allowed to visit this website.")}
    }

