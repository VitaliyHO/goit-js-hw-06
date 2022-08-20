'use strict'

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event){
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget;

    if(email.value === '' || password.value === ''){
        return console.error('All area must be fill');
    }else{
        console.log(`Email: ${email.value}, Password: ${password.value}`);
    }

    event.currentTarget.reset();
}