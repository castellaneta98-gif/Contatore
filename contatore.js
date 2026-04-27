let counter = 0;
const counterElement = document.querySelector('#counter');
const incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.id = 'increment';
const resetButton = document.createElement('button');
resetButton.textContent = 'Resetta';
resetButton.id = 'reset';
const decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.id = 'decrement';
const container = document.querySelector('.container');
container.appendChild(incrementButton);
container.appendChild(resetButton);
container.appendChild(decrementButton);


incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterElement.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
});

