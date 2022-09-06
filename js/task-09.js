// функція рандомних кольорів
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// змінні для тегів
const bodyEl = document.querySelector('body')

const btnChangeColor = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');

// вішаємо слухача і через стрілочну функцію присвоюємо бекграунду значення функції рандомних кольорів, і це ж значення присвоюємо текстовому контенту спана
btnChangeColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyEl.style.background = color;

  spanEl.textContent = color;
});


