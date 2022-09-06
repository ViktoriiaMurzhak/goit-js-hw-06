// змінна для тега input;
const inputEl = document.querySelector('#validation-input');

// вішаємо слухача на блюр (прибирання фокусу);
inputEl.addEventListener('blur', onInputBlur);

// пишемо функцію: якщо довжина значення інпуту, яка приведена до рядко строго = значенню інпут ключа data-length - додай клас valid i видали invalid, якщо він там був. В іншому випадку зроби навпаки;
function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === inputEl.dataset.length) {
   updateClas('valid', 'invalid');
  } else {
   updateClas('invalid', 'valid');
  }
};

function updateClas(clas1, clas2) {
  inputEl.classList.add(clas1);
  inputEl.classList.remove(clas2);
};