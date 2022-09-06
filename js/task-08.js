// змінні для тегів
const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[type=email]');
const inputPasswordEl = document.querySelector('input[type=password]');

// створюємо формулу для нового масиву, який приймає значення полів форм, та не перезавантажує сторінку після submit, та виводить попередження про заповнення усіх полів, якщо вони пусті

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.email = inputEmailEl.value;
  formData.password = inputPasswordEl.value;
  console.log(formData);

  // для виведення алертів, якщо якесь поле пусте
  if (inputEmailEl.value === '' || inputPasswordEl.value === '') {
    alert('Заповніть усі поля!');
  }

   event.currentTarget.reset();

}

