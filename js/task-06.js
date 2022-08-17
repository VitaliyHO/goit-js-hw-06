'use strict'

const inputArea = document.querySelector('#validation-input');
const validStringSize = inputArea.getAttribute('data-length')

inputArea.addEventListener('focus', () => inputArea.classList.remove('invalid'));

inputArea.addEventListener('blur', () => {
    if(inputArea.value.length === Number(validStringSize)){
        return inputArea.classList.add('valid');
    }else{
        return inputArea.classList.add('invalid');
    }   
});