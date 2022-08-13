'use strict'

const categories = document.querySelectorAll('h2');
const list = document.querySelectorAll('.item>ul');
const firstListElements = list[0].children;
const secondListElements = list[1].children;
const thirdListElements = list[2].children;


console.log('Number of categories: ', categories.length);

console.log('Category: ', categories[0].textContent);
console.log('Elements: ', firstListElements.length)
console.log('Category: ', categories[1].textContent);
console.log('Elements: ', secondListElements.length)
console.log('Category: ', categories[2].textContent);
console.log('Elements: ', thirdListElements.length)

