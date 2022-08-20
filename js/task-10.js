'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls>input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

inputNumber.addEventListener('click', event => event.currentTarget.value = '')

createButton.addEventListener('click', createBoxes);

function createBoxes(amount){
  amount = inputNumber.value;
  let size = 20;
  let boxArr = [];

  for(let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.classList.add('box')
    box.style.width = `${size + i * 10}px`;
    box.style.height = `${size + i * 10}px` ;
    box.style.backgroundColor = `${getRandomHexColor()}`;

    boxArr.push(box);
  }

  container.append(...boxArr);
};

destroyButton.addEventListener('click', destroyBoxes => container.textContent = '');

