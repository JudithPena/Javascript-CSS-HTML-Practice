const board = document.querySelector("#board");
let colors = [];
const SQUARES_NUMBER = 492;


function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)]
}
  return color;
}
while (colors.length < 100){
  colors.push(generateColor())
}
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px black`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
