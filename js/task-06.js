// змінна для тега input
const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

// вішаємо слухача на блюр (прибирання фокусу)

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === inputEl.dataset.length) {
     inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
  } else {
     inputEl.classList.add('invalid');
     inputEl.classList.remove('valid');
}
}

console.log(inputEl.value.length)






