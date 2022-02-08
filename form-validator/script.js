'use strict'

const submitForm = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const borderRed = '#E74C3C';
const borderGreen = '#2ECC71';

function showMessage(input, inputBorderColor, element, elementMessage, elementStyle) {
  const formItem = input.parentElement;
  input.style.borderColor = inputBorderColor;
  element.className = elementStyle;
  element.innerText = elementMessage;
  formItem.append(element);
}

function checkLength(input, min, max) {
  const note = document.createElement('span');
  const inputLength = input.value.length;
  if (inputLength < min) {
    showMessage(input, borderRed, note, `${input.name} must be at least ${min} characters`, 'bad-text');
  } else if (inputLength > max) {
    showMessage(input, borderRed, note, `${input.name} must be less than ${max} characters`, 'bad-text');
  } else {
    showMessage(input, borderGreen, note, '', '');
  }
}


submitForm.addEventListener('submit', function(event) {
  // Submit обновляет страницу, чтобы это предотвратить использую метод preventDefault
  event.preventDefault();

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
})