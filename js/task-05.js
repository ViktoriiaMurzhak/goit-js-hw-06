// Шукаємо наші елементи та записуємо їх у масив змінних

const refs = {
  input: document.querySelector('#name-input'),
  text: document.querySelector('#name-output'),
};

// вішаємо на інпут слухача, який приймає івент і функцію

refs.input.addEventListener('input', changeText);

// прописуємо функцію при якій умові що буде у спані

function changeText(event) {
  if (event.currentTarget.value === "") {
    refs.text.textContent = 'Anonymous';
  } else { refs.text.textContent = event.currentTarget.value}
}
