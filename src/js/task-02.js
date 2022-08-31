const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// створюємо змінну для пустого ul#ingredients:
const listEl = document.querySelector('#ingredients')

// створюємо функцію, яка переберає масив і на окремий інгридієнт робить li з класом item та textContent як текстовий вміст кожного ingredient:
const makeItemEl = (ingredients) => {
    return ingredients.map((ingredient) => {
    const itemEl = document.createElement('li')
    itemEl.textContent = ingredient
    itemEl.classList.add('item')
    // console.log('first', itemEl)
    return itemEl
  })
};

const elements = makeItemEl(ingredients);
// додаємо всі створені li в ul#ingredients однією операцією
listEl.append(...elements);

