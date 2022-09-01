// змінна для тега input
const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

// вішаємо слухача на блюр (прибирання фокусу)

inputEl.addEventListener('blur', onInputBlur);

// пишемо функцію: якщо довжина значення інпуту, яка приведена до рядко строго = значенню інпут ключа data-length - додай клас valid i видали invalid, якщо він там був. В іншому випадку зроби навпаки

function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === inputEl.dataset.length) {
     inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
  } else {
     inputEl.classList.add('invalid');
     inputEl.classList.remove('valid');
}
};





