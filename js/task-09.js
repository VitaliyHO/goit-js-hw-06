function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorNumber = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeBgColor);

function changeBgColor() {
  const color = `${getRandomHexColor()}`
  body.style.backgroundColor = color;
  colorNumber.textContent = color;
}