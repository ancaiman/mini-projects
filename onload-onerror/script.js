"use strict";

const form = document.querySelector(".form");
const inputUrl = document.querySelector("#item-url");
const formMessage = document.querySelector(".form-message");
const img = document.createElement("img");

function checkLinkForImg(path) {
  return new Promise((resolve, reject) => {
    img.src = path;
    img.onload = resolve;
    img.onerror = reject;
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkLinkForImg(inputUrl.value)
    .then(() => {
      formMessage.textContent = `Path is valid`;
      form.after(img);
    })
    .catch(() => (formMessage.textContent = `Path isn't valid`));
});
