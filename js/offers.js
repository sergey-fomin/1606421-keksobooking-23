import { generateNearbyAdverts } from './data.js';

const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const map = document.querySelector('#map-canvas');

const newCardData = generateNearbyAdverts;

newCardData.forEach(() => {
  const newCard = cardTemplate.cloneNode(true);
  map.appendChild(newCard);
});




console.log(newCardData);
console.log(map);


// DELETE AFTER ALL DONE!!!!!!!!
export {cardTemplate};
