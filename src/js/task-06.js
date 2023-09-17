const input = document.getElementById('validation-input');

input.addEventListener('blur', checkInputValue);

function checkInputValue(e) {
  e.currentTarget.value.length === Number(this.dataset.length)
    ? (input.classList = 'valid')
    : (input.classList = 'invalid');

  if (!input.value) input.removeAttribute('class');
}