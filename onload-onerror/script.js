'use strict'

const form = document.querySelector('.form');
const inputUrl = document.querySelector('#item-url');
const formMessage = document.querySelector('.form-message');
const img = document.createElement('img');

function isImgURLValid(path) {
  return new Promise((resolve, reject) => {
    img.src = path;
    img.onload = resolve;
    img.onerror = reject;
    form.after(img);
  });
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  isImgURLValid(inputUrl.value)
    .then(() => formMessage.textContent = `Path is valid`)
    .catch(() => formMessage.textContent = `Path isn't valid`)
})