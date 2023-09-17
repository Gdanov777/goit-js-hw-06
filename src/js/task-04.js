const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};
const { counter, value, increment, decrement } = refs;

let counterValue = 0;

const onIncrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onDecrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrement.addEventListener('click', onDecrementClick);
increment.addEventListener('click', onIncrementClick);