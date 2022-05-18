const myUrl = "https://ajax.test-danit.com/api/swapi/films/";

const films = document.createElement("div");

document.body.append(films);

fetch(myUrl)
  .then((response) => response.json())
  .then((data) => {
    const list = data.map(({ episodeId, openingCrawl, name, characters }) => {
      const container = document.createElement("div");
      const title = document.createElement("h2");
      const number = document.createElement("h3");
      const description = document.createElement("p");
      let list = document.createElement("ul");
      ShowListCharacters(characters, list);
      title.innerText = `Название Фильма: ${name}`;
      number.innerText = `Номер Фильма: ${episodeId}`;
      description.innerText = `Описание Фильма: ${openingCrawl}`;
      container.append(title, list, number, description);
      return container;
    });
    const totalEl = document.createElement("div");
    console.log(list);
    films.innerText = list.length;
    films.append(...list, totalEl);
  });
function ShowListCharacters(characters, list) {
  characters.forEach((element) => {
    let character = fetch(element);

    character
      .then((response) => {
        return response.json();
      })
      .then((character) => {
        let listItem = document.createElement("li");
        listItem.innerText = character.name;
        list.append(listItem);
      });
  });
}
