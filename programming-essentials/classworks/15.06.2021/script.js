// // Получить от пользователя данные
// // о нужной конфигурации автомобиля: марка, цвет, год выпуска, пробег.
// // Год выпуска проверить на число и на соответствие диапазону 1960 и текущим годом.
// // Пробег проверить на число и на то что число больше 0 и меньше 200000.
// // Из полученных данных создать объект автомобиля с помощью функции.
// // Функция принимаем в себя параметры автомобиля и возвращает объект автомобиля.
// // Без переданных данных, возвращает объект вида
// // {
// //     brand: 'Audi',
// //     appearance: {
// //         color: 'white'
// //     },
// //     year: ${текущий год},
// //     mileage: 0
// // }, а с переданными - соответствующие поля заполняются нужными данными.
// // Полученный объект автомобиля вывести в консоль.
// // Пользователю в модальном окне вывести фразу
// // `Спасибо, инфа о вашем автомобиль марки ${введеная марка} сохранена.
// // Код доступа к информации ${код доступа}`.
// // Код доступа сформировать из введеной марки,
// // в которой все символы будут в верхнем регистре, введеного пробега и
// // строки вида `13032021` - сегодняшняя дата и год.
function startProgram() {
  const newCar = createCarObject(
    getBrand(),
    getColor(),
    getYear(),
    getMileage()
  );
  console.log(newCar);
  alert(
    `Спасибо, инфа о вашем автомобиль марки ${newCar.brand} цвет ${
      newCar.appearance.color
    } сохранена. Код доступа к информации ${getCode(
      newCar.brand,
      newCar.mileage
    )}`
  );
}
///////////////////////
function getCode(brand, millage) {
  return `${brand.toUpperCase()}${millage}${getCurrentYear()}`;
}
///////////////////////////
function getBrand() {
  let brand = prompt("Введите марку своего авто");
  while (!isValidBrand(brand)) {
    brand = prompt("Введите марку своего авто");
  }
  return brand;
}
function getColor() {
  let color = prompt("Введите цвет своего авто");
  while (!isValidColor(color)) {
    color = prompt("Введите цвет своего авто");
  }
  return color;
}
function getYear() {
  let year = prompt("Введите год выпуска своего авто");
  while (!isValidYear(year)) {
    year = prompt("Введите год выпуска своего авто");
  }
  return year;
}
function getMileage() {
  let mileage = prompt("Введите пробег своего авто");
  while (!isValidMileage(mileage)) {
    mileage = prompt("Введите пробег своего авто");
  }
  return mileage;
}
/////////////////////////////
function isNotEmptyString(string) {
  return string !== "" && string !== null;
}
function isNotEmptyNumber(value) {
  return isNotEmptyString(value) && !Number.isNaN(+value);
}
////////////////
function getCurrentYear() {
  const dateNow = new Date();
  return dateNow.getFullYear();
}
////////////////////
function isValidColor(value) {
  return isNotEmptyString(value);
}
function isValidBrand(value) {
  return isNotEmptyString(value);
}
function isValidYear(value) {
  return (
    isNotEmptyNumber(value) && +value >= 1960 && +value <= getCurrentYear()
  );
}
function isValidMileage(value) {
  return isNotEmptyNumber(value) && value >= 0 && value <= 200000;
}
////////////////
function createCarObject(
  brand = "Audi",
  color = "white",
  year = getCurrentYear(),
  mileage = 0
) {
  return {
    brand,
    appearance: {
      color,
    },
    year,
    mileage,
  };
}
startProgram();

// let date = new Date();

// let myBirth = 1999;

// let myAge = date.getFullYear() - myBirth;

// console.log(myAge);
