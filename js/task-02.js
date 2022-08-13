const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add('item');
  return listEl;
}
)

list.append(...elements);



// const firstEl = document.createElement('li');
// firstEl.textContent = ingredients[0];
// firstEl.classList.add('item');

// const secondEl = document.createElement('li');
// secondEl.textContent = ingredients[1];
// secondEl.classList.add('item');

// const thirdEl = document.createElement('li');
// thirdEl.textContent = ingredients[2];
// thirdEl.classList.add('item');

// const fourthEl = document.createElement('li');
// fourthEl.textContent = ingredients[3];
// fourthEl.classList.add('item');

// const fifthEl = document.createElement('li');
// fifthEl.textContent = ingredients[4];
// fifthEl.classList.add('item');

// const sixthEl = document.createElement('li');
// sixthEl.textContent = ingredients[5];
// sixthEl.classList.add('item');

// list.append(firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl);