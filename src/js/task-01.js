const itemEl = document.querySelectorAll('.item'); //кожна li дитина від ul#categories

const titleItemEl = document.querySelectorAll('.item h2'); //кожен h2 дитина itemEl

const listItemEl = document.querySelectorAll('.item ul'); //кожен ul дитина itemEl

console.log('Number of categories:', itemEl.length);

console.log('Category:', titleItemEl[0].textContent);
console.log('Elements:', listItemEl[0].children.length)

console.log('Category:', titleItemEl[1].textContent);
console.log('Elements:', listItemEl[1].children.length)

console.log('Category:', titleItemEl[2].textContent);
console.log('Elements:', listItemEl[2].children.length)