const changeColorBtn = document
  .querySelector('.change-color')
  .addEventListener('click', onBtnClick);
const colorName = document.querySelector('.color');

function onBtnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


