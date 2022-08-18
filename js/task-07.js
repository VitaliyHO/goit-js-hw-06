'use strict'

const sizeControl = document.querySelector('#font-size-control');
const resizedText = document.querySelector('#text');

sizeControl.addEventListener('input', event =>{
    const size = event.currentTarget.value;
    resizedText.style.fontSize = `${size}px`;
});