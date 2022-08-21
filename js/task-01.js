'use strict'

const categories = document.querySelectorAll('h2');
const list = document.querySelectorAll('.item');

console.log('Number of categories: ', categories.length);

list.forEach(element => {
    return  console.log('Category: ', element.firstElementChild.textContent), 
            console.log('Elements: ', element.lastElementChild.children.length);
});