import Element from "./element.js";
import EntryModal from "./entrymodal.js";
import Header from "./header.js";
import SelectModal from "./filter.js";
const filter = new SelectModal();
document.body.insertAdjacentElement("afterbegin", filter.render());
const header = new Header();
document.body.insertAdjacentElement("afterbegin", header.render());

const entryModal = new EntryModal();
document.body.insertAdjacentElement("afterbegin", entryModal.render());

// *************Temp************
const mainheader = document.body.querySelector(".header");
const btn = mainheader.querySelector(".header-btn");

btn.addEventListener("click", entryModal.open);

const modalHeader = document.body.querySelector(".modal-header");
const closebtn = modalHeader.querySelector(".btn-close");
const cancelBtn = document.body.querySelector(".btn-danger");

// *************Temp************
// ********** todo ********************************
// 1 создать валидацию входа (fetch post + сохнанить в localStorage)
// 2 получить ответ с fetch и проверить если ок менять кнопку на создать визит
//  и записывать в локал сторейдж имейл и пароль
//
// *************Authorization************/////
const ApiCards = "https://ajax.test-danit.com/api/v2/cards";
const ApiLogin = "https://ajax.test-danit.com/api/v2/cards/login";
// const token = "797da406-3e9c-4cc1-920e-791af8ae29f4";
let token = localStorage.getItem("token");
class Authorization {
  constructor() {
    this.error = document.createElement("p");
    this.logInBtn = document.getElementById("logIn");
  }
}
const logIn = () => {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const submitBtn = document.querySelector(".entry-btn");

  submitBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    fetch(ApiLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
      .then((response) => response.text())
      .then((token) => {
        localStorage.setItem("token", token);
<<<<<<< HEAD:test/step testing/script.js
        console.log(token);
        return token;
      });
  });
};
logIn();
console.log(localStorage);
// *************Authorization************
// *************CheckLogin************
const checkLogin = () => {
  const headerBtn = document.querySelector(".header-btn");
  const createVisitBtn = document.querySelector(".create-visit-btn");
  if (
    localStorage.getItem("token") !== "Incorrect username or password" &&
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token").indexOf("failed") >= -1
  ) {
    headerBtn.classList.add("hide");
    createVisitBtn.classList.remove("hide");
    document.querySelector(".smodal").classList.add("hide");
  } else return false;
=======
        checkLogin(token);
        // console.log(token);
        // return token;
      });
    // .then((token) => {
    //   checkLogin(token);
    //   // location.reload(true);
    // });
  });
};
logIn();
// console.log(localStorage);
// // *************Authorization************
// // *************CheckLogin************
const checkLogin = (token) => {
  const authorizationBtn = document.querySelector(".entry-btn");
  authorizationBtn.addEventListener("click", () => {
    const headerBtn = document.querySelector(".header-btn");
    const createVisitBtn = document.querySelector(".create-visit-btn");

    if (token == "797da406-3e9c-4cc1-920e-791af8ae29f4") {
      // token !== "Incorrect username or password" &&
      // token !== null
      // &&
      // token.indexOf("failed") > -1
      // console.log(token);
      console.log(headerBtn);
      headerBtn.remove();

      createVisitBtn.classList.remove("hide");
    } else return false;
  });
>>>>>>> 81061c9e46e786689140b8845352aa3e0632a894:test/step testing 2/src/js/Header/app.js
};
// function checkcheck() {
//   if (checkLogin()) {
//     location.reload();
//     return false;
//   }
// }
<<<<<<< HEAD:test/step testing/script.js
// checkcheck();
checkLogin();
// *************CheckLogin************
//
=======
// // checkcheck();
// checkLogin();
// *************CheckLogin************
//
closebtn.addEventListener("click", entryModal.close);
cancelBtn.addEventListener("click", entryModal.close);
>>>>>>> 81061c9e46e786689140b8845352aa3e0632a894:test/step testing 2/src/js/Header/app.js
