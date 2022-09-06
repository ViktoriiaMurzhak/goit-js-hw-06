// ! варіант 1
const itemEl = document.querySelector('#categories').children;
console.log('Number of categories:', itemEl.length);

[...itemEl].forEach((item) => {
  const title = item.querySelector('h2').textContent;
  console.log('Category:', title)

  const innerList = item.querySelectorAll('li').length;
  console.log('Elements:', innerList);
});


// ! варіант 2
// // робимо змінні для тегів
// const itemEl = document.querySelectorAll('.item'); 
// const titleItemEl = document.querySelectorAll('.item h2'); 
// const listItemEl = document.querySelectorAll('.item ul'); 

// // виводимо довжину item
// console.log('Number of categories:', itemEl.length);

// // виводимо кожну категорію 
// for (let i = 0; i < itemEl.length; i += 1){
//   console.log('Category:', titleItemEl[i].textContent);
// console.log('Elements:', listItemEl[i].children.length)
// };