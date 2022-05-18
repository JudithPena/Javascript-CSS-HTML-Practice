// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => alert(`${script.src} загружен!`),
//   (error) => alert(`Ошибка: ${error.message}`)
// );

// promise.then((script) => alert("Ещё один обработчик..."));
console.log("Start");
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Hello World");
    const backendData = {
      status: true,
      server: 5000,
      greetings: "Hello",
    };
    resolve(backendData);
  }, 2000);
});
p.then(function (data) {
  console.log("Promise resolved");
  console.log(data);
});
