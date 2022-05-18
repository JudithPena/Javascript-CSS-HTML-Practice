let randArr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

let content = randArr.map((element) => {

return `<li>${element}</li>`
})

document.getElementById("myList").innerHTML = content.join("")

