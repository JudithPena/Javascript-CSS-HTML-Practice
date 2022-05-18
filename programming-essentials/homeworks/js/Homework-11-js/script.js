
const btns = document.querySelectorAll(".btn")
btns.forEach((item) => {
    document.addEventListener('keydown', (event) => {
        item.classList.remove("btn-blue")
    if(event.key === "Enter" && item.innerHTML === "Enter")
    { item.classList.add("btn-blue")}
     else if (event.key === "s" && item.innerHTML === "S")
    { item.classList.add("btn-blue")}
    else if (event.key === "e" && item.innerHTML === "E")
    { item.classList.add("btn-blue")}
    else if (event.key === "o" && item.innerHTML === "O")
    { item.classList.add("btn-blue")}
    else if (event.key === "n" && item.innerHTML === "N")
    { item.classList.add("btn-blue")}
    else if (event.key === "l" && item.innerHTML === "L")
    { item.classList.add("btn-blue")}
    else if (event.key === "z" && item.innerHTML === "Z")
    { item.classList.add("btn-blue")}

})})
