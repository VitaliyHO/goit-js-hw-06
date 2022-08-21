'use strict'

const sizeControl = document.querySelector('#font-size-control');
const resizedText = document.querySelector('#text');
let size = sizeControl.value;

resizedText.style.fontSize = `${size}px`;

sizeControl.addEventListener('input', event =>{
    size = event.currentTarget.value;
    resizedText.style.fontSize = `${size}px`;
});
