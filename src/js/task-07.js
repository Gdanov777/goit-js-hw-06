const swiper = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = `${swiper.value}px`;

swiper.addEventListener('input', onInputChange);

function onInputChange() {
  text.style.fontSize = `${swiper.value}px`;
}