// function showPassword() {
//   const eye = document.querySelectorAll(".icon-password");
//   const input = document.querySelectorAll(".password")
//   console.log(input);
//   eye.forEach(element => {
//     element.addEventListener("click", (event) => {
//         element.classList.toggle("fa-eye-slash");
    
//         input.forEach((element) => {
//             let thisInput = this.closest(".input-wrapper").querySelector(".password")
//             if (thisInput.getAttribute("type") === "password") {
//                 thisInput.setAttribute("type", "text")
//           } else {
//             thisInput.setAttribute("type", "password")
//           }})

          
//       })
//   });
  
// }
// showPassword();


let showPassword = document.querySelectorAll(".icon-password")

showPassword.forEach((element) => {
    element.addEventListener("click", togleType)
})

function togleType() {
    let input = this.closest(".input-wrapper").querySelector(".password")
    const eye = document.querySelectorAll(".input-wrapper .icon-password");
        
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text")
        } else {
            input.setAttribute("type", "password")
            }
    eye.forEach((element) => {
        element.addEventListener("click", () => {
            if (input.getAttribute("type") === "text"){
                element.classList.add("fa-eye-slash");
            } 
            if (input.getAttribute("type") === "password"){
                 element.classList.remove("fa-eye-slash");
                }
                console.log(input.getAttribute("type"));
        })
    })
    
        
        }





