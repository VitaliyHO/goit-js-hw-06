'use strict'

const number = document.querySelector('#value');
const upperButton = document.querySelector('button[data-action=increment]');
const lowerButton = document.querySelector('button[data-action=decrement]');
let counterValue = 0;

const onUpperButtonClick = () => {
    counterValue += 1;
    number.innerHTML = counterValue;
};
const onLowerButtonClick = () =>  {
    counterValue -= 1;
    number.innerHTML = counterValue;
};


upperButton.addEventListener('click', onUpperButtonClick);
lowerButton.addEventListener('click', onLowerButtonClick);
