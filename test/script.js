// function sumOfArray (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         sum += Array.isArray([i]) + arr[i];
//         }
//     return sum;
// }
// let new_array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// new_array.map(()=> {

// })
let myInput = document.getElementById("myInput");
myInput.onblur = () => {
  let span = document.createElement("span");
  let spanContent =
    (span.innerHTML = `<span>Текущая цена: ${myInput.value}</span>`);
  let xBtn = (document.createElement(
    "input"
  ).innerHTML = `<input id="myButton" onclick="myFunction()" value="X" type="button"X>`);
  document.body.insertAdjacentHTML("afterbegin", xBtn);

  document.body.insertAdjacentHTML("afterbegin", spanContent);
};
function myFunction() {
  document.querySelector("span").remove();
  document.querySelector("#myButton").remove();
}
