// робимо змінні для тегів

const itemEl = document.querySelectorAll('.item'); //кожна li 
const titleItemEl = document.querySelectorAll('.item h2'); //
const listItemEl = document.querySelectorAll('.item ul'); //

// виводимо довжину item
console.log('Number of categories:', itemEl.length);

// виводимо кожну категорію 
for (let i = 0; i < itemEl.length; i += 1){
  console.log('Category:', titleItemEl[i].textContent);
console.log('Elements:', listItemEl[i].children.length)
};