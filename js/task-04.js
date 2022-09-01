// знаходимо всі потрібні елементи

const counterEl = document.querySelector('#counter');

const valueEl = document.querySelector('#value');

const btnDecrementEl = counterEl.firstElementChild;

const btnIncrementEl = counterEl.lastElementChild;

// створюємо змінну, яка містить значення value: 0, та 2 методи, які будемо викликати потім у функціях

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

// створюємо функції для декременту та інкременту, вішаємо слухачів на клік

btnDecrementEl.addEventListener('click', function () {
   counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

btnIncrementEl.addEventListener('click', function () {
   counterValue.increment();
    valueEl.textContent = counterValue.value;
});

