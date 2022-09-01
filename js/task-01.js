const itemEl = document.querySelectorAll('.item'); //кожна li дитина від ul#categories

const titleItemEl = document.querySelectorAll('.item h2'); //кожен h2 дитина itemEl

const listItemEl = document.querySelectorAll('.item ul'); //кожен ul дитина itemEl

console.log('Number of categories:', itemEl.length);

for (let i = 0; i < itemEl.length; i += 1){
  console.log('Category:', titleItemEl[i].textContent);
console.log('Elements:', listItemEl[i].children.length)
}

