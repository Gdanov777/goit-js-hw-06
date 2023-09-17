const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeMarkup = array => {
  return array.map(e => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = e;

    return ingredientsItem;
  });
};

ingredientsList.append(...makeMarkup(ingredients));