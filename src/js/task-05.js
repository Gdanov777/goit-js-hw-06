const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

const defaultValue = output.textContent;

function onInputChange(e) {
  output.textContent = e.currentTarget.value.trim();
  if (!output.textContent) {
    output.textContent = defaultValue;
  }
}