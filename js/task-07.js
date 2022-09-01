// робимо змінну для інпута і спана
const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

// вішаємо слухача
inputEl.addEventListener('input', onInputRange);

// пишемо функцію, яка змінює значення fontSize на значення в повзунку
function onInputRange(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};