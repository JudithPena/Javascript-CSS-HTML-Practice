
let myInput = document.getElementById("myInput");
myInput.onfocus = () => document.getElementById("myInput").classList.add("inputClass")
myInput.onblur = () => {
    if(myInput.value === ""){
        return false
    } else if (myInput.value < 0) {
        if(document.querySelector(".error-text")){
            document.getElementById("myInput").value = "";
            
            return false;}
        let newestDiv = document.createElement("div")
        newestDiv.className = "error-text"
        newestDiv.innerHTML = `Please enter correct price`
        document.getElementById("myInput").classList.add("error")
        document.getElementById("myInput").value = "";
        document.querySelector("#myInput").after(newestDiv);
       
    }
     else {
        let newDiv = document.createElement("div")
        newDiv.className = "newDiv"
        newDiv.innerHTML = `<span>Текущая цена: ${myInput.value}</span>`
    let xBtn = document.createElement("button")
    xBtn.className = "myButton"
    
    xBtn.innerHTML = "X"
    if(document.querySelector(".error-text")){
    document.querySelector(".error-text").remove();}
    document.getElementById("myInput").classList.remove("error")    
    document.querySelector(".myDiv").prepend(newDiv);
    document.querySelector(".newDiv").append(xBtn);
    document.getElementById("myInput").value = "";
    let myBtn = document.querySelector(".myButton");
    myBtn.addEventListener("click", (event) => {
            event.target.closest(".newDiv ").remove();
            document.getElementById("myInput").value = "";
        })
        document.getElementById("myInput").classList.remove("error")    
}
    
}


