'use strict'

const submitForm = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const borderRed = '#E74C3C';
const borderGreen = '#2ECC71';

function showMessage(input, inputBorderColor, message, messageStyle) {
  const formItem = input.parentElement;
  input.style.borderColor = inputBorderColor;

  const small = formItem.lastElementChild;
  small.innerText = message;
  small.className = messageStyle;
}

function checkLength(input, min, max) {
  const inputLength = input.value.length;
  if (inputLength < min) {
    showMessage(input, borderRed, `${input.name} must be at least ${min} characters`, 'bad-message');
  } else if (inputLength > max) {
    showMessage(input, borderRed, `${input.name} must be less than ${max} characters`, 'bad-message');
  } else {
    showMessage(input, borderGreen, '', '');
  }
}

//Регулярку взял тут - https://www.w3resource.com/javascript/form/email-validation.php
function checkEmail(input) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim())) {
    showMessage(input, borderGreen, '', '');
  } else {
    showMessage(input, borderRed, `email is not valid`, 'bad-message');
  }
}

function checkPasswords(input, confirmInput) {
  if (input.value !== confirmInput.value) {
    showMessage(confirmInput, borderRed, `passwords do not match`, 'bad-message');
  } else if (confirmInput.value === '') {
    showMessage(confirmInput, borderRed, `passwords can't be empty`, 'bad-message');
  } else {
    showMessage(confirmInput, borderGreen, '', '');
  }
}

submitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswords(password, confirmPassword);
})