import range from "./utils/range.js";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// export function range(start, end) {
//   const result = [];
//   for (let index = +start; index <= end; index++) {
//     result.push(index);
//   }
//   return result;
// }
// console.log(range("1", "1"));
function convertToArray(value) {
  if (value.includes("-")) {
    const [start, end] = value.split("-");
    return range(start, end);
    // const [start, end] = value.split("-");
    // return { start, end };
  }
  return value.split(",").map((str) => +str);
}

async function getAlbums(ids) {
  const albums = ids.map((id) =>
    fetch(`https://ajax.test-danit.com/api/json/albums/${id}`).then(
      (response) => {
        response = response.json();
      }
    )
  );
  console.log(albums);
}

searchBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const { value } = searchInput;
  const ids = convertToArray(value);
  const albums = await getAlbums(ids);
  console.log(convertToArray(value));
  console.log(albums);
});
