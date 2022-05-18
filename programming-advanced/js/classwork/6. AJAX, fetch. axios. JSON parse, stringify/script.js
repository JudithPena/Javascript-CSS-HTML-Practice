const url = "https://ajax.test-danit.com/api/json/users/1";

fetch(url)
  .then((response) => response.text())
  .then((data) => console.log(data));
