const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];
const root = document.getElementById("root");
const ulElement = document.createElement("ul");
root.append(ulElement);

books.forEach(function (item) {
  if (
    item.hasOwnProperty("author") &&
    item.hasOwnProperty("name") &&
    item.hasOwnProperty("price")
  ) {
    const listItem = `<li>${item.author}, ${item.name}, ${item.price}</li>`;
    ulElement.innerHTML += listItem;
  }
  if (!item.hasOwnProperty("author")) {
    console.error(`В объекте ${item.author} не хватает автора`);
  }
  if (!item.hasOwnProperty("name")) {
    console.error(`В объекте ${item.name} Не хватает имени`);
  }
  if (!item.hasOwnProperty("price")) {
    console.error(`В объекте ${item.price} Не хватает цены`);
  }
});
