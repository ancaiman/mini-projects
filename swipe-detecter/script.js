'use strict'

const arrayColors = [
  '#F34336',
  '#FF9700',
  '#FFEA3B',
  '#4CB050',
  '#009788',
  '#00BCD4',
  '#2196F3',
  '#3F51B5',
  '#673BB7',
  '#9C28B1',
  '#8C8C8C',
  '#000000'
]
const styleRoot = document.querySelector(':root');
const fieldText = document.querySelector('.field-text');
const randomNumber = Math.floor(Math.random() * arrayColors.length);


function addColorToVar() {
  styleRoot.style.setProperty('--border-color', arrayColors[randomNumber]);
}

function addText() {
  fieldText.innerText = 'SWIPE';
}

function clearText() {
  fieldText.innerText = '';
}

document.addEventListener('DOMContentLoaded', addColorToVar);
document.addEventListener('touchmove', addText);

setTimeout(() => {clearText()}, 2000);